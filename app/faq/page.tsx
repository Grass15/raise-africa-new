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
                  Raise Africa is a crowdfunding platform that allows African
                  businesses, whether startups or established, to raise funds
                  through blockchain technology.
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
                  Businesses create campaigns to raise funds, and investors can
                  buy tokens specific to these businesses to support their
                  projects.
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
                  Raise Africa supports businesses in various sectors, whether
                  related to blockchain, web3, or not, with a focus on impactful
                  growth in Africa.
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
                  Browse the campaigns, select a business, and buy its token
                  using USDT to become an investor.
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
                  RAF tokens are used to become a shareholder of Raise Africa,
                  granting you voting rights, dividends, and potential capital
                  gains.
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
                  Once a campaign reaches its target, funds are securely
                  disbursed to the business via the platform.
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
                  A transaction fee of 1 USDT and a commission of 3% on the
                  amount raised by the business.
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
                  Sign up, create your campaign by providing necessary details
                  about your business and goals, and submit it for approval.
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
                  For any inquiries or assistance, please contact us via the
                  support options available on the website.
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
