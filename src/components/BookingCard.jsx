"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  Input,
  Modal,
  Surface,
  TextField,
  Label,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function BookingCard({ facility }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [bookingDate, setBookingDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [hours, setHours] = useState(1);
  const [loading, setLoading] = useState(false);

  const {_id, name, price_per_hour, available_slots} = facility;

  const slots = Array.isArray(available_slots)
    ? available_slots
    : typeof available_slots === "string"
      ? available_slots.split(",").map((s) => s.trim())
      : [];

  const totalPrice = Number(price_per_hour) * Number(hours);

  const handleBooking = async () => {
    if (!user) return toast.error("Please login first");

    if (!bookingDate || !timeSlot || !hours) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);

      const bookingData = {
        facility_id: _id,
        facility_name: name,
        user_email: user?.email,
        booking_date: bookingDate,
        time_slot: timeSlot,
        hours: Number(hours),
        total_price: totalPrice,
        status: "pending",
      };

      console.log(bookingData);
      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify(bookingData),
        }
      );

      const data = await res.json();
      console.log(data)

      if (res.ok) {
        toast.success("Booking successful!");
        window.location.reload();
      } else {
        toast.error(data?.message || "Booking failed");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      {/* Trigger Button */}
      <Button className="w-full bg-linear-to-r from-cyan-500 to-blue-600 text-white">
        Book Now
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header>
              <Modal.Heading>Book Facility</Modal.Heading>

              <p className="text-sm text-muted mt-1">
                {name} — ${price_per_hour}/hour
              </p>
            </Modal.Header>

            {/* BODY FORM */}
            <Modal.Body className="p-6">
              <Surface variant="default">
                <div className="flex flex-col gap-4">
                  {/* Facility Name (readonly) */}
                  <TextField>
                    <Label>Facility Name</Label>
                    <Input value={name} readOnly />
                  </TextField>

                  {/* Booking Date */}
                  <TextField>
                    <Label>Booking Date</Label>
                    <Input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                    />
                  </TextField>

                  {/* Time Slot */}
                  <div className="space-y-2">
                    <Label>Available Slots</Label>

                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full border rounded-lg px-3 py-2 outline-none"
                    >
                      <option value="">Select a slot</option>

                      {slots.length === 0 ? (
                        <option disabled>No slots available</option>
                      ) : (
                        slots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))
                      )}
                    </select>
                  </div>

                  {/* Hours */}
                  <TextField>
                    <Label>Hours</Label>
                    <Input
                      type="number"
                      min={1}
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                    />
                  </TextField>

                  {/* Total Price */}
                  <div className="border rounded-lg p-3">
                    <p className="text-sm text-gray-500">Total Price</p>
                    <h2 className="text-xl font-bold text-green-600">
                      ${totalPrice}
                    </h2>
                  </div>
                </div>
              </Surface>
            </Modal.Body>

            {/* FOOTER */}
            <Modal.Footer>
              <Button
                onClick={handleBooking}
                isLoading={loading}
                className="bg-cyan-500 text-white"
              >
                Confirm Booking
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}