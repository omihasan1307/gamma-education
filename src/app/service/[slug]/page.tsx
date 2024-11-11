import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  return (
    <>
      <section className="pt-8 lg:pt-32 bg-gradient-custom-light dark:bg-gradient-custom-dark bg-center bg-cover">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold mb-5 text-5xl leading-[50px]">
            Control your Finances with <span className="text-basicColor">BinaryHooks Services </span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Invest intelligently and discover a better way to manage your entire wealth easily.
          </p>
          <a
            href="javascript:;"
            className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-gradient-custom shadow-xs opacity-85 hover:opacity-100 transition-all duration-500">
            Let's Collaborate
            <MdOutlineArrowForwardIos />
          </a>
          <div className="flex justify-center">
            <img src="https://pagedone.io/asset/uploads/1691054543.png" alt="Dashboard image" />
          </div>
        </div>
      </section>
    </>
  );
}
