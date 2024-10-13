"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WithFormClient({
  handleFormData,
}: {
  handleFormData: (data: FormData) => void;
}) {
  return (
    <div>
      <h2 className="text-3xl font-semibold">With Form</h2>
      <form action={handleFormData} className="flex flex-col gap-2">
        <Input name="name" type="text" placeholder="Lionel Messi" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
