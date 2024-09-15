import { CheckoutFormParams } from "@/models/formParams";
import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import Field from "./ui/Field";
import { requiredValidation } from "@/utils/formValidations";

import { cities, deliveryMethods } from "@/data/deliveryData";
import SelectField from "./ui/SelectField";

type CheckoutFormDeliveryProps = {
  register: UseFormRegister<CheckoutFormParams>;
  errors: FieldErrors<CheckoutFormParams>;
  control: Control<CheckoutFormParams, any>;
};

const CheckoutFormDelivery = ({
  register,
  control,
  errors,
}: CheckoutFormDeliveryProps) => {
  return (
    <div className="space-y-3">
      <h2 className="font-title text-third text-lg mb-4">
        Оберіть місто і спосіб доставки
      </h2>
      <SelectField<CheckoutFormParams>
        name="city"
        control={control}
        rules={requiredValidation}
        placeholder="Оберіть місто"
        options={cities}
      />
      <SelectField<CheckoutFormParams>
        name="delivery"
        control={control}
        rules={requiredValidation}
        placeholder="Оберіть спосіб доставки"
        options={deliveryMethods}
      />
      <Field
        className="rounded-sm"
        error={errors.address?.message}
        {...register("address", requiredValidation)}
        placeholder="Куди доставити?"
      />
    </div>
  );
};

export default CheckoutFormDelivery;
