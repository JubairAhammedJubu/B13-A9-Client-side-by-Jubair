"use client";

import {authClient} from "@/lib/auth-client";
import {useRouter} from "next/navigation";
import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
  Card,
} from "@heroui/react";
import toast from "react-hot-toast";

const AddFacilityPage = () => {
  const {data: session} = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const facility = {
      name: data.facilityName,
      facility_type: data.facility_type,
      location: data.location,
      price_per_hour: Number(data.price),
      capacity: Number(data.capacity),
      available_slots: data.available_slots,
      description: data.description,
      imageUrl: data.imageUrl,
      owner_email: user?.email,
      booking_count: 0,
      status: "available",
    };

    const {data: tokenData} = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(facility),
    });

    const result = await res.json();

    if (result.insertedId) {
      toast.success("Facility Added Successfully");
    }

    router.push("/facilities");
  };

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-[#173c3d] p-4 md:p-5 text-center rounded-xl mb-4 md:mb-5">
        <h1 className="text-xl md:text-3xl font-black uppercase text-white">
          Add New Facility
        </h1>

        <p className="text-gray-300 mt-2 mx-auto text-sm md:text-base">
          Create and manage your sports facility with all essential booking
          information for users.
        </p>
      </div>

      <Card>
        <form
          onSubmit={onSubmit}
          className="p-4 md:p-10 space-y-6 md:space-y-8 w-full max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Facility Name */}
            <div className="md:col-span-2">
              <TextField name="facilityName" isRequired>
                <Label>Facility Name</Label>
                <Input placeholder="Football Turf" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Facility Type */}
            <div>
              <Label>Facility Type</Label>
              <Select
                name="facility_type"
                isRequired
                className="w-full rounded-2xl border-0 p-0"
                placeholder="Select Facility Type"
              >
                <Select.Trigger className="w-full">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Football Turf" textValue="Football Turf">
                      Football Turf
                    </ListBox.Item>

                    <ListBox.Item
                      id="Badminton Court"
                      textValue="Badminton Court"
                    >
                      Badminton Court
                    </ListBox.Item>

                    <ListBox.Item id="Swimming Pool" textValue="Swimming Pool">
                      Swimming Pool
                    </ListBox.Item>

                    <ListBox.Item id="Tennis Court" textValue="Tennis Court">
                      Tennis Court
                    </ListBox.Item>

                    <ListBox.Item
                      id="Basketball Court"
                      textValue="Basketball Court"
                    >
                      Basketball Court
                    </ListBox.Item>

                    <ListBox.Item
                      id="Cricket Ground"
                      textValue="Cricket Ground"
                    >
                      Cricket Ground
                    </ListBox.Item>

                    <ListBox.Item
                      id="Volleyball Court"
                      textValue="Volleyball Court"
                    >
                      Volleyball Court
                    </ListBox.Item>

                    <ListBox.Item
                      id="Table Tennis Arena"
                      textValue="Table Tennis Arena"
                    >
                      Table Tennis Arena
                    </ListBox.Item>

                    <ListBox.Item
                      id="Gym & Fitness Center"
                      textValue="Gym & Fitness Center"
                    >
                      Gym & Fitness Center
                    </ListBox.Item>

                    <ListBox.Item id="Hockey Field" textValue="Hockey Field">
                      Hockey Field
                    </ListBox.Item>

                    <ListBox.Item id="Rugby Ground" textValue="Rugby Ground">
                      Rugby Ground
                    </ListBox.Item>

                    <ListBox.Item id="Futsal Court" textValue="Futsal Court">
                      Futsal Court
                    </ListBox.Item>

                    <ListBox.Item
                      id="Baseball Field"
                      textValue="Baseball Field"
                    >
                      Baseball Field
                    </ListBox.Item>

                    <ListBox.Item id="Skating Rink" textValue="Skating Rink">
                      Skating Rink
                    </ListBox.Item>

                    <ListBox.Item id="Boxing Arena" textValue="Boxing Arena">
                      Boxing Arena
                    </ListBox.Item>

                    <ListBox.Item id="Yoga Studio" textValue="Yoga Studio">
                      Yoga Studio
                    </ListBox.Item>

                    <ListBox.Item id="Cycling Track" textValue="Cycling Track">
                      Cycling Track
                    </ListBox.Item>

                    <ListBox.Item
                      id="Athletics Track"
                      textValue="Athletics Track"
                    >
                      Athletics Track
                    </ListBox.Item>

                    <ListBox.Item
                      id="Martial Arts Dojo"
                      textValue="Martial Arts Dojo"
                    >
                      Martial Arts Dojo
                    </ListBox.Item>

                    <ListBox.Item id="Esports Arena" textValue="Esports Arena">
                      Esports Arena
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Location */}
            <TextField name="location" isRequired>
              <Label>Location</Label>
              <Input placeholder="Narayangong" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Price */}
            <TextField name="price" isRequired>
              <Label>Price Per Hour(BDT)</Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Capacity */}
            <TextField name="capacity" isRequired>
              <Label>Capacity</Label>
              <Input type="number" placeholder="5" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Available Slots */}
            <TextField name="available_slots" isRequired>
              <Label>Available Time Slots</Label>
              <Input
                placeholder="9AM-11AM, 1PM-3PM, 5PM-7PM"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>

            {/* Image URL */}
            <TextField name="imageUrl" isRequired>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/image.jpg"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the facility..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Button */}
          <Button
            type="submit"
            variant="outline"
            className="rounded-2xl w-full bg-cyan-500 text-white py-2 md:py-3"
          >
            Add Facility
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddFacilityPage;
