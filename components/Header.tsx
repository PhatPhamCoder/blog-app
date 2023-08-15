import Link from "next/link";
import Image from "next/image";

 function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <Link href={"/"} className="flex items-center space-x-2">
        <Image
          // src="https://blogger.googleusercontent.com/img/a/AVvXsEh2sOOkjMC_rehaWS7ZXePp2TWpE0e1HvqWStbEAnDlPTfIZGw6zu6drqMZL58SR5n3gz_IV1cn1riuDrQ_yM7G6UwsKHhc9Pdu3AfyRI3LZkHm9xrKrH72vDs4n23C_-6QfD_SK9yTwMTrGf4wIrOLeaH-hO_Z23N6ck3Aief3d3hqDKArJfmbJ8Z2=w300"
          src="https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png"
          alt="logo header"
          width={50}
          height={50}
          className="rounded-full border-2"
        />
        <h1 className="uppercase">PTECH - Community Tech</h1>
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