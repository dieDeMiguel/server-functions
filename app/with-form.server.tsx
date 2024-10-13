import WithFormClient from "./with-form.client";

export default function WithForm() {
  async function handleFormData(data: FormData) {
    "use server";
    const values = Object.fromEntries(data.entries());
    console.log(values);
  }

  return <WithFormClient handleFormData={handleFormData} />;
}
