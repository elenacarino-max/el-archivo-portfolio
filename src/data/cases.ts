export type ProjectNature = "individual" | "collaborative" | "collaborative-evolution";

export interface CaseTechnology {
  name: string;
  purpose: string;
}

export interface CaseLink {
  label: string;
  url?: string;
  type: "github" | "demo" | "docs" | "linkedin" | "cv" | "contact";
  status?: "available" | "pending";
}

export interface CaseEvidence {
  label: string;
  image?: string;
  alt?: string;
  href?: string;
  kind?: "image" | "document" | "link";
}

export interface CaseStamp {
  result: string;
  skills: string[];
  label?: string;
}

export interface FutureCase {
  id: string;
  status: string;
  question: string;
  cta: string;
}

export interface PortfolioCase {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  area: string;
  classification: string;
  status: string;
  nature: ProjectNature;
  summary: string;
  mission: string;
  objective: string;
  investigation: string[];
  solution: string[];
  flow: string[];
  contribution: string[];
  technologies: CaseTechnology[];
  evidence: Array<string | CaseEvidence>;
  conclusion: string[];
  quote: string;
  stamp: CaseStamp;
  links: CaseLink[];
  image?: string;
  gallery?: string[];
  note?: string;
  timeline?: string[];
  workMethod?: Array<{ title: string; question: string }>;
  futureCase?: FutureCase;
}

export const natureLabels: Record<ProjectNature, string> = {
  individual: "Proyecto individual",
  collaborative: "Proyecto colaborativo",
  "collaborative-evolution": "Proyecto colaborativo con evolución individual en desarrollo",
};

const caseImage = (
  caseId: string,
  fileName: string,
  label: string,
  alt: string = label,
): CaseEvidence => ({
  label,
  image: `images/cases/${caseId}/${fileName}`,
  alt,
});

