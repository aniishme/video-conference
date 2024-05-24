import ChatFeed from "@/components/chat-feed/chat-feed";
import { Card, CardFooter } from "@/components/ui/card";
import VideoFeed from "@/components/video-feed/video-feed";

const Conference = () => {
  const participants = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="grid grid-cols-6 gap-10 justify-between w-4/5">
        <div className="col-span-4 bg-gray-800 rounded-sm w-full flex justify-center items-center">
          <VideoFeed />
        </div>
        <div className="col-span-2">
          <ChatFeed />
        </div>
      </div>
      <div className="grid grid-cols-6 w-4/5 mt-6">
        {participants.map((participant) => (
          <Card
            key={participant}
            className="col-span-2 lg:col-span-1 bg-gray-800 rounded-sm p-2"
          >
            <VideoFeed />

            <CardFooter className="flex justify-center text-white p-2">
              <p>Participant {participant}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Conference;
