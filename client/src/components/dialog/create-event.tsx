import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { createEvent } from "@/utils/event";

import DialogBox from "./dialog-box";
import useAuthStore from "@/store/authStore";

type DialogBoxProps = {
  children: React.ReactNode;
};

const CreateEventDialog: React.FC<DialogBoxProps> = ({ children }) => {
  const [status, setStatus] = useState({
    loading: false,
    error: null,
  });
  const [open, setOpen] = useState(false);
  const user = useAuthStore((state) => state.user)

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const date = new Date(
      formData.get("date") as string
    ).toDateString() as string;
    const userId = user?.id as string;

    if (!title || !description || !date) {
      return;
    }

    try {
      setStatus({ loading: true, error: null });
      const response = await createEvent({ title, description, date, userId });
      if (response.status === 201) {
        setStatus({ loading: false, error: null });
        setOpen(false);
      }
    } catch (error: any) {
      setStatus({ loading: false, error: error?.message });
    }
  };
  return (
    <DialogBox
      title="Create Event"
      description="Add a new event to calender."
      button={children}
      open={open}
      onOpenChange={setOpen}
    >
      <form onSubmit={handleFormSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" name="title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" name="description" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Input id="date" type="date" name="date" className="col-span-3" />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
        {status.error && <p>{status.error}</p>}
      </form>
    </DialogBox>
  );
};

export default CreateEventDialog;
