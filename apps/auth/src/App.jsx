import { Route, Routes } from 'react-router-dom'
import './App.css'
import routes from './routes/index.js'
import useLanguage from './hooks/thems/useLanguage';
import './i18n';

function App() {
  useLanguage();

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
