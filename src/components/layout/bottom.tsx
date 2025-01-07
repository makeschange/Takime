import UpcomingAnime from "../anime/upcomingAnime";

export default function Bottom() {
  return (
    <div className="wrapper">
      <h2 className="text-custom-red text-2xl mb-12 border-b border-b-neutral-800 pb-4">
        Upcoming Anime{" "}
      </h2>
      <UpcomingAnime />
    </div>
  );
}
