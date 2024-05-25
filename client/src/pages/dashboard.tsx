import Calendar from "@/components/calendar/calendar";
import Sidebar from "@/components/sidebar/sidebar";

const events: Record<string, string> = {
  "2024-05-20": "Meeting",
  "2024-06-15": "Conference",
  "2024-07-25": "Birthday",
  // Add more events here
};

const Dashboard = () => {
  return (
    <div className="w-4/5 px-2 py-4 min-h-screen h-content flex flex-row  gap-32 items-start justify-between">
      <Sidebar />
      <Calendar events={events} />
    </div>
  );
};

export default Dashboard;
