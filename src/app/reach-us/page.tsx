import Navbar from "@/components/layouts/Navbar";
import Contact from "@/components/ui/contact";

export default function page() {
  return (
    <div className="w-full flex flex-col justify-between md:items-center md:px-10 overflow-y-hidden px-4 relative">
      <Navbar />
      <Contact />
    </div>
  );
}
