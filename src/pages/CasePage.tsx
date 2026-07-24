import { motion, useReducedMotion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import CaseHeader from "../components/CaseHeader";
import CaseStamp from "../components/CaseStamp";
import EvidenceCard from "../components/EvidenceCard";
import TechnologyTag from "../components/TechnologyTag";
import { CaseLink, getCaseBySlug, getNextCase } from "../data/cases";
import NotFoundPage from "./NotFoundPage";

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="case-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
function TextList({ items }: { items: string[] }) {
  return (
    <ul className="document-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ExternalLink({ link }: { link: CaseLink }) {
  if (!link.url || link.status === "pending") {
    return (
      <span className="case-link case-link--disabled" aria-disabled="true">
        {link.label} · Próximamente
      </span>
    );
  }

  return (
    <a className="case-link" href={link.url} target="_blank" rel="noreferrer noopener">
      {link.label}
      <span className="sr-only"> abre en una pestaña nueva</span>
    </a>
  );
}

export default function CasePage() {
  const { id } = useParams();
  const portfolioCase = getCaseBySlug(id);
  const reduceMotion = useReducedMotion();

  if (!portfolioCase) {
    return <NotFoundPage />;
  }

  const nextCase = getNextCase(portfolioCase.id);
  const contactLink = portfolioCase.links.find((link) => link.type === "contact") ?? portfolioCase.links[0];

  return (
    <motion.article
      className={`case-page case-page--${portfolioCase.id}`}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <CaseHeader portfolioCase={portfolioCase} />

      {portfolioCase.note && <p className="case-note">{portfolioCase.note}</p>}

      <CaseSection title="Misión">
        <p>{portfolioCase.mission}</p>
      </CaseSection>

      <CaseSection title="Objetivo">
        <p>{portfolioCase.objective}</p>
      </CaseSection>

      <CaseSection title="Investigación y datos utilizados">
        <TextList items={portfolioCase.investigation} />
      </CaseSection>

      <CaseSection title="Solución desarrollada">
        <TextList items={portfolioCase.solution} />
      </CaseSection>

      <CaseSection title="Flujo del sistema o del análisis">
        <ol className="document-list document-list--ordered">
          {portfolioCase.flow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </CaseSection>

      <CaseSection title="Aportación personal">
        <TextList items={portfolioCase.contribution} />
      </CaseSection>

      <CaseSection title="Tecnologías y función">
        <ul className="technology-list">
          {portfolioCase.technologies.map((technology) => (
            <TechnologyTag key={technology.name} technology={technology} />
          ))}
        </ul>
      </CaseSection>

      {portfolioCase.timeline && (
        <CaseSection title="Línea temporal">
          <ol className="timeline-list">
            {portfolioCase.timeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </CaseSection>
      )}

      {portfolioCase.workMethod && (
        <CaseSection title="Cómo trabajo">
          <ol className="method-list">
            {portfolioCase.workMethod.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <span>{step.question}</span>
              </li>
            ))}
          </ol>
        </CaseSection>
      )}

      <CaseSection title="Evidencias">
        <div className="evidence-grid">
          {portfolioCase.evidence.map((item, index) => (
            <EvidenceCard
              key={typeof item === "string" ? item : item.label}
              evidence={item}
              index={index}
            />
          ))}
        </div>
      </CaseSection>

      <CaseSection title="Enlaces">
        <div className="case-links" aria-label="Enlaces del expediente">
          {portfolioCase.links.map((link) => (
            <ExternalLink key={`${link.type}-${link.label}`} link={link} />
          ))}
        </div>
      </CaseSection>

      <CaseSection title="Conclusión">
        {portfolioCase.conclusion.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <blockquote>{portfolioCase.quote}</blockquote>
      </CaseSection>

      {portfolioCase.futureCase && (
        <aside className="future-folder" aria-labelledby="future-title">
          <p id="future-title">Expediente {portfolioCase.futureCase.id}</p>
          <strong>{portfolioCase.futureCase.status}</strong>
          <span>{portfolioCase.futureCase.question}</span>
          <ExternalLink link={{ ...contactLink, label: portfolioCase.futureCase.cta }} />
        </aside>
      )}

      <CaseStamp stamp={portfolioCase.stamp} />

      <nav className="case-navigation" aria-label="Navegación entre expedientes">
        <Link className="secondary-action" to="/archivo">
          Volver al pasillo
        </Link>
        <Link className="primary-action primary-action--compact" to={`/expediente/${nextCase.slug}`}>
          Abrir expediente {nextCase.id}
        </Link>
      </nav>
    </motion.article>
  );
}
