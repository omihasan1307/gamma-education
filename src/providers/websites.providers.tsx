/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ENV_CONFIG } from "@/shared/constant/app.constant";
import { createContext, useContext, useState, ReactNode } from "react";

interface WebsiteInfoContextType {
  websiteInfo: any;
  loading: boolean;
  setWebsiteInfo: React.Dispatch<React.SetStateAction<any>>;
  refetchWebsiteInfo: () => Promise<void>;
}

const WebsiteInfoContext = createContext<WebsiteInfoContextType>({
  websiteInfo: null,
  loading: true,
  setWebsiteInfo: () => {},
  refetchWebsiteInfo: async () => {},
});

export const WebsiteInfoProvider = ({ children, initialData }: { children: ReactNode; initialData: any }) => {
  const [websiteInfo, setWebsiteInfo] = useState(initialData?.data ?? null);
  const [loading, setLoading] = useState(false);

  // ✅ Manual refetch (NOT automatic)
  const refetchWebsiteInfo = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${ENV_CONFIG.baseApi}/base/website-data`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      });

      if (!res.ok) return;

      const data = await res.json();
      setWebsiteInfo(data?.data ?? null);
    } catch (error) {
      console.error("Website info fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WebsiteInfoContext.Provider
      value={{
        websiteInfo,
        loading,
        setWebsiteInfo,
        refetchWebsiteInfo,
      }}>
      {children}
    </WebsiteInfoContext.Provider>
  );
};

export const useWebsiteInfo = () => useContext(WebsiteInfoContext);

// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { ENV_CONFIG } from "@/shared/constant/app.constant";
// import { createContext, useContext, useState, useEffect, ReactNode, useRef } from "react";

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
//   const [websiteInfo, setWebsiteInfo] = useState(initialData?.data || null);
//   const [loading, setLoading] = useState(!initialData);

//   // 🔐 store last data snapshot
//   const lastDataRef = useRef(JSON.stringify(initialData?.data || null));

//   const fetchWebsiteInfo = async () => {
//     try {
//       const res = await fetch(`${ENV_CONFIG.baseApi}/base/website-data`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//         cache: "no-store",
//       });

//       if (!res.ok) return;

//       const data = await res.json();
//       const newData = data?.data || null;
//       const newDataString = JSON.stringify(newData);

//       // ✅ update ONLY if data changed
//       if (newDataString !== lastDataRef.current) {
//         lastDataRef.current = newDataString;
//         setWebsiteInfo(newData);
//       }
//     } catch (error) {
//       console.error("Website info fetch error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Fetch ONLY ONCE
//   useEffect(() => {
//     fetchWebsiteInfo();
//   }, []);

//   return <WebsiteInfoContext.Provider value={{ websiteInfo, loading, setWebsiteInfo }}>{children}</WebsiteInfoContext.Provider>;
// };

// export const useWebsiteInfo = () => useContext(WebsiteInfoContext);

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
