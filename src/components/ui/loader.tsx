import { ThreeDots } from "react-loader-spinner";

export default function AnimeLoader() {
  return (
    <div className="max-w-sm mx-auto">
      <p className="text-neutral-400">Please wait...</p>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#ff2c1f"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
