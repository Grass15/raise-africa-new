import FormField from "../components/FormField";

const TermsOfUsePage = () => {
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
              Terms of Use
            </h1>
          </div>
          <div className={"w-full lg:w-10/12 flex flex-col mt-5 gap-10"}>
            <div>
              <h4 className={"text-primary font-semibold"}>Introduction</h4>
              <p>
                Welcome to Raise Africa. These Terms of Use govern your use of
                our website and platform, including any services, content, and
                features offered on or through raiseafrica.finance (the
                &quot;Platform&quot;). By using the Platform, you agree to
                comply with and be bound by these Terms of Use.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                Acceptance of Terms
              </h4>
              <p>
                By accessing or using the Platform, you acknowledge that you
                have read, understood, and agree to be bound by these Terms of
                Use and our Privacy Policy. If you do not agree with these
                terms, you must not use the Platform.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>Changes to Terms</h4>
              <p>
                Raise Africa reserves the right to modify or update these Terms
                of Use at any time without prior notice. Your continued use of
                the Platform following any changes constitutes acceptance of
                those changes. It is your responsibility to review these Terms
                of Use periodically for updates.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                Use of the Platform
              </h4>
              <h5 className={"text-primary font-semibold mt-3"}>Eligibility</h5>
              <p>
                You must be at least 18 years old to use the Platform. By using
                the Platform, you represent and warrant that you have the legal
                capacity to enter into these Terms of Use.
              </p>
              <h5 className={"text-primary font-semibold mt-3"}>
                Account Registration
              </h5>
              <p>
                To access certain features of the Platform, you may be required
                to create an account. You agree to provide accurate, current,
                and complete information during the registration process and to
                update such information to keep it accurate, current, and
                complete.
              </p>
              <h5 className={"text-primary font-semibold mt-3"}>
                Account Security
              </h5>
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to notify Raise Africa immediately of any
                unauthorized use of your account or any other breach of
                security.
              </p>
              <h5 className={"text-primary font-semibold mt-3"}>
                User Conduct
              </h5>
              <p>By using the Platform, you agree not to:</p>
              <ul className={"list-disc ml-5"}>
                <li>
                  Use the Platform for any unlawful purpose or in any way that
                  violates these Terms of Use.
                </li>
                <li>
                  Post or transmit any content that is defamatory, obscene,
                  fraudulent, or otherwise objectionable.
                </li>
                <li>
                  Interfere with or disrupt the operation of the Platform or
                  servers or networks connected to the Platform.
                </li>
                <li>
                  Attempt to gain unauthorized access to any portion of the
                  Platform or any other systems or networks connected to the
                  Platform.
                </li>
              </ul>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                Intellectual Property
              </h4>
              <p>
                All content and materials on the Platform, including text,
                graphics, logos, and software, are the property of Raise Africa
                or its licensors and are protected by copyright, trademark, and
                other intellectual property laws. You may not use, reproduce, or
                distribute any content from the Platform without the express
                written permission of Raise Africa.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                Disclaimer of Warranties
              </h4>
              <p>
                The Platform is provided on an &quot;as is&quot; and &quot;as
                available&quot; basis. Raise Africa makes no representations or
                warranties of any kind, express or implied, regarding the
                operation of the Platform or the information, content, or
                materials included on the Platform. To the fullest extent
                permitted by law, Raise Africa disclaims all warranties, express
                or implied, including but not limited to implied warranties of
                merchantability and fitness for a particular purpose.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                Limitation of Liability
              </h4>
              <p>
                In no event shall Raise Africa be liable for any direct,
                indirect, incidental, special, or consequential damages arising
                out of or in connection with your use of the Platform or these
                Terms of Use, whether based on contract, tort, strict liability,
                or otherwise, even if Raise Africa has been advised of the
                possibility of such damages.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>Indemnification</h4>
              <p>
                You agree to indemnify, defend, and hold harmless Raise Africa
                and its affiliates, officers, directors, employees, and agents
                from and against any claims, liabilities, damages, losses, and
                expenses, including reasonable attorneys&apos; fees, arising out
                of or in any way connected with your use of the Platform or
                violation of these Terms of Use.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>Governing Law</h4>
              <p>
                These Terms of Use shall be governed by and construed in
                accordance with the laws of the jurisdiction in which Raise
                Africa is incorporated, without regard to its conflict of law
                principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUsePage;
