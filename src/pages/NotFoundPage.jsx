import { Link } from "react-router-dom";
import { FiFilm } from "react-icons/fi";

function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <FiFilm size={40} className="text-neon" />
      <h1 className="font-display text-3xl font-semibold">Reel missing</h1>
      <p className="max-w-sm text-mist">This page doesn't exist. It might have been moved or never made it to the print.</p>
      <Link to="/" className="btn-neon">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
