import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function StarRating({ max = 10, value = 0, onChange, readOnly = false, size = 18 }) {
  const [hovered, setHovered] = useState(0);
  const display = hovered || value;

  return (
    <div className="flex items-center gap-1" role={readOnly ? undefined : "radiogroup"}>
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => {
        const filled = star <= display;
        const Icon = filled ? FaStar : FaRegStar;
        return (
          <button
            key={star}
            type="button"
            disabled={readOnly}
            aria-label={`${star} out of ${max}`}
            onMouseEnter={() => !readOnly && setHovered(star)}
            onMouseLeave={() => !readOnly && setHovered(0)}
            onClick={() => !readOnly && onChange?.(star)}
            className={
              readOnly ? "cursor-default" : "cursor-pointer transition-transform hover:scale-110"
            }
          >
            <Icon size={size} className={filled ? "text-yellow-300" : "text-red-600"} />
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;
