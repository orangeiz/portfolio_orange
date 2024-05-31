"use client"
import Header from "@/components/header"
import Body1 from "@/components/body1";
import Loader from "@/components/loader";
import { useEffect, useState } from "react";
import Body2 from "@/components/body2";
import Body3 from "@/components/body3";
import Footer from "@/components/footer";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    
    <div className="flex flex-col gap-y-5">
      {loading && <Loader />}
      <Header/>
      <Body1/>
      <Body2/>
      <Body3/>
      <Footer/>
    </div>
  );
}
