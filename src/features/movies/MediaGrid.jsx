import MediaCard from "./MediaCard";

function MediaGrid({ items, emptyMessage = "Nothing here yet." }) {
  if (!items?.length) {
    return (
      <div className="flex min-h-[30vh] items-center justify-center">
        <p className="font-mono text-sm text-mist">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((item) => (
        <MediaCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MediaGrid;
