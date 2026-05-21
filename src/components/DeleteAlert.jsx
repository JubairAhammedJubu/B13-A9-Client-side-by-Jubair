"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";


export function DeleteAlert({facility}) {
  const { _id, facilityName } = facility;
   const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        // credentials: "include",
      },
    );

    const data = await res.json();
    if (res.ok) {
      toast.success("Deleted Successfully");
      router.push("/manage-facilities");
    } else {
      toast.error("Delete Failed");
    }

    console.log(data);
  };

  return (
    <AlertDialog>
      <Button
        className="w-full mt-3 bg-gradient-to-r from-red-300 to-red-500 text-white font-medium shadow-md hover:shadow-xl transition-all"
        variant="outline"
      >
        <TrashBin /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{facilityName}</strong> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
