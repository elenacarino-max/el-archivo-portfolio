import { CaseEvidence } from "../data/cases";

interface EvidenceCardProps {
  evidence: string | CaseEvidence;
  index: number;
}

function EvidenceVisual({ evidence, index }: { evidence: CaseEvidence; index: number }) {
  if (evidence.image) {
    const imageUrl = `${import.meta.env.BASE_URL}${evidence.image.replace(/^\/+/, "")}`;
    const image = (
      <img
        className="evidence-image"
        src={imageUrl}
        alt={evidence.alt ?? evidence.label}
        loading="lazy"
      />
    );

    return evidence.href ? (
      <a
        className="evidence-media-link"
        href={evidence.href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${evidence.label} · abrir evidencia en una pestaña nueva`}
      >
        {image}
      </a>
    ) : (
      image
    );
  }

  if (evidence.href) {
    return (
      <a
        className="evidence-placeholder evidence-placeholder--available"
        href={evidence.href}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span>Evidencia {String(index + 1).padStart(2, "0")}</span>
        <strong>{evidence.kind === "document" ? "ABRIR DOCUMENTO" : "ABRIR EVIDENCIA"}</strong>
      </a>
    );
  }

  return (
    <div className="evidence-placeholder" role="img" aria-label={`${evidence.label}: evidencia pendiente de incorporar`}>
      <span>Evidencia {String(index + 1).padStart(2, "0")}</span>
      <strong>EVIDENCIA PENDIENTE DE INCORPORAR</strong>
    </div>
  );
}

export default function EvidenceCard({ evidence, index }: EvidenceCardProps) {
  const normalizedEvidence: CaseEvidence =
    typeof evidence === "string" ? { label: evidence } : evidence;

  return (
    <figure className="evidence-card">
      <EvidenceVisual evidence={normalizedEvidence} index={index} />
      <figcaption>{normalizedEvidence.label}</figcaption>
    </figure>
  );
}
