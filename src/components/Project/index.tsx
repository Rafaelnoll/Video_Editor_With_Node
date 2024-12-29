import formatDate from "../../utils/formatDate";
import { IProject } from "../../types/IProject";
import './styles.css';

export default function Project({ name, createdAt, thumbnail }:IProject){
  return (
    <div draggable={false} className="project-container">
      <div>
        <img draggable={false} src={thumbnail} />
      </div>

      <div>
        <strong className="project-name">{name}</strong>
        <span className="created-at">{formatDate(createdAt)}</span>
      </div>
    </div>
  )
}
