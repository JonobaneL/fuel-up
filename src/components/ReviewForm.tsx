"use client";
import { Button } from "./ui/button";
import Field from "./ui/Field";
import { useForm } from "react-hook-form";
import TextareaField from "./ui/TextareaField";
import { emailValidation } from "@/utils/formValidations";
import { useMutation } from "@tanstack/react-query";
import { addReview } from "@/actions/reviewActions";
import { ReviewFormParams } from "@/models/formParams";
import RateField from "./RateField";
import { usePathname } from "next/navigation";

const ReviewForm = ({ product_slug }: { product_slug: string }) => {
  const pathname = usePathname();
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormParams>({
    defaultValues: {
      rate: 5,
    },
  });
  const { mutate, isPending } = useMutation({
    mutationKey: ["review", "create"],
    mutationFn: async (data: ReviewFormParams) =>
      addReview(data, product_slug, pathname),
  });
  const onSubmit = async (data: ReviewFormParams) => {
    mutate(data);
    reset();
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Field
        className="rounded-sm"
        error={errors.author?.message}
        {...register("author", { required: "Це поле обов'язкове" })}
        placeholder="Ваше ім'я"
      />
      <Field
        className="rounded-sm"
        error={errors.email?.message}
        {...register("email", emailValidation)}
        placeholder="E-mail"
      />
      <RateField control={control} />
      <TextareaField
        error={errors.content?.message}
        {...register("content", { required: "Це поле обов'язкове" })}
        className="rounded-sm min-h-20"
        placeholder="Що Ви думаєте про товар?"
      />
      <Button
        disabled={isPending}
        className="text-white block mr-0 ml-auto rounded-none font-semibold h-10 shadow-md"
      >
        Залишити відгук
      </Button>
    </form>
  );
};

export default ReviewForm;
