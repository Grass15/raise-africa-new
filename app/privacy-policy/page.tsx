import FormField from "../components/FormField";

const PrivacyPolicyPage = () => {
  return (
    <section className={"flex flex-col gap-6 px-5 py-5 w-full"}>
      <div className="w-full max-[806px]:max-w-[458px] max-w-screen-md xl:max-w-screen-lg pt-5 mx-auto sm:py-5">
        <div
          className={
            "rounded bg-[#222221] flex justify-center items-center flex-col sm:p-10 p-4"
          }
        >
          <div
            className={
              "flex justify-center items-center bg-secondary p-4 rounded sm:min-w-[380px]"
            }
          >
            <h1 className={"sm:text-xl text-primary font-medium"}>
              Privacy Policy
            </h1>
          </div>
          <div className={"w-full lg:w-10/12 flex flex-col mt-5 gap-10"}>
            <div>
              <h4 className={"text-primary font-semibold"}>Introduction</h4>
              <p>
                Raise Africa (&quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website
                raiseafrica.finance and use our platform. Please read this
                Privacy Policy carefully. If you do not agree with the terms of
                this Privacy Policy, please do not access the site.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                Information We Collect
              </h4>
              <p>
                We may collect personal information that you voluntarily provide
                to us when you register on the Platform, express an interest in
                obtaining information about us or our products and services, or
                otherwise contact us. The personal information we collect may
                include:
              </p>
              <ul className={"list-disc ml-5"}>
                <li>
                  <span className={"text-primary"}>Personal Identifiers:</span>{" "}
                  such as your name, email address, postal address, phone
                  number, and other similar contact data.
                </li>
                <li>
                  <span className={"text-primary"}>Account Information:</span>{" "}
                  such as your username and password, and other information
                  necessary to process your transactions.
                </li>
                <li>
                  <span className={"text-primary"}>Financial Information:</span>{" "}
                  such as your payment information, including credit card
                  numbers, billing information, and transaction history.
                </li>
                <li>
                  <span className={"text-primary"}>Technical Information:</span>{" "}
                  such as your IP address, browser type and version, time zone
                  setting, browser plug-in types and versions, operating system
                  and platform, and other technology on the devices you use to
                  access the Platform.
                </li>
                <li>
                  <span className={"text-primary"}>Usage Data:</span> such as
                  information about how you use our Platform, products, and
                  services.
                </li>
              </ul>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                How We Use Your Information
              </h4>
              <p>We use the information we collect in the following ways:</p>
              <ul className={"list-disc ml-5"}>
                <li>
                  <span className={"text-primary"}>
                    To provide and manage the Platform:
                  </span>{" "}
                  including to register you as a user, process your
                  transactions, and manage your account.
                </li>
                <li>
                  <span className={"text-primary"}>
                    To communicate with you:
                  </span>{" "}
                  including to send you updates, newsletters, marketing
                  materials, and other information that may be of interest to
                  you.
                </li>
                <li>
                  <span className={"text-primary"}>
                    To improve our services:
                  </span>{" "}
                  including to analyze and improve our Platform, understand how
                  our users interact with the Platform, and develop new products
                  and services.
                </li>
                <li>
                  <span className={"text-primary"}>
                    To protect our Platform and users:
                  </span>{" "}
                  including to detect, prevent, and respond to fraud, abuse,
                  security risks, and technical issues.
                </li>
                <li>
                  <span className={"text-primary"}>
                    To comply with legal obligations:
                  </span>{" "}
                  including to comply with applicable laws, regulations, and
                  legal processes.
                </li>
              </ul>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                Disclosure of Your Information
              </h4>
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul className={"list-disc ml-5"}>
                <li>
                  <span className={"text-primary"}>
                    With service providers:
                  </span>{" "}
                  who perform services on our behalf, such as payment
                  processing, data analysis, email delivery, hosting services,
                  customer service, and marketing assistance.
                </li>
                <li>
                  <span className={"text-primary"}>
                    For business transfers:
                  </span>{" "}
                  in connection with or during negotiations of any merger, sale
                  of company assets, financing, or acquisition of all or a
                  portion of our business to another company.
                </li>
                <li>
                  <span className={"text-primary"}>For legal reasons:</span> if
                  we believe disclosure is necessary or appropriate to protect
                  our rights, property, or safety, or to comply with a legal
                  obligation.
                </li>
              </ul>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                Security of Your Information
              </h4>
              <p>
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that no security measures are perfect or
                impenetrable, and no method of data transmission can be
                guaranteed against any interception or other types of misuse.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                Your Privacy Rights
              </h4>
              <p>
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className={"list-disc ml-5"}>
                <li>
                  <span className={"text-primary"}>Access:</span> to request a
                  copy of the personal information we hold about you.
                </li>
                <li>
                  <span className={"text-primary"}>Correction:</span> to request
                  that we correct or update any personal information that is
                  inaccurate or incomplete.
                </li>
                <li>
                  <span className={"text-primary"}>Deletion:</span> to request
                  that we delete your personal information, subject to certain
                  exceptions.
                </li>
                <li>
                  <span className={"text-primary"}>Restriction:</span> to
                  request that we restrict the processing of your personal
                  information.
                </li>
                <li>
                  <span className={"text-primary"}>Portability:</span> to
                  request a copy of your personal information in a structured,
                  commonly used, and machine-readable format.
                </li>
                <li>
                  <span className={"text-primary"}>Objection:</span> to object
                  to our processing of your personal information.
                </li>
              </ul>
              <p>
                If you would like to exercise any of these rights, please
                contact us at support@raiseafrica.finance. We will respond to
                your request in accordance with applicable law.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                Changes to This Privacy Policy
              </h4>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We encourage you to review this Privacy
                Policy periodically to stay informed about our information
                practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
