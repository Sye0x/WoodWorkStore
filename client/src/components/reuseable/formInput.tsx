import type {
  FieldValues,
  Path,
  UseFormRegister,
  Control,
  FieldErrors,
} from "react-hook-form";

import { Controller } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  inputType: "text" | "email" | "switch" | "checkbox" | "textarea";
  label: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
  required?: boolean;
}

const inputStyles =
  "h-12 rounded-xl border-[#E8E2DA] bg-[#FCFBF9] px-4 text-sm text-[#30251E] shadow-none placeholder:text-[#B6ADA4] transition-all focus-visible:border-[#A87952] focus-visible:ring-2 focus-visible:ring-[#A87952]/15 focus-visible:ring-offset-0";

const textareaStyles =
  "min-h-28 rounded-xl border-[#E8E2DA] bg-[#FCFBF9] px-4 py-3 text-sm text-[#30251E] shadow-none placeholder:text-[#B6ADA4] transition-all focus-visible:border-[#A87952] focus-visible:ring-2 focus-visible:ring-[#A87952]/15 focus-visible:ring-offset-0";

export default function FormInput<T extends FieldValues>({
  name,
  inputType,
  label,
  placeholder,
  register,
  control,
  errors,
  required = false,
}: FormInputProps<T>) {
  const error = errors[name];
  const hasError = !!error;

  return (
    <div className="space-y-2.5">
      <Label htmlFor={name} className="text-sm font-semibold text-[#40352D]">
        {label}
        {required && <span className="ml-1 text-[#A65B43]">*</span>}
      </Label>

      {inputType === "switch" || inputType === "checkbox" ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            if (inputType === "switch") {
              return (
                <div className="flex items-center justify-between rounded-xl border border-[#E8E2DA] bg-[#FCFBF9] px-4 py-3">
                  <span className="text-sm text-[#756B62]">
                    {placeholder || label}
                  </span>

                  <Switch
                    id={name}
                    checked={field.value ?? false}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-[#805637]"
                  />
                </div>
              );
            }

            return (
              <div className="flex items-center gap-3 rounded-xl border border-[#E8E2DA] bg-[#FCFBF9] px-4 py-3">
                <Checkbox
                  id={name}
                  checked={field.value ?? false}
                  onCheckedChange={field.onChange}
                  className="border-[#C9B7A5] data-[state=checked]:border-[#805637] data-[state=checked]:bg-[#805637]"
                />

                <Label
                  htmlFor={name}
                  className="cursor-pointer text-sm font-normal text-[#756B62]"
                >
                  {placeholder || label}
                </Label>
              </div>
            );
          }}
        />
      ) : inputType === "textarea" ? (
        <Textarea
          id={name}
          placeholder={placeholder}
          {...register(name)}
          className={`${textareaStyles} ${
            hasError
              ? "border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/15"
              : ""
          }`}
        />
      ) : (
        <Input
          id={name}
          type={inputType}
          placeholder={placeholder}
          {...register(name)}
          className={`${inputStyles} ${
            hasError
              ? "border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/15"
              : ""
          }`}
        />
      )}

      {hasError && (
        <p className="flex items-center gap-1.5 text-xs font-medium text-red-500">
          <span className="size-1 rounded-full bg-red-500" />
          {String(error?.message)}
        </p>
      )}
    </div>
  );
}
