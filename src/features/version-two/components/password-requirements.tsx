import {
  hasMinimumLength,
  hasMixedCases,
  hasNumbers,
  hasSpecialCharecters,
} from "../utils";
import { RequirementType } from "../types";
import { RequirementItem } from "./requirement-item";

type Props = {
  password: string;
};
export const PasswordRequirements = ({ password }: Props) => {
  const requirements: RequirementType[] = [
    {
      label: "At least 8 charecters",
      met: hasMinimumLength(password),
    },
    {
      label: "Contains numbers",
      met: hasNumbers(password),
    },
    {
      label: "Contains special charecters",
      met: hasSpecialCharecters(password),
    },
    {
      label: "Contains uppercase & lowercase",
      met: hasMixedCases(password),
    },
  ];

  return (
    <ul className="mt-4 space-y-1">
      {requirements.map((item, index) => {
        return <RequirementItem key={index} requirement={item} />;
      })}
    </ul>
  );
};
