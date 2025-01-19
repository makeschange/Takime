export default function AnimeDetailParagraph({
  label,
  value,
}: {
  label?: string;
  value?: string;
}) {
  return (
    <p className="text-xs md:text-sm">
      <span className=" font-bold leading-relaxed text-neutral-400">
        {label}:{" "}
      </span>
      {value}
    </p>
  );
}
