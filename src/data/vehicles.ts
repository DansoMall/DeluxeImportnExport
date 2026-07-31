export type VehicleCategory =
'SUV' |
'Sedan' |
'Pickup' |
'Luxury' |
'Hatchback' |
'Electric' |
'Commercial' |
'Sports';

export type Vehicle = {
  id: string;
  name: string;
  category: VehicleCategory;
  year: string;
  mileage: string;
  fuel: string;
  transmission: string;
  origin: string;
  arrival: string;
  status: 'In stock' | 'On water' | 'Pre-order';
  image: string;
};

export const VEHICLES: Vehicle[] = [
{
  id: 'nx-v-101',
  name: 'Midsize SUV 2.5 AWD',
  category: 'SUV',
  year: '2024',
  mileage: '18,400 km',
  fuel: 'Petrol',
  transmission: 'Automatic',
  origin: 'Yokohama, JP',
  arrival: 'Arrived 02 Jul',
  status: 'In stock',
  image: "/1095b129-98c6-4efd-b197-ef5e8a4795fa.jpg"

},
{
  id: 'nx-v-102',
  name: 'Executive Sedan 2.0T',
  category: 'Sedan',
  year: '2023',
  mileage: '31,900 km',
  fuel: 'Petrol',
  transmission: 'Automatic',
  origin: 'Bremerhaven, DE',
  arrival: 'Arrived 21 Jun',
  status: 'In stock',
  image: "/ecc3cd4f-8b35-4b76-885a-7f3ad01acfc3.jpg"

},
{
  id: 'nx-v-103',
  name: 'Double-Cab Pickup 3.0D',
  category: 'Pickup',
  year: '2024',
  mileage: '9,100 km',
  fuel: 'Diesel',
  transmission: 'Manual',
  origin: 'Nagoya, JP',
  arrival: 'ETA 18 Aug',
  status: 'On water',
  image: "/b742f590-331e-4e30-942a-8b70b250687d.jpg"

},
{
  id: 'nx-v-104',
  name: 'Luxury Saloon 3.0 V6',
  category: 'Luxury',
  year: '2025',
  mileage: '4,250 km',
  fuel: 'Mild hybrid',
  transmission: 'Automatic',
  origin: 'Southampton, UK',
  arrival: 'ETA 04 Sep',
  status: 'On water',
  image: "/47fe1b9f-2f75-411c-911c-c33e1334a377.jpg"

},
{
  id: 'nx-v-105',
  name: 'Compact Hatchback 1.5',
  category: 'Hatchback',
  year: '2023',
  mileage: '42,600 km',
  fuel: 'Petrol',
  transmission: 'Automatic',
  origin: 'Antwerp, BE',
  arrival: 'Arrived 09 Jul',
  status: 'In stock',
  image: "/5fb193f4-225c-42e6-b960-aea580d44643.jpg"

},
{
  id: 'nx-v-106',
  name: 'Electric Crossover 77kWh',
  category: 'Electric',
  year: '2025',
  mileage: '2,800 km',
  fuel: 'Electric',
  transmission: 'Single speed',
  origin: 'Shanghai, CN',
  arrival: 'ETA 27 Aug',
  status: 'Pre-order',
  image: "/e441e439-3ea2-40c4-a446-6a2fc82cbd62.jpg"

},
{
  id: 'nx-v-107',
  name: 'Cargo Van L2H2',
  category: 'Commercial',
  year: '2024',
  mileage: '26,300 km',
  fuel: 'Diesel',
  transmission: 'Manual',
  origin: 'Zeebrugge, BE',
  arrival: 'Arrived 14 Jun',
  status: 'In stock',
  image: "/31c99997-e77b-4f58-a855-19541d7ca98a.jpg"

},
{
  id: 'nx-v-108',
  name: 'Sports Coupe 2.0T',
  category: 'Sports',
  year: '2024',
  mileage: '11,750 km',
  fuel: 'Petrol',
  transmission: 'Automatic',
  origin: 'Kobe, JP',
  arrival: 'ETA 12 Sep',
  status: 'Pre-order',
  image: "/8e735c65-4ac8-4653-a4b0-374017b684cc.jpg"

}];


export const VEHICLE_CATEGORIES: (VehicleCategory | 'All')[] = [
'All',
'SUV',
'Sedan',
'Pickup',
'Luxury',
'Hatchback',
'Electric',
'Commercial',
'Sports'];