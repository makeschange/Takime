export default function AnimeDetailParagraph({
  label,
  value,
}: {
  label?: string;
  value?: string;
}) {
  return (
    <p>
      <span className="font-bold leading-relaxed text-neutral-400">
        {label}:{" "}
      </span>
      {value}
    </p>
  );
}
