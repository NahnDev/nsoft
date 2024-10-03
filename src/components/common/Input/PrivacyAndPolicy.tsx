import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Checkbox,
  useBoolean,
} from "@chakra-ui/react";
import SessionHeader from "../Header/SessionHeader";
import { useRef } from "react";
import { InView } from "react-intersection-observer";

export type PrivacyAndPolicyProps = {
  value: boolean;
  onChange?: (value: boolean) => void;
};

export function PrivacyAndPolicy(props: PrivacyAndPolicyProps) {
  const leastDestructiveRef = useRef(null);
  const [shown, { toggle }] = useBoolean(false);
  const [readed, { on: setReaded }] = useBoolean(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (shown) {
        props.onChange?.(true);
      }
      toggle();
    } else {
      props.onChange?.(false);
    }
  };

  return (
    <div>
      <Checkbox isChecked={props.value} colorScheme="blue" onChange={onChange}>
        Privacy and policy
      </Checkbox>
      <AlertDialog isOpen={shown} onClose={toggle} leastDestructiveRef={leastDestructiveRef}>
        <AlertDialogOverlay>
          <AlertDialogContent className="!max-w-[40em] w-[40em] p-10">
            <AlertDialogHeader>
              <SessionHeader title="Privacy and Policy" className="text-center" />
            </AlertDialogHeader>
            <AlertDialogBody className="max-h-[60vh] -mr-10 overflow-auto">
              <div>
                <h2 className="text-1xl font-semibold mt-6 mb-2">1. Introduction</h2>
                <p>
                  We are committed to protecting the privacy of our users and complying with data protection
                  regulations. This privacy policy explains how we collect, use, and safeguard personal information when
                  you visit and use our website.
                </p>

                <h2 className="text-1xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
                <p>
                  When you use our form-building and management services, we may collect the following types of
                  information:
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    Personal information you provide, including your name, email address, and other contact details.
                  </li>
                  <li>
                    Information related to the forms you create and the responses from users who complete those forms.
                  </li>
                  <li>
                    Website usage data, including IP addresses, browser type, and interaction information with the site.
                  </li>
                </ul>

                <h2 className="text-1xl font-semibold mt-6 mb-2">3. How We Use Information</h2>
                <p>We use your personal information for the following purposes:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>To provide and maintain our services.</li>
                  <li>To manage your account and ensure the security of your personal data and form data.</li>
                  <li>To analyze user experiences and optimize our services.</li>
                  <li>To comply with legal and regulatory obligations.</li>
                </ul>

                <h2 className="text-1xl font-semibold mt-6 mb-2">4. Information Sharing</h2>
                <p>
                  We do not share your personal information with third parties, except when required by law or with your
                  consent.
                </p>

                <h2 className="text-1xl font-semibold mt-6 mb-2">5. Information Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information and form data from
                  unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-1xl font-semibold mt-6 mb-2">6. Your Rights</h2>
                <p>
                  You have the right to access, update, or request the deletion of your personal information at any time
                  by contacting us through the provided contact details on the website.
                </p>

                <h2 className="text-1xl font-semibold mt-6 mb-2">7. Changes to the Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time to comply with new legal requirements or to
                  reflect changes in our services. Any changes will be posted on this page and will take effect
                  immediately upon being updated.
                </p>

                <h2 className="text-1xl font-semibold mt-6 mb-2">8. Contact Us</h2>
                <p>If you have any questions about this privacy policy, please contact us at +1234567890.</p>
                <InView onChange={(inView) => (inView ? setReaded() : null)}></InView>
              </div>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Checkbox disabled={!readed} checked={props.value} colorScheme="blue" onChange={onChange}>
                I have read and agree to the privacy policy
              </Checkbox>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}
