import Calendar from "@/components/calendar/calendar";
import Sidebar from "@/components/sidebar/sidebar";
import { GetEventType } from "@/types";
import { getEvents } from "@/utils/event";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [events, setEvents] = useState<GetEventType[]>([]);

  const fetchEvents = async () => {
    const data = await getEvents("tobereplaced");
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="w-4/5 px-2 py-4 min-h-screen h-content flex flex-row  gap-32 items-start justify-between">
      <Sidebar />
      <Calendar events={events} />
    </div>
  );
};

export default Dashboard;
