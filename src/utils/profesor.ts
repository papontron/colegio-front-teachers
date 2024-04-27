import { SalonProfesor } from '../hooks/useProfesor';
import { Seccion } from '../types/gradoSalon';

export function generateGrados(salones: SalonProfesor[]) {
  return salones.map((salon) => ({
    label: salon.value.grado,
    value: salon.value.grado,
  }));
}

export function generateSecciones(grado: string, salones: SalonProfesor[]) {
  const options = salones.map((salon) => {
    if (salon.value.grado === grado) {
      return { label: salon.value.seccion, value: salon.value.seccion };
    }
  });
  return options as { label: Seccion; value: Seccion }[];
}
