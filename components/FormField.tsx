import React from "react";
import { Input } from "@/components/ui/input";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
// Controller: A component to wrap input fields that aren't natively supported by React Hook Form.
// FieldValues: A generic type representing all fields in the form.
// Control: A type representing the control object returned by useForm() ——used to connect the field to the form.
// Path: A helper type that ensures the name matches a key from your form data.
import { Controller, FieldValues, Control, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file";
}

// A reusable generic functional component that integrates with React Hook Form to create form fields.
const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => (
  // This wraps your input with Controller, which allows React Hook Form to manage custom components.
  <Controller
    // control is the central piece that manages the internal state of the form fields — it keeps track of:
    // The values of each field, the validation state, whether the field is touched, dirty, etc.
    // But — it's required only when you use Controller
    control={control}
    // name is the name of the input (e.g., email, password).
    name={name}
    // render is a function that provides field props (onChange, value, etc.) needed to link your input to the form.
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input
            className="input"
            placeholder={placeholder}
            type={type}
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
