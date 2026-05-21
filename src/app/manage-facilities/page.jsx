import Image from "next/image";
import {auth} from "@/lib/auth";
import {LuMapPin} from "react-icons/lu";
import {FaUser} from "react-icons/fa6";
import {FaBasketballBall} from "react-icons/fa";
import {EditModal} from "@/components/EditModal";
import { DeleteAlert } from "@/components/DeleteAlert";
import {headers} from "next/headers";

const ManageFacilityPage = async () => {
  
  const {token} = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token)
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const facilities = await res.json();
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Manage Facilities</h1>
        <p className="text-gray-500 mt-2">
          View, monitor and manage all sports facilities
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {facilities.map((facility) => {
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
            <div
              key={_id}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative">
                <Image
                  src={imageUrl}
                  alt={"image"}
                  width={500}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Price */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-cyan-600 font-bold px-4 py-1 rounded-full shadow">
                  ${price_per_hour}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-3">
                {/* Name */}
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition">
                  {name}
                </h2>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <LuMapPin className="text-cyan-500" />
                  <span className="truncate">{location}</span>
                </div>

                {/* Type */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaBasketballBall className="text-cyan-500" />
                  <span>{facility_type}</span>
                </div>

                {/* Capacity */}
                <div className="flex items-center gap-2 text-sm bg-cyan-50 text-gray-700 px-1 py-1 rounded-lg w-fit">
                  <FaUser className="text-cyan-500" />
                  {capacity} Places
                </div>

                {/* ACTIONS */}
                <div className="flex justify-center gap-3 mb-6">
                  <EditModal facility={facility} />
                  <DeleteAlert facility={facility} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageFacilityPage;
