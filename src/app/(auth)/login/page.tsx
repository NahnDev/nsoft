"use client";

import { Flex } from "@chakra-ui/react";
import { LoginWithQrCode } from "@/components/common/qr-code";
import BaseLoginForm from "@/components/auth/BaseLoginForm";
import { parseAsBoolean, useQueryState } from "nuqs";

export default function LoginPage() {
  const [withQr] = useQueryState("withQr", parseAsBoolean);
  return (
    <Flex direction="column" align="center" justify="center" className="p-10 h-full">
      <div className="min-h-[40em] grid grid-cols-[1fr_auto] rounded-2xl overflow-hidden bg-white">
        <div className="w-[35em]">
          <BaseLoginForm />
          {/* <TwoFA /> */}
        </div>
        {withQr && (
          <div className="bg-slate-700 grid items-center justify-center w-[25em]">
            <div>
              <LoginWithQrCode />
            </div>
          </div>
        )}
      </div>
    </Flex>
  );
}
