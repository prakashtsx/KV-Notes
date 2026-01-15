import { useNavigate } from "react-router-dom";
import { SubjectCard } from "./SubjectCard";

export function DataScience() {
  const navigate = useNavigate();

  return (
    <SubjectCard
      name="Data Science"
      code="[6CS4-01]"
      url="/"
      onViewClick={() => navigate("/data-science")}
    >
      <p className="text-sm text-muted-foreground">
        Click View to access notes and previous year papers.
      </p>
    </SubjectCard>
  );
}
