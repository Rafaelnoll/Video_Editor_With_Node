import { ChangeEvent, createContext } from "react";

interface IVideoContext {
  video: File | null;
  onUploadVideo: (event: ChangeEvent<HTMLInputElement>) => void;
}

const VideoContext = createContext<IVideoContext>({ video: null, onUploadVideo: () => {} });

export default VideoContext;
