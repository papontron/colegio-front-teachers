import { Navigate, Outlet } from "react-router-dom";
import { useProfesor } from "../../hooks/useProfesor";
import toaster from "react-hot-toast";
export default function RequireProfesor() {
  const profesor = useProfesor((state) => state.profesor);
  const clearProfesor = useProfesor((state) => state.clearProfesor);
  if (profesor?.rol !== "profesor") {
    toaster.error("usuario inválido");
    clearProfesor();
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
