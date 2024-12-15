const AboutPage = () => {
  return (
    <section className="flex flex-col gap-6 px-5 py-5 w-full">
      <div className="w-full max-[806px]:max-w-[458px] max-w-screen-md xl:max-w-screen-lg pt-5 mx-auto sm:py-5">
        <div className="rounded bg-[#222221] flex justify-center items-center flex-col sm:p-10 p-4">
          <div className="flex justify-center items-center bg-secondary p-4 rounded sm:min-w-[380px]">
            <h1 className="sm:text-xl text-primary font-medium">
              About Raise Africa
            </h1>
          </div>

          <div className="w-full lg:w-10/12 flex flex-col mt-5 gap-10">
            <Section title="Our Story">
              Raise Africa was created to empower African entrepreneurs and
              revolutionize the financial landscape of the continent. We
              recognized the immense potential and innovation in African
              startups and SMEs, and sought to bridge the gap between these
              businesses and global investors. Through decentralized finance
              (DeFi) and blockchain technology, Raise Africa provides a
              transparent, secure, and efficient solution for raising capital.
            </Section>

            <Section title="Our Vision">
              To be the leading decentralized crowdfunding platform that enables
              African startups and SMEs to achieve sustainable growth by
              accessing global investment seamlessly.To be the leading
              decentralized crowdfunding platform that enables African startups
              and SMEs to achieve sustainable growth by accessing global
              investment seamlessly.
            </Section>
            <Section title="Our Mission">
              We aim to democratize access to capital for African entrepreneurs
              using decentralized finance and blockchain technology. Our mission
              is to provide transparent, efficient, and secure investment
              opportunities that foster innovation and drive economic growth
              across Africa.
            </Section>

            <Section title="What We Do">
              Raise Africa facilitates the fundraising process for African
              startups and SMEs by enabling them to issue token equity or token
              bonds. Our platform connects these businesses with a global
              network of investors, providing a streamlined and efficient way to
              raise capital. Our unique liquidity pool mechanism ensures that
              token equity remains liquid and tradable, offering stability and
              confidence to investors.
            </Section>

            <Section title="Our Team">
              <ul className="flex flex-col gap-5">
                {[
                  {
                    label: "Access to Companies",
                    text: "Discover and invest in a wide variety of businesses.",
                  },
                  {
                    label: "Access to Investors",
                    text: "Connect with global investors eager to support impactful ventures.",
                  },
                  {
                    label: "Affordable Solutions",
                    text: "Transparent, low-cost crowdfunding services.",
                  },
                  {
                    label: "Efficient Disbursement",
                    text: "Ensuring timely and secure distribution of funds.",
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <p>
                      <span className="text-primary">{item.label}: </span>
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-5">
                {[
                  {
                    label: "Marcel Eboa: ",
                    text: "Co-founder & CEO",
                  },
                  {
                    label: "Fabien Korgo: ",
                    text: "Co-founder & CTO",
                  },
                  {
                    label: "Supervisory Board and Advisors",
                    text: "",
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <p>
                      <span className="text-primary">{item.label} </span>
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Join Us">
              At Raise Africa, we are committed to creating a brighter future
              for African entrepreneurship. By joining our platform, you become
              part of a movement transforming the way businesses raise funds and
              driving sustainable economic growth across the continent. <br />
              <span className={"text-primary"}>
                Invest in the future of Africa. Join Raise Africa today.
              </span>
              <br />
              For more information, visit our website or contact us at
              support@raiseafrica.finance.
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section = ({
  title = "",
  //@ts-ignore
  children,
}) => (
  <div>
    <h4 className="text-primary font-semibold">{title}</h4>
    <p>{children}</p>
  </div>
);

export default AboutPage;
