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
} from "./ui/select";

type AddressFieldProps<T extends FieldValues> = {
  placeholder: string;
  options: string[];
} & UseControllerProps<T>;

const AddressField = <T extends FieldValues>({
  placeholder,
  options,
  ...props
}: AddressFieldProps<T>) => {
  const { field, fieldState, formState } = useController(props);
  // const deliveryType = formState.
  //think up how to get delivery from form;
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

export default AddressField;
