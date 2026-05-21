import {Button} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f4fbfb] via-white to-[#eef7ff] min-h-screen flex items-center">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb20_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb20_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        {/* LEFT CONTENT */}
        <div className="flex-1 relative z-10">
          {/* Logo */}
          <div className="inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-lg">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl shadow-md">
              <Image
                src="/assets/Logo1.png"
                alt="SportNest Logo"
                width={45}
                height={45}
                className="rounded-md"
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 tracking-wide">
              SportNest
            </h2>
          </div>

          {/* Badge */}
          <div className="mt-8 inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full text-sm font-medium">
            Modern Sports Management Platform
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-3xl md:text-5xl font-black leading-tight text-gray-900">
            Elevate Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Sports Community
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 md:text-lg md:leading-9 max-w-2xl">
            Built for football clubs, basketball teams, tennis academies,
            swimming centers, cycling groups, and modern sports organizations
            looking to showcase achievements, manage facilities, and grow their
            community.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <Link href="/facilities">
              <Button
                radius="full"
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
              >
                Explore Facilities
              </Button>
            </Link>

            <Link href="/about">
              <Button
                radius="full"
                size="lg"
                variant="bordered"
                className="border-2 border-cyan-500 text-cyan-600 px-8 hover:bg-cyan-50 transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-14 max-w-xl">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-500 text-sm mt-1">Sports Facilities</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">50K+</h3>
              <p className="text-gray-500 text-sm mt-1">Active Athletes</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">120+</h3>
              <p className="text-gray-500 text-sm mt-1">Sports Clubs</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 relative flex justify-center">
          {/* Floating Card */}
          <div className="absolute -left-5 md:left-0 bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl px-5 py-4 border border-white z-20 animate-bounce">
            <p className="text-sm text-gray-500">Live Matches</p>
            <h3 className="text-xl font-bold text-gray-900">24 Running</h3>
          </div>

          {/* Main Image */}
          <div className="relative scale-110 lg:scale-125">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full scale-110" />

            <Image
              src="/assets/bg.png"
              alt="Sports Banner"
              width={900}
              height={950}
              priority
              className="relative z-10 w-full max-w-[900px] h-auto drop-shadow-2xl"
            />
          </div>

          {/* Bottom Floating Badge */}
          <div className="absolute -bottom-6 right-0 bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl px-6 py-4 border border-white z-20">
            <p className="text-sm text-gray-500">Trusted By</p>
            <h3 className="text-xl font-bold text-cyan-600">
              120+ Sports Clubs
            </h3>
          </div>

          <div className="absolute z-20 -bottom-40 right-70 -translate-x-1/2 hidden md:flex items-center justify-center w-50 h-50 rounded-full bg-gradient-to-br from-cyan-200 to-blue-300 shadow-2xl shadow-cyan-500/30">
            <Image
              src="/assets/demo.svg"
              alt="Demo Badge"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Badge Wrapper */}
    </section>
  );
};

export default Banner;
