"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";

type Category = {
  id: number;
  name: string;
};

export default function ServiceFilter({ categories }: { categories: Category[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams?.get("search") || "");
  const [category, setCategory] = useState(searchParams?.get("category") || "");

  // debounce + sync URL
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();

      if (search) params.set("search", search);
      if (category) params.set("category", category);

      router.push(`/service?${params.toString()}`);
    }, 400);

    return () => clearTimeout(timer);
  }, [search, category, router]);

  return (
    <div className="max-w-screen-xl mx-auto mt-10 px-4 grid gap-4 sm:grid-cols-2">
      {/* Search */}
      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search services..."
          className="w-full rounded-full border border-gray-300 py-3 pl-5 pr-12 outline-none focus:border-basicColor"
        />
        <MdSearch size={22} className="absolute right-4 top-1/2 -translate-y-1/2 text-basicColor" />
      </div>

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full rounded-full border border-gray-300 py-3 px-5 outline-none focus:border-basicColor">
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
}
