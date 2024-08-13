import { forwardRef } from "react";
import { Textarea } from "./textarea";

type TextareaFieldProps = {
  error?: string | undefined;
} & React.ComponentPropsWithRef<"textarea">;

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ error, ...props }, ref) => {
    return (
      <div className="w-full">
        <Textarea ref={ref} {...props} />
        {error && (
          <p className="text-xs text-semibold text-red-600 mt-1 ml-2">
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default TextareaField;
