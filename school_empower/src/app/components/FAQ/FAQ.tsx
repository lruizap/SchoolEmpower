// components/FAQ/FAQ.tsx

interface FAQProps {
  title: string;
  label: string;
  border?: string;
  rounded?: string;
  textColor?: string;
  background?: string;
  capitalize?: boolean;
  arrow?: boolean;
}

const FAQ: React.FC<FAQProps> = ({
  title,
  label,
  border,
  rounded = "rounded-lg",
  textColor = "text-black",
  background = "bg-white",
  capitalize = false,
  arrow = false,
}) => {
  return (
    <div
      className={`px-4 py-4 ${textColor} ${rounded} ${border} ${background} ${
        capitalize ? "uppercase" : ""
      }`}
    >
      <div className="p-4 relative">
        <div className="absolute left-3 top-10 ">
          {arrow && (
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2689_5632)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780065 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780065 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16123 8.56959 8.23599C8.53857 8.31074 8.4931 8.37864 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994896 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#8D5CF6"
                />
              </g>
              <defs>
                <clipPath id="clip0_2689_5632">
                  <rect width="9" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </div>
        <div className="p-5 text-start">
          <h3 className="font-bold">{title}</h3>
          <p className="text-balance">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
