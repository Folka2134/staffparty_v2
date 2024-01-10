const Navbar = () => {
  return (
    // <div className="flex flex-col items-stretch bg-stone-950 pb-3">
    <nav className="sticky top-0 flex w-full items-center justify-between py-5 pl-20 pr-7 max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <div className="flex gap-5">
        <div className="text-center text-xl font-semibold text-stone-300">
          Home
        </div>
        <div className="self-stretch text-center text-xl font-semibold text-stone-300">
          Music
        </div>
        <div className="self-stretch text-center text-xl font-semibold text-stone-300">
          Merch
        </div>
      </div>
      <div className="absolute right-5 top-7 flex flex-col items-stretch gap-5 md:flex-row">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/16e95ef8492418adf8563e4f22f90e49ab300b11b665264f7739cc37aeffba94?apiKey=b974e357fd9f463191c95ccdb4f3dae3&"
          className="aspect-square w-[18px] max-w-full shrink-0 overflow-hidden object-contain object-center"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6ba46378b995a11be6a9830333b9717a3b66b747134a111bc9f5e53147b12aa?apiKey=b974e357fd9f463191c95ccdb4f3dae3&"
          className="aspect-square w-[18px] max-w-full shrink-0 overflow-hidden fill-white object-contain object-center"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6bc122d1a395644aea1cb2508446f0454cf08c874c1b4198c65e2eb30228393?apiKey=b974e357fd9f463191c95ccdb4f3dae3&"
          className="aspect-square w-[18px] max-w-full shrink-0 overflow-hidden object-contain object-center"
        />
      </div>
    </nav>
    // </div>
  );
};

export default Navbar;
