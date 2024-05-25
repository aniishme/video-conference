import { Button } from "@/components/ui/button";
import CreateEventDialog from "../dialog/create-event";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 w-64 flex-none rounded-lg">
      <div className="p-4 text-white">
        <ul>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">
            <CreateEventDialog>
              <Button variant="outline" className="bg-black w-full">
                Create Event
              </Button>
            </CreateEventDialog>
          </li>

          <li className="p-2 hover:bg-gray-700 cursor-pointer">
            <Button variant="outline" className="bg-black w-full">
              Join Event
            </Button>
          </li>

          <li className="p-2 hover:bg-gray-700 cursor-pointer">
            <Button variant="outline" className="bg-black w-full">
              Instant Meet
            </Button>
          </li>

          <button className="w-full text-left mt-8">
            <li className="p-2 hover:bg-gray-700 cursor-pointer text-red-400 text-center">
              Logout
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
