import {
  hasMinimumLength,
  hasMixedCases,
  hasNumbers,
  hasSpecialCharecters,
} from "./utils";

export type PasswordStrength = "weak" | "medium" | "strong";

export function calculatePasswordStrength(password: string): PasswordStrength {
  const checks = [
    hasMinimumLength(password),
    hasNumbers(password),
    hasSpecialCharecters(password),
    hasMixedCases(password),
  ];

  const passedChecks = checks.filter(Boolean).length;

  if (passedChecks <= 1) return "weak";
  if (passedChecks <= 3) return "medium";
  return "strong";
}
