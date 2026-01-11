"use client";

import { MdSearch } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearch = searchParams?.get("q") || "";
  const [search, setSearch] = useState(initialSearch);

  // debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      if (search) params.set("q", search);
      router.push(`/blog?${params.toString()}`);
    }, 400);

    return () => clearTimeout(timer);
  }, [search, router]);

  return (
    <div className="relative">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search blogs..."
        className="w-full rounded-full border border-gray-300 focus:border-basicColor focus:ring-basicColor py-3 pl-5 pr-12 outline-none transition"
      />
      <MdSearch size={22} className="absolute right-4 top-1/2 -translate-y-1/2 text-basicColor" />
    </div>
  );
}
