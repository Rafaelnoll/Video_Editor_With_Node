import { useState } from "react";
import { IProject } from "../../types/IProject";
import DefaultProjectThumbnail from '../../../assets/images/default_project_thumbnail.png';

export default function useProjects(){
  const [projects, setProjects] = useState<IProject[]>([{
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },
  {
    id: Math.random().toString(),
    name: 'New Project',
    createdAt: new Date(),
    thumbnail: DefaultProjectThumbnail
  },

]);

  function createNewProject(): void {
    const newProject: IProject = {
      id: Math.random().toString(),
      name: 'New Project',
      createdAt: new Date(),
      thumbnail: DefaultProjectThumbnail
    }

    setProjects(prevState => [...prevState, newProject]);
  }

  return {
    projects,
    createNewProject
  }
}
