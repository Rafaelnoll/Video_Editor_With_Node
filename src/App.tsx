import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import UploadVideo from './screens/UploadVideo';
import VideoProvider from './providers/VideoProvider';


function App(){
  return (
    <VideoProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<UploadVideo />} />
        </Routes>
      </HashRouter>
    </VideoProvider>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
