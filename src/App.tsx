import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import Projects from './screens/Projects';
import CreateProject from './screens/CreateProject';


function App(){
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Projects />} />
        <Route path='/newProject' element={<CreateProject />} />
      </Routes>
    </HashRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
