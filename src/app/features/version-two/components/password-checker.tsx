"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { StrengthIndicator } from "./strength-indicator";
import { PasswordRequirements } from "./password-requirements";
import { calculatePasswordStrength } from "../calculate-password-strength";

type Props = {};
export const PasswordChecker = ({}: Props) => {
  const [password, setPassword] = useState<string>("");
  const strength = calculatePasswordStrength(password);
  return (
    <div className="max-w-md">
      <Input
        type="password"
        placeholder="******"
        onChange={(e) => setPassword(e.target.value)}
      />
      <StrengthIndicator strength={strength} />
      <PasswordRequirements password={password} />
    </div>
  );
};
