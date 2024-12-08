"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const VersionOne = () => {
  const [password, setPassword] = useState<string>("");
  return (
    <div className="p-8">
      <h1 className="mb-6 text-lg font-bold">Password Strength V1</h1>
      <div className="max-w-md">
        <Input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-2">
          <div className="h-1 w-full rounded bg-gray-200">
            <div
              className={cn(
                "h-full rounded transition-all duration-300",
                password.length >= 8 &&
                  /[A-Z]/.test(password) &&
                  /[a-z]/.test(password) &&
                  /[!@#$%^&*(),.?":{}|<>]/g.test(password) &&
                  /\d/.test(password)
                  ? "w-full bg-green-500"
                  : password.length >= 8 &&
                    (/[A-Z]/.test(password) ||
                      /[a-z]/.test(password) ||
                      /\d/.test(password))
                  ? "w-2/3 bg-yellow-500"
                  : "w-1/3 bg-red-500"
              )}
            ></div>
          </div>
          <p className="mt-1 text-sm capitalize">
            {password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[!@#$%^&*(),.?":{}|<>]/g.test(password) &&
            /\d/.test(password)
              ? "Strong"
              : password.length >= 8 &&
                (/[A-Z]/.test(password) ||
                  /[a-z]/.test(password) ||
                  /\d/.test(password))
              ? "Medium"
              : "Weak"}{" "}
            password
          </p>
        </div>
        <ul className="mt-4 space-y-1">
          <li
            className={cn(
              "flex items-center gap-2 text-sm",
              password.length >= 8 ? "text-green-600" : "text-gray-500"
            )}
          >
            {password.length >= 8 ? (
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
            At least 8 charecters
          </li>
          <li
            className={cn(
              "flex items-center gap-2 text-sm",
              /\d/.test(password) ? "text-green-600" : "text-gray-500"
            )}
          >
            {/\d/.test(password) ? (
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
            Contains numbers
          </li>
          <li
            className={cn(
              "flex items-center gap-2 text-sm",
              /[!@#$%^&*(),.?":{}|<>]/g.test(password)
                ? "text-green-600"
                : "text-gray-500"
            )}
          >
            {/[!@#$%^&*(),.?":{}|<>]/g.test(password) ? (
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
            Contains special charecters
          </li>
          <li
            className={cn(
              "flex items-center gap-2 text-sm",
              /[A-Z]/.test(password) && /[a-z]/.test(password)
                ? "text-green-600"
                : "text-gray-500"
            )}
          >
            {/[A-Z]/.test(password) && /[a-z]/.test(password) ? (
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
            Contains uppercase & lowercase
          </li>
        </ul>
      </div>
    </div>
  );
};
