import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FacebookLoginButton } from "../common/Button/FacebookLoginButton";
import { GoogleLoginButton } from "../common/Button/GoogleLoginButton";
import { Or } from "../common/Divider";
import { LogoHeader } from "../common/Header";
import { PasswordInput } from "../common/Input";
import { MailInput } from "../common/Input/MailInput";
import { Label } from "../common/Label";
import { BaseButton } from "../common/Button/BaseButton";
import { PrivacyAndPolicy } from "../common/Input/PrivacyAndPolicy";
import { Link } from "../common/Text";

export default function RegisterForm() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [privacy, setPrivacy] = useState(false);

  return (
    <div className="overflow-hidden relative p-16">
      <div className="flex flex-col gap-4">
        <LogoHeader title="Register" description="Welcome! Please register to your account." />
        <div>
          <Label>Mail/Phone</Label>
          <MailInput value={mail} onChange={setMail} />
        </div>
        <div>
          <Label>Password</Label>
          <PasswordInput checklist value={password} onChange={setPassword} />
        </div>
        <div className="py-2">
          <PrivacyAndPolicy value={privacy} onChange={setPrivacy} />
        </div>
        <BaseButton label="Register" disabled={!mail || !password} icon={<FontAwesomeIcon icon={faRegistered} />} />
        <div className="p-4">
          <Or></Or>
        </div>
        <div className="flex flex-row gap-2">
          <GoogleLoginButton></GoogleLoginButton>
          <FacebookLoginButton></FacebookLoginButton>
        </div>
        <div className="flex flex-row justify-center">
          <span>
            Already have an account? <Link to="/login">Login</Link> now.
          </span>
        </div>
      </div>
    </div>
  );
}
