import { useContext } from "react";
import VideoContext from "../context/VideoContext";
import ContextError from "../errors/ContextError";

export default function useVideoUploaded(){
  const context = useContext(VideoContext)

  if(!context){
    throw new ContextError('Custom hook "useVideoUploaded" must be used within a VideoProvider.')
  }

  return context;
}
