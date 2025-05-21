export function Badge({ text, color = "bg-blue-100 text-blue-700" }) {
  return (
    <span
      className={`text-xs font-medium px-3 py-1 rounded-full inline-block ${color}`}
    >
      {text}
    </span>
  );
}
