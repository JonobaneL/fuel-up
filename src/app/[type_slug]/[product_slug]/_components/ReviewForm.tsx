"use client";

import { useMutation } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";

import RateField from "./RateField";

import { addReview } from "@/actions/reviewActions";

import { ReviewFormParams, ReviewFormProps } from "@/types/formParams";

import { Button } from "@/components/ui/button";
import Field from "@/components/ui/Field";
import TextareaField from "@/components/ui/TextareaField";
import { emailValidation, requiredValidation } from "@/utils/formValidations";

const ReviewForm = ({ product_slug, closeCallback }: ReviewFormProps) => {
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
    if (closeCallback) closeCallback();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Field
        className="rounded-sm"
        error={errors.author?.message}
        {...register("author", requiredValidation)}
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
        {...register("content", requiredValidation)}
        className="rounded-sm min-h-20"
        placeholder="Що Ви думаєте про товар?"
      />
      <div className="flex items-center justify-end gap-4">
        {closeCallback && (
          <Button
            onClick={closeCallback}
            variant="outline"
            className=" rounded-none font-semibold h-10"
          >
            Скасувати
          </Button>
        )}
        <Button
          type="submit"
          disabled={isPending}
          className="text-white rounded-none font-semibold h-10 shadow-md"
        >
          Залишити відгук
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;
