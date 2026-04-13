import Image from "next/image";

export default function TechItem({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 hover:scale-110 transition">
      <Image src={src} alt={name} width={40} height={40} />
      <span className="text-xs text-gray-400">{name}</span>
    </div>
  );
}
