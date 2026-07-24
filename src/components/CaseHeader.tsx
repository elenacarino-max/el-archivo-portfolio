import { PortfolioCase, natureLabels } from "../data/cases";

interface CaseHeaderProps {
  portfolioCase: PortfolioCase;
}

export default function CaseHeader({ portfolioCase }: CaseHeaderProps) {
  return (
    <header className="case-header">
      <p className="case-kicker">Expediente {portfolioCase.id}</p>
      <h1>{portfolioCase.title}</h1>
      <p className="case-summary">{portfolioCase.summary}</p>
      <dl className="case-id-grid" aria-label="Placa de identificación">
        <div>
          <dt>Área</dt>
          <dd>{portfolioCase.area}</dd>
        </div>
        <div>
          <dt>Clasificación</dt>
          <dd>{portfolioCase.classification}</dd>
        </div>
        <div>
          <dt>Estado</dt>
          <dd>{portfolioCase.status}</dd>
        </div>
        <div>
          <dt>Naturaleza</dt>
          <dd>{natureLabels[portfolioCase.nature]}</dd>
        </div>
      </dl>
    </header>
  );
}
