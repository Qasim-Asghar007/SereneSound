import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = [
    "#6a5acd", // deep purple
    "#9370db", // medium purple
    "#ba55d3", // pink-purple
    "#40c4ff", // soft sky blue
    "#6a5acd", // deep purple
  ],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
