/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionHeader from "@/shared/components/SectionHeader";
import { serviceLists } from "@/shared/constant/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaServicestack } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export const metadata: Metadata = {
  title: "Events | Gamma Education",
  description: "Events | Gamma Education",
};


const EventsPage = async () => {
  // const { data: serviceList } = await getServiceList();

  return (
    <div>
      {/* Header */}
      <div className="flex items-center text-center justify-center flex-col space-y-5">
        <SectionHeader
          text="Our Events"
          icon={FaServicestack}
          description="Explore our wide range of solutions designed to help your business grow and succeed. "
        />
      </div>

      {/* Section */}
      <div className="max-w-screen-xl mx-auto mt-20 pb-20 grid gap-10 md:grid-cols-3 text-center px-2">
        {serviceLists?.map((service: any) => (
          <div key={service.id} className="group duration-500 rounded-[18px] shadow-lg hover:scale-105 hover:shadow-2xl ">
            <div className="h-full w-full px-5 py-10 rounded-[16px] group-hover:shadow-lg opacity-80 group-hover:opacity-100 duration-300">
              <div className="flex justify-center ">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={96}
                  height={96}
                  className="rounded object-cover w-full h-52 group-hover:-rotate-6 duration-300"
                />
              </div>
              <h2 className="text-2xl font-semibold pt-5 pb-2">{service.title}</h2>

              <Link href={`/service/${service?.id}`} className="text-basicColor flex justify-center font-semibold p-2 me-2 hover:text- duration-300">
                Read more about this <MdArrowOutward />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;




// const ServicesPage = async () => {
//   // const { data: serviceList } = await getServiceList();

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex items-center text-center justify-center flex-col space-y-5">
//         <SectionHeader
//           text="Our Services"
//           icon={FaServicestack}
//           description="Explore our wide range of solutions designed to help your business grow and succeed. "
//         />
//       </div>

//       {/* Section */}
//       <div className="grid gap-10 md:grid-cols-3 text-center px-2">
//         {serviceLists.map((service) => (
//           <div key={service.id} className="group duration-500 rounded-[18px] shadow-lg hover:scale-105 hover:shadow-2xl cursor-pointer">
//             <div className="h-full w-full px-5 py-10 bg-white rounded-[16px] group-hover:shadow-lg opacity-80 group-hover:opacity-100 duration-300">
//               <div className="flex justify-center">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   width={96}
//                   height={96}
//                   className="rounded-full object-cover w-24 h-24 group-hover:-rotate-12 duration-300"
//                 />
//               </div>
//               <h2 className="text-2xl font-semibold pt-5 pb-2">{service.title}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;
