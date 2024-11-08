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
              About Raise Africa
            </h1>
          </div>
          <div className={"w-full lg:w-10/12 flex flex-col mt-5 gap-10"}>
            <div>
              <h4 className={"text-primary font-semibold"}>Our Mission</h4>
              <p>
                Raise Africa is dedicated to revolutionizing the funding
                landscape for African businesses, enabling any company, startup
                or not, to raise capital via blockchain. We aim to create an
                inclusive ecosystem that supports innovation across various
                sectors, including education, healthcare, and more.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>Our Vision</h4>
              <p>
                We envision a future where businesses across Africa can secure
                funds to drive sustainable development, supported by a global
                network of investors.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>Our Story</h4>
              <p>
                Originally a platform for blockchain startups, we have now
                pivoted to become a crowdfunding platform, allowing all African
                businesses to raise funds.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>What we do</h4>
              <p>
                Raise Africa offers a seamless platform where companies can
                raise funds and investors can support ventures in line with
                their values. Our offerings include:
              </p>
              <ul className={"flex flex-col gap-5"}>
                <li>
                  <p>
                    <span className={"text-primary"}>
                      Access to Companies:{" "}
                    </span>
                    Discover and invest in a wide variety of businesses.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={"text-primary"}>
                      Access to Investors:{" "}
                    </span>
                    Connect with global investors eager to support impactful
                    ventures.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={"text-primary"}>
                      Affordable Solutions:{" "}
                    </span>
                    Transparent, low-cost crowdfunding services
                  </p>
                </li>
                <li>
                  <p>
                    <span className={"text-primary"}>
                      Efficient Disbursement:{" "}
                    </span>
                    Ensuring timely and secure distribution of funds.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>Our Team</h4>
              <p>
                Our team consists of experts in finance, technology, and
                business development, focused on empowering African companies.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>Join Us</h4>
              <p>
                Be part of our mission to create impactful investment
                opportunities that foster Africa&apos;s development. Whether
                you&apos;re an investor or a business seeking funding, Raise
                Africa is here to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
