// components/Button.tsx

interface ButtonProps {
  label: string;
  border?: string;
  rounded?: string;
  textColor?: string;
  background?: string;
  capitalize?: boolean;
  arrow?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  border = "border border-[#8D5CF6]",
  rounded = "rounded-none",
  textColor = "color-white",
  background = "bg-[#8D5CF6]",
  capitalize = false,
  arrow = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-4 ${textColor} ${rounded} ${border} ${background} ${
        capitalize ? "uppercase" : ""
      }`}
    >
      {label}
      {arrow && (
        <svg
          className="w-4 h-4 ml-2 inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
