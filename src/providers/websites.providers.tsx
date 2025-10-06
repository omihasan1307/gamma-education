/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ENV_CONFIG } from "@/shared/constant/app.constant";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// ✅ Define Context Type
interface WebsiteInfoContextType {
  websiteInfo: any;
  loading: boolean;
  setWebsiteInfo: React.Dispatch<React.SetStateAction<any>>;
}

// ✅ Create Context
const WebsiteInfoContext = createContext<WebsiteInfoContextType>({
  websiteInfo: null,
  loading: true,
  setWebsiteInfo: () => {},
});

// ✅ Provider
export const WebsiteInfoProvider = ({ children, initialData }: { children: ReactNode; initialData: any }) => {
  const [websiteInfo, setWebsiteInfo] = useState(initialData?.data || null);
  const [loading, setLoading] = useState(!initialData);

  // ✅ Fetch website info directly on the client
  const fetchWebsiteInfo = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${ENV_CONFIG.baseApi}/base/website-data`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store", // ensures always fresh data
      });
      if (!res.ok) throw new Error(`Failed to fetch website data: ${res.status}`);
      const data = await res.json();
      setWebsiteInfo(data?.data || null);
    } catch (error) {
      console.error("Error fetching website data:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch on mount + periodically refresh every 60s
  useEffect(() => {
    fetchWebsiteInfo();

    const interval = setInterval(() => {
      fetchWebsiteInfo();
    }, 60 * 1000); // auto refresh every 1 minute

    return () => clearInterval(interval);
  }, []);

  return <WebsiteInfoContext.Provider value={{ websiteInfo, loading, setWebsiteInfo }}>{children}</WebsiteInfoContext.Provider>;
};

// ✅ Custom Hook
export const useWebsiteInfo = () => useContext(WebsiteInfoContext);

// /* eslint-disable @typescript-eslint/no-explicit-any */

// "use client";
// import { createContext, useContext, useState, ReactNode } from "react";

// // Corrected Context Type
// interface WebsiteInfoContextType {
//   websiteInfo: any;
//   loading: boolean;
//   setWebsiteInfo: React.Dispatch<React.SetStateAction<any>>;
// }

// const WebsiteInfoContext = createContext<WebsiteInfoContextType>({
//   websiteInfo: null,
//   loading: true,
//   setWebsiteInfo: () => {},
// });

// export const WebsiteInfoProvider = ({ children, initialData }: { children: ReactNode; initialData: any }) => {
//   const [websiteInfo, setWebsiteInfo] = useState(initialData?.data || "");
//   const loading = websiteInfo === null;

//   return <WebsiteInfoContext.Provider value={{ websiteInfo, loading, setWebsiteInfo }}>{children}</WebsiteInfoContext.Provider>;
// };

// export const useWebsiteInfo = () => useContext(WebsiteInfoContext);
