const HowItWorksPage = () => {
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
              How It Works
            </h1>
          </div>

          <div className={"w-full lg:w-10/12 flex flex-col mt-5 gap-10"}>
            {/* For SMEs and Startups */}
            <div className={"flex flex-col items-center"}>
              <h2 className={"text-2xl font-semibold text-primary mb-4"}>
                For SMEs and Startups
              </h2>
              <p className={"text-center mb-6"}>
                Raise Africa provides a seamless and efficient platform for
                African startups and SMEs to raise capital. Here&apos;s how it
                works:
              </p>
              <ul className={"list-decimal ml-5 mt-2 space-y-4"}>
                <li>
                  <strong>Apply and Get Approved:</strong>
                  <ul className={"list-disc ml-5 mt-2 space-y-2"}>
                    <li>
                      Start by filling out our campaign form on the Raise Africa
                      website.
                    </li>
                    <li>
                      Our team reviews your application and, upon approval, you
                      can raise funds on our platform.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Create Your Campaign:</strong>
                  <ul className={"list-disc ml-5 mt-2 space-y-2"}>
                    <li>
                      Define your funding goals and decide whether to issue
                      token equity or token bonds.
                    </li>
                    <li>
                      Set up your campaign details, including your business
                      plan, funding requirements, and token structure.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Set Up the Liquidity Pool:</strong>
                  <ul className={"list-disc ml-5 mt-2 space-y-2"}>
                    <li>
                      Establish a liquidity pool representing 20% of the funds
                      raised.
                    </li>
                    <li>
                      This pool ensures token liquidity and stability, providing
                      confidence to investors.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Launch Your Campaign:</strong>
                  <ul className={"list-disc ml-5 mt-2 space-y-2"}>
                    <li>
                      Once your campaign is live, it becomes visible to a global
                      network of investors.
                    </li>
                    <li>
                      Promote your campaign to reach potential investors and
                      engage your community.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Raise Funds:</strong>
                  <ul className={"list-disc ml-5 mt-2 space-y-2"}>
                    <li>
                      Investors purchase your tokens using USDT, contributing to
                      your fundraising goals.
                    </li>
                    <li>
                      Throughout the campaign, Raise Africa provides support and
                      guidance to help you succeed.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Manage and Grow:</strong>
                  <ul className={"list-disc ml-5 mt-2 space-y-2"}>
                    <li>
                      After successfully raising funds, use the capital to grow
                      and scale your business.
                    </li>
                    <li>
                      Maintain communication with your investors and provide
                      updates on your progress.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* For Investors */}
            <div className={"flex flex-col items-center mt-10"}>
              <h2 className={"text-2xl font-semibold text-primary mb-4"}>
                For Investors
              </h2>
              <p className={"text-center mb-6"}>
                Raise Africa offers investors the opportunity to support
                innovative African startups and SMEs while potentially earning
                returns on their investments. Here&apos;s how it works:
              </p>
              <ul className={"list-decimal ml-5 mt-2 space-y-4"}>
                <li>
                  <strong>Sign Up and Explore:</strong>
                  <ul className={"list-disc ml-5 mt-2 space-y-2"}>
                    <li>
                      Register on the Raise Africa platform and create your
                      investor profile.
                    </li>
                    <li>
                      Browse through active fundraising campaigns and explore
                      various investment opportunities.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Evaluate and Decide:</strong>
                  <ul className={"list-disc ml-5 mt-2 space-y-2"}>
                    <li>
                      Review detailed information about each campaign, including
                      the business plan, funding goals, and token structure.
                    </li>
                    <li>
                      Decide whether to invest in token equity, which represents
                      a stake in the company, or token bonds, which represent a
                      debt obligation.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Invest Using USDT:</strong>
                  <ul className={"list-disc ml-5 mt-2 space-y-2"}>
                    <li>
                      Purchase tokens using USDT, contributing to the
                      fundraising goals of your chosen campaigns.
                    </li>
                    <li>
                      Track your investments through your Raise Africa dashboard
                      and receive regular updates from the businesses.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Liquidity and Trading:</strong>
                  <ul className={"list-disc ml-5 mt-2 space-y-2"}>
                    <li>
                      Token equity can be swapped for USDT in the liquidity
                      pool, ensuring liquidity and stability.
                    </li>
                    <li>
                      Token bonds pay annual interest and offer a predictable
                      return on investment.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Support and Grow:</strong>
                  <ul className={"list-disc ml-5 mt-2 space-y-2"}>
                    <li>
                      As an investor, you are part of the growth journey of
                      innovative African businesses.
                    </li>
                    <li>
                      Your investment helps drive economic development and
                      innovation across the continent.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className={"flex flex-col items-center mt-10"}>
              <h3 className={"text-xl font-semibold text-primary mb-4"}>
                Why Choose Raise Africa?
              </h3>
              <ul className={"list-disc ml-5 space-y-2"}>
                <li>
                  <strong>Transparency and Security:</strong> Secure and
                  transparent transactions through blockchain technology.
                </li>
                <li>
                  <strong>Global Network:</strong> Access to a global network of
                  investors and businesses.
                </li>
                <li>
                  <strong>Liquidity Mechanism:</strong> A liquidity pool ensures
                  token stability and confidence.
                </li>
                <li>
                  <strong>Expert Support:</strong> Guidance throughout the
                  fundraising and investment process.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPage;
