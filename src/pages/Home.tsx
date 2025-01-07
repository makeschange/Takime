import Banner from "@/components/layout/banner";
import Bottom from "@/components/layout/bottom";
import Middle from "@/components/layout/middle";

export default function Home() {
  return (
    <div className=" font-merriweather space-y-12">
      <Banner />
      <Middle />
      <Bottom />
    </div>
  );
}
