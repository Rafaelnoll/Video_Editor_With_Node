import { ChangeEvent } from "react";

import useVideoUploaded from "../../hooks/useVideoUploaded";
import ContainerCenter from "../../components/ContainerCenter";
import './styles.css';

export default function UploadVideo(){

  const { onUploadVideo } = useVideoUploaded();

  return (
     <ContainerCenter>
        <label htmlFor="file-upload" className="custom-file-upload">
          <span>Click to browse or drag and drop your video</span>
        </label>
        <input onChange={onUploadVideo} id="file-upload" type="file" accept="video/*" />
     </ContainerCenter>
  )
}
