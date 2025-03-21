import Button from '../../components/Button';
import PlusIcon from '../../../assets/icons/plus.svg';
import SpaceshipImage from '../../../assets/images/spaceship.png';
import './styles.css';
import useProjects from './useProjects';
import Project from '../../components/Project';
import ContainerCenter from '../../components/ContainerCenter';

export default function Projects(){

    const {
      projects,
      goToCreateNewProjectPage
    } = useProjects();

    function renderProjectsGrid(){

      if(projects && projects.length > 0){
        return (
          <>
            <div className='w-100'>
              <h1 className='title'>My Projects</h1>
            </div>

            <div className='projects-grid'>
              {projects.map(project => <Project key={project.id} {...project} />)}
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
        <ContainerCenter>

            {renderProjectsGrid()}

            <Button onClick={goToCreateNewProjectPage}>
              <PlusIcon />
              Create project
            </Button>
        </ContainerCenter>
    )
}
