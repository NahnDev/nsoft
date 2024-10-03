import { useState } from "react";
import { Button } from "../common/Button";
import { FacebookLoginButton } from "../common/Button/FacebookLoginButton";
import { GoogleLoginButton } from "../common/Button/GoogleLoginButton";
import { Or } from "../common/Divider";
import { LogoHeader } from "../common/Header/LogoHeader";
import { PasswordInput } from "../common/Input";
import { MailInput } from "../common/Input/MailInput";
import { Label } from "../common/Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../common/Button/IconButton";
import { parseAsBoolean, useQueryState } from "nuqs";
import { Link } from "../common/Text";

export default function BaseLoginForm() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [withQr, setWithQr] = useQueryState("withQr", parseAsBoolean);
  return (
    <div className="overflow-hidden relative p-16">
      <div className="flex flex-col gap-4">
        <LogoHeader title="Login" description="Welcome back! Please login to your account." />
        <div>
          <Label>Mail/Phone</Label>
          <MailInput value={mail} onChange={setMail} />
        </div>
        <div>
          <Label>Password</Label>
          <PasswordInput value={password} onChange={setPassword} />
        </div>
        <div className="flex flex-row justify-end py-2 cursor-pointer">
          <span>Forget password?</span>
        </div>

        <div className="flex flex-row justify-end gap-2">
          <Button label="Login" disabled={!mail || !password} icon={<FontAwesomeIcon icon={faSignIn} />} />
          {!withQr && (
            <IconButton icon={faQrcode} className="!size-12" variant="text" onClick={() => setWithQr(true)} />
          )}
        </div>

        <div className="p-4">
          <Or></Or>
        </div>
        <div className="flex flex-row gap-2">
          <GoogleLoginButton></GoogleLoginButton>
          <FacebookLoginButton></FacebookLoginButton>
        </div>
        <div className="flex flex-row justify-center">
          <span>
            Don&apos;t have an account? <Link to="/register">Register</Link> now.
          </span>
        </div>
      </div>
    </div>
  );
}
