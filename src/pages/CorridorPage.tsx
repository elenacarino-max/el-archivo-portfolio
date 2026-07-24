import { motion, useReducedMotion } from "motion/react";
import Door from "../components/Door";
import { cases } from "../data/cases";

export default function CorridorPage() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="corridor-page" aria-labelledby="corridor-title">
      <header className="section-intro">
        <p className="archive-label">Pasillo principal</p>
        <h1 id="corridor-title">Seis puertas. Cinco casos resueltos. Un origen.</h1>
        <p>
          Cada puerta abre un expediente profesional: problema, investigación, solución, aportación y evidencias.
        </p>
      </header>
      <motion.div
        className="corridor"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div className="corridor-light" aria-hidden="true" />
        <div className="door-grid" aria-label="Expedientes disponibles">
          {cases.map((portfolioCase, index) => (
            <Door key={portfolioCase.id} portfolioCase={portfolioCase} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
