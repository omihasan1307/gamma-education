/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useWebsiteInfo } from "@/providers/websites.providers";
import Link from "next/link";
import React from "react";

const DestinationSection = ({ id }: { id: string }) => {
  const websiteData = useWebsiteInfo();
  const { featured_guidelines: destinationPage }: any = websiteData?.websiteInfo || {};

  const otherDestinations = destinationPage?.filter((s: any) => s.id !== id);

  return (
    <div>
      <nav className="space-y-2">
        {otherDestinations.map((s: any) => (
          <Link key={s.id} href={`${s.id}`} className="block text-sm font-medium text-gray-600 hover:text-basicColor transition">
            {s.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default DestinationSection;
