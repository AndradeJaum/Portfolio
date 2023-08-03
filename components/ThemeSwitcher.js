import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme("light")}>L</button>
      <button onClick={() => setTheme("dark")}>D</button>
    </div>
  );
};

export default ThemeSwitcher;
