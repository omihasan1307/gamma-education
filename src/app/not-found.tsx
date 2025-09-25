// app/not-found.tsx
"use client";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-4">The page you are looking for does not exist.</p>
    </div>
  );
}

// Disable static generation
export const dynamic = "force-dynamic";

// "use client";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { img } from "@/shared/constant/imgExport";

// const NotFound = () => {
//   const router = useRouter();

//   const handleGoBack = () => {
//     router.back();
//   };

//   return (
//     <div className="h-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
//       <div className="relative h-1/2 w-full">
//         <Image src={img.notfound} alt="Not Found" fill style={{ objectFit: "contain" }} placeholder="blur" />
//       </div>
//       <button onClick={handleGoBack} className="mt-4 px-4 py-2 bg-baseColor text-white rounded-lg cursor-pointer">
//         Go Back
//       </button>
//     </div>
//   );
// };

// export default NotFound;
