import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';

const POSTS = [
{
  date: '12 Jul 2026',
  tag: 'Ocean',
  title: 'New direct sailing between Jebel Ali and Rotterdam',
  excerpt:
  'A weekly service cuts four days off the standard transit for FCL cargo.'
},
{
  date: '28 Jun 2026',
  tag: 'Compliance',
  title: 'What the updated HS codes mean for your export documents',
  excerpt:
  'A short guide to reclassifying goods before the next filing deadline.'
},
{
  date: '09 Jun 2026',
  tag: 'Network',
  title: 'Bonded warehouse opens near the Mundra port corridor',
  excerpt:
  'Extra 40,000 sq ft of storage with same-day customs release on arrival.'
}];


const BACKGROUND_IMAGE = "/901911d5-fe21-47ba-ae38-944143dbf26e.jpg";

export function News() {
  return (
    <section id="news" className="relative w-full overflow-hidden px-4 py-16 sm:px-8 sm:py-20">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }} />
      <div className="absolute inset-0 bg-[#0b0f16]/88" />
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-5 sm:gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-white/50">
              News
            </span>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              From the freight desk
            </h2>
          </div>
          <Link
            to="/news"
            className="group flex items-center gap-2 rounded-full border border-white/15 py-1.5 pl-5 pr-1.5 text-sm text-white transition-colors hover:bg-white/5">

            All updates
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#7f1d1d] text-white transition-transform group-hover:rotate-45">
              <ArrowUpRightIcon size={16} />
            </span>
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
          {POSTS.map((post) =>
          <article
            key={post.title}
            className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[#14181f]/80 p-6 backdrop-blur-sm transition-colors hover:border-white/30 sm:rounded-[28px] sm:p-7">

              <div className="flex items-center gap-3 text-xs text-white/50">
                <span className="rounded-full bg-white/10 px-3 py-1 uppercase tracking-wider">
                  {post.tag}
                </span>
                <time>{post.date}</time>
              </div>
              <h3 className="mt-6 text-xl font-medium leading-snug text-white">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                {post.excerpt}
              </p>
              <Link
              to="/news"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#a83232] underline-offset-4 hover:underline">

                Read article
                <ArrowUpRightIcon size={14} />
              </Link>
            </article>
          )}
        </div>
      </div>
    </section>);

}