import Header from "../components/Header";
import PropositionsList from "../components/PropositionsList";
import { propositionCategories } from "../constants";

const PropositionsPage = () => {
  return (
    <section className={"flex flex-col gap-6 px-16 py-5 w-full"}>
      <div className="max-w-screen-lg lg:max-w-screen-xl pt-5 mx-auto sm:py-5 w-10/12">
        <Header categories={[]} title={"proposition"} />
        <PropositionsList />
      </div>

      {/*{isConnected ? <h1>Hello, Campaigns Page!</h1> : <Error403 />}*/}
    </section>
  );
};

export default PropositionsPage;
