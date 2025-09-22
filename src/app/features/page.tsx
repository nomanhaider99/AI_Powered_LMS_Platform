import Navbar from "@/components/layouts/Navbar";
import Features from "@/components/widgets/Features";

export default function Home() {
  return (
    <div className="flex flex-col justify-between md:items-center md:px-10 px-4">
      <Navbar />
      <Features />
    </div>
  );
}
