"use server";
import "server-only";

async function addNumbers(prevState: number, values: number[]) {
  return values.reduce((acc, curr) => acc + curr, 0);
}

export default addNumbers;
