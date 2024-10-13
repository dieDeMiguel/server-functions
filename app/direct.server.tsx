import DirectClient from "./direct.client";

export default function Direct() {
  async function addNumbers(values: number[]) {
    "use server";
    return values.reduce((acc, curr) => acc + curr, 0);
  }
  return <DirectClient addNumbers={addNumbers} />;
}
