import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  width: string;
  name: string;
  label: string;
  type: "text" | "password" | "number";
  vertical?: boolean;
}
