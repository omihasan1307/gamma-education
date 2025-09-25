/* eslint-disable @typescript-eslint/no-explicit-any */

const HeroSection = ({ HomeSection1 }: { HomeSection1: any }) => {
  // const { subtitle, title, description } = HomeSection1 || {};
  console.log(HomeSection1);

  return (
    <div className="h-40 lg:h-64 lg:py-72 ">
      {/* <div className="max-w-screen-xl mx-auto py-28 px-1 text-center">
        <div className="flex items-center justify-center flex-col space-y-5">
          <p className="text-5xl font-bold  leading-tight  lg:w-[40%]">{title || <Skeleton />}</p>
          <div className="text-gray-500 lg:w-[50%]" dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>

        <Link
          href={"/appointment"}
          className="md:w-auto mt-6 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-gradient-custom shadow-xs opacity-85 hover:opacity-100 transition-all duration-500">
          Book Appointment
          <MdOutlineArrowForwardIos />
        </Link>
      </div> */}
    </div>
  );
};

export default HeroSection;
