import MediaGrid from "../movies/MediaGrid";

function WatchList({ watchlist }) {
  return (
    <MediaGrid
      items={watchlist}
      emptyMessage="Your watchlist is empty. Save titles you want to watch next."
    />
  );
}

export default WatchList;
