import { useEffect, useState } from "react";

const useVideo = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      setStream(stream);
    });
  }, []);

  return stream;
};

export default useVideo;
