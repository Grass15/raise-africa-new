const FAQPage = () => {
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
              Frequently Asked Questions
            </h1>
          </div>
          <div className={"flex px-4 rounded pb-4"}>
            <p>
              Welcome to the Raise Africa FAQ section. Here, we provide answers
              to some of the most common questions about our platform, mission,
              and how you can get involved. If you have any other questions,
              please feel free to contact us directly.
            </p>
          </div>

          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="text-primary collapse-title text-lg font-medium">
                What is Raise Africa?
              </div>
              <div className="collapse-content">
                <p>
                  Raise Africa is a crowdfunding platform designed to support
                  innovative blockchain startups in Africa. Our mission is to
                  create a sustainable ecosystem where startups can thrive by
                  connecting them with global investors.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="text-primary collapse-title text-lg font-medium">
                How does the crowdfunding platform work?
              </div>
              <div className="collapse-content">
                <p>
                  Startups can create campaigns on our platform to raise funds
                  for their projects. Investors can browse these campaigns and
                  choose to support projects that align with their values and
                  goals. Once a campaign reaches its funding target, the funds
                  are disbursed to the startup.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="text-primary collapse-title text-lg font-medium">
                What are the key areas Raise Africa focuses on?
              </div>
              <div className="collapse-content">
                <p>
                  We focus on startups addressing critical challenges in
                  education, healthcare, the environment, anti-counterfeiting,
                  and food security. Our goal is to support projects that have a
                  significant impact on sustainable development in Africa.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="text-primary collapse-title text-lg font-medium">
                How can I invest in a startup?
              </div>
              <div className="collapse-content">
                <p>
                  To invest, you need to create an account on our platform and
                  connect your digital wallet. Once your wallet is connected,
                  you can browse active campaigns and invest in the startups of
                  your choice using our RAF tokens.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="text-primary collapse-title text-lg font-medium">
                What are RAF tokens?
              </div>
              <div className="collapse-content">
                <p>
                  RAF tokens are the utility tokens used on our platform for
                  transactions. Investors use RAF tokens to fund campaigns, and
                  startups receive funding in RAF tokens, which can be converted
                  into other cryptocurrencies or fiat currencies.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="text-primary collapse-title text-lg font-medium">
                How do startups receive their funds?
              </div>
              <div className="collapse-content">
                <p>
                  Once a campaign reaches its funding goal, the raised funds are
                  securely disbursed to the startup`&apos;`s wallet. The startup
                  can then use these funds to further develop and scale their
                  projects.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="text-primary collapse-title text-lg font-medium">
                What fees are associated with using Raise Africa?
              </div>
              <div className="collapse-content">
                <p>
                  We charge a transaction fee of 1 USDT per transaction on our
                  platform. Additionally, we take a commission of 1 to 3% of the
                  total amount raised by the startups. These fees help us
                  maintain and improve our platform.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="text-primary collapse-title text-lg font-medium">
                How do I create a campaign on Raise Africa?
              </div>
              <div className="collapse-content">
                <p>
                  To create a campaign, sign up on our platform and complete the
                  campaign creation form. Provide detailed information about
                  your project, including your goals, funding target, and how
                  the funds will be used. Once submitted, our team will review
                  your campaign for approval.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="text-primary collapse-title text-lg font-medium">
                How can I contact Raise Africa for support?
              </div>
              <div className="collapse-content">
                <p>
                  If you have any questions or need assistance, you can contact
                  us via email at support@raiseafrica.finance or through our
                  social media channels. We are here to help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*{isConnected ? <h1>Hello, Campaigns Page!</h1> : <Error403 />}*/}
    </section>
  );
};

export default FAQPage;
