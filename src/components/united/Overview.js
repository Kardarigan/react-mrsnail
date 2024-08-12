import { Card } from "../Portal";

const Overview = ({ things, filters }) => {
  return (
    <section className="pagecenter padding-y max-md:px-5">
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {things.map((card, index) => {
          return <Card product={card} />;
        })}
      </div>
    </section>
  );
};

export default Overview;
