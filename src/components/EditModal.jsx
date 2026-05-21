"use client";

import {useRouter} from "next/navigation";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import {BiEdit} from "react-icons/bi";
import toast from "react-hot-toast";

export function EditModal({facility}) {
  const {
    _id,
    imageUrl,
    price_per_hour,
    capacity,
    name,
    facility_type,
    location,
    description,
    available_slots,
  } = facility;
  const router = useRouter();
  

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facility = Object.fromEntries(formData.entries());

    console.log(facility);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(facility),
      },
    );

    const data = await res.json();
    if (res.ok) {
      toast.success("Updated Successfully");
      router.push("/manage-facilities");
    } else {
      toast.error("Update Failed");
    }

    console.log(data);
  };

  return (
    <Modal>
      <Button
        variant="outline"
        radius="full"
        className="w-full mt-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md hover:shadow-xl transition-all"
      >
        <BiEdit /> Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Facility</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="md:col-span-2">
                      <TextField defaultValue={name} name="name" isRequired>
                        <Label>Facility Name</Label>
                        <Input
                          placeholder="Bali Paradise"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* location */}
                    <TextField
                      defaultValue={location}
                      name="location"
                      isRequired
                    >
                      <Label>Location</Label>
                      <Input
                        placeholder="Narayangonj"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Facility - Updated Select Component */}
                    <div>
                      <Label>Facility Type</Label>
                      <Select
                        defaultValue={facility_type}
                        name="facility_type"
                        isRequired
                        className="w-full border-hidden p-0"
                        placeholder="Select Facility Type"
                      >
                        <Select.Trigger className="rounded-2xl w-full m-0">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item
                              id="Football Turf"
                              textValue="Football Turf"
                            >
                              Football Turf
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Badminton Court"
                              textValue="Badminton Court"
                            >
                              Badminton Court
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Swimming Pool"
                              textValue="Swimming Pool"
                            >
                              Swimming Pool
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Tennis Court"
                              textValue="Tennis Court"
                            >
                              Tennis Court
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Basketball Court"
                              textValue="Basketball Court"
                            >
                              Basketball Court
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Cricket Ground"
                              textValue="Cricket Ground"
                            >
                              Cricket Ground
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Volleyball Court"
                              textValue="Volleyball Court"
                            >
                              Volleyball Court
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Table Tennis Arena"
                              textValue="Table Tennis Arena"
                            >
                              Table Tennis Arena
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Gym & Fitness Center"
                              textValue="Gym & Fitness Center"
                            >
                              Gym & Fitness Center
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Hockey Field"
                              textValue="Hockey Field"
                            >
                              Hockey Field
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Rugby Ground"
                              textValue="Rugby Ground"
                            >
                              Rugby Ground
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Futsal Court"
                              textValue="Futsal Court"
                            >
                              Futsal Court
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Baseball Field"
                              textValue="Baseball Field"
                            >
                              Baseball Field
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Skating Rink"
                              textValue="Skating Rink"
                            >
                              Skating Rink
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Boxing Arena"
                              textValue="Boxing Arena"
                            >
                              Boxing Arena
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Yoga Studio"
                              textValue="Yoga Studio"
                            >
                              Yoga Studio
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Cycling Track"
                              textValue="Cycling Track"
                            >
                              Cycling Track
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Athletics Track"
                              textValue="Athletics Track"
                            >
                              Athletics Track
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Martial Arts Dojo"
                              textValue="Martial Arts Dojo"
                            >
                              Martial Arts Dojo
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Esports Arena"
                              textValue="Esports Arena"
                            >
                              Esports Arena
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField
                      defaultValue={price_per_hour}
                      name="price_per_hour"
                      type="number"
                      isRequired
                    >
                      <Label>Price (BDT)</Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Capacity */}
                    <TextField
                      defaultValue={capacity}
                      name="capacity"
                      type="number"
                      isRequired
                    >
                      <Label>Capacity</Label>

                      <Input
                        type="number"
                        placeholder="5"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* available_slots */}
                    <TextField
                      defaultValue={available_slots}
                      name="available_slots"
                      isRequired
                    >
                      <Label>available_slots</Label>
                      <Input
                        placeholder="9AM-11AM, 1PM-3PM, 5PM-7PM"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/bali-paradise.jpg"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea
                          placeholder="Describe the travel experience..."
                          className="rounded-3xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Buttons */}

                  <Modal.Footer>
                    <Button type="submit" slot="close">
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
