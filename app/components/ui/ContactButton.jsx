"use client";

import { useRouter } from "next/navigation";

export const ContactButton = () => {
  const router = useRouter();
  function handleClick() {
    router.push("/contact");
  }

  return <button onClick={handleClick}>Contact</button>;
};
