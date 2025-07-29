import logo from "../assets/logo.webp"; // Adjust the path as necessary
const Logo: React.FC<{ width: number }> = ({ width }) => {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="Company Logo"
        className={`w-${width} mr-4 rounded-md`}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://placehold.co/120x40/4a5568/ffffff?text=Logo";
        }}
      />
    </div>
  );
};
export default Logo;
