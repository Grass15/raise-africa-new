import { useStateContext } from "../context";
import Header from "../components/Header";
import CampaignsList from "../components/CampaignsList";
import { startupCategories } from "../constants";

const CampaignsPage = () => {
  return (
    <section className={"flex flex-col gap-6 px-5 py-5 w-full "}>
      <div className="w-full max-w-screen-md lg:max-w-screen-lg  pt-5 mx-auto sm:py-5">
        <Header categories={startupCategories} title={"campaign"} />
        <CampaignsList />
      </div>

      {/*{isConnected ? <h1>Hello, Campaigns Page!</h1> : <Error403 />}*/}
    </section>
  );
};

export default CampaignsPage;
