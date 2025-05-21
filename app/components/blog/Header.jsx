import Link from "next/link";

export default function PageHeader({ title, path }) {
  return (
    <div className="bg-gray-100 flex justify-between px-6 py-4 text-sm text-gray-700">
      <p className="font-semibold">{title}</p>
      <p>
        {path.map((item, index) => (
          <span key={index}>
            <Link href={item.href} className="hover:font-bold">
              {item.label}
            </Link>
            {index < path.length - 1 && " / "}
          </span>
        ))}
      </p>
    </div>
  );
}
