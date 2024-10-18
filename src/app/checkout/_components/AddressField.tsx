import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type AddressFieldProps<T extends FieldValues> = {
  addressType: string | null;
  options: string[];
} & UseControllerProps<T>;

const AddressField = <T extends FieldValues>({
  addressType,
  options,
  ...props
}: AddressFieldProps<T>) => {
  //adjust component in production, fetch particular delivery addresses
  const { field, fieldState } = useController(props);

  if (addressType == null) return null;

  return (
    <>
      {addressType == "select" ? (
        <Select
          value={field.value}
          onValueChange={(value) => field.onChange(value)}
        >
          <SelectTrigger className="w-full rounded-sm">
            <SelectValue placeholder="Оберіть адресу" onBlur={field.onBlur} />
          </SelectTrigger>
          <SelectContent className="max-h-56 w-min ">
            {options.map((item, index) => (
              <SelectItem className="w-full" key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Input
          className="rounded-sm w-full"
          placeholder="Куди доставити?"
          {...field}
        />
      )}
      {fieldState.error?.message && (
        <p className="text-xs text-semibold text-red-600 mt-1 ml-2">
          {fieldState.error?.message}
        </p>
      )}
    </>
  );
};

export default AddressField;
