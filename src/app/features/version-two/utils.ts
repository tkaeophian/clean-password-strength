export function hasMinimumLength(password: string): boolean {
  return password.length >= 8;
}

export function hasNumbers(password: string): boolean {
  return /\d/.test(password);
}

export function hasSpecialCharecters(password: string): boolean {
  return /[!@#$%^&*(),.?":{}|<>]/g.test(password);
}

export function hasMixedCases(password: string): boolean {
  return /[A-Z]/.test(password) && /[a-z]/.test(password);
}
