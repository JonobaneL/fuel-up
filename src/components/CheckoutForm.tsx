"use client";
import { useForm } from "react-hook-form";
import { CheckoutFormParams } from "@/models/formParams";
import CheckoutFormPersonInfo from "./CheckoutFormPersonInfo";
import { Button } from "./ui/button";
import CheckoutFormDelivery from "./CheckoutFormDelivery";
import Link from "next/link";

const CheckoutForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormParams>();
  const onSubmit = (data: CheckoutFormParams) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <CheckoutFormPersonInfo
          register={register}
          control={control}
          errors={errors}
        />
        <CheckoutFormDelivery
          register={register}
          errors={errors}
          control={control}
        />
        <div>
          <Button className="text-white rounded-none w-full h-10" type="submit">
            Підтвердити замовлення
          </Button>
          <p className="text-xs text-gray-700 text-center font-light mt-2">
            Віправляючи замовлення, я підтверджую, що прочитав і згоден з{" "}
            <Link href="/" className="text-primary">
              умовами використання
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
