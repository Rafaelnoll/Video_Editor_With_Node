import {ChangeEvent, ReactNode, useState} from 'react'
import VideoContext from "../context/VideoContext";

interface IProps {
  children: ReactNode;
}

export default function VideoProvider({ children }:IProps){

  const [video, setVideo] = useState(null);

  function onUploadVideo(event: ChangeEvent<HTMLInputElement>){

    const { files } = event.target;

    if(files.length > 0){
      const firstFileUploaded = files[0];

      if(firstFileUploaded.type.startsWith('video/')){
        setVideo(firstFileUploaded);
      }
    }

  }

  return (
    <VideoContext.Provider value={{ video, onUploadVideo }}>
      {children}
    </VideoContext.Provider>
  )
}
