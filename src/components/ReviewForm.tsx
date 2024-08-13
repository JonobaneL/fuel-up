"use client";
import { Button } from "./ui/button";
import Field from "./ui/Field";
import { useForm } from "react-hook-form";
import TextareaField from "./ui/TextareaField";
import { emailValidation } from "@/utils/formValidations";
import { useMutation } from "@tanstack/react-query";
import { addReview } from "@/actions/reviewActions";

type ReviewFormParams = {
  author: string;
  email: string;
  rate: number;
  advantages: string | null;
  disadvantages: string | null;
  content: string;
};

const ReviewForm = ({ product_slug }: { product_slug: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormParams>({
    defaultValues: {
      rate: 5,
      advantages: null,
      disadvantages: null,
    },
  });
  const { mutate } = useMutation({
    mutationKey: ["review", "create"],
    mutationFn: async (data: ReviewFormParams) => addReview(data, product_slug),
  });
  const onSubmit = async (data: ReviewFormParams) => {
    console.log(data);
    mutate(data);
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
      <TextareaField
        error={errors.content?.message}
        {...register("content", { required: "Це поле обов'язкове" })}
        className="rounded-sm min-h-20"
        placeholder="Що Ви думаєте про товар?"
      />
      <TextareaField
        {...register("advantages")}
        className="rounded-sm"
        placeholder="Переваги"
      />
      <TextareaField
        {...register("disadvantages")}
        className="rounded-sm"
        placeholder="Недоліки"
      />
      <Button className="text-white block mr-0 ml-auto rounded-none font-semibold h-10 shadow-md">
        Залишити відгук
      </Button>
    </form>
  );
};

export default ReviewForm;
