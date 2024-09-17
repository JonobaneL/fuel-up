"use client";
import { useForm } from "react-hook-form";
import { CheckoutFormParams } from "@/models/formParams";
import CheckoutFormPersonInfo from "./CheckoutFormPersonInfo";
import { Button } from "./ui/button";
import CheckoutFormDelivery from "./CheckoutFormDelivery";
import Link from "next/link";
import { useMemo } from "react";
import { Textarea } from "./ui/textarea";
import { decreaseProductsAmount } from "@/actions/productsAction";

const CheckoutForm = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormParams>();
  const onSubmit = (data: CheckoutFormParams) => {
    console.log(data);
  };
  const delivery = watch("delivery");
  //adjust component in production, for correct address selection
  const addressType = useMemo(() => {
    const regex = /кур'єр/i;
    if (!delivery) return null;
    return regex.test(delivery?.toLowerCase() || "") ? "input" : "select";
  }, [delivery]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <CheckoutFormPersonInfo
          register={register}
          control={control}
          errors={errors}
        />
        <CheckoutFormDelivery addressType={addressType} control={control} />
        <Textarea
          {...register("comment")}
          placeholder="Коментар до замовлення"
          className="min-h-20 rounded-sm"
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
