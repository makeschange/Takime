import Logo from "@/assets/takime-logo.svg";
import { Link } from "react-router";
import { Facebook, Github, Linkedin, Sun, Moon } from "lucide-react";
import SearchAnime from "../anime/searchAnime";
import { toggleTheme } from "@/lib/toggleTheme";
import { useState } from "react";

export default function Header() {
  const [themeMode, setThemMode] = useState<boolean>(true);
  const onThemeChange = () => {
    setThemMode((preValue) => !preValue);
    toggleTheme();
  };
  return (
    <div className="wrapper px-12 py-4 flex items-center gap-12 relative z-50 ">
      <Link to="/">
        <img className="max-w-40" src={Logo} alt="takime logo" />
      </Link>
      <SearchAnime />
      <div className="flex items-center gap-4">
        <Facebook />
        <Github />
        <Linkedin />
        <button
          onClick={onThemeChange}
          className="bg-none hover:opacity-75"
          title="Toggle to dark or light mode"
        >
          {themeMode ? (
            <Moon className="text-yellow-400" />
          ) : (
            <Sun className="text-yellow-400" />
          )}
        </button>
      </div>
    </div>
  );
}
