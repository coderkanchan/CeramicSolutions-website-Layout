// ReviewCard.jsx
import { FaStar } from "react-icons/fa";


export default function TestimonialCard({ src, name, title, review }) {
  // Helper to generate star icons based on the rating prop (e.g., 5)

  return (
    <div className="  b rounded-2xl shadow-[0_2px_44px_3px_#5757571A] p-7 bg-white min-h-[300px] flex flex-col justify-start">
      <div className="flex items-center mb-4">
        {/* Placeholder for the profile image */}
        <img
          src={src} // Replace with actual image source or prop
          alt={name}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>

      <div className="flex gap-2 my-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="text-[#FCB547] " aria-hidden>
            <FaStar size={20} />
          </div>
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed font-normal text-base">
        {review}
      </p>
    </div>
  );
};
