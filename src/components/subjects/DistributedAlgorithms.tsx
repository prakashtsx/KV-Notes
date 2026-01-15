import { useNavigate } from "react-router-dom";
import { SubjectCard } from "./SubjectCard";

export function DistributedAlgorithms() {
  const navigate = useNavigate();

  return (
    <SubjectCard
      name="Distributed Algo"
      code="[6CS4-05]"
      url="/"
      onViewClick={() => navigate("/distributed-algorithms")}
    >
      <p className="text-sm text-muted-foreground">
        Click View to access notes and previous year papers.
      </p>
    </SubjectCard>
  );
}
