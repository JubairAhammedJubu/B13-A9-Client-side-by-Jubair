import {Button} from "@heroui/react";
import Link from "next/link";
import FacilityCard from "./FacilityCard";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const facilities = await res.json();
  console.log(facilities);
  return (
    <section className="relative py-20 px-2">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              Featured Facilities
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Explore Premium Featured
              <span className="text-cyan-500"> Facilities</span>
            </h1>

            <p className="text-gray-500 mt-4 text-lg leading-relaxed">
              Discover premium sports facilities crafted for athletes, fitness
              enthusiasts, teams, and unforgettable sporting experiences.
            </p>
          </div>

          <Link href="/facilities">
            <Button
              radius="full"
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-8 shadow-lg shadow-cyan-500/30 transition-all duration-300"
            >
              Explore Facilities
            </Button>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-14">
          {facilities.map((facility) => (
            <div
              key={facility._id}
              className="group transform transition duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
                <FacilityCard facility={facility} />

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;

