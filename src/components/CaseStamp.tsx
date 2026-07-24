import { CaseStamp as CaseStampType } from "../data/cases";

interface CaseStampProps {
  stamp: CaseStampType;
}

export default function CaseStamp({ stamp }: CaseStampProps) {
  return (
    <aside className="case-stamp" aria-label={stamp.label ?? "Sello del expediente"}>
      <strong>{stamp.label ?? "Caso resuelto"}</strong>
      <p>{stamp.result}</p>
      <ul>
        {stamp.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </aside>
  );
}
