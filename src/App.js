import './App.css';
import CodeEditor from './front-end/pages/CodeEditor'
import Docs from './front-end/pages/Docs'
import About from './front-end/pages/About'
import NavBar from './front-end/NavBar';

function App() {
  let PageComponent
  switch (window.location.pathname) {
    case "/":
      PageComponent = <CodeEditor/>
      break
    case "/docs":
      PageComponent = <Docs/>
      break
    case "/about":
      PageComponent = <About />
      break
    default:
  }

  return (
    <div className="App">
      <NavBar/>
      {PageComponent}
    </div>
  );
}

export default App;
