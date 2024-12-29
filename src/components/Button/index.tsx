import { ReactNode } from 'react';
import './styles.css';

type ButtomType = 'primary' | 'dark' | 'white';

interface IProps {
  children: ReactNode;
  type?: ButtomType;
}

function getClassNameByType(type: ButtomType): string {
  switch(type){
    case 'primary':
      return 'buttom primary'
    case 'dark':
      return 'buttom dark'
    case 'white':
      return 'buttom white'
    default:
      return 'buttom primary'
  }
}

export default function Button({ children, type }:IProps){
    return (
        <button className={getClassNameByType(type)}>
          {children}
        </button>
    )
}
