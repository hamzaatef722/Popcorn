function ErrorMessage({ message = "Couldn't load this. Check your connection and try again.", onRetry }) {
  return (
    <div className="flex min-h-[30vh] flex-col items-center justify-center gap-4 text-center">
      <p className="font-mono text-sm text-ember">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn-ghost">
          Try again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
