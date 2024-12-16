const FAQPage = () => {
  return (
    <section className={"flex flex-col gap-6 px-5 py-5 w-full "}>
      <div className="w-full max-[806px]:max-w-[458px] max-w-screen-md xl:max-w-screen-lg pt-5 mx-auto sm:py-5 ">
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
              Welcome to the Raise Africa FAQ section. Learn more about our
              platform&apos;s unique features, how it works, and how you can
              participate in driving innovation and growth in Africa.
            </p>
          </div>

          <div className="join join-vertical w-full my-4">
            <h4 className={"text-lg text-primary font-medium my-2"}>
              For SMEs
            </h4>
            {faqDataForSME.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-arrow join-item border-base-300 border"
              >
                <input type="radio" name="my-accordion-4" />
                <div className="text-primary collapse-title text-lg font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="join join-vertical w-full my-4">
            <h4 className={"text-lg text-primary font-medium my-2"}>
              For Investors
            </h4>
            {faqDataForInvestors.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-arrow join-item border-base-300 border"
              >
                <input type="radio" name="my-accordion-4" />
                <div className="text-primary collapse-title text-lg font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const faqDataForSME = [
  {
    question: "What is Raise Africa?",
    answer:
      "Raise Africa is a decentralized finance (DeFi) platform designed to facilitate capital raising for African startups and SMEs through token equity or token bonds. It leverages blockchain technology to provide a transparent and efficient marketplace for investors and businesses.",
  },
  {
    question: "How does Raise Africa work?",
    answer:
      "Raise Africa uses blockchain technology to enable African businesses to raise funds by issuing tokens (either equity or bonds). Investors from around the world can purchase these tokens, providing the necessary capital for growth and development.",
  },
  {
    question: "Who can raise funds on Raise Africa?",
    answer:
      "Any African startup or SME looking to raise capital for growth and development can apply to raise funds on Raise Africa. The business must comply with local regulations and provide necessary documentation.",
  },
  {
    question: "What types of funding can I raise on Raise Africa?",
    answer:
      "You can raise funds through token equity (shares) or token bonds (loans). Token equity involves selling a portion of your company's ownership, while token bonds involve issuing debt that must be repaid with interest.",
  },
  {
    question: "How do I get started with Raise Africa?",
    answer:
      "Connect your Web3 wallet, submit your project with detailed business information, choose the type of funding (equity or bonds), set your financial goals, submit your campaign for approval, attract investors, receive funds in fiat currency (USDT), and create a 20% liquidity reserve.",
  },
  {
    question:
      "What are the fees associated with raising funds on Raise Africa?",
    answer:
      "Raise Africa charges a 3% commission on the total funds raised through the platform.",
  },
  {
    question: "How long does it take to raise funds on Raise Africa?",
    answer:
      "The duration of the fundraising campaign depends on various factors, including the amount sought and investor interest. If the target is not reached within six months, Raise Africa refunds its service fees.",
  },
  {
    question: "What is the 20% liquidity reserve?",
    answer:
      "The 20% liquidity reserve ensures that investors can swap their equity tokens for USDT at any time or receive repayments if they hold token bonds.",
  },
  {
    question: "How secure is Raise Africa?",
    answer:
      "Raise Africa leverages blockchain technology to ensure secure, transparent, and tamper-proof transactions through the use of smart contracts.",
  },
  {
    question:
      "Can I raise funds if my company is headquartered outside Africa?",
    answer:
      "No, Raise Africa focuses on African SMEs. Companies headquartered outside Africa cannot raise funds on the platform.",
  },
  {
    question:
      "How do investors benefit from investing in my business on Raise Africa?",
    answer:
      "Investors can diversify their portfolios by investing in high-potential African SMEs. They can earn returns through equity appreciation or interest payments on bonds.",
  },
  {
    question: "What happens if I don't meet my fundraising goal?",
    answer:
      "If the fundraising goal is not met within the specified period, Raise Africa refunds the 3% service fees. The campaign can be re-evaluated and re-submitted for another round of fundraising.",
  },
  {
    question: "How can I promote my fundraising campaign?",
    answer:
      "Raise Africa provides tools and resources for campaign promotion. Businesses can also leverage their own networks, social media, and marketing strategies to attract investors.",
  },
  {
    question: "How do I know if my campaign is successful?",
    answer:
      "A successful campaign meets or exceeds its fundraising goal within the specified timeframe. Raise Africa provides real-time tracking and analytics to monitor the campaign's progress.",
  },
  {
    question: "How do I create an effective campaign on Raise Africa?",
    answer:
      "An effective campaign includes a compelling project description, clear financial goals, transparent business plans, and regular updates. Highlight your unique value proposition and the impact of the funds on your business growth.",
  },
  {
    question:
      "What kind of support does Raise Africa provide during the fundraising process?",
    answer:
      "Raise Africa offers guidance on campaign creation, marketing strategies, and investor relations to help businesses achieve their funding goals.",
  },
  {
    question: "How do I contact Raise Africa for support or more information?",
    answer:
      "You can contact Raise Africa's support team via email at support@raiseafrica.finance or visit the website for more information and resources.",
  },
];

const faqDataForInvestors = [
  {
    question: "What is Raise Africa?",
    answer:
      "Raise Africa is a decentralized finance (DeFi) platform designed to facilitate capital raising for African startups and SMEs through token equity or token bonds. It leverages blockchain technology to provide a transparent and efficient marketplace for investors and businesses.",
  },
  {
    question: "How does Raise Africa work?",
    answer:
      "Raise Africa enables investors to fund African startups and SMEs by purchasing tokens (equity or bonds) issued by these businesses. The platform uses blockchain technology to ensure secure, transparent, and efficient transactions.",
  },
  {
    question: "Who can invest on Raise Africa?",
    answer:
      "Any individual or institutional investor looking to diversify their portfolio and support African businesses can invest on Raise Africa.",
  },
  {
    question: "What types of investments can I make on Raise Africa?",
    answer:
      "You can invest in token equity (shares) or token bonds (loans) issued by African startups and SMEs. Token equity gives you ownership in the company, while token bonds are debt instruments with fixed returns.",
  },
  {
    question: "How do I get started with investing on Raise Africa?",
    answer:
      "1. Sign Up and Verify: Create an account on Raise Africa by connecting your web3 wallet and purchasing RAF Token.\n2. Browse Opportunities: Explore the list of startups and SMEs raising funds on the platform.\n3. Choose an Investment: Select the project you wish to invest in and review the detailed information provided.\n4. Purchase Tokens: Buy the tokens (equity or bonds) using fiat currency (USDT).\n5. Track Your Investments: Monitor the progress of your investments through your Raise Africa dashboard.",
  },
  {
    question: "How secure is my investment on Raise Africa?",
    answer:
      "Raise Africa leverages blockchain technology to ensure all transactions are secure and tamper-proof. Additionally, all startups and SMEs on the platform are recommended by reputable accelerators or incubators on the continent, providing an extra layer of credibility.",
  },
  {
    question:
      "What happens if a startup or SME fails to meet its funding goal?",
    answer:
      "If a startup or SME does not meet its funding goal within the specified period, your investment will be refunded. Raise Africa guarantees a refund of the service fees in such cases.",
  },
  {
    question: "What if a startup or SME misuses the funds or defaults?",
    answer:
      "Raise Africa has partnerships with several arbitration and legal bodies to ensure investors' interests are protected. In case of any misuse or default, the following organizations will assist in recovery and legal actions: \n- African Arbitration Association (AfAA)\n- OHADA Common Court of Justice and Arbitration (CCJA)\n- Cairo Regional Centre for International Commercial Arbitration (CRCICA)\n- Rwanda International Arbitration Centre (RIAC)\n- East African Court of Justice (EACJ)\n- Africa Commercial Dispute Settlement Centre\n- International Chamber of Commerce (ICC)\n- London Court of International Arbitration (LCIA)",
  },
  {
    question: "How do I earn returns on my investment?",
    answer:
      "If you invest in token equity, you may earn returns through dividends and potential appreciation of the company's value. For token bonds, you will receive fixed interest payments according to the terms specified by the issuing company.",
  },
  {
    question:
      "How are the funds managed and utilized by the startups and SMEs?",
    answer:
      "All startups and SMEs on Raise Africa are required to provide detailed plans on how the raised funds will be utilized. They must also create a liquidity reserve of 20% of the raised funds to ensure the ability to swap tokens or repay investors if necessary.",
  },
  {
    question: "What are the fees associated with investing on Raise Africa?",
    answer:
      "Raise Africa charges a 3% commission on the total amount raised by the startups and SMEs. This fee is used to maintain the platform and ensure its smooth operation.",
  },
  {
    question: "How do I monitor my investments?",
    answer:
      "Investors can track the progress and performance of their investments through the Raise Africa dashboard. The platform provides real-time updates and detailed analytics.",
  },
  {
    question: "Can I sell my tokens before the maturity date?",
    answer:
      "Yes, token equity can be swapped for USDT at any time using the platform’s built-in liquidity pool. However, the liquidity of token bonds depends on the terms specified by the issuing company.",
  },
  {
    question:
      "What due diligence does Raise Africa perform on listed startups and SMEs?",
    answer:
      "Raise Africa conducts rigorous due diligence on all startups and SMEs before listing them on the platform. This includes verifying their business plans, financial statements, and recommendations from reputable accelerators or incubators.",
  },
  {
    question: "How can I contact Raise Africa for support or more information?",
    answer:
      "You can contact Raise Africa's support team via email at support@raiseafrica.finance or visit our website for more information and resources.",
  },
];

export default FAQPage;
