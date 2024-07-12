import PhaseFour from "@/components/PhaseFour";
import PhaseOne from "@/components/PhaseOne";
import PhaseThree from "@/components/PhaseThree";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 bg-zinc-900">
      <h2 className="text-4xl font-bold mb-4 text-zinc-100">
      Optometry Project 

      </h2>
      <div className="">
        <PhaseOne/>

      </div>

    </main>
  );
}
