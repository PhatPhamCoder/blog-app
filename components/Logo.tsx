import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
