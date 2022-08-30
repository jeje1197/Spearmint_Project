import './App.css';
import CodeEditor from './front-end/pages/CodeEditor'
import Docs from './front-end/pages/Docs'
import About from './front-end/pages/About'
import NavBar from './front-end/NavBar';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<CodeEditor/>}/>
          <Route path='/docs' element={<Docs/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
