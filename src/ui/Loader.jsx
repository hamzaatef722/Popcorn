function Loader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" role="status">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-mist/30 border-t-neon" />
        <p className="font-mono text-sm text-mist">loading reel…</p>
      </div>
    </div>
  );
}

export default Loader;
