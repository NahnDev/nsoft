"use client";

import RegisterForm from "@/components/auth/RegisterForm";
import { Flex } from "@chakra-ui/react";

export default function RegisterPage() {
  return (
    <Flex direction="column" align="center" justify="center" className="p-10 h-full">
      <div className="w-[35em] min-h-[40em] grid grid-cols-[1fr_auto] rounded-2xl overflow-hidden bg-white">
        <RegisterForm />
      </div>
    </Flex>
  );
}
