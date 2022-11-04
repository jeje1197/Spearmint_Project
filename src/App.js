import './App.css';
import CodeEditor from './front-end/pages/code-editor/CodeEditor'
import Docs from './front-end/pages/docs/Docs'
import About from './front-end/pages/about/About'
import NavBar from './front-end/NavBar';
import { Route, Routes } from 'react-router-dom'
import Footer from './front-end/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<CodeEditor/>}/>
          <Route path='/docs' element={<Docs/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
