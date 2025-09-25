/* eslint-disable @typescript-eslint/no-explicit-any */

const CollaborateSection = ({ HomeSection4 }: { HomeSection4: any }) => {
  // const { subtitle, title, description } = HomeSection4 || {};

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto text-center px-2 ">
        {/* <div className="flex items-center justify-center flex-col space-y-5">
          <SectionHeader text={subtitle} icon={IoBagOutline} />
          <p className="text-5xl font-bold  leading-tight  lg:w-[60%]">{title || <Skeleton />}</p>
          <div className="text-gray-500 lg:w-[50%]" dangerouslySetInnerHTML={{ __html: description }}></div>
        </div> */}

        <div className="my-20 grid gap-5 md:grid-cols-3">
          {HomeSection4?.items?.map((stage: any, index: number) => (
            <div
              key={index}
              className={`text-left rounded-2xl p-8 shadow-lg transition duration-300 hover:shadow-xl ${
                index === 0 ? "bg-customColor1 text-white" : index === 1 ? "bg-customColor2 text-white" : "bg-customColor3 text-black"
              }`}>
              <div dangerouslySetInnerHTML={{ __html: stage?.icon }}></div>
              <h3 className="text-2xl font-bold my-4">{stage.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: stage?.description }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollaborateSection;
