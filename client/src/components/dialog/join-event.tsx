import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DialogBox from "./dialog-box";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";

type DialogBoxProps = {
  children: React.ReactNode;
};

const JoinEventDialog: React.FC<DialogBoxProps> = ({ children }) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const id = formData.get("id") as string;

    console.log({ id });
  };
  return (
    <DialogBox
      title="Join Event"
      description="Join a new event to add to calender."
      button={children}
    >
      <form onSubmit={handleFormSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Event ID:
            </Label>
            <Input id="id" name="id" className="col-span-3" />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Join</Button>
        </DialogFooter>
      </form>
    </DialogBox>
  );
};

export default JoinEventDialog;
