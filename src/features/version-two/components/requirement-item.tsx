import { cn } from "@/lib/utils";
import { RequirementType } from "../types";

type Props = {
  requirement: RequirementType;
};
export const RequirementItem = ({ requirement }: Props) => {
  return (
    <li
      className={cn(
        "flex items-center gap-2 text-sm",
        requirement.met ? "text-green-600" : "text-gray-500"
      )}
    >
      {requirement.met ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}{" "}
      {requirement.label}
    </li>
  );
};
