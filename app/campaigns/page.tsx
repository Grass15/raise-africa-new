import { useStateContext } from "../context";
import Header from "../components/Header";
import CampaignsList from "../components/CampaignsList";

const CampaignsPage = () => {
  return (
    <section className={"flex flex-col gap-6 px-5 py-5 w-full "}>
      <div className="w-full max-w-screen-md lg:max-w-screen-lg  pt-5 mx-auto sm:py-5">
        <Header categories={[]} title={"campaign"} />
        <CampaignsList />
      </div>
    </section>
  );
};

export default CampaignsPage;
