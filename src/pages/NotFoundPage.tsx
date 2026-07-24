import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <p className="archive-label">Registro no localizado</p>
      <h1 id="not-found-title">Expediente no encontrado</h1>
      <p>La puerta consultada no tiene expediente asignado en esta versión del archivo.</p>
      <Link className="primary-action primary-action--compact" to="/archivo">
        Volver al pasillo
      </Link>
    </section>
  );
}
