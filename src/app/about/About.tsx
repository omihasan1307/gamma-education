/* eslint-disable @typescript-eslint/no-explicit-any */

const AboutSection = ({ description }: any) => {
  return (
    <div className="lg:px-o px-4" >
      <div dangerouslySetInnerHTML={{ __html: description || "No Data" }}></div>
    </div>
  );
};

export default AboutSection;
