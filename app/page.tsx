import Direct from "./direct.server";
import WithForm from "./with-form.server";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center m-auto w-1/2 space-y-4">
      <Direct />
      <WithForm />
    </div>
  );
}
