import { Control } from "react-hook-form";

import AddressField from "./AddressField";

import { CheckoutFormParams } from "@/types/formParams";

import SelectField from "@/components/ui/SelectField";
import { cities, deliveryMethods, npPostPoints } from "@/data/deliveryData";
import { requiredValidation } from "@/utils/formValidations";

type CheckoutFormDeliveryProps = {
  control: Control<CheckoutFormParams, any>;
  addressType: string | null;
};

const CheckoutFormDelivery = ({
  control,
  addressType,
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

      <AddressField
        name="address"
        control={control}
        rules={requiredValidation}
        addressType={addressType}
        options={npPostPoints}
      />
    </div>
  );
};

export default CheckoutFormDelivery;
