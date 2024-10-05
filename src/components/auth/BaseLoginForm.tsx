import { useState } from "react";
import { Button } from "../common/button";
import { FacebookLoginButton } from "../common/button/FacebookLoginButton";
import { GoogleLoginButton } from "../common/button/GoogleLoginButton";
import { Or } from "../common/divider";
import { LogoHeader } from "../common/header/LogoHeader";
import { PasswordInput } from "../common/input";
import { MailInput } from "../common/input/MailInput";
import { Label } from "../common/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../common/button/IconButton";
import { parseAsBoolean, useQueryState } from "nuqs";
import { Link } from "../common/text";

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
