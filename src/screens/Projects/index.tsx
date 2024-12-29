import SpaceshipImage from '../../../assets/images/spaceship.png';
import './styles.css';

export default function Projects(){
    return (
        <div className='container'>
            <div className='spaceship-container'>
                <img draggable={false} src={SpaceshipImage}/>
                <span>You have no projects</span>
            </div>
        </div>
    )
}