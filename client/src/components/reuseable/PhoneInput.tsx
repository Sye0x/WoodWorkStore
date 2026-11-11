import type {
  FieldValues,
  Path,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PhoneInputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  required?: boolean;
}

export default function PhoneInput<T extends FieldValues>({
  name,
  label,
  placeholder = "300 1234567",
  register,
  errors,
  required = false,
}: PhoneInputProps<T>) {
  const error = errors[name];
  const hasError = !!error;

  return (
    <div className="space-y-2.5">
      <Label htmlFor={name} className="text-sm font-semibold text-[#40352D]">
        {label}
        {required && <span className="ml-1 text-[#A65B43]">*</span>}
      </Label>

      <div
        className={`flex h-12 items-center rounded-xl border bg-[#FCFBF9] transition-all focus-within:border-[#A87952] focus-within:ring-2 focus-within:ring-[#A87952]/15 ${
          hasError
            ? "border-red-400 focus-within:border-red-400 focus-within:ring-red-400/15"
            : "border-[#E8E2DA]"
        }`}
      >
        {/* Pakistan Country Code */}
        <div className="flex h-full items-center gap-2 border-r border-[#E8E2DA] px-3 shrink-0">
          <span className="text-lg" role="img" aria-label="Pakistan flag">
            🇵🇰
          </span>

          <span className="text-sm font-semibold text-[#40352D]">+92</span>
        </div>

        {/* Phone Number */}
        <Input
          id={name}
          type="tel"
          placeholder={placeholder}
          {...register(name)}
          className="h-full border-0 bg-transparent px-3 text-sm text-[#30251E] shadow-none placeholder:text-[#B6ADA4] focus-visible:ring-0 focus-visible:ring-offset-0"
          maxLength={10}
        />
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
