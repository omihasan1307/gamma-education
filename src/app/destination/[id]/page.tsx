/* eslint-disable @typescript-eslint/no-explicit-any */
// app/destination/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DestinationSection from "./DestinationSection";
import { getSingleDestination } from "@/actions/get/get.action";

const DestinationCountry = async ({ params }: any) => {
  const { id } = params;
  if (!id) return notFound();

  const { data: destinationDetails } = await getSingleDestination(parseInt(id, 10));
  if (!destinationDetails) return notFound();

  const {
    title,
    country_display,
    overview,
    eligibility_criteria,
    language_requirements,
    financial_requirements,
    application_process,
    deadline_information,
    visa_process,
    tuition_fees,
    living_costs,
    scholarship_info,
    working_while_studying,
    post_study_options,
    featured_image_url,
    country_flag_url,
  } = destinationDetails;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Sidebar */}
      <aside className="order-1 md:order-none sticky top-24 h-fit">
        <div className="border rounded-xl shadow-sm p-5 bg-white space-y-3">
          <h2 className="text-lg font-semibold border-b pb-2 mb-2">Jump to Section</h2>
          <DestinationSection id={id} />
        </div>
        <div className="mt-6">
          <Link href="/appointment">
            <button className="w-full rounded-lg bg-gradient-custom px-6 py-3 text-sm sm:text-base font-semibold text-white shadow hover:opacity-90 transition">
              Book Appointment
            </button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:col-span-2">
        <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8">
          {featured_image_url ? (
            <Image src={featured_image_url} alt={title} fill className="object-cover" />
          ) : (
            <div className="bg-gradient-to-r from-blue-700 to-blue-400 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
              Study in {country_display}
            </div>
          )}
          {country_flag_url && (
            <Image
              src={country_flag_url}
              alt={`${country_display} flag`}
              width={80}
              height={60}
              className="absolute bottom-5 right-5 shadow-md border rounded-md"
            />
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3">{title}</h1>
        <p className="text-gray-600 mb-8">
          Everything you need to know about studying in <span className="font-semibold">{country_display}</span>.
        </p>

        <article className="prose prose-gray max-w-none space-y-10">
          {overview && (
            <section id="overview">
              <h2>Overview</h2>
              <div dangerouslySetInnerHTML={{ __html: overview }} />
            </section>
          )}
          {eligibility_criteria && (
            <section id="eligibility">
              <h2>Eligibility Criteria</h2>
              <div dangerouslySetInnerHTML={{ __html: eligibility_criteria }} />
            </section>
          )}
          {language_requirements && (
            <section id="language">
              <h2>Language Requirements</h2>
              <div dangerouslySetInnerHTML={{ __html: language_requirements }} />
            </section>
          )}
          {financial_requirements && (
            <section id="financial">
              <h2>Financial Requirements</h2>
              <div dangerouslySetInnerHTML={{ __html: financial_requirements }} />
            </section>
          )}
          {application_process && (
            <section id="application">
              <h2>Application Process</h2>
              <div dangerouslySetInnerHTML={{ __html: application_process }} />
            </section>
          )}
          {deadline_information && (
            <section id="deadline">
              <h2>Application Deadlines</h2>
              <div dangerouslySetInnerHTML={{ __html: deadline_information }} />
            </section>
          )}
          {visa_process && (
            <section id="visa">
              <h2>Visa Process</h2>
              <div dangerouslySetInnerHTML={{ __html: visa_process }} />
            </section>
          )}
          {tuition_fees && (
            <section id="tuition">
              <h2>Tuition Fees</h2>
              <div dangerouslySetInnerHTML={{ __html: tuition_fees }} />
            </section>
          )}
          {living_costs && (
            <section id="living">
              <h2>Living Costs</h2>
              <div dangerouslySetInnerHTML={{ __html: living_costs }} />
            </section>
          )}
          {scholarship_info && (
            <section id="scholarship">
              <h2>Scholarship Information</h2>
              <div dangerouslySetInnerHTML={{ __html: scholarship_info }} />
            </section>
          )}
          {working_while_studying && (
            <section id="work">
              <h2>Working While Studying</h2>
              <div dangerouslySetInnerHTML={{ __html: working_while_studying }} />
            </section>
          )}
          {post_study_options && (
            <section id="poststudy">
              <h2>Post Study Options</h2>
              <div dangerouslySetInnerHTML={{ __html: post_study_options }} />
            </section>
          )}
        </article>
      </main>
    </div>
  );
};

export default DestinationCountry;

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { getSingleDestination } from "@/actions/get/get.action";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import DestinationSection from "./DestinationSection";

// interface DestinationPageProps {
//   params: {
//     id: string;
//   };
// }

// const DestinationCountry = async ({ params }: DestinationPageProps) => {
//   const { id } = params;
//   if (!id) return notFound();

