import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import { Outlet } from "react-router";

export default function RootPage() {
  return (
    <div className=" font-merriweather space-y-12">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
