import { PasswordChecker } from "./components/password-checker";

export const VersionTwo = () => {
  return (
    <div className="p-8">
      <h1 className="mb-6 text-lg font-bold">Password Strength V2</h1>
      <PasswordChecker />
    </div>
  );
};
