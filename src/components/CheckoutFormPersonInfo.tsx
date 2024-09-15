import { CheckoutFormParams } from "@/models/formParams";
import Field from "./ui/Field";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import {
  emailValidation,
  phoneValidation,
  requiredValidation,
} from "@/utils/formValidations";
import PhoneField from "./ui/PhoneField";

type CheckoutFormPersonInfoProps = {
  register: UseFormRegister<CheckoutFormParams>;
  errors: FieldErrors<CheckoutFormParams>;
  control: Control<CheckoutFormParams, any>;
};

const CheckoutFormPersonInfo = ({
  register,
  control,
  errors,
}: CheckoutFormPersonInfoProps) => {
  return (
    <div className="space-y-3">
      <h2 className="font-title text-third text-lg mb-4">Особисті дані</h2>
      <Field
        className="rounded-sm"
        error={errors.fullname?.message}
        {...register("fullname", requiredValidation)}
        placeholder="Ім'я та Прізвище"
      />
      <Controller
        name="phone"
        control={control}
        rules={phoneValidation}
        render={({ field, formState }) => (
          <PhoneField
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={formState.errors.phone?.message}
          />
        )}
      />

      <Field
        className="rounded-sm"
        error={errors.email?.message}
        {...register("email", emailValidation)}
        placeholder="Електрона адреса"
      />
    </div>
  );
};

export default CheckoutFormPersonInfo;
