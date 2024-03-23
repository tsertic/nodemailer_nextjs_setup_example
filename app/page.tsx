import { SendForm } from "@/components/SendForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white min-h-screen w-full flex justify-center items-center">
      <SendForm />
    </main>
  );
}
