import FormField from "../components/FormField";

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
            <div className={"flex flex-col items-center"}>
              <h2 className={"text-2xl font-semibold text-primary mb-4"}>
                Discover How Raise Africa Empowers African Businesses
              </h2>
              <p className={"text-center"}>
                Raise Africa provides a streamlined and secure platform for
                investing in and raising funds for businesses across Africa.
                Here&apos;s how it works:
              </p>
            </div>
            <div className={"flex flex-col gap-8 mt-10"}>
              {/* Step 1 */}
              <div className={"flex items-start gap-4"}>
                <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div className={"flex flex-col"}>
                  <h4 className={"text-xl font-semibold text-primary"}>
                    Step 1: Connect Your Wallet
                  </h4>
                  <p>
                    To get started, connect your digital wallet to start
                    investing or raising funds. This ensures that all
                    transactions are secure and seamless. We support various
                    popular digital wallets, making it easy for you to integrate
                    and begin your journey with us.
                  </p>
                  <ul className={"list-disc ml-5 mt-2"}>
                    <li>
                      Click on the &quot;Connect Wallet&quot; button on the
                      homepage.
                    </li>
                    <li>
                      Select your preferred digital wallet from the list of
                      supported wallets.
                    </li>
                    <li>Follow the prompts to authorize the connection.</li>
                  </ul>
                </div>
              </div>
              {/* Step 2 */}
              <div className={"flex items-start gap-4"}>
                <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div className={"flex flex-col"}>
                  <h4 className={"text-xl font-semibold text-primary"}>
                    Step 2: Buy RAF Tokens
                  </h4>
                  <p>
                    Purchase the RAF token to become a member of Raise Africa,
                    gaining shareholder rights such as voting and dividends.
                  </p>
                  <ul className={"list-disc ml-5 mt-2"}>
                    <li>
                      Once your wallet is connected, navigate to the &quot;Buy
                      RAF&quot; section.
                    </li>
                    <li>
                      Enter the amount of RAF tokens you wish to purchase.
                    </li>
                    <li>
                      Confirm the transaction and complete the payment using
                      your connected wallet.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Step 3 */}
              <div className={"flex items-start gap-4"}>
                <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div className={"flex flex-col"}>
                  <h4 className={"text-xl font-semibold text-primary"}>
                    Step 3: Explore and Invest in Campaigns
                  </h4>
                  <p>
                    Browse campaigns and buy the token of the business
                    you&apos;re interested in supporting. Each campaign provides
                    detailed information about the project, funding goals, and
                    how the funds will be used.
                  </p>
                  <ul className={"list-disc ml-5 mt-2"}>
                    <li>
                      Visit the &quot;Campaigns&quot; section of the platform.
                    </li>
                    <li>
                      Filter and search for projects that align with your
                      interests and values.
                    </li>
                    <li>Click on a campaign to view detailed information.</li>
                    <li>
                      Decide on the amount you wish to invest and complete the
                      transaction using your RAF tokens.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Step 4 */}
              <div className={"flex items-start gap-4"}>
                <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <div className={"flex flex-col"}>
                  <h4 className={"text-xl font-semibold text-primary"}>
                    Step 4: Create and Manage Your Campaign
                  </h4>
                  <p>
                    Start a campaign if you’re seeking to raise funds, detailing
                    your project and goals. Provide comprehensive details about
                    your project, including your objectives, funding needs, and
                    how the raised funds will be utilized.
                  </p>
                  <ul className={"list-disc ml-5 mt-2"}>
                    <li>
                      Sign in to your account and go to the &quot;Create
                      Campaign&quot; section.
                    </li>
                    <li>
                      Fill out the campaign creation form with all required
                      details.
                    </li>
                    <li>
                      Submit your campaign for review by the Raise Africa team.
                    </li>
                    <li>
                      Once approved, your campaign will go live on the platform
                      for investors to support.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Step 5 */}
              <div className={"flex items-start gap-4"}>
                <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
                  5
                </div>
                <div className={"flex flex-col"}>
                  <h4 className={"text-xl font-semibold text-primary"}>
                    Step 5: Monitor and Engage
                  </h4>
                  <p>
                    Track the progress of your investments and engage with
                    supported projects. Stay updated on the latest developments,
                    milestones, and achievements of the projects you support.
                  </p>
                  <ul className={"list-disc ml-5 mt-2"}>
                    <li>
                      Use the dashboard to track the status of your investments
                      or campaigns.
                    </li>
                    <li>
                      Participate in discussions and provide feedback to project
                      creators.
                    </li>
                    <li>
                      Receive updates and notifications on important milestones
                      and fund disbursements.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Step 6 */}
              <div className={"flex items-start gap-4"}>
                <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
                  6
                </div>
                <div className={"flex flex-col"}>
                  <h4 className={"text-xl font-semibold text-primary"}>
                    Step 6: Secure and Efficient Disbursement
                  </h4>
                  <p>
                    Once a campaign meets its target, funds are securely
                    disbursed to the business. Raise Africa ensures that the
                    disbursement process is efficient and transparent, providing
                    confidence to both investors and startups.
                  </p>
                  <ul className={"list-disc ml-5 mt-2"}>
                    <li>
                      For investors: Check your dashboard for updates on the
                      projects you have funded.
                    </li>
                    <li>
                      For startups: Ensure your wallet is ready to receive the
                      funds and follow any additional instructions provided by
                      the Raise Africa team.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Why Choose Raise Africa */}
            <div className={"flex flex-col items-center mt-10"}>
              <h3 className={"text-xl font-semibold text-primary mb-4"}>
                Why Choose Raise Africa?
              </h3>
              <ul className={"list-disc ml-5"}>
                <li>
                  <span className={"text-primary font-semibold"}>
                    Transparency and Security:
                  </span>{" "}
                  Secure transactions and advanced safety measures.
                </li>
                <li>
                  <span className={"text-primary font-semibold"}>
                    Global Community:
                  </span>{" "}
                  Connect with businesses and investors worldwide.
                </li>
                <li>
                  <span className={"text-primary font-semibold"}>
                    Impactful Support:
                  </span>{" "}
                  Invest in projects driving Africa’s sustainable development.
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
