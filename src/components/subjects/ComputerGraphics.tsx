import { useNavigate } from "react-router-dom";
import { SubjectCard } from "./SubjectCard";

export function ComputerGraphics() {
  const navigate = useNavigate();

  return (
    <SubjectCard
      name="Computer Graphics"
      code="[6CS4-04]"
      url="/"
      onViewClick={() => navigate("/computer-graphics")}
    >
      <p className="text-sm text-muted-foreground">
        Click View to access notes and previous year papers.
      </p>
    </SubjectCard>
  );
}
