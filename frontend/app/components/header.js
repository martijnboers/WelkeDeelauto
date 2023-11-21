import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <Link
          className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
          href={"/"}
        >
          <Image src={logo} width={125} height={100} alt="Logo" />
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <Link className="hover:text-gray-900" href={"/about"}>
            Over deze website
          </Link>
        </nav>
      </div>
    </header>
  );
}
