import { FormControl, Input } from "@chakra-ui/react";
import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import { useBoolean } from "usehooks-ts";
import HoldButton from "../Button/HoldButton";

const DEFAULT_PLACEHOLDER = "Type your password";

export type PasswordInputProps = {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  checklist?: boolean;
};

export enum PasswordErrorTypes {
  NO_NUMBER = "NO_NUMBER",
  NO_SPECIAL = "NO_SPECIAL",
  TOO_SHORT = "TOO_SHORT",
}
export const PASSWORD_VALIDATIONS = [
  {
    key: PasswordErrorTypes.NO_NUMBER,
    regexp: /(?=.*\d)/,
    message: "At least 1 number",
  },
  {
    key: PasswordErrorTypes.NO_SPECIAL,
    regexp: /(?=.*[!@#$%^&*])/,
    message: "At least 1 special character",
  },
  {
    key: PasswordErrorTypes.TOO_SHORT,
    regexp: /.{8,50}/,
    message: "At least 8 characters",
  },
];

export function PasswordInput(props: PasswordInputProps) {
  const [errors, setErrors] = useState<PasswordErrorTypes[]>([]);
  const { value: shownPass, setValue } = useBoolean(true);
  const placeholder = useMemo(() => props.placeholder || DEFAULT_PLACEHOLDER, [props.placeholder]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e.target.value);
    setErrors(PASSWORD_VALIDATIONS.filter((validation) => !validation.regexp.test(e.target.value)).map((v) => v.key));
  };

  console.log(shownPass);
  return (
    <FormControl isInvalid={props.checklist && errors.length > 0}>
      <div className="relative">
        <div className="absolute top-0 left-0 w-10 h-full z-50">
          <FontAwesomeIcon
            icon={faLock}
            className="text-gray-400 absolute top-1/2 left-0 transform -translate-y-1/2 pl-2"
          />
        </div>
        <Input
          value={props.value}
          onChange={onChange}
          className="px-10"
          type={shownPass ? "text" : "password"}
          placeholder={placeholder}
          variant="flushed"
        />
        <div className="z-50 absolute top-1/2 right-0 transform -translate-y-1/2">
          <HoldButton onHold={setValue} className="!size-10 pr-2">
            <FontAwesomeIcon className="text-gray-400" icon={shownPass ? faEyeSlash : faEye} />
          </HoldButton>
        </div>
      </div>
      {props.checklist && <PasswordChecking errors={errors} />}
    </FormControl>
  );
}

function PasswordChecking(props: { errors: string[] }) {
  if (props.errors.length === 0) return <></>;
  return (
    <div className="flex flex-col text-sm text-gray-400 pt-2 gap-2">
      {PASSWORD_VALIDATIONS.map((error) => {
        const isValid = !props.errors.includes(error.key);
        return (
          <div key={error.key} className={`flex items-center ${isValid ? "text-green-500" : "text-red-500"}`}>
            <div className="w-4 h-4 flex-shrink-0">{isValid ? "✔" : "✖"}</div>
            <div className="ml-1">{error.message}</div>
          </div>
        );
      })}
    </div>
  );
}
