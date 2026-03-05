import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Hatlisa Group"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
