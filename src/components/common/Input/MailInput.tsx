import { MAIL_REGEX } from "@/constants/regex";
import { FormControl, FormHelperText, Input } from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";

export const DEFAULT_PLACEHOLDER = "Type your email";
export type MailInputProps = {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

export function MailInput(props: MailInputProps) {
  const [error, setError] = useState(false);
  const placeholder = useMemo(() => props.placeholder || DEFAULT_PLACEHOLDER, [props.placeholder]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e.target.value);
    setError(!e.target.value.match(MAIL_REGEX));
  };

  return (
    <FormControl isInvalid={error}>
      <div className="relative">
        <div className="absolute top-0 left-0 size-10 z-50">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-gray-400 absolute top-1/2 left-0 transform -translate-y-1/2 pl-2"
          />
        </div>
        <Input
          value={props.value}
          onChange={onChange}
          className="px-10"
          type="text"
          placeholder={placeholder}
          variant="flushed"
          autoComplete="email"
        />
      </div>
      {error && <FormHelperText color="red.500">Invalid email</FormHelperText>}
    </FormControl>
  );
}
