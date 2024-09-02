import FormField from "../components/FormField";

const AboutPage = () => {
  return (
    <section className={"flex flex-col gap-6 px-5 py-5 w-full "}>
      <div className="w-full max-[806px]:max-w-[458px] max-w-screen-md xl:max-w-screen-lg  pt-5 mx-auto sm:py-5 ">
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
            <h1 className={"sm:text-xl text-primary  font-medium"}>
              Cookie Policy
            </h1>
          </div>
          <div className={"w-full lg:w-10/12 flex flex-col mt-5 gap-10"}>
            <div>
              <h4 className={"text-primary font-semibold"}>Introduction</h4>
              <p>
                Raise Africa (&quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) uses cookies and similar tracking technologies
                to enhance your experience on our website raiseafrica.finance
                (the &quot;Platform&quot;). This Cookie Policy explains what
                cookies are, how we use them, and your choices regarding their
                use. By using the Platform, you consent to the use of cookies as
                described in this policy.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                What Are Cookies?
              </h4>
              <p>
                Cookies are small text files that are stored on your device
                (computer, smartphone, or other electronic device) when you
                visit a website. They help websites remember your actions and
                preferences over a period of time, so you don’t have to re-enter
                them whenever you come back to the site or browse from one page
                to another.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                How We Use Cookies
              </h4>
              <p>
                <span>We use cookies for various purposes, including:</span>
                <br />
                <br />
                <ul className={"flex flex-col gap-5"}>
                  <li>
                    <span className={"text-primary"}>Essential Cookies:</span>{" "}
                    These cookies are necessary for the operation of the
                    Platform. They enable you to navigate the site and use its
                    features.
                  </li>
                  <li>
                    <span className={"text-primary"}>
                      Performance and Analytics Cookies:
                    </span>{" "}
                    These cookies collect information about how you use the
                    Platform, such as which pages you visit most often. This
                    data helps us improve the Platform’s performance and your
                    user experience.
                  </li>
                  <li>
                    <span className={"text-primary"}>
                      Functionality Cookies:
                    </span>{" "}
                    These cookies allow the Platform to remember the choices you
                    make (such as your username, language, or the region you are
                    in) and provide enhanced, more personalized features.
                  </li>
                  <li>
                    <span className={"text-primary"}>
                      Advertising and Targeting Cookies:
                    </span>{" "}
                    These cookies are used to deliver advertisements more
                    relevant to you and your interests. They also help limit the
                    number of times you see an ad and measure the effectiveness
                    of advertising campaigns.
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                Third-Party Cookies
              </h4>
              <p>
                In addition to our own cookies, we may also use various
                third-party cookies to report usage statistics of the Platform
                and deliver advertisements. These third-party cookies are set by
                a domain other than the one you are visiting and may be used by
                third parties to recognize your device across different websites
                and services.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                Your Choices Regarding Cookies
              </h4>
              <p>
                You have the right to decide whether to accept or reject
                cookies. You can exercise your cookie preferences by adjusting
                the settings in your browser. Most browsers allow you to:
                <br />
                <br />
                <ul className={"flex flex-col gap-5 list-disc ml-8"}>
                  <li>
                    View what cookies you have and delete them on an individual
                    basis.
                  </li>
                  <li>Block third-party cookies.</li>
                  <li>Block cookies from specific websites.</li>
                  <li>Block all cookies from being set.</li>
                  <li>Delete all cookies when you close your browser.</li>
                </ul>
                <br />
                Please note that if you choose to block or delete cookies, it
                may affect the functionality of the Platform, and you may not be
                able to access certain areas or features.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>
                Changes to This Cookie Policy
              </h4>
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We encourage you to review this Cookie
                Policy periodically to stay informed about our use of cookies
                and related technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*{isConnected ? <h1>Hello, Campaigns Page!</h1> : <Error403 />}*/}
    </section>
  );
};

export default AboutPage;