export const cases: PortfolioCase[] = [
  {
    id: "001",
    slug: "biblioteca-jedi-mlflow",
    title: "Biblioteca Jedi · MLflow",
    shortTitle: "Biblioteca Jedi",
    area: "Machine Learning, MLOps y formación",
    classification: "Experiencia educativa interactiva",
    status: "Desplegado e impartido en aula",
    nature: "individual",
    summary:
      "Experiencia educativa diseñada para aprender seguimiento de experimentos con MLflow mediante una aplicación interactiva, narrativa, live coding, documentación docente y práctica real.",
    mission:
      "Explicar MLflow de forma práctica, comprensible y participativa, evitando que conceptos como experimentos, ejecuciones, parámetros, métricas, artefactos y modelos se quedasen en una explicación puramente teórica.",
    objective:
      "Diseñar, desarrollar e impartir una experiencia formativa completa para explicar MLflow mediante una combinación de narrativa, aplicación interactiva, live coding y documentación docente.",
    investigation: [
      "Conceptos centrales de MLflow: experimentos, runs, parámetros, métricas, artefactos y modelos.",
      "Reconstrucción de tres experimentos de Random Forest con el dataset Digits.",
      "Comparación de métricas y artefactos registrados para construir una recomendación basada en evidencias.",
      "Necesidades de una sesión docente real: explicación, práctica, contingencias y seguimiento del progreso.",
      "Masterclass impartida el 20 de julio de 2026 como prueba de uso real en aula.",
    ],
    solution: [
      "Aplicación interactiva en Streamlit con seis cámaras: Experiment, Run, Parameters, Metrics, Artifacts y Model.",
      "Panel docente para crear sesiones, seguir progreso, desbloquear cámaras y exportar resultados.",
      "Materiales para alumnado y profesorado.",
      "Notebooks de live coding, práctica y reto final.",
      "Docker y documentación operativa para facilitar una ejecución reproducible.",
    ],
    flow: [
      "Entrada narrativa a la experiencia.",
      "Exploración guiada de las seis cámaras de MLflow.",
      "Registro y comparación de experimentos de Random Forest.",
      "Lectura de métricas, parámetros y artefactos.",
      "Recomendación final basada en evidencias.",
      "Uso en masterclass real con materiales de apoyo y contingencia.",
    ],
    contribution: [
      "Investigación y aprendizaje profundo de MLflow.",
      "Diseño del concepto educativo y de la narrativa.",
      "Desarrollo de la aplicación.",
      "Preparación de materiales para alumnado y profesorado.",
      "Creación de notebooks de live coding y práctica.",
      "Preparación de una demo segura y materiales de contingencia.",
      "Impartición de la masterclass.",
      "Explicación y comunicación de conceptos técnicos.",
    ],
    technologies: [
      { name: "Python", purpose: "Lógica, experimentos y preparación de materiales." },
      { name: "MLflow", purpose: "Tracking de experimentos, métricas, parámetros, artefactos y modelos." },
      { name: "Scikit-learn", purpose: "Modelos de Random Forest y dataset Digits." },
      { name: "Streamlit", purpose: "Experiencia interactiva y panel docente." },
      { name: "SQLite", purpose: "Persistencia de progreso y sesiones." },
      { name: "Docker", purpose: "Ejecución reproducible." },
      { name: "Jupyter Notebook", purpose: "Live coding, práctica y reto final." },
    ],
    evidence: [
      caseImage("001", "001-01.webp", "Centro de mando del Consejo", "Panel docente de Biblioteca Jedi con sesión activa, código de equipo y seguimiento."),
      caseImage("001", "001-02.webp", "Reto interactivo de una cámara", "Vista del alumnado en la cámara Experiment con un reto de selección múltiple."),
      caseImage("001", "001-03.webp", "Laboratorio de misiones", "Laboratorio de Biblioteca Jedi con las misiones Tatooine, Coruscant y Mustafar."),
      caseImage("001", "001-04.webp", "Seguimiento e intervenciones del Consejo", "Panel docente con el progreso del equipo y controles de intervención."),
      caseImage("001", "001-05.webp", "Progreso por las seis cámaras", "Listado de las seis cámaras de aprendizaje completadas por el equipo."),
      caseImage("001", "001-06.webp", "Terminal editable de misión", "Terminal de código de la misión guiada para registrar una ejecución en MLflow."),
    ],
    conclusion: [
      "Este proyecto comenzó como una propuesta para explicar MLflow y terminó convirtiéndose en una experiencia educativa completa, con aplicación, documentación, ejercicios, live coding y una sesión real impartida.",
    ],
    quote: "Entender una herramienta es saber utilizarla. Dominarla también es ser capaz de enseñarla.",
    stamp: {
      label: "Caso resuelto",
      result: "Experiencia formativa sobre MLflow diseñada, desarrollada, desplegada e impartida en aula.",
      skills: ["MLflow", "MLOps", "Streamlit", "Machine Learning", "Live coding", "Comunicación técnica", "Diseño formativo"],
    },
    links: [
      { label: "GitHub", url: "https://github.com/elenacarino-max/Pildora4_ext_StarWars", type: "github" },
      { label: "Aplicación", url: "https://pildora4extstarwars-14.streamlit.app/", type: "demo" },
      { label: "Documentación", url: "https://deepwiki.com/elenacarino-max/Pildora4_ext_StarWars", type: "docs" },
    ],
  },
  {
    id: "002",
    slug: "bicimad-predictor",
    title: "BiciMAD Predictor",
    shortTitle: "BiciMAD",
    area: "Analítica predictiva y movilidad urbana",
    classification: "Sistema de apoyo a la decisión",
    status: "Proyecto colaborativo",
    nature: "collaborative-evolution",
    summary:
      "Sistema predictivo orientado a apoyar la gestión operativa de bicicletas, con una vista ciudadana complementaria para consultar disponibilidad prevista.",
    mission:
      "Predecir qué estaciones necesitarán bicicletas, cuáles podrán presentar excedente y desde qué estaciones cercanas podría realizarse la redistribución.",
    objective:
      "Ayudar al personal de EMT o Ayuntamiento encargado de gestionar bicicletas a anticipar déficits, excedentes y opciones de redistribución entre estaciones.",
    investigation: [
      "Disponibilidad por estación.",
      "Posibles déficits y excedentes.",
      "Estaciones cercanas con disponibilidad.",
      "Comparación entre estaciones próximas.",
      "Necesidad de una vista operativa y otra ciudadana.",
    ],
    solution: [
      "Vista operativa con predicción de disponibilidad por estación.",
      "Detección de posibles déficits e identificación de estaciones con disponibilidad.",
      "Apoyo a la redistribución y comparación entre estaciones próximas.",
      "Vista ciudadana para consultar disponibilidad prevista y planificar desplazamientos.",
    ],
    flow: [
      "Preparación de datos de movilidad.",
      "Entrenamiento y comparación de modelos.",
      "Obtención e interpretación de métricas.",
      "Selección y persistencia del modelo.",
      "Integración en aplicación Streamlit.",
      "Consulta operativa y ciudadana de predicciones.",
    ],
    contribution: [
      "Entrenamiento y comparación de modelos.",
      "Obtención e interpretación de métricas.",
      "Selección y persistencia del modelo.",
      "Desarrollo o mejora de la aplicación Streamlit.",
      "Integración de funcionalidades.",
      "Resolución de conflictos.",
      "Evolución posterior de la lógica de redistribución entre estaciones cercanas.",
    ],
    technologies: [
      { name: "Python", purpose: "Desarrollo del flujo predictivo." },
      { name: "Pandas", purpose: "Tratamiento y preparación de datos." },
      { name: "Scikit-learn", purpose: "Entrenamiento y comparación de modelos." },
      { name: "Streamlit", purpose: "Aplicación interactiva." },
      { name: "Folium", purpose: "Visualización geográfica." },
      { name: "Joblib", purpose: "Persistencia del modelo." },
    ],
    evidence: [
      caseImage("002", "002-01.webp", "Vista ciudadana y mapa de estaciones", "BiciMAD Predictor con selector de estación, hora y mapa de estaciones cercanas."),
      caseImage("002", "002-02.webp", "Predicción de disponibilidad", "Resultado de disponibilidad prevista con bicicletas y anclajes libres."),
      caseImage("002", "002-03.webp", "Formulario de reserva", "Formulario de reserva futura con estación, fecha, hora y valoración."),
      caseImage("002", "002-04.webp", "Cuadro de mando de reservas", "Panel analítico con reservas, anulaciones y valoración media."),
      caseImage("002", "002-05.webp", "Simulación operativa por estación", "Simulación de disponibilidad según fecha, hora y condiciones climáticas."),
      caseImage("002", "002-06.webp", "Analítica de demanda y anulaciones", "Gráficos de estaciones demandadas, motivos de anulación y demanda horaria."),
    ],
    conclusion: [
      "El proyecto conecta predicción y toma de decisiones: no se limita a estimar disponibilidad, sino que ayuda a interpretar qué acción operativa puede tener sentido después.",
    ],
    quote: "Un buen modelo no solo predice lo que puede ocurrir. Ayuda a decidir qué hacer después.",
    stamp: {
      label: "Caso resuelto",
      result: "Sistema predictivo con vista operativa y pantalla de consulta ciudadana.",
      skills: ["Machine Learning", "Movilidad urbana", "Analítica predictiva", "Visualización geográfica", "Apoyo a la toma de decisiones"],
    },
    links: [{ label: "GitHub", url: "https://github.com/elenacarino-max/bike-sharing-prediction", type: "github" }],
    note:
      "Tras finalizar el proyecto colaborativo, continué trabajando individualmente en una ampliación de la lógica de redistribución entre estaciones cercanas. Esta versión se encuentra actualmente en desarrollo.",
  },
  {
    id: "003",
    slug: "choose-your-side",
    title: "Choose Your Side · Star Wars Rebellion Lab",
    shortTitle: "Choose Your Side",
    area: "Business Intelligence y análisis de audiencias",
    classification: "Dashboard estratégico",
    status: "Caso cerrado",
    nature: "individual",
    summary:
      "Dashboard ejecutivo desarrollado a partir de datos de encuesta para comprender preferencias, segmentos y comportamientos de audiencia.",
    mission:
      "Transformar datos de encuesta en perfiles y conclusiones útiles para comprender preferencias, segmentos y comportamientos de audiencia.",
    objective:
      "Construir una lectura estratégica de los datos mediante indicadores, filtros y comparaciones de perfiles.",
    investigation: [
      "Inspección de datos.",
      "Limpieza y transformación.",
      "Análisis exploratorio.",
      "Definición de indicadores.",
      "Comparación de perfiles.",
      "Diseño de dashboard.",
      "Data storytelling.",
    ],
    solution: [
      "Dashboard ejecutivo en Power BI capaz de resumir indicadores.",
      "Filtros para explorar resultados y comparar grupos.",
      "Lectura visual para detectar patrones, interpretar perfiles y apoyar conclusiones estratégicas.",
    ],
    flow: [
      "Preparación y transformación de datos.",
      "EDA con Python.",
      "Selección de indicadores.",
      "Diseño del modelo visual.",
      "Construcción del dashboard.",
      "Documentación e identidad narrativa.",
    ],
    contribution: [
      "Proyecto individual.",
      "Preparación y transformación de datos.",
      "EDA con Python.",
      "Diseño del modelo visual.",
      "Selección de indicadores.",
      "Construcción del dashboard.",
      "Identidad visual y narrativa.",
      "Documentación.",
    ],
    technologies: [
      { name: "Python", purpose: "Preparación y análisis exploratorio." },
      { name: "Pandas", purpose: "Limpieza y transformación de datos." },
      { name: "NumPy", purpose: "Soporte para tratamiento numérico." },
      { name: "Jupyter Notebook", purpose: "Documentación del análisis." },
      { name: "Power BI", purpose: "Construcción del dashboard estratégico." },
    ],
    evidence: [
      caseImage("003", "003-01.webp", "La señal perdida", "Dashboard con indicadores generales y distribución de fans por edad y género."),
      caseImage("003", "003-02.webp", "Los clanes de la galaxia", "Segmentación de personas encuestadas por tipo de audiencia y películas visualizadas."),
      caseImage("003", "003-03.webp", "El mapa emocional", "Mapa de afinidad de personajes y tabla de emociones de marca."),
      caseImage("003", "003-04.webp", "Puertas de entrada al universo", "Preferencias de películas, taquilla mundial y puerta emocional de entrada."),
      caseImage("003", "003-05.webp", "Planetas como experiencias", "Tabla de planetas, atmósferas de marca y conceptos de experiencia."),
      caseImage("003", "003-06.webp", "Tecnología, poder y velocidad", "Análisis de naves, armas y símbolos con mayor presencia en la saga."),
      caseImage("003", "003-07.webp", "Estrategia de activación", "Ruta de activación recomendada por audiencia, hallazgos y sesgos de la muestra."),
    ],
    conclusion: [
      "El resultado convierte respuestas de encuesta en una herramienta de lectura estratégica, con foco en perfiles, patrones y conclusiones accionables.",
    ],
    quote: "Un dashboard no consiste en llenar una pantalla de gráficos. Consiste en ayudar a encontrar una respuesta.",
    stamp: {
      label: "Caso resuelto",
      result: "Dashboard estratégico desarrollado a partir de datos de encuesta preparados y analizados.",
      skills: ["Análisis de datos", "Power BI", "Limpieza", "Segmentación", "Visualización", "Data Storytelling"],
    },
    links: [{ label: "GitHub", url: "https://github.com/elenacarino-max/DashboardStarWars", type: "github" }],
  },
  {
    id: "004",
    slug: "mas-climapp",
    title: "Mas ClimApp",
    shortTitle: "Mas ClimApp",
    area: "Desarrollo backend y servicios de datos",
    classification: "Plataforma meteorológica",
    status: "Demo funcional",
    nature: "collaborative",
    summary:
      "Plataforma meteorológica que combina datos oficiales, registros manuales, geolocalización, persistencia y alertas visuales de riesgo.",
    mission:
      "Reunir datos meteorológicos oficiales, registros manuales, geolocalización, persistencia y alertas en una plataforma coherente.",
    objective:
      "Integrar piezas de backend, API, persistencia y visualización para crear una demo funcional conectada con AEMET.",
    investigation: [
      "Consulta por GPS o localidad.",
      "Datos oficiales de AEMET.",
      "Registro manual e histórico.",
      "Comparación entre datos manuales y AEMET.",
      "Alertas visuales según nivel de riesgo.",
    ],
    solution: [
      "Aplicación web con Flask.",
      "API REST con FastAPI.",
      "Consulta por GPS o localidad.",
      "Datos oficiales de AEMET.",
      "Registro manual, histórico y comparación de fuentes.",
      "Persistencia con SQLite y SQLAlchemy.",
      "Validación con Pydantic y testing con Pytest.",
    ],
    flow: [
      "Entrada de ubicación por GPS o localidad.",
      "Consulta a AEMET OpenData.",
      "Registro manual de observaciones.",
      "Persistencia en base local.",
      "Comparación entre fuentes.",
      "Visualización de alertas y dashboard.",
    ],
    contribution: [
      "Integración y estabilización de la API tras combinar ramas.",
      "Corrección de rutas y pruebas.",
      "Desarrollo y mejora del dashboard.",
      "Búsqueda meteorológica por localidad.",
      "Alertas visuales según nivel de riesgo.",
      "Comparación entre registros manuales y AEMET.",
      "Preparación de demo y documentación.",
      "Resolución de incidencias y conflictos de integración.",
    ],
    technologies: [
      { name: "Python", purpose: "Base del backend y servicios." },
      { name: "Flask", purpose: "Aplicación web." },
      { name: "FastAPI", purpose: "API REST." },
      { name: "AEMET OpenData", purpose: "Fuente meteorológica oficial." },
      { name: "JavaScript", purpose: "Interacciones de la interfaz." },
      { name: "Jinja2", purpose: "Plantillas de la aplicación Flask." },
      { name: "SQLite", purpose: "Persistencia local." },
      { name: "SQLAlchemy", purpose: "Modelo de datos y acceso a base." },
      { name: "Pydantic", purpose: "Validación de datos." },
      { name: "Pytest", purpose: "Pruebas automatizadas." },
    ],
    evidence: [
      caseImage("004", "004-01.webp", "Tiempo real y navegación", "Pantalla principal de ClimApp con datos de AEMET y opciones de acceso."),
      caseImage("004", "004-02.webp", "Registro de usuario", "Formulario de creación de cuenta de ClimApp."),
      caseImage("004", "004-03.webp", "Registro manual de datos climáticos", "Formulario autenticado para guardar observaciones meteorológicas."),
      caseImage("004", "004-04.webp", "Histórico de registros", "Histórico meteorológico con filtros por municipio y fecha."),
    ],
    conclusion: [
      "El trabajo se centró en que las piezas funcionasen como una plataforma integrada, no como módulos aislados.",
    ],
    quote: "Un proyecto no está terminado cuando cada pieza funciona por separado, sino cuando todas trabajan juntas.",
    stamp: {
      label: "Caso resuelto",
      result: "Plataforma meteorológica funcional conectada con AEMET, API REST y persistencia local.",
      skills: ["Flask", "FastAPI", "APIs externas", "SQLAlchemy", "Testing", "Integración", "Depuración", "Trabajo colaborativo"],
    },
    links: [{ label: "GitHub", url: "https://github.com/elenacarino-max/mas-climapp", type: "github" }],
  },
  {
    id: "005",
    slug: "mercado-laboral-datos",
    title: "EDA Roles de Datos en España",
    shortTitle: "Mercado Laboral",
    area: "Análisis exploratorio y visualización",
    classification: "Investigación del mercado laboral",
    status: "Análisis completado",
    nature: "collaborative",
    summary:
      "Análisis de ofertas laborales de roles de datos en España convertido en dataset unificado y herramienta interactiva.",
    mission:
      "Analizar ofertas laborales de roles de datos en España y convertir información heterogénea en un dataset unificado y una herramienta interactiva.",
    objective:
      "Estudiar el mercado profesional de datos en España a través de roles, salarios, tecnologías, seniority, modalidad, ubicación, sectores, calidad y sesgos.",
    investigation: [
      "Requisitos profesionales.",
      "Salarios.",
      "Tecnologías.",
      "Seniority.",
      "Modalidad.",
      "Sectores.",
      "Ubicación.",
      "Calidad de datos.",
      "Sesgos producidos por datos incompletos.",
    ],
    solution: [
      "Aplicación con Streamlit con KPIs y filtros interactivos.",
      "Paneles de mercado laboral por roles, ciudades y sectores.",
      "Ranking de skills y comparación de tecnologías usadas y deseadas.",
      "Relación entre demanda y salario, distribuciones salariales y recomendaciones de negocio.",
      "Panel de sesgos, panel de calidad de datos y versión experimental para comparar visualizaciones.",
    ],
    flow: [
      "Limpieza, normalización y eliminación de duplicados.",
      "Construcción de dataset unificado.",
      "Tratamiento de salarios, ubicaciones y textos.",
      "Tecnologías en formato largo.",
      "Análisis de roles, ubicación, seniority, modalidad, sectores, tecnologías y salarios.",
      "Desarrollo de Streamlit, pruebas de integración y preparación de presentación final.",
    ],
    contribution: [
      "Limpieza y normalización.",
      "Eliminación de duplicados.",
      "Dataset unificado.",
      "Tratamiento de salarios, ubicaciones y textos.",
      "Tecnologías en formato largo.",
      "Análisis de roles, ubicación, seniority, modalidad, sectores, tecnologías y salarios.",
      "Desarrollo de Streamlit con KPIs, filtros y paneles.",
      "Pruebas de integración, resolución de conflictos y reorganización de notebooks.",
      "Preparación de dependencias y presentación final.",
    ],
    technologies: [
      { name: "Python", purpose: "Análisis y aplicación." },
      { name: "Pandas", purpose: "Limpieza, normalización y dataset unificado." },
      { name: "NumPy", purpose: "Soporte numérico." },
      { name: "Matplotlib", purpose: "Visualizaciones exploratorias." },
      { name: "Seaborn", purpose: "Visualización estadística." },
      { name: "Plotly", purpose: "Gráficos interactivos." },
      { name: "Streamlit", purpose: "Aplicación interactiva." },
      { name: "SciPy", purpose: "Análisis estadístico." },
      { name: "Statsmodels", purpose: "Modelado y análisis estadístico." },
      { name: "Jupyter Notebook", purpose: "Exploración y documentación." },
    ],
    evidence: [
      caseImage("005", "005-01.webp", "Skills y tecnologías demandadas", "Panel de skills frecuentes y tecnologías de inteligencia artificial usadas."),
      caseImage("005", "005-02.webp", "Brecha entre tecnologías deseadas y usadas", "Comparación de demanda consolidada y tecnologías emergentes."),
      caseImage("005", "005-03.webp", "Distribución salarial y sesgos", "Histogramas y diagramas de caja de salarios por seniority."),
      caseImage("005", "005-04.webp", "Calidad, limpieza y trazabilidad", "Panel de valores nulos, correlaciones y comprobaciones de calidad de datos."),
      caseImage("005", "005-05.webp", "Recomendaciones de negocio", "Recomendaciones de reskilling, salarios, sesgos y tecnologías emergentes."),
    ],
    conclusion: [
      "El proyecto convierte información laboral heterogénea en una lectura organizada del mercado, incorporando también la calidad y los sesgos de los datos.",
    ],
    quote: "Antes de buscar respuestas en los datos, hay que asegurarse de que todos están hablando el mismo idioma.",
    stamp: {
      label: "Caso resuelto",
      result: "Dataset laboral unificado, análisis exploratorio y aplicación interactiva para estudiar el mercado profesional de datos en España.",
      skills: ["Data Cleaning", "EDA", "Estadística", "Visualización", "Streamlit", "Integración", "Trabajo colaborativo"],
    },
    links: [{ label: "GitHub", url: "https://github.com/elenacarino-max/proyecto-eda-roles-datos", type: "github" }],
  },
  {
    id: "000",
    slug: "el-origen",
    title: "El Origen",
    shortTitle: "El Origen",
    area: "Gestión de proyectos · Datos · Inteligencia Artificial",
    classification: "Trayectoria profesional",
    status: "En evolución",
    nature: "individual",
    summary:
      "Identidad profesional de Elena: experiencia previa en gestión y coordinación de proyectos trasladada al análisis de datos y la Inteligencia Artificial.",
    mission:
      "Explicar quién está detrás de los cinco casos sin crear un sobre mí convencional.",
    objective:
      "Mostrar una transición profesional que no parte de cero, sino de años de experiencia organizando, coordinando y llevando proyectos a resultados concretos.",
    investigation: [
      "Años de trabajo con plazos, prioridades, incidencias, documentación y equipos.",
      "Decisión de orientar la carrera hacia análisis de datos e Inteligencia Artificial.",
      "Aplicación de capacidades previas a nuevas herramientas técnicas.",
      "Evolución desde los primeros análisis hasta dashboards, aplicaciones, Machine Learning, APIs, despliegue y MLOps.",
      "Masterclass de MLflow como evidencia de pasar de aprender una herramienta a diseñar una experiencia y enseñarla a otras personas.",
    ],
    solution: [
      "Después de años trabajando en la gestión y coordinación de proyectos, decidí orientar mi carrera hacia el análisis de datos y la Inteligencia Artificial.",
      "Cambiaron las herramientas, pero no la forma de afrontar los problemas: entender qué ocurre, organizar la información, coordinar las piezas y conseguir que el resultado funcione.",
      "En tecnología he encontrado una nueva forma de aplicar esas capacidades: analizar información, desarrollar soluciones y transformar problemas complejos en procesos comprensibles.",
    ],
    flow: [
      "Entender el problema que estamos intentando resolver.",
      "Ordenar datos, recursos y restricciones.",
      "Dividir la solución en partes comprensibles.",
      "Desarrollar con la herramienta que tiene sentido utilizar.",
      "Comprobar que funciona cada pieza y funciona el conjunto.",
      "Explicar para que otra persona pueda entender y utilizar el resultado.",
      "Mejorar la siguiente versión.",
    ],
    contribution: [
      "Gestión de proyectos.",
      "Coordinación.",
      "Planificación.",
      "Resolución de incidencias.",
      "Comunicación.",
      "Responsabilidad sobre entregas.",
      "Integración de piezas.",
      "Trabajo con perfiles diferentes.",
    ],
    technologies: [
      { name: "Gestión de proyectos", purpose: "Organización, prioridades, entregas y coordinación." },
      { name: "Datos", purpose: "Análisis de información y construcción de criterios." },
      { name: "Business Intelligence", purpose: "Dashboards, indicadores y lectura estratégica." },
      { name: "Machine Learning", purpose: "Modelos predictivos y evaluación." },
      { name: "Desarrollo de aplicaciones", purpose: "Soluciones digitales que otras personas pueden usar." },
      { name: "MLOps", purpose: "Seguimiento de experimentos, despliegue y reproducibilidad." },
    ],
    evidence: [
      {
        label: "Cinco expedientes de proyectos.",
        href: `${import.meta.env.BASE_URL}#/archivo`,
        kind: "link",
      },
      {
        label: "Experiencia formativa y masterclass de MLflow.",
        href: `${import.meta.env.BASE_URL}#/expediente/biblioteca-jedi-mlflow`,
        kind: "link",
      },
      {
        label: "Repositorios profesionales.",
        href: "https://github.com/elenacarino-max",
        kind: "link",
      },
      {
        label: "CV profesional actualizado.",
        href: `${import.meta.env.BASE_URL}documents/cv-elena-de-vicente.pdf`,
        kind: "document",
      },
      {
        label: "Perfil profesional de LinkedIn.",
        href: "https://www.linkedin.com/in/elena-devicente/",
        kind: "link",
      },
    ],
    conclusion: [
      "Busco una oportunidad en la que pueda seguir creciendo dentro del análisis de datos, Business Intelligence, Machine Learning o el desarrollo de soluciones basadas en datos.",
      "Me interesa incorporarme a un equipo en el que pueda aportar organización, compromiso, capacidad para resolver problemas y una forma de trabajar orientada a que los proyectos no solo se desarrollen, sino que lleguen a funcionar.",
      "Cinco casos resueltos. Una trayectoria en evolución. El siguiente expediente todavía está por escribir.",
    ],
    quote: "Estoy empezando en tecnología, pero no estoy empezando a trabajar.",
    stamp: {
      label: "Identidad verificada",
      result: "Profesional con experiencia en gestión en transición hacia Datos e Inteligencia Artificial.",
      skills: ["Organización", "Aprendizaje", "Integración", "Resolución de problemas", "Comunicación", "Responsabilidad", "Visión de proyecto"],
    },
    links: [
      { label: "GitHub", url: "https://github.com/elenacarino-max", type: "github" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/elena-devicente/", type: "linkedin" },
      {
        label: "Descargar CV",
        url: `${import.meta.env.BASE_URL}documents/cv-elena-de-vicente.pdf`,
        type: "cv",
        status: "available",
      },
      { label: "Correo profesional", url: "mailto:elenacarino@gmail.com", type: "contact" },
    ],
    timeline: [
      "Gestión de proyectos",
      "Decisión de cambio",
      "Formación en datos e IA",
      "Primeros análisis",
      "Dashboards y aplicaciones",
      "Machine Learning",
      "APIs, despliegue y MLOps",
      "Masterclass de MLflow",
      "Nuevos proyectos",
    ],
    workMethod: [
      { title: "Entender", question: "¿Qué problema estamos intentando resolver?" },
      { title: "Ordenar", question: "¿Qué datos, recursos y restricciones tenemos?" },
      { title: "Dividir", question: "¿Qué partes forman la solución?" },
      { title: "Desarrollar", question: "¿Qué herramienta tiene sentido utilizar?" },
      { title: "Comprobar", question: "¿Funciona cada pieza y funciona el conjunto?" },
      { title: "Explicar", question: "¿Puede otra persona entender y utilizar el resultado?" },
      { title: "Mejorar", question: "¿Qué haría diferente en la siguiente versión?" },
    ],
    futureCase: {
      id: "006",
      status: "Pendiente de asignación",
      question: "¿Cuál es el próximo problema que merece convertirse en un caso?",
      cta: "Hablemos",
    },
  },
];

export const getCaseBySlug = (slug: string | undefined) =>
  cases.find((portfolioCase) => portfolioCase.slug === slug || portfolioCase.id === slug);

export const getNextCase = (currentId: string) => {
  const currentIndex = cases.findIndex((portfolioCase) => portfolioCase.id === currentId);
  if (currentIndex < 0) {
    return cases[0];
  }

  return cases[(currentIndex + 1) % cases.length];
};
