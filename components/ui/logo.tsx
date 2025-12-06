import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Hackstle">
      <Image
        src="/images/hackstle-logo1.png"
        alt="Hackstle logo"
        width={370}
        height={114}
        priority
        className="h-10 w-auto sm:h-12"
      />
    </Link>
  );
}
