import BookingCard from "@/components/BookingCard";
import {auth} from "@/lib/auth";
import {Button} from "@heroui/react";
import {headers} from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaBasketballBall} from "react-icons/fa";
import {FaRegCalendar, FaUsers} from "react-icons/fa6";
import {FiExternalLink} from "react-icons/fi";
import {LuMapPin} from "react-icons/lu";
import {MdOutlineAttachMoney} from "react-icons/md";

const FacilityDetailsPage = async ({params}) => {
  const {id} = await params;
  const {token} = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const facility = await res.json();

  const {
    imageUrl,
    name,
    facility_type,
    location,
    description,
    price_per_hour,
    capacity,
    available_slots,
    booking_count,
  } = facility;

  return (
    <div className="md:max-w-7xl mx-auto px-4 py-6 md:py-10">
      {/* HERO IMAGE */}
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
        <Image
          src={imageUrl}
          alt={"image"}
          width={1200}
          height={500}
          className="w-[350px] md:w-full h-[220px] sm:h-[300px] md:h-[420px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">{name}</h1>

          <div className="flex flex-wrap gap-2 md:gap-4 mt-1 md:mt-2 text-xs md:text-sm text-white/80">
            <span className="flex items-center gap-1">
              <LuMapPin /> {location}
            </span>

            <span className="flex items-center gap-1">
              <FaBasketballBall /> {facility_type}
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 gap-4 md:gap-6 mt-6 md:mt-10">
        {/* INFO CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="bg-white border border-gray-300 rounded-xl p-3 md:p-4 shadow-sm">
            <p className="text-[10px] md:text-xs text-gray-500">Price / Hour</p>
            <p className="flex items-center gap-1 font-bold text-sm md:text-base text-gray-900">
              <MdOutlineAttachMoney className="text-cyan-500" />
              {price_per_hour}
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-xl p-3 md:p-4 shadow-sm">
            <p className="text-[10px] md:text-xs text-gray-500">Capacity</p>
            <p className="flex items-center gap-1 font-bold text-sm md:text-base text-gray-900">
              <FaUsers className="text-cyan-500" />
              {capacity}
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-xl p-3 md:p-4 shadow-sm">
            <p className="text-[10px] md:text-xs text-gray-500">
              Available Slots
            </p>
            <p className="font-bold text-xs md:text-base text-cyan-600">
              {available_slots}
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-xl p-3 md:p-4 shadow-sm">
            <p className="text-[10px] md:text-xs text-gray-500">Bookings</p>
            <p className="font-bold text-sm md:text-base text-gray-900">
              {booking_count}
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="bg-white border border-gray-300 rounded-2xl p-4 md:p-6 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            Description
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-6 md:leading-8">
            {description}
          </p>
        </div>

        {/* BOOKING SECTION */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-3 justify-center items-stretch md:items-start">
          <div className="w-full md:w-auto sticky top-4 md:top-10 h-fit">
            <BookingCard facility={facility} />
          </div>

          <Link href={`/manage-facilities`} className="w-full md:w-auto">
            <Button
              radius="full"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md hover:shadow-xl transition-all"
            >
              <FiExternalLink className="mr-1" />
              Manage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetailsPage;
