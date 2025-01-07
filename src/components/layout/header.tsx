import Logo from "@/assets/takime-logo.svg";
import { Link } from "react-router";
import { Facebook, Github, Linkedin } from "lucide-react";
import SearchAnime from "../anime/searchAnime";

export default function Header() {
  return (
    <div className="wrapper px-12 py-4 flex items-center gap-12 relative z-50 bg-black/50">
      <Link to="/">
        <img className="max-w-40" src={Logo} alt="takime logo" />
      </Link>
      <SearchAnime />
      <div className="flex items-center gap-4">
        <Facebook />
        <Github />
        <Linkedin />
      </div>
    </div>
  );
}
