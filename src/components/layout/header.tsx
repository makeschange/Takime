import Logo from "@/assets/takime-logo.svg";
import { Link } from "react-router";
import { Facebook, Github, Linkedin, Sun, Moon, Search } from "lucide-react";
import SearchAnime from "../anime/searchAnime";
import { toggleTheme } from "@/lib/toggleTheme";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Header() {
  const [themeMode, setThemMode] = useState<boolean>(true);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const onThemeChange = () => {
    setThemMode((preValue) => !preValue);
    toggleTheme();
  };
  return (
    <div className="wrapper px-2 md:px-12 py-4 flex justify-between md:justify-start md:items-center gap-4 md:gap-12 relative z-50 ">
      <Link to="/">
        <img className="max-w-24 md:max-w-40" src={Logo} alt="takime logo" />
      </Link>
      <SearchAnime className="hidden md:block" />
      <div className="flex items-center gap-2 md:gap-4">
        <Facebook className="hidden md:block" />
        <Github className="hidden md:block" />
        <Linkedin className="hidden md:block" />
        <Search
          onClick={() => setSearchOpen((preValue) => !preValue)}
          className="block md:hidden text-custom-red hover:opacity-75"
        />
        {searchOpen && (
          <Dialog
            modal
            open={searchOpen}
            onOpenChange={(open) => setSearchOpen(open)}
          >
            <DialogContent>
              <SearchAnime
                className="block md:hidden mt-8"
                onCloseOnClick={() => setSearchOpen(false)}
              />
            </DialogContent>
          </Dialog>
        )}
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
