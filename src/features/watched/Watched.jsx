import WatchedItem from "./WatchedItem";

function Watched({ watched }) {
  return (
    <div>
      {watched.map((item) => (
        <WatchedItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Watched;
