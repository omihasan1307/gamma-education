/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PopupAd = ({ advertisements }: { advertisements: any[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Find popup image
  const popupImage = advertisements?.find((item) => item?.name === "popup")?.images?.[0];

  useEffect(() => {
    const closed = localStorage.getItem("popup_closed");
    if (!closed && popupImage) {
      setIsOpen(true);
    }
  }, [popupImage]);

  const handleClose = () => {
    localStorage.setItem("popup_closed", "true");
    setIsOpen(false);
  };

  if (!isOpen || !popupImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative max-w-md w-full rounded-lg bg-white shadow-xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 z-10 rounded-full bg-black/70 text-white w-8 h-8 flex items-center justify-center hover:bg-black">
          ✕
        </button>

        {/* Popup Image */}
        <Image src={popupImage.image_url} alt="Popup Advertisement" width={800} height={800} className="w-full h-auto object-contain" priority />
      </div>
    </div>
  );
};

export default PopupAd;
