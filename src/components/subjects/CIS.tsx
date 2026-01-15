import { useNavigate } from "react-router-dom";
import { SubjectCard } from "./SubjectCard";

export function CIS() {
  const navigate = useNavigate();

  return (
    <SubjectCard
      name="CIS"
      code="[6CS4-03]"
      url="/"
      onViewClick={() => navigate("/cis")}
    >
      <p className="text-sm text-muted-foreground">
        Click View to access notes and previous year papers.
      </p>
    </SubjectCard>
  );
}
