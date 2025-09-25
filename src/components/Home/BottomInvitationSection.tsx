import Link from "next/link";

const BottomInvitationSection = () => {
  return (
    <div className={`relative bg-[url(../../assets/desk.jpg)] bg-cover bg-center bg-no-repeat`}>
      <div className="absolute inset-0 from-[#001524]/95 to-[#11001c]/25 bg-gradient-to-t md:bg-gradient-to-r"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:px-8">
        <div className="max-w-xl text-center sm:text-left text-white">
          <h1 className="text-4xl font-extrabold">
            You&rsquo;ve landed in the right place,
            <strong className="block font-extrabold text-basicColor"> Forever Home. </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            You can customize anything appearance
            <br /> of your website with only a few clicks
          </p>

          <Link href={"/appointment"}>
            <button className="mt-8 w-full lg:w-52 px-6 py-3 rounded-lg bg-gradient-custom text-white font-semibold">Book Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomInvitationSection;
