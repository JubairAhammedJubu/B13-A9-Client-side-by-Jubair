import {Button} from "@heroui/react";
import Image from "next/image";
import {FiExternalLink} from "react-icons/fi";
import {LuMapPin} from "react-icons/lu";
import {FaRegCalendar, FaUser} from "react-icons/fa6";
import Link from "next/link";
import { FaBasketballBall } from "react-icons/fa";

const FacilityCard = ({facility}) => {
  const {
    _id,
    imageUrl,
    price_per_hour,
    name,
    facility_type,
    location,
    capacity,
  } = facility;

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          alt={"image"}
          src={imageUrl}
          height={400}
          width={400}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-cyan-600 font-bold px-4 py-1 rounded-full shadow">
          ${price_per_hour}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition">
          {name}
        </h2>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <LuMapPin className="text-cyan-500" />
          <span className="truncate">{location}</span>
        </div>

        {/* Type */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaBasketballBall className="text-cyan-500" />
          <span>{facility_type}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-sm bg-cyan-50 py-1 rounded-lg">
          <FaUser className="text-cyan-500" />
          {capacity} Places
        </div>

        {/* Button */}
        <Link href={`/facilities/${_id}`}>
          <Button
            radius="full"
            className="w-full mt-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md hover:shadow-xl transition-all"
          >
            <FiExternalLink className="mr-2" />
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FacilityCard;
