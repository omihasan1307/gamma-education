/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSingleService } from "@/actions/get/get.action";
import { img } from "@/shared/constant/imgExport";
import Image from "next/image";

const ServiceDetails = async ({ params }: { params: any }) => {
  const { id } = await params;

  const { data: serviceDetails } = await getSingleService(id);
  const { featured_image, title, description, subtitle } = serviceDetails || {};

  return (
    <>
      <section className="pt-8 lg:py-32 bg-gradient-custom-light dark:bg-gradient-custom-dark bg-center bg-cover">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center ">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold mb-5 text-5xl leading-[50px]">{title}</h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">{subtitle}</p>

          <div className="flex justify-center">
            <Image src={featured_image || img.noImage} alt={title} width={800} height={500} />
          </div>
          <div className="pt-20 text-left" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
