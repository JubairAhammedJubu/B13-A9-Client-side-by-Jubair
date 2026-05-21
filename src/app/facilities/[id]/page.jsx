
import BookingCard from "@/components/BookingCard";
import {auth} from "@/lib/auth";
import { Button } from "@heroui/react";
import {headers} from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {FaRegCalendar, FaUsers} from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
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
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* HERO IMAGE */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg">
        <Image
          src={imageUrl}
          alt={"image"}
          width={1200}
          height={500}
          className="w-full h-[420px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">{name}</h1>

          <div className="flex flex-wrap gap-4 mt-2 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <LuMapPin /> {location}
            </span>

            <span className="flex items-center gap-1">
              <FaRegCalendar /> {facility_type}
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 gap-6 mt-10">
        {/* INFO CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <p className="text-xs text-gray-500">Price / Hour</p>
            <p className="flex items-center gap-1 font-bold text-gray-900">
              <MdOutlineAttachMoney className="text-cyan-500" />
              {price_per_hour}
            </p>
          </div>

          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <p className="text-xs text-gray-500">Capacity</p>
            <p className="flex items-center gap-1 font-bold text-gray-900">
              <FaUsers className="text-cyan-500" />
              {capacity}
            </p>
          </div>

          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <p className="text-xs text-gray-500">Available Slots</p>
            <p className="font-bold text-cyan-600">{available_slots}</p>
          </div>

          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <p className="text-xs text-gray-500">Bookings</p>
            <p className="font-bold text-gray-900">{booking_count}</p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-600 leading-8">{description}</p>
        </div>

        {/* BOOKING */}
        <div className="flex gap-3 justify-center">
          <div className="sticky top-10 h-fit">
            <BookingCard facility={facility} />
          </div>
          <Link href={`/manage-facilities`}>
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
