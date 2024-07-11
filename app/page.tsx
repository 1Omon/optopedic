import PhaseFour from "@/components/PhaseFour";
import PhaseOne from "@/components/PhaseOne";
import PhaseThree from "@/components/PhaseThree";
import PhaseTwo from "@/components/PhaseTwo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 bg-zinc-900">
      <h2 className="text-4xl font-bold mb-6 text-zinc-100">
      Optometry Project 

      </h2>
      <div className="h-1/">
        <PhaseOne/>
        <PhaseTwo/>
        <PhaseThree/>
        <PhaseFour/>
      </div>

    </main>
  );
}
