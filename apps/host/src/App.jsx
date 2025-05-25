import { RouterProvider } from 'react-router-dom';
import './App.css'
import routes from './routes/Index.jsx';
import './i18n.js';

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
