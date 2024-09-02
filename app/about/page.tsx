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
                landscape for blockchain startups in Africa. Our mission is to
                create a sustainable and inclusive ecosystem where innovative
                solutions can thrive, addressing critical challenges in
                education, healthcare, the environment, anti-counterfeiting, and
                food security.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>Our Vision</h4>
              <p>
                We envision a future where blockchain technology drives
                transformative change across Africa. By connecting global
                investors with promising startups, we aim to foster a
                collaborative environment that promotes sustainable growth and
                development. Raise Africa is committed to empowering
                entrepreneurs and providing them with the resources they need to
                succeed.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>Our Story</h4>
              <p>
                Founded with the belief that technology can be a catalyst for
                positive change, Raise Africa was established as a decentralized
                autonomous organization (DAO) to support blockchain startups in
                Africa. Initially operating as a venture capital entity, we have
                recently pivoted to a crowdfunding platform to better serve our
                community and maximize our impact.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>What we do</h4>
              <p>
                Raise Africa provides a seamless and secure platform for
                startups to raise funds and for investors to support projects
                that align with their values. Our platform offers:
              </p>
              <ul className={"flex flex-col gap-5"}>
                <li>
                  <p>
                    <span className={"text-primary"}>Access to Startups: </span>
                    Discover and invest in a diverse range of blockchain
                    startups focused on solving key challenges in Africa.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={"text-primary"}>
                      Access to Investors:{" "}
                    </span>
                    Startups can connect with a global network of investors
                    eager to fund impactful projects
                  </p>
                </li>
                <li>
                  <p>
                    <span className={"text-primary"}>
                      Affordable Solutions:{" "}
                    </span>
                    Our transparent and cost-effective platform ensures that
                    both investors and startups can maximize their efforts.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={"text-primary"}>
                      Efficient Disbursement:{" "}
                    </span>
                    Secure and timely disbursement of funds to ensure that
                    investments reach their intended projects promptly.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>Our Team</h4>
              <p>
                Raise Africa is powered by a diverse team of experts in
                blockchain technology, finance, and sustainable development. Our
                team is passionate about creating opportunities for startups and
                investors to collaborate and drive positive change across
                Africa.
              </p>
            </div>
            <div>
              <h4 className={"text-primary font-semibold"}>Join Us</h4>
              <p>
                We invite you to join us in our mission to empower blockchain
                startups in Africa. Whether you are an investor looking to make
                a meaningful impact or a startup seeking funding, Raise Africa
                is here to support you. Together, we can create a brighter
                future for the continent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
