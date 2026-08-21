import { motion } from "framer-motion";
import { FiFilm } from "react-icons/fi";

function Loader() {
  return (
    <div className="flex min-h-[100vh] items-center justify-center" role="status">
      <div className="flex flex-col items-center gap-3">
        <motion.span
          initial={{ rotate: -8 }}
          animate={{ rotate: 8 }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="text-neon"
        >
          <FiFilm size={35} />
        </motion.span>
        <p className="font-mono text-sm text-mist">loading reel…</p>
      </div>
    </div>
  );
}

export default Loader;
