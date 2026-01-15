import { useNavigate } from "react-router-dom";
import { SubjectCard } from "./SubjectCard";

export function CloudComputing() {
  const navigate = useNavigate();

  return (
    <SubjectCard
      name="Cloud Computing"
      code="[6CS4-11]"
      url="/"
      onViewClick={() => navigate("/cloud-computing")}
    >
      <p className="text-sm text-muted-foreground">
        Click View to access notes and previous year papers.
      </p>
    </SubjectCard>
  );
}
