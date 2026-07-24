import { CaseTechnology } from "../data/cases";

interface TechnologyTagProps {
  technology: CaseTechnology;
}

export default function TechnologyTag({ technology }: TechnologyTagProps) {
  return (
    <li className="technology-tag">
      <strong>{technology.name}</strong>
      <span>{technology.purpose}</span>
    </li>
  );
}
