import Navbar from "@/components/layouts/Navbar";
import Features from "@/components/widgets/Features";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <div className="flex flex-col md:items-center md:px-10">
      <Navbar />
      <Features />
    </div>
  );
}
