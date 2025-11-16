/* eslint-disable @typescript-eslint/no-explicit-any */

const EventDetails = async ({ params }: any) => {
  const { id } = params;
  // const { data: eventList } = await getEventList();
  // const { data: eventDetails } = await getSingleEvent(parseInt(id, 10));
  console.log("Event ID:", id);

  // if (!eventDetails) return <p className="text-center py-20 text-gray-500">Event not found.</p>;

  // const otherEvents = eventList?.filter((e: any) => e.id !== eventDetails.id);

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* ✅ Hero Section */}
      {/* <section className="relative h-[400px] w-full">
        <Image src={eventDetails?.featured_image} alt={eventDetails.title} fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{eventDetails.title}</h1>
          <p className="text-gray-200 text-lg max-w-2xl">{eventDetails.subtitle}</p>
          <span className="mt-4 inline-block bg-basicColor text-white text-xs px-4 py-1 rounded-full shadow">
            {eventDetails.category?.name || "Event"}
          </span>
        </div>
      </section> */}

      {/* ✅ Main Content */}
      {/* <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <article className="lg:col-span-2">
          <div
            className="prose prose-gray max-w-none mb-8 prose-headings:text-gray-900 prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-ul:list-disc prose-li:marker:text-basicColor"
            dangerouslySetInnerHTML={{ __html: eventDetails.description }}
          />

          {eventDetails.keypoints?.length > 0 && (
            <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Takeaways</h3>
              <ul className="space-y-3">
                {eventDetails.keypoints.map((point: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-basicColor mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        <aside>
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-5 border-b pb-3 text-gray-800">Other Events</h2>

            <div className="space-y-4">
              {otherEvents.map((event: any) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="flex items-center justify-between group border rounded-md p-3 hover:bg-gray-50 transition">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800 group-hover:text-basicColor">{event.title}</p>
                    <p className="text-xs text-gray-500">{event.category?.name}</p>
                  </div>
                  <FaLongArrowAltRight className="text-basicColor group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Link href="/appointment">
              <button className="w-full rounded-lg bg-gradient-custom px-6 py-3 text-sm sm:text-base font-semibold text-white shadow hover:opacity-90 transition">
                Book Appointment
              </button>
            </Link>
          </div>
        </aside>
      </section> */}
    </main>
  );
};

export default EventDetails;
