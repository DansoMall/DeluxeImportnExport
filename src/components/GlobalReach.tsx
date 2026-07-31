import React, { useEffect, useMemo, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  Tooltip,
  useMap } from
'react-leaflet';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, RadioIcon } from 'lucide-react';

type Vessel = {
  id: string;
  name: string;
  lane: string;
  cargo: string;
  eta: string;
  speed: number;
  offset: number;
  waypoints: [number, number][];
};

const PORTS: {name: string;position: [number, number];}[] = [
{ name: 'Rotterdam', position: [51.95, 4.14] },
{ name: 'Jebel Ali', position: [25.01, 55.06] },
{ name: 'Mundra', position: [22.75, 69.7] },
{ name: 'Singapore', position: [1.26, 103.83] },
{ name: 'Shanghai', position: [31.23, 121.47] },
{ name: 'Santos', position: [-23.96, -46.33] },
{ name: 'Durban', position: [-29.87, 31.02] },
{ name: 'Los Angeles', position: [33.73, -118.26] },
{ name: 'New York', position: [40.67, -74.04] },
{ name: 'Mombasa', position: [-4.05, 39.67] }];


const VESSELS: Vessel[] = [
{
  id: 'nx-ocean-7',
  name: 'MV Nautrix Meridian',
  lane: 'Jebel Ali → Rotterdam',
  cargo: '620 vehicles · RoRo deck',
  eta: 'ETA 14 Aug, 06:20',
  speed: 0.00075,
  offset: 0.18,
  waypoints: [
  [25.01, 55.06],
  [12.6, 43.4],
  [27.2, 33.8],
  [31.6, 32.3],
  [36.0, 14.5],
  [36.0, -5.6],
  [43.0, -9.5],
  [48.5, -5.0],
  [51.95, 4.14]]

},
{
  id: 'nx-ocean-3',
  name: 'MV Coral Transit',
  lane: 'Shanghai → Los Angeles',
  cargo: '2,050 TEU · EVs & electronics',
  eta: 'ETA 19 Aug, 22:10',
  speed: 0.00055,
  offset: 0.52,
  waypoints: [
  [31.23, 121.47],
  [34.5, 140.5],
  [42.0, 165.0],
  [43.0, -170.0],
  [38.0, -140.0],
  [33.73, -118.26]]

},
{
  id: 'nx-ocean-11',
  name: 'MV Southern Cross',
  lane: 'Santos → Durban',
  cargo: '880 TEU · agri & reefer',
  eta: 'ETA 11 Aug, 13:45',
  speed: 0.0009,
  offset: 0.34,
  waypoints: [
  [-23.96, -46.33],
  [-28.0, -30.0],
  [-31.5, -5.0],
  [-31.0, 15.0],
  [-29.87, 31.02]]

},
{
  id: 'nx-ocean-5',
  name: 'MV Indus Runner',
  lane: 'Mundra → Singapore',
  cargo: '640 TEU · machinery',
  eta: 'ETA 09 Aug, 04:05',
  speed: 0.0011,
  offset: 0.7,
  waypoints: [
  [22.75, 69.7],
  [12.0, 76.0],
  [6.0, 86.0],
  [4.5, 96.0],
  [1.26, 103.83]]

}];


const HIGHLIGHTS = [
{ label: 'Global Network Expansion', to: '/about' },
{ label: 'Efficient Logistics Management', to: '/services' },
{ label: 'Customer Satisfaction Focus', to: '/contact' }];


function pointAt(waypoints: [number, number][], t: number): [number, number] {
  const clamped = Math.min(Math.max(t, 0), 0.999999);
  const segments = waypoints.length - 1;
  const scaled = clamped * segments;
  const index = Math.floor(scaled);
  const local = scaled - index;
  const [lat1, lng1] = waypoints[index];
  const [lat2, lng2] = waypoints[index + 1];
  return [lat1 + (lat2 - lat1) * local, lng1 + (lng2 - lng1) * local];
}

function bearingAt(waypoints: [number, number][], t: number): number {
  const a = pointAt(waypoints, Math.max(t - 0.01, 0));
  const b = pointAt(waypoints, Math.min(t + 0.01, 0.999));
  return Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
}

function shipIcon(rotation: number, active: boolean) {
  return L.divIcon({
    className: '',
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    html: `
      <div style="width:34px;height:34px;display:grid;place-items:center;transform:rotate(${rotation}deg)">
        ${
    active ?
    '<span style="position:absolute;width:34px;height:34px;border-radius:9999px;background:rgba(127,29,29,0.35);animation:nx-ping 1.8s cubic-bezier(0,0,0.2,1) infinite"></span>' :
    ''}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="${active ? '#a83232' : '#ffffff'}" style="position:relative">
          <path d="M12 1.5 17 22 12 18.5 7 22 12 1.5Z" />
        </svg>
      </div>
    `

  });
}

function portIcon(name: string) {
  return L.divIcon({
    className: '',
    iconSize: [12, 12],
    iconAnchor: [6, 6],
    html: `<div title="${name}" style="width:12px;height:12px;border-radius:9999px;background:#ffffff;border:2px solid #7f1d1d"></div>`
  });
}

type VesselListProps = {
  progress: number[];
  activeId: string;
  onSelect: (id: string, index: number) => void;
  className?: string;
};

