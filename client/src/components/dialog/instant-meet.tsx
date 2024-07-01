import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";

import DialogBox from "./dialog-box";
import useAuthStore from "@/store/authStore";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useNavigate } from "react-router-dom";

type DialogBoxProps = {
  children: React.ReactNode;
};

const InstantMeetDialog: React.FC<DialogBoxProps> = ({ children }) => {
  const navigate = useNavigate()


  const [values, setValues] = useState({
    dateTime:new Date(),
    description:"",
    link:""
  })

  const [callDetails, setCallDetails] = useState<Call>()
  const [open, setOpen] = useState(false);
  const user = useAuthStore((state) => state.user)

  const client = useStreamVideoClient();

  const createMeeting = async (e: React.FormEvent) =>{
    e.preventDefault();
    if(!client || !user) return;

    try {
        const id = Date.now().toString()
        const call = client.call('default', id)
        console.log(id)

        if(!call) throw new Error("Failed to create call")

        const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString()
        const description = values.description || "Instant Meet"

        await call.getOrCreate({
            data:{
                starts_at:startsAt,
                custom:{
                    description
                }

            }
        })

        setCallDetails(call)

        if(!values.description){
            navigate(`/events/${call.id}`)
        }

    } catch (error) {
        console.log(error)
    }

  }
  return (
    <DialogBox
      title="Create Instant Meeting"
      description="Save time by create a meet immediately"
      button={children}
      open={open}
      onOpenChange={setOpen}
    >
      <form onSubmit={createMeeting}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" name="title" className="col-span-3" />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </form>
    </DialogBox>
  );
};

export default InstantMeetDialog;
