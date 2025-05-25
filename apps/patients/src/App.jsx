import { Route, Routes } from 'react-router-dom'
import './App.css'
import routes from './routes/index.js';
import './i18n.js';

function App() {
  return (
    <>
      <Routes>
        {routes.map(({ Element, ...rest }) => {
          return <Route key={rest.path} path={rest.path} element={<Element />} />;
        })}
      </Routes>
    </>
  )
}

export default App
