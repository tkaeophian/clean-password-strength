import { cn } from "@/lib/utils";
import { PasswordStrength } from "../calculate-password-strength";

type Props = {
  strength: PasswordStrength;
};
export const StrengthIndicator = ({ strength }: Props) => {
  const colors = {
    weak: "w-1/3 bg-red-500",
    medium: "w-2/3 bg-yellow-500",
    strong: "w-full bg-green-500",
  };
  return (
    <div className="mt-2">
      <div className="h-1 w-full rounded bg-gray-200">
        <div
          className={cn(
            "h-full rounded transition-all duration-300",
            colors[strength]
          )}
        ></div>
      </div>
      <p className="mt-1 text-sm capitalize">{strength} password</p>
    </div>
  );
};