function VesselList({ progress, activeId, onSelect, className = '' }: VesselListProps) {
  return (
    <ul className={`grid gap-2 rounded-[24px] p-3 ${className}`}>
      {VESSELS.map((vessel, index) => {
        const isActive = vessel.id === activeId;
        return (
          <li key={vessel.id}>
            <button
              type="button"
              onClick={() => onSelect(vessel.id, index)}
              aria-pressed={isActive}
              className={[
              'w-full rounded-2xl px-4 py-3 text-left transition-colors',
              isActive ?
              'bg-[#7f1d1d] text-white' :
              'text-white hover:bg-white/5'].
              join(' ')}>

              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium">{vessel.name}</span>
                <span
                  className={[
                  'text-xs tabular-nums',
                  isActive ? 'text-white/60' : 'text-white/45'].
                  join(' ')}>

                  {Math.round(progress[index] * 100)}%
                </span>
              </div>
              <p
                className={[
                'mt-1 text-xs',
                isActive ? 'text-white/60' : 'text-white/55'].
                join(' ')}>

                {vessel.lane}
              </p>
              <div
                className={[
                'mt-2.5 h-1 w-full overflow-hidden rounded-full',
                isActive ? 'bg-white/20' : 'bg-white/10'].
                join(' ')}>

                <div
                  className={isActive ? 'h-full bg-white' : 'h-full bg-[#a83232]'}
                  style={{ width: `${progress[index] * 100}%` }} />

              </div>
              {isActive &&
              <p className="mt-2 text-xs text-white/50">
                  {vessel.cargo} · {vessel.eta}
                </p>
              }
            </button>
          </li>);

      })}
    </ul>);

}

function MapFocus({ target }: {target: [number, number] | null;}) {
  const map = useMap();
  useEffect(() => {
    if (target) {
      map.flyTo(target, 4, { duration: 1.2 });
    }
  }, [target, map]);
  return null;
}

export function GlobalReach() {
  const [progress, setProgress] = useState<number[]>(
    VESSELS.map((vessel) => vessel.offset)
  );
  const [activeId, setActiveId] = useState<string>(VESSELS[0].id);
  const [focus, setFocus] = useState<[number, number] | null>(null);
  const timer = useRef<number>();

  useEffect(() => {
    timer.current = window.setInterval(() => {
      setProgress((previous) =>
      previous.map((value, index) => (value + VESSELS[index].speed) % 1)
      );
    }, 120);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  const positions = useMemo(
    () => VESSELS.map((vessel, index) => pointAt(vessel.waypoints, progress[index])),
    [progress]
  );

  return (
    <section className="w-full bg-[#0b0f16] px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <h2 className="text-2xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
            We import vehicles and cargo from about 27 countries around the
            world.
          </h2>
          <p className="text-sm leading-relaxed text-white/60 sm:text-base">
            Live positions for every Nautrix-managed vessel currently at sea,
            refreshed continuously from AIS feeds. Select a lane to follow the
            sailing, its cargo profile and the berth window at destination.
          </p>
        </div>

        <div className="relative mt-8 h-[360px] overflow-hidden rounded-[24px] border border-white/10 bg-[#14181f] sm:mt-12 sm:h-[620px] sm:rounded-[36px]">
          <MapContainer
            center={[22, 20]}
            zoom={2}
            minZoom={2}
            maxZoom={6}
            scrollWheelZoom={false}
            zoomControl={false}
            worldCopyJump
            style={{ height: '100%', width: '100%', background: '#0b0f16' }}>

            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
              attribution='&copy; OpenStreetMap &copy; CARTO' />
            

            {PORTS.map((port) =>
            <Marker key={port.name} position={port.position} icon={portIcon(port.name)}>
                <Tooltip direction="top" offset={[0, -8]}>
                  {port.name}
                </Tooltip>
              </Marker>
            )}

            {VESSELS.map((vessel, index) => {
              const isActive = vessel.id === activeId;
              return (
                <React.Fragment key={vessel.id}>
                  <Polyline
                    positions={vessel.waypoints}
                    pathOptions={{
                      color: isActive ? '#a83232' : '#ffffff',
                      weight: isActive ? 2 : 1.2,
                      opacity: isActive ? 0.85 : 0.3,
                      dashArray: '4 8'
                    }}
                    eventHandlers={{ click: () => setActiveId(vessel.id) }} />
                  
                  <Marker
                    position={positions[index]}
                    icon={shipIcon(bearingAt(vessel.waypoints, progress[index]), isActive)}
                    eventHandlers={{
                      click: () => {
                        setActiveId(vessel.id);
                        setFocus(positions[index]);
                      }
                    }}>
                    
                    <Tooltip direction="top" offset={[0, -12]}>
                      <span className="font-medium">{vessel.name}</span>
                      <br />
                      {vessel.lane}
                    </Tooltip>
                  </Marker>
                </React.Fragment>);

            })}

            <MapFocus target={focus} />
          </MapContainer>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-[500] hidden w-[360px] flex-col justify-between p-6 sm:flex">
            <div className="pointer-events-auto flex w-fit items-center gap-2 rounded-full bg-[#7f1d1d] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white shadow-lg">
              <RadioIcon size={14} className="animate-pulse" />
              Live vessel tracking
            </div>

            <VesselList
              progress={progress}
              activeId={activeId}
              onSelect={(id, index) => {
                setActiveId(id);
                setFocus(positions[index]);
              }}
              className="pointer-events-auto border border-white/10 bg-[#0b0f16]/95 shadow-xl backdrop-blur-sm" />

          </div>
        </div>

        <VesselList
          progress={progress}
          activeId={activeId}
          onSelect={(id, index) => {
            setActiveId(id);
            setFocus(positions[index]);
          }}
          className="mt-4 border border-white/10 bg-[#14181f] sm:hidden" />


        <ul className="mt-4 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-3">
          {HIGHLIGHTS.map((item) =>
          <li key={item.label}>
              <Link
              to={item.to}
              className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#14181f] px-5 py-4 text-sm text-white transition-colors hover:bg-[#7f1d1d] sm:px-6">

                {item.label}
                <ArrowUpRightIcon size={16} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>);

}