import { ReactNode } from "react"
import './styles.css'

interface IProps {
  children: ReactNode;
}

export default function ContainerCenter({children}: IProps){
  return (
    <div className='container-center'>
      {children}
    </div>
  )
}
