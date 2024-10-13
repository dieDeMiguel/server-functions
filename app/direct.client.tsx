"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function DirectClient({
  addNumbers,
}: {
  addNumbers: (values: number[]) => Promise<number>;
}) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <div>
      <h2 className="text-3xl font-semibold">Direct Client</h2>
      <div className="flex flex-row gap-2">
        <Input
          className="w-1/4"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          type="number"
        />
        <Input
          className="w-1/4"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          type="number"
        />
        <Button onClick={async () => setResult(await addNumbers([num1, num2]))}>
          Add
        </Button>
      </div>
      <p className="w-1/4">{result}</p>
    </div>
  );
}
