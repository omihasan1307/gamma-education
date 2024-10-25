import Link from "next/link";

const BottomInvitationSection = () => {
  return (
    <div className="bg-gradient-custom text-white">
      <div className="text-center py-28 space-y-6">
        <h1 className="text-4xl font-semibold">You&rsquo;ve landed in the right place, <br /> let’s grow together!</h1>
        <p>
          Each demo built with Teba will look different. You can customize 
          anything appearance<br /> of your website with only a few clicks
        </p>
   
        <Link href={"/inquiry"}>
        <button className="px-6 py-1 rounded-full bg-gray-400 text-white font-semibold mt-14">
          Let&apos;s Collaborate
        </button>
      </Link>
      </div>
    </div>
  );
};

export default BottomInvitationSection;
