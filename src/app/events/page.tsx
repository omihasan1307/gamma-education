/* eslint-disable @typescript-eslint/no-explicit-any */

export const dynamic = "force-dynamic";

import SectionHeader from "@/shared/components/SectionHeader";
import { Metadata } from "next";
import { FaServicestack } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Events | Gamma Education",
  description: "Explore the latest seminars, workshops, and fairs hosted by Gamma Education.",
};

const EventsPage = async () => {
  // const { data: eventList } = await getEventList();

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* ✅ Header Section */}
      <section className="text-center bg-gradient-to-b from-white to-gray-100">
        <SectionHeader
          text="Our Events"
          icon={FaServicestack}
          description="Explore our latest events — seminars, workshops, and education fairs designed to help you achieve your academic dreams."
        />
      </section>

      {/* ✅ Events Grid */}
      {/* <section className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {eventList?.length > 0 ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {eventList.map((event: any) => (
              <Link
                href={`/events/${event.id}`}
                key={event.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={event?.featured_image}
                    alt={event?.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-basicColor text-white text-xs px-3 py-1 rounded-full">{event.category?.name}</div>
                </div>

                <div className="p-6 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-basicColor transition-colors duration-300">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-6">{event.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-20">No events available at the moment.</p>
        )}
      </section> */}
    </main>
  );
};

export default EventsPage;
