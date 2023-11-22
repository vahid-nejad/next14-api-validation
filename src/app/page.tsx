import PasswordInput from "@/components/PasswordInput";
import { compileWelcomeTemplate, sendMail } from "@/lib/mail";
import { Button } from "@nextui-org/react";

export default function Home() {
  const send = async () => {
    "use server";
    await sendMail({
      to: "sakuradev23@gmail.com",
      name: "Vahid",
      subject: "Test Mail",
      body: compileWelcomeTemplate("Vahid", "youtube.com/@sakuradev"),
    });
  };
  return (
    <main className="p-24 gap-4 bg-black">
      <div className="p-10 border rounded-md shadow-md m-10 bg-white">
        <PasswordInput />
      </div>
    </main>
  );
}
