import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

type SelectFieldProps<T extends FieldValues> = {
  placeholder: string;
  options: string[];
} & UseControllerProps<T>;

const SelectField = <T extends FieldValues>({
  placeholder,
  options,
  ...props
}: SelectFieldProps<T>) => {
  const { field, fieldState } = useController(props);
  return (
    <div>
      <Select
        value={field.value}
        onValueChange={(value) => field.onChange(value)}
      >
        <SelectTrigger className="w-full rounded-sm">
          <SelectValue placeholder={placeholder} onBlur={field.onBlur} />
        </SelectTrigger>
        <SelectContent className="max-h-56">
          {options.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {fieldState.error?.message && (
        <p className="text-xs text-semibold text-red-600 mt-1 ml-2">
          {fieldState.error?.message}
        </p>
      )}
    </div>
  );
};

export default SelectField;
