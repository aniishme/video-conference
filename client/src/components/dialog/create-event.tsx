import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DialogBox from "./dialog-box";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";

type DialogBoxProps = {
  children: React.ReactNode;
};

const CreateEventDialog: React.FC<DialogBoxProps> = ({ children }) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const date = formData.get("date") as string;

    console.log({ title, description, date });
  };
  return (
    <DialogBox
      title="Create Event"
      description="Add a new event to calender."
      button={children}
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
      </form>
    </DialogBox>
  );
};

export default CreateEventDialog;
