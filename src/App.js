import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/home/Home';


const routes = {
  '/': <Home /> 
  // '/teach': <Teach /> ,
  // '/prep':<Prep />,
  // '/mock':<Mock />
}

function App() {
  return (
    <BrowserRouter>
            <Routes>
                {
                    Object.keys(routes).map((route, index) => {
                        return (<Route key={index} path={route} element={routes[route]} />);
                    })
                }
            </Routes>
        </BrowserRouter>
  );
}

export default App;