import WithFormClient from "./with-form.client";

export default function WithForm() {
  async function handleFormData(
    prevState: { submitted: boolean },
    data: FormData
  ) {
    "use server";
    const values = Object.fromEntries(data.entries());
    console.log(values);
    return { submitted: true };
  }

  return <WithFormClient handleFormData={handleFormData} />;
}
