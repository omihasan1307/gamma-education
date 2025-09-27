/* eslint-disable @typescript-eslint/no-explicit-any */

import { serviceLists } from "@/shared/constant/data";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const EventsDetails = async ({ params }: { params: any }) => {
  const { id } = await params;

  const currentId = parseInt(id, 10);
  const currentService = serviceLists.find((s) => s.id === currentId);
  const otherServices = serviceLists.filter((s) => s.id !== currentId);

  if (!currentService) return <p className="text-center py-10">Service not found</p>;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ✅ Sidebar */}
        <aside className="order-1 md:order-none">
          <div className="grid gap-4">
            {otherServices.map((service) => (
              <Link
                key={service.id}
                href={`/service/${service.id}`}
                className="flex items-center justify-between border rounded-md p-4 transition hover:shadow-md hover:text-basicColor">
                <p className="font-medium text-sm sm:text-base">{service.title}</p>
                <FaLongArrowAltRight className="text-lg" />
              </Link>
            ))}
          </div>

          {/* Book Appointment Button */}
          <div className="mt-6">
            <Link href="/appointment">
              <button className="w-full rounded-lg bg-gradient-custom px-6 py-3 text-sm sm:text-base font-semibold text-white shadow hover:opacity-90 transition">
                Book Appointment
              </button>
            </Link>
          </div>
        </aside>

        {/* ✅ Main Content */}
        <main className="md:col-span-1 lg:col-span-2">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">{currentService.title}</h1>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel architecto iste natus odit magni molestias id ipsum eaque! Tenetur
            praesentium cumque expedita neque repellat ea, aliquam, exercitationem molestias sit ipsum provident illo nobis culpa? Earum doloribus
            fugit repellendus possimus cupiditate assumenda adipisci ut nam, quasi optio ex, magni quos quaerat repellat officiis, ipsum laudantium
            quod perferendis beatae accusamus? Placeat vel magnam velit sed fuga explicabo vitae eum? Laborum repudiandae debitis nam perferendis
            quibusdam nesciunt commodi, neque nostrum corporis consequuntur, molestias est, quo voluptatem vero impedit? Repellendus quisquam,
            explicabo deleniti illo labore nam minima veritatis. Pariatur tempora ipsum natus voluptatum sit, beatae alias ratione quaerat ex repellat
            recusandae officia eius dolor voluptate explicabo.
          </p>
          {/* <div className="pt-20 text-left" dangerouslySetInnerHTML={{ __html: description }} /> */}
        </main>
      </div>
    </div>
  );
};

export default EventsDetails;

{
  /* <section className="pt-8 lg:py-32 bg-center bg-cover">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center ">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold mb-5 text-5xl leading-[50px]">{title}</h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">{subtitle}</p>

          <div className="flex justify-center">
            <Image src={featured_image || img.noImage} alt={title} width={800} height={500} />
          </div>
          <div className="pt-20 text-left" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </section> */
}
