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

          <div className="join join-vertical w-full">
            {faqData.map((faq, index) => (
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

const faqData = [
  {
    question: "What is Raise Africa?",
    answer:
      "Raise Africa is a decentralized finance (DeFi) platform designed to facilitate capital raising for African startups and SMEs through token equity or token bonds. It leverages blockchain technology to provide a transparent and efficient marketplace for investors and businesses.",
  },
  {
    question: "How does Raise Africa work?",
    answer:
      "Raise Africa allows African startups and SMEs to create fundraising campaigns on the platform by issuing token equity or token bonds. Investors can purchase these tokens using USDT, representing a stake in the company or a debt obligation.",
  },
  {
    question: "What makes Raise Africa unique?",
    answer:
      "Raise Africa integrates DeFi principles with traditional fundraising methods, offering a liquidity pool mechanism for token swaps. This ensures liquidity and stability while guaranteeing a maximum of 6 months for raising funds or a refund of service fees.",
  },
  {
    question: "What are the benefits for startups and SMEs using Raise Africa?",
    answer:
      "Benefits include access to global investors, a 20% liquidity pool for token stability, lower service fees for partner-backed companies, automated token pricing through smart contracts, and expert guidance.",
  },
  {
    question:
      "How can African startups and SMEs apply to raise funds on Raise Africa?",
    answer:
      "Companies can apply by filling out the campaign form on the Raise Africa website. After review and approval, they can begin raising funds on the platform.",
  },
  {
    question:
      "What are the fees associated with raising funds on Raise Africa?",
    answer:
      "Raise Africa charges a standard service fee of 3% of the funds raised. Companies recommended by partner accelerators and incubators benefit from a reduced fee of 2%.",
  },
  {
    question: "What is the liquidity pool, and why is it important?",
    answer:
      "The liquidity pool represents 20% of the funds raised and ensures sufficient liquidity for investors wishing to swap token equity for USDT. It supports token stability and facilitates investor exits.",
  },
  {
    question: "How is the token value determined?",
    answer:
      "The token value is determined by a smart contract based on supply and demand in the liquidity pool. As token supply decreases, its price increases, and vice versa.",
  },
  {
    question: "What types of tokens can be issued on Raise Africa?",
    answer:
      "Two types of tokens can be issued: Token Equity, representing company ownership and swappable for USDT, and Token Bonds, representing a debt obligation with annual interest payments.",
  },
  {
    question: "How secure is Raise Africa?",
    answer:
      "Raise Africa uses blockchain technology and smart contracts to ensure transparency, security, and automated processes, minimizing fraud risks and ensuring platform integrity.",
  },
  {
    question: "What are the risks associated with investing on Raise Africa?",
    answer:
      "Investing in startups and SMEs involves risks, including potential capital loss. Raise Africa advises investors to invest only what they are prepared to lose.",
  },
  {
    question: "How can investors participate on Raise Africa?",
    answer:
      "Investors can sign up on the Raise Africa platform, browse available campaigns, and purchase token equity or token bonds using USDT.",
  },
  {
    question:
      "What is the process for startups and SMEs after submitting the campaign form?",
    answer:
      "After submitting the form, the Raise Africa team reviews the application. Once approved, the company is guided through campaign creation and liquidity pool setup.",
  },
  {
    question:
      "What happens if a company does not raise the targeted funds within 6 months?",
    answer:
      "If a company fails to raise its target funds within 6 months, Raise Africa refunds the service fees, ensuring no financial loss for the fundraising effort.",
  },
  {
    question:
      "How does Raise Africa support the promotion of fundraising campaigns?",
    answer:
      "Raise Africa shares campaigns within its network. However, campaign success depends significantly on promotion efforts by the company within its own community.",
  },
  {
    question:
      "What support does Raise Africa offer to companies during the fundraising process?",
    answer:
      "Raise Africa provides guidance on campaign creation, marketing strategies, and investor connections. It also offers resources to help maximize fundraising success.",
  },
  {
    question:
      "What are the next steps after successfully raising funds on Raise Africa?",
    answer:
      "After raising funds, companies must create a liquidity pool and add their token equity to the swap table. Funds can be used according to the business plan for growth and scaling.",
  },
  {
    question: "How does Raise Africa ensure transparency and trustworthiness?",
    answer:
      "Raise Africa uses blockchain technology and smart contracts for transparency and security. Its decentralized platform minimizes fraud risks and enhances investor trust.",
  },
  {
    question: "How can interested parties get in touch with Raise Africa?",
    answer:
      "Startups, SMEs, and investors can visit the Raise Africa website or contact the support team at support@raiseafrica.finance for more information.",
  },
  {
    question: "What are the future plans for Raise Africa?",
    answer:
      "Raise Africa plans to expand its reach, improve the platform, and introduce new features to enhance the fundraising experience, aiming to become the leading decentralized fundraising platform in Africa.",
  },
];
export default FAQPage;
