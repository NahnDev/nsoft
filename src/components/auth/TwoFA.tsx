import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { Button } from "../common/button";
import { LogoHeader } from "../common/header";

export default function TwoFA() {
  return (
    <div className="overflow-hidden relative p-20">
      <div className="flex flex-col gap-10 justify-center items-center">
        <LogoHeader
          title="Two Factor Authentication"
          description="Please enter the code from your authenticator app."
        />
        <HStack>
          <PinInput autoFocus onComplete={(code) => console.log(code)}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Button pending={true} label="Verify code" />
      </div>
    </div>
  );
}
