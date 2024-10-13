"use server";
import "server-only";

async function addNumbers(prevState: number, values: number[]) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return values.reduce((acc, curr) => acc + curr, 0);
}

export default addNumbers;