//   const { data: destinationDetails } = await getSingleDestination(parseInt(id, 10));

//   if (!destinationDetails) return <p className="text-center py-20 text-gray-500">Destination not found.</p>;

//   const {
//     title,
//     country_display,
//     overview,
//     eligibility_criteria,
//     language_requirements,
//     financial_requirements,
//     application_process,
//     deadline_information,
//     visa_process,
//     tuition_fees,
//     living_costs,
//     scholarship_info,
//     working_while_studying,
//     post_study_options,
//     featured_image_url,
//     country_flag_url,
//   } = destinationDetails;

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
//       {/* ✅ Sidebar */}
//       <aside className="order-1 md:order-none sticky top-24 h-fit">
//         <div className="border rounded-xl shadow-sm p-5 bg-white space-y-3">
//           <h2 className="text-lg font-semibold border-b pb-2 mb-2">Jump to Section</h2>
//           <DestinationSection id={id} />
//         </div>

//         {/* Book Appointment */}
//         <div className="mt-6">
//           <Link href="/appointment">
//             <button className="w-full rounded-lg bg-gradient-custom px-6 py-3 text-sm sm:text-base font-semibold text-white shadow hover:opacity-90 transition">
//               Book Appointment
//             </button>
//           </Link>
//         </div>
//       </aside>

//       {/* ✅ Main Content */}
//       <main className="lg:col-span-2">
//         {/* Country Header */}
//         <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8">
//           {featured_image_url ? (
//             <Image src={featured_image_url} alt={title} fill className="object-cover" />
//           ) : (
//             <div className="bg-gradient-to-r from-blue-700 to-blue-400 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
//               Study in {country_display}
//             </div>
//           )}

//           {country_flag_url && (
//             <Image
//               src={country_flag_url}
//               alt={`${country_display} flag`}
//               width={80}
//               height={60}
//               className="absolute bottom-5 right-5 shadow-md border rounded-md"
//             />
//           )}
//         </div>

//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl font-bold mb-3">{title}</h1>
//         <p className="text-gray-600 mb-8">
//           Everything you need to know about studying in <span className="font-semibold">{country_display}</span>.
//         </p>

//         {/* Sections */}
//         <article className="prose prose-gray max-w-none space-y-10">
//           {overview && (
//             <section id="overview">
//               <h2>Overview</h2>
//               <div dangerouslySetInnerHTML={{ __html: overview }} />
//             </section>
//           )}

//           {eligibility_criteria && (
//             <section id="eligibility">
//               <h2>Eligibility Criteria</h2>
//               <div dangerouslySetInnerHTML={{ __html: eligibility_criteria }} />
//             </section>
//           )}

//           {language_requirements && (
//             <section id="language">
//               <h2>Language Requirements</h2>
//               <div dangerouslySetInnerHTML={{ __html: language_requirements }} />
//             </section>
//           )}

//           {financial_requirements && (
//             <section id="financial">
//               <h2>Financial Requirements</h2>
//               <div dangerouslySetInnerHTML={{ __html: financial_requirements }} />
//             </section>
//           )}

//           {application_process && (
//             <section id="application">
//               <h2>Application Process</h2>
//               <div dangerouslySetInnerHTML={{ __html: application_process }} />
//             </section>
//           )}

//           {deadline_information && (
//             <section id="deadline">
//               <h2>Application Deadlines</h2>
//               <div dangerouslySetInnerHTML={{ __html: deadline_information }} />
//             </section>
//           )}

//           {visa_process && (
//             <section id="visa">
//               <h2>Visa Process</h2>
//               <div dangerouslySetInnerHTML={{ __html: visa_process }} />
//             </section>
//           )}

//           {tuition_fees && (
//             <section id="tuition">
//               <h2>Tuition Fees</h2>
//               <div dangerouslySetInnerHTML={{ __html: tuition_fees }} />
//             </section>
//           )}

//           {living_costs && (
//             <section id="living">
//               <h2>Living Costs</h2>
//               <div dangerouslySetInnerHTML={{ __html: living_costs }} />
//             </section>
//           )}

//           {scholarship_info && (
//             <section id="scholarship">
//               <h2>Scholarship Information</h2>
//               <div dangerouslySetInnerHTML={{ __html: scholarship_info }} />
//             </section>
//           )}

//           {working_while_studying && (
//             <section id="work">
//               <h2>Working While Studying</h2>
//               <div dangerouslySetInnerHTML={{ __html: working_while_studying }} />
//             </section>
//           )}

//           {post_study_options && (
//             <section id="poststudy">
//               <h2>Post Study Options</h2>
//               <div dangerouslySetInnerHTML={{ __html: post_study_options }} />
//             </section>
//           )}
//         </article>
//       </main>
//     </div>
//   );
// };

// export default DestinationCountry;
