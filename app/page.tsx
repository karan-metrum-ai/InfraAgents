"use client"
import { useRouter } from "next/navigation";
import DarkVeil from "@/components/DarkVeil";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import RotatingText from "@/components/RotatingText";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const router = useRouter();
  return <div>
    <div className="absolute top-0 left-0 w-full h-full">
      <DarkVeil />
    </div>
    <div className="relative z-10 w-full h-full flex items-center justify-center flex-col">
      <Header />
      <h1 className="text-8xl font-semibold text-white/90 font-inter antialiased mt-40 text-center flex items-center justify-center gap-4 flex-wrap">
        <span>Infra</span>
        <RotatingText
          texts={["Agents", "Automation", "Monitoring", "Orchestration"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </h1>
      <div className="text-2xl text-white/80 mt-6 text-center max-w-2xl">
        Transform your infrastructure operations with AI-driven automation, intelligent monitoring, and seamless orchestration for enterprise-scale efficiency.
      </div>
      <Button className="mt-20 w-60 h-10 rounded-md text-lg" variant="button_header" onClick={() => router.push("/onboarding")}>
        Get Started
        <ArrowRight />
      </Button>
    </div>
  </div>;
}  
