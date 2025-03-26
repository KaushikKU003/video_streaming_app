import { useTheme } from "../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="btn btn-outline-secondary" onClick={toggleTheme}>
      {theme === "light" ? <BsMoon size={20} /> : <BsSun size={20} />}
    </button>
  );
};

export default ThemeToggle;
