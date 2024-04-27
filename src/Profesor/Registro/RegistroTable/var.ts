import { CursosMapNivel } from '../../../models/Profesor/types';

export const COMPETENCIA_WIDTH = 40;

export const CURSOS_MAP_BY_NIVEL: CursosMapNivel = {
  primaria: {
    matematica: {
      label: 'Matemática',
      key: 'matematica',
      code: 'MA',
      numCompetencias: 4,
      competencias: [
        'Resuelve problemas de cantidad.',
        'Resuelve problemas de regularidad, equivalencia y cambio',
        'Resuelve problemas de movimiento y localización.',
        'Resuelve problemas de datos e incertidumbre.',
      ],
    },
    comunicacion: {
      label: 'Comunicación',
      key: 'comunicacion',
      code: 'CO',
      numCompetencias: 3,
      competencias: ['Se comunica oralmente.', 'Lee diversos tipos de textos.', 'Escribe diversos tipos de textos.'],
    },
    cienciaTecnologia: {
      label: 'Ciencia y Tecnología',
      key: 'cienciaTecnologia',
      code: 'CT',
      numCompetencias: 3,
      competencias: [
        'Indaga mediante métodos científicos.',
        'Explica el mundo basándose en hechos científicos.',
        'Diseña y construye soluciones tecnológicas.',
      ],
    },
    personalSocial: {
      label: 'Personal Social',
      key: 'personalSocial',
      code: 'PS',
      numCompetencias: 5,
      competencias: [
        'Construye su identidad.',
        'Convive y participa democráticamente.',
        'Construye interpretaciones históricas.',
        'Gestiona responsablemente el espacio y el ambiente',
        'Gestiona responsablemente los recursos económicos.',
      ],
    },
    educacionFisica: {
      label: 'Educación Física',
      key: 'educacionFisica',
      code: 'EF',
      numCompetencias: 3,
      competencias: ['Se desenvuelve de manera autónoma.', 'Asume una vida saludable.', 'Interactúa a través de sus habilidades sociomotrices.'],
    },
    arteCultura: {
      label: 'Arte y Cultura',
      key: 'arteCultura',
      code: 'AC',
      numCompetencias: 2,
      competencias: ['Aprecia las manifestaciones artístico-culturales.', 'Crea proyectos desde los lenguajes artísticos.'],
    },
    ingles: {
      label: 'Inglés',
      key: 'ingles',
      code: 'IN',
      numCompetencias: 3,
      competencias: ['Se comunica oralmente en inglés.', 'Lee diversos tipos de textos en inglés.', 'Escribe diversos tipos textos en inglés.'],
    },
    religion: {
      label: 'Religión',
      key: 'religion',
      code: 'RE',
      numCompetencias: 2,
      competencias: ['Construye su identidad como persona amada por Dios.', 'Asume a Dios en su proyecto de vida.'],
    },
    competenciasTransversales: {
      label: 'Competencias Transversales',
      key: 'competenciasTransversales',
      code: 'CX',
      numCompetencias: 2,
      competencias: ['Se desenvuelve en entornos virtuales generados por las TIC.', 'Gestiona su aprendizaje de manera autónoma.'],
    },
  },
  inicial: {
    psicomotriz: {
      label: 'Psicomotriz',
      key: 'psicomotriz',
      code: 'PZ',
      numCompetencias: 1,
      competencias: ['Se desenvuelve de manera autónoma'],
    },
    matematica: {
      label: 'Matemática',
      key: 'matematica',
      code: 'MA',
      numCompetencias: 2,
      competencias: ['Resuelve problemas de cantidad.', 'Resuelve problemas de forma y movimiento.'],
    },
    comunicacion: {
      label: 'Comunicación',
      key: 'comunicacion',
      code: 'CO',
      numCompetencias: 4,
      competencias: [
        'Se comunica oralmente.',
        'Lee diversos tipos de textos.',
        'Escribe diversos tipos de textos.',
        'Crea proyectos desde los lenguajes del arte.',
      ],
    },
    cienciaTecnologia: {
      label: 'Ciencia y Tecnología',
      key: 'cienciaTecnologia',
      code: 'CT',
      numCompetencias: 1,
      competencias: ['Indaga e investiga mediante métodos científicos.'],
    },
    personalSocial: {
      label: 'Personal Social',
      key: 'personalSocial',
      code: 'PS',
      numCompetencias: 3,
      competencias: ['Construye su identidad.', 'Convive y participa democráticamente.', 'Construye una conciencia histórica.'],
    },
    ingles: {
      label: 'Inglés',
      key: 'ingles',
      code: 'IN',
      numCompetencias: 3,
      competencias: ['Se comunica oralmente en inglés.', 'Lee diversos tipos de textos en inglés.', 'Escribe diversos tipos textos en inglés.'],
    },
    competenciasTransversales: {
      label: 'Competencias Transversales',
      key: 'competenciasTransversales',
      code: 'CX',
      numCompetencias: 2,
      competencias: ['Se desenvuelve en entornos virtuales generados por las TIC.', 'Gestiona su aprendizaje de manera autónoma.'],
    },
  },
};
