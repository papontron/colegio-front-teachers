import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Menu from './pages/Menu/Menu';
import RequireProfesor from './components/Guards/RequireProfesor';
import Registro from './Profesor/Registro/Registro';
import Asistencias from './Profesor/Asistencia/Asistencias';
import CambiarPassword from './Profesor/CambiarPassword/CambiarPassword';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/menu" element={<Menu />}>
        <Route element={<RequireProfesor />}>
          <Route element={<div>Default content</div>} index></Route>
          <Route element={<Registro />} path="registro" />
          <Route element={<Asistencias />} path="asistencias" />
          <Route element={<CambiarPassword />} path="cambiar-password" />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
