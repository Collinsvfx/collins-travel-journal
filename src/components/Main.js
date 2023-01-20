import Card from "./Card";
import database from "../Database";

export default function Main() {
  const mappedData = database.map((data) => {
    return <Card key={data.id} {...data} />;
  });

  return (
    <div className="bg-purpose">
      <div className="main-cont">
        <div>{mappedData}</div>
      </div>
    </div>
  );
}
