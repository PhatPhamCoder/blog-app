import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <Link href={"/"} className="flex items-center space-x-2">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png"
          alt="logo header"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h1>PTECH</h1>
      </Link>
      <div>
        <Link
          href="https://facebook.com/phatphamstudio"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
}

export default Header;
