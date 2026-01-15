import { useNavigate } from "react-router-dom";
import { SubjectCard } from "./SubjectCard";

export function DeepLearning() {
  const navigate = useNavigate();

  return (
    <SubjectCard
      name="Deep Learning"
      code="[6CS4-02]"
      url="/"
      onViewClick={() => navigate("/deep-learning")}
    >
      <p className="text-sm text-muted-foreground">
        Click View to access notes and previous year papers.
      </p>
    </SubjectCard>
  );
}
