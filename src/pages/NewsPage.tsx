import React, { useMemo, useState } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CTABand } from '../components/CTABand';

type Post = {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  image: string;
  readTime: string;
};

const POSTS: Post[] = [
{
  title: 'New direct sailing between Jebel Ali and Rotterdam',
  excerpt:
  'A weekly fixed-day service cuts four days off the standard transit for FCL cargo, with cut-off every Tuesday.',
  date: '12 Jul 2026',
  tag: 'Ocean',
  image: "/cd7a3899-3ad9-4483-841f-da48566ceda1.jpg",

  readTime: '4 min read'
},
{
  title: 'What the updated HS codes mean for your export documents',
  excerpt:
  'A short guide to reclassifying goods before the next filing deadline, and where misdeclaration risk usually hides.',
  date: '28 Jun 2026',
  tag: 'Compliance',
  image: "/386fe9f6-6acd-4d8f-8824-725fa1d8961a.jpg",

  readTime: '6 min read'
},
{
  title: 'Bonded warehouse opens near the Mundra port corridor',
  excerpt:
  'An extra 40,000 sq ft of storage with same-day customs release on arrival and cross-docking to road carriers.',
  date: '09 Jun 2026',
  tag: 'Network',
  image: "/9492a96d-2a07-4637-a663-1294ecdb53ed.jpg",

  readTime: '3 min read'
},
{
  title: 'Air charter capacity ahead of the peak season',
  excerpt:
  'We have blocked weekly uplift out of three hubs so urgent cargo is not left waiting for allocation in Q4.',
  date: '21 May 2026',
  tag: 'Air',
  image: "/84a54210-f879-4f16-a9e9-c95e882cf86b.jpg",

  readTime: '5 min read'
},
{
  title: 'Reducing detention charges on inland moves',
  excerpt:
  'Five scheduling habits that keep containers moving and stop demurrage from quietly eating your margin.',
  date: '04 May 2026',
  tag: 'Road',
  image: "/179ab9f6-f094-474a-9db6-40d1f495bf50.jpg",

  readTime: '7 min read'
},
{
  title: 'Export packaging standards buyers now ask for',
  excerpt:
  'ISPM-15 crating, moisture barriers and load stability — what changed and what it costs to comply.',
  date: '17 Apr 2026',
  tag: 'Packaging',
  image: "/238cb1af-5bc8-48a7-bc4c-e113625cf0af.jpg",

  readTime: '5 min read'
}];


const TAGS = ['All', 'Ocean', 'Air', 'Road', 'Compliance', 'Network', 'Packaging'];

export function NewsPage() {
  const [tag, setTag] = useState('All');

  const filtered = useMemo(
    () => tag === 'All' ? POSTS : POSTS.filter((post) => post.tag === tag),
    [tag]
  );
  const [featured, ...rest] = filtered;

  return (
    <>
      <PageHero
        eyebrow="News"
        title="Notes from the freight desk"
        description="Route changes, customs updates and practical guidance from the people booking your cargo."
        image="/901911d5-fe21-47ba-ae38-944143dbf26e.jpg"
        imageAlt="Port terminal at sunrise with mist" />
      

      <section className="dot-grid w-full bg-[#0b0f16] px-4 py-12 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-[1400px]">
          <div
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
            role="group"
            aria-label="Filter articles">

            {TAGS.map((item) =>
            <button
              key={item}
              type="button"
              onClick={() => setTag(item)}
              aria-pressed={tag === item}
              className={[
              'shrink-0 rounded-full px-4 py-2 text-sm transition-colors sm:px-5 sm:py-2.5',
              tag === item ?
              'bg-[#7f1d1d] text-white' :
              'bg-white/5 text-white hover:bg-white/10'].
              join(' ')}>

                {item}
              </button>
            )}
          </div>

          {filtered.length === 0 ?
          <p className="mt-16 text-center text-sm text-white/55">
              No articles filed under {tag} yet. Try another topic.
            </p> :

          <>
              <article className="mt-8 grid overflow-hidden rounded-[24px] border border-white/10 bg-[#14181f] sm:mt-10 sm:rounded-[36px] lg:grid-cols-2">
                <img
                src={featured.image}
                alt={featured.title}
                className="h-[200px] w-full object-cover sm:h-[280px] lg:h-full" />

                <div className="p-6 sm:p-12">
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span className="rounded-full bg-white/10 px-3 py-1 uppercase tracking-wider">
                      {featured.tag}
                    </span>
                    <time>{featured.date}</time>
                    <span>· {featured.readTime}</span>
                  </div>
                  <h2 className="mt-5 text-xl font-medium leading-snug text-white sm:mt-6 sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-white/60">
                    {featured.excerpt}
                  </p>
                  <button
                  type="button"
                  className="group mt-8 flex items-center gap-2 rounded-full bg-[#7f1d1d] py-2 pl-6 pr-2 text-sm font-medium text-white hover:bg-[#a83232]">

                    Read article
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#7f1d1d] transition-transform group-hover:rotate-45">
                      <ArrowUpRightIcon size={16} />
                    </span>
                  </button>
                </div>
              </article>

              <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {rest.map((post) =>
              <article
                key={post.title}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#14181f] transition-colors hover:border-white/30 sm:rounded-[28px]">

                    <img
                  src={post.image}
                  alt={post.title}
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-48" />

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="flex items-center gap-3 text-xs text-white/50">
                        <span className="rounded-full bg-white/10 px-3 py-1 uppercase tracking-wider">
                          {post.tag}
                        </span>
                        <time>{post.date}</time>
                      </div>
                      <h3 className="mt-5 text-xl font-medium leading-snug text-white">
                        {post.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                        {post.excerpt}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#a83232]">
                        Read article
                        <ArrowUpRightIcon size={14} />
                      </span>
                    </div>
                  </article>
              )}
              </div>
            </>
          }
        </div>
      </section>

      <CTABand
        title="Get route and customs updates by email"
        description="A short monthly note on schedule changes, rate movement and filing deadlines that affect your lanes."
        actionLabel="Subscribe" />
      
    </>);

}