import { Facebook, Github, Linkedin } from "lucide-react";
import Logo from "@/assets/takime-logo.svg";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="wrapper py-8 dark:text-neutral-500 text-center space-y-4">
      <div className="flex items-center justify-center gap-4">
        <Link to="/">
          <img className="max-w-24 mx-auto" src={Logo} alt="takime logo" />
        </Link>
        <div className="flex items-center justify-center gap-4">
          <Facebook />
          <Github />
          <Linkedin />
        </div>
      </div>
      <p className="text-xs w-1/2 mx-auto">
        <strong>Disclaimer:</strong> This site uses data from third-party APIs
        like Jikan and does not host or stream any anime content. All
        information is for informational purposes only.
      </p>
    </div>
  );
}
