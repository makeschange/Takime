import CurrentAiredAnime from "../anime/currentAiredAnime";

export default function Middle() {
  return (
    <div className="wrapper">
      <h2 className="text-custom-red text-2xl mb-12 border-b border-b-neutral-800 pb-4">
        Current Airing{" "}
      </h2>
      <CurrentAiredAnime />
    </div>
  );
}
