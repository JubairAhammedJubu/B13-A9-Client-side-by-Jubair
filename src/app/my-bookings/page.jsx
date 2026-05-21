import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const {token} = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.email}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const bookings = await res.json();

  if (!bookings.length) {
    return (
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-5">My Bookings</h1>
        <p>No bookings found</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="group bg-white border border-gray-300 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all"
          >
            {/* Facility Name */}
            <h2 className="text-xl font-bold group-hover:text-cyan-600 transition">
              {booking.facility_name}
            </h2>

            {/* Date */}
            <p className="mt-3 text-sm text-gray-600 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-cyan-500" />
              {booking.booking_date}
            </p>

            {/* Time */}
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-cyan-500" />
              {booking.time_slot}
            </p>

            {/* Price */}
            <p className="mt-3 text-lg font-bold text-cyan-600">
              BDT{booking.total_price}
            </p>

            {/* Status */}
            <span className="mt-3 inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-gray-700 capitalize">
              {booking.status}
            </span>

            {/* Cancel */}
            <div className="mt-5">
              <BookingCancelAlert bookingId={booking._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;
