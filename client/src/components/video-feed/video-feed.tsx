import useVideo from "@/hooks/useVideo";
import { useRef } from "react";

const VideoFeed = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const stream = useVideo();
  if (videoRef.current && stream) {
    videoRef.current.srcObject = stream;
  }
  return (
    <div>
      Hello
      <video ref={videoRef} autoPlay />
    </div>
  );
};

export default VideoFeed;
