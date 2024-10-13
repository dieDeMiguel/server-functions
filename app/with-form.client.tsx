"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";

export default function WithFormClient({
  handleFormData,
}: {
  handleFormData: (
    prevState: { submitted: boolean },
    data: FormData
  ) => Promise<{
    submitted: boolean;
  }>;
}) {
  const [formState, handleFormDataWrapped] = useActionState(handleFormData, {
    submitted: false,
  });
  return (
    <div>
      <h2 className="text-3xl font-semibold">With Form</h2>
      <form action={handleFormDataWrapped} className="flex flex-col gap-2">
        <Input name="name" type="text" placeholder="Lionel Messi" />
        <Button type="submit">Submit</Button>
      </form>
      <div>{formState.submitted ? "Submitted" : "Not Submitted"}</div>
    </div>
  );
}
