import { useState } from "react";
import { IProject } from "../../types/IProject";
import { useNavigate } from "react-router-dom";

export default function useProjects(){
  const [projects, setProjects] = useState<IProject[]>([]);
  const navigate = useNavigate();

  function goToCreateNewProjectPage(): void {
    navigate('/newProject');
  }

  return {
    projects,
    goToCreateNewProjectPage
  }
}
