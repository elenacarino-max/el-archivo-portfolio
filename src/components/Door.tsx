import { Link } from "react-router-dom";
import { PortfolioCase, natureLabels } from "../data/cases";

interface DoorProps {
  portfolioCase: PortfolioCase;
  index: number;
}

export default function Door({ portfolioCase, index }: DoorProps) {
  const side = index % 2 === 0 ? "left" : "right";
  const isOrigin = portfolioCase.id === "000";

  return (
    <Link
      className={`door-link door-link--${side} door-link--slot-${index + 1}${isOrigin ? " door-link--origin" : ""}`}
      to={`/expediente/${portfolioCase.slug}`}
      aria-label={`Abrir expediente ${portfolioCase.id}: ${portfolioCase.title}`}
    >
      <article className="door-panel">
        <div className="door-plate">
          <span>Expediente {portfolioCase.id}</span>
          <strong>{portfolioCase.shortTitle}</strong>
        </div>
        <div className="door-meta">
          <span>{portfolioCase.area}</span>
          <span>{portfolioCase.status}</span>
          <span>{natureLabels[portfolioCase.nature]}</span>
        </div>
        <p>{portfolioCase.summary}</p>
      </article>
    </Link>
  );
}
