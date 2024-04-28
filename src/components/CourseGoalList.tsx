import { type ReactNode } from "react";
import { type CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

interface CourseGoalProps {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some.
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4 && goals.length < 6) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        You're collecting a lot of goals. Don't put too much on your plate
      </InfoBox>
    );
  } else if (goals.length >= 6 && goals.length < 8) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate
      </InfoBox>
    );
  } else if (goals.length >= 8) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal
                title={goal.title}
                id={goal.id}
                onDelete={onDeleteGoal}
              >
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </>
  );
}
