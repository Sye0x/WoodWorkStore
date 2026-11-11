import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import type {
  FieldValues,
  Path,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PasswordInputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  required?: boolean;
}

export default function PasswordInput<T extends FieldValues>({
  name,
  label,
  placeholder,
  register,
  errors,
  required = false,
}: PasswordInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  const error = errors[name];
  const hasError = !!error;

  return (
    <div className="space-y-2.5">
      <Label htmlFor={name} className="text-sm font-semibold text-[#40352D]">
        {label}
        {required && <span className="ml-1 text-[#A65B43]">*</span>}
      </Label>

      <div className="relative">
        <Input
          id={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register(name)}
          className={`h-12 rounded-xl border-[#E8E2DA] bg-[#FCFBF9] px-4 pr-12 text-sm text-[#30251E] shadow-none placeholder:text-[#B6ADA4] transition-all focus-visible:border-[#A87952] focus-visible:ring-2 focus-visible:ring-[#A87952]/15 focus-visible:ring-offset-0 ${
            hasError
              ? "border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/15"
              : ""
          }`}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A79A8D] hover:text-[#30251E] transition-colors"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {hasError && (
        <p className="flex items-center gap-1.5 text-xs font-medium text-red-500">
          <span className="size-1 rounded-full bg-red-500" />
          {String(error?.message)}
        </p>
      )}
    </div>
  );
}
