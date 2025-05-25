import './App.css'
import { Route, Routes } from 'react-router-dom'
import routes from './routes/Index.jsx';
import './i18n';
import useLanguage from './hooks/thems/useLanguage';

function App() {
  useLanguage();
  
  return (
    <Routes>
      {
        routes.map(({ Element, ...rest }) => {
          return <Route key={rest.path} path={rest.path} element={<Element />} />;
        })
      }
    </Routes>
  )
}

export default App
