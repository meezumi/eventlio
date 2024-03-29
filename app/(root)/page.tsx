import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string || '');
  const category = (searchParams?.category as string || '');

  const events = await getAllEvents({
    query: searchText, 
    category: category,
    page: page,
    limit: 6, 
  })

  console.log(events)

  return (
    <>
      {/* <h1 className="text-4xl">eventlio</h1> */}
      {/* this is from the shadcn component library, and can have tailwindcss class names */}
      {/* <Button variant='destructive' className="px-10"> Delete</Button> */}
      {/* <Button >Hello </Button> */}

      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Host your events, connect and learn something new, on <span className="grad">Eventlio</span></h1>
            <p className="p-regular-20 md:p-regular-24">Get tickets to learn helpful tips from a variety of instructors in world-class companies with our global community or be the host yourself :) </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href='#events'>
                Explore Now
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[85vh] object-contain object-center 2xl:max-h-[65vh]"
          />
        </div>
      </section>


      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold"> Trust by <br /> Thousands of events </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search /> 
          <CategoryFilter />
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="No events found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages} 
          urlParamName={""}        
        />
      </section>
    </>
  );
}
