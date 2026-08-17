import { motion } from "framer-motion";
import { FiBookmark, FiClock } from "react-icons/fi";

const TABS = [
  { id: "watchlist", label: "Watchlist", icon: FiBookmark },
  { id: "history", label: "History", icon: FiClock },
];

function ProfileTabs({ activeTab, setActiveTab }) {
  return (
    <div className="mb-8 flex gap-1 border-b border-mist/15">
      {TABS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === id ? "text-neon" : "text-mist hover:text-current"
          }`}
        >
          <Icon size={15} />
          {label}
          {activeTab === id && (
            <motion.span
              layoutId="profile-tab-underline"
              className="absolute inset-x-0 -bottom-px h-0.5 bg-neon"
            />
          )}
        </button>
      ))}
    </div>
  );
}

export default ProfileTabs;
