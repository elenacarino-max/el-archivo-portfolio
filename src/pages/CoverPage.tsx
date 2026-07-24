import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

export default function CoverPage() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="cover-page" aria-labelledby="cover-title">
      <motion.div
        className="cover-content"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <p className="archive-label">Portfolio profesional</p>
        <h1 id="cover-title">EL ARCHIVO</h1>
        <p className="cover-manifesto">No empecé de cero. Empecé de nuevo.</p>
        <p className="cover-question">
          ¿Qué ocurre cuando una persona con años dirigiendo proyectos decide empezar de cero en Inteligencia Artificial?
        </p>
        <p className="cover-subtitle">Casos reales · Datos · Machine Learning · Soluciones digitales</p>
        <Link className="primary-action" to="/archivo">
          Abrir el archivo
        </Link>
      </motion.div>
      <div className="cover-door" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
