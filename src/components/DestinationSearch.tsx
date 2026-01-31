/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MdSearch } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { countryList, StudyLevels } from "@/shared/constant/data";

export default function DestinationSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearch = searchParams?.get("q") || "";
  const initialCountry = searchParams?.get("country") || "";
  const initialLevel = searchParams?.get("study_level") || "";

  const [search, setSearch] = useState(initialSearch);
  const [country, setCountry] = useState(initialCountry);
  const [studyLevel, setStudyLevel] = useState(initialLevel);

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      if (search) params.set("q", search);
      if (country) params.set("country", country);
      if (studyLevel) params.set("study_level", studyLevel);
      router.push(`/destination?${params.toString()}`);
    }, 400);

    return () => clearTimeout(timer);
  }, [search, country, studyLevel, router]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search destinations..."
        className="w-full sm:w-64 rounded-full border border-gray-300 focus:border-basicColor focus:ring-basicColor py-2 px-4 outline-none transition"
      />
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="rounded-full border border-gray-300 focus:border-basicColor focus:ring-basicColor py-2 px-4 outline-none transition">
        <option value="">All Countries</option>
        {countryList.map((c: any) => (
          <option key={c.key} value={c.key}>
            {c.label}
          </option>
        ))}
      </select>
      <select
        value={studyLevel}
        onChange={(e) => setStudyLevel(e.target.value)}
        className="rounded-full border border-gray-300 focus:border-basicColor focus:ring-basicColor py-2 px-4 outline-none transition">
        <option value="">All Levels</option>
        {StudyLevels.map((l: any) => (
          <option key={l.key} value={l.key}>
            {l.label}
          </option>
        ))}
      </select>
      <MdSearch size={22} className="text-basicColor" />
    </div>
  );
}
