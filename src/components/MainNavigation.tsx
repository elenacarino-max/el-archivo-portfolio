import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header className="site-header">
      <NavLink className="brand-mark" to="/" aria-label="Volver a la portada de El Archivo">
        <span aria-hidden="true" className="brand-icon" />
        <span>EL ARCHIVO</span>
      </NavLink>
      <nav className="main-nav" aria-label="Navegación principal">
        <NavLink to="/" end>
          Portada
        </NavLink>
        <NavLink to="/archivo">Pasillo</NavLink>
      </nav>
    </header>
  );
}
