function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold md-10 py-5 px-10">
      <div>
        <h1 className="text-7xl">PTech Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to
          <span className="underline decoration-4 decoration-[#F7AB0A] ml-1">
            Every Developers
          </span>
          Favorite Blog in the Developer
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New product Features | The latest in Technology | The Weekly debugging
        nightmares & More!
      </p>
    </div>
  );
}

export default Banner;
