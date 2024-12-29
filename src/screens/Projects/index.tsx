import Button from '../../components/Button';
import PlusIcon from '../../../assets/icons/plus.svg';
import SpaceshipImage from '../../../assets/images/spaceship.png';
import './styles.css';
import useProjects from './useProjects';
import Project from '../../components/Project';

export default function Projects(){

    const {
      projects,
      createNewProject
    } = useProjects();

    function renderProjectsGrid(){

      if(projects && projects.length > 0){
        return (
          <>
            <div className='w-100'>
              <h1 className='title'>My Projects</h1>
            </div>

            <div className='projects-grid'>
              {projects.map(project => <Project {...project} />)}
            </div>
          </>
        )
      }

      return (
        <div className='spaceship-container'>
          <img draggable={false} src={SpaceshipImage}/>
          <span>You have no projects</span>
        </div>
      )

    }

    return (
        <div className='container'>

            {renderProjectsGrid()}

            <Button onClick={createNewProject}>
              <PlusIcon />
              Create project
            </Button>
        </div>
    )
}
