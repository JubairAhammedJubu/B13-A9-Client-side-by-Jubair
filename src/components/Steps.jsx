import Image from "next/image";

const Steps = () => {
  return (
    <div className="bg-gray-50 md:py-30 py-10">
      <div className="max-w-7xl mx-auto text-center md:px-4">
        <h2 className="text-2xl md:text-[48px] font-bold text-gray-800 mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-sm md:text-base text-gray-500 md:mb-16 mb-8">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:px-0 px-4">
          <div className="bg-white rounded-2xl shadow-sm px-8 py-10 relative flex flex-col">
            <div className="absolute top-4 right-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-3 py-2.5 rounded-full">
              01
            </div>

            <div className="p-5 mx-auto m-7 rounded-full bg-purple-100 flex items-center justify-center">
              <Image
                src="/assets/user.png"
                alt="Choose Products"
                width={60}
                height={60}
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Create Account
            </h3>
            <p className=" text-gray-500 leading-relaxed">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm px-8 py-10 relative flex flex-col">
            <span className="absolute top-4 right-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-3 py-2.5 rounded-full">
              02
            </span>

            <div className="p-5 mx-auto m-7 rounded-full bg-purple-100 flex items-center justify-center">
              <Image
                src="/assets/package.png"
                alt="Choose Products"
                width={60}
                height={60}
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Choose Facilities
            </h3>
            <p className=" text-gray-500 leading-relaxed">
              Browse our facilities and select the facility that fit your needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm px-8 py-10 relative flex flex-col">
            <span className="absolute top-4 right-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-3 py-2.5 rounded-full">
              03
            </span>

            <div className="p-5 mx-auto m-7 rounded-full bg-purple-100 flex items-center justify-center">
              <Image
                src="/assets/rocket.png"
                alt="Start Creating"
                width={60}
                height={60}
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Start Using
            </h3>
            <p className=" text-gray-500 leading-relaxed">
              Booking and start using your premium facilities immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
