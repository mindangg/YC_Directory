import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { describe } from "node:test";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query

  const posts = [{ 
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: '_.mindang' },
    _id: 1,
    description: 'This is a description',
    image: 'https://media.vov.vn/sites/default/files/styles/large/public/2021-03/lamborghini-huracan-evo-rwd-novitec_1.jpg',
    category: 'Lamborghini',
    title: 'Lamborghini Huracan Evo'
  }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Picth Your Startup, <br />
                  Connect With Entrepreneurs</h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query}/>
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((p, index) => (
              <StartupCard key={p?._id} post={p}/>
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  )
}
