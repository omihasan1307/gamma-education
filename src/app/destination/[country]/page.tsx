import Link from "next/link";
import { notFound } from "next/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";
import React from "react";
import { menuItems } from "@/shared/constant/data";

export default function DestinationCountry({ params }: { params: Promise<{ country: string }> }) {
  // ✅ unwrap params with React.use()
  const { country } = React.use(params);

  if (!country) return notFound();

  const destinationItem = menuItems.find((item) => item.title === "Destination");
  if (!destinationItem || !destinationItem.submenu) return notFound();

  const otherServices = destinationItem.submenu.filter((s) => {
    const slug = s.href.split("/").pop();
    return slug !== country;
  });

  const currentCountry = destinationItem.submenu.find((s) => s.href.split("/").pop() === country);
  if (!currentCountry) return notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <aside className="order-1 md:order-none">
          <div className="grid gap-4">
            {otherServices.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="flex items-center justify-between border rounded-md p-4 transition hover:shadow-md hover:text-basicColor">
                <p className="font-medium text-sm sm:text-base">{service.name}</p>
                <FaLongArrowAltRight className="text-lg" />
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/appointment">
              <button className="w-full rounded-lg bg-gradient-custom px-6 py-3 text-sm sm:text-base font-semibold text-white shadow hover:opacity-90 transition">
                Book Appointment
              </button>
            </Link>
          </div>
        </aside>

        <main className="md:col-span-1 lg:col-span-2">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">{currentCountry.name}</h1>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo repellat amet optio porro doloribus dolore ipsum veritatis sit delectus?{" "}
            {/* your content here */}
          </p>
        </main>
      </div>
    </div>
  );
}
