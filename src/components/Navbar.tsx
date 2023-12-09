const Navbar = () => {
  return (
    <nav className="text-text sticky top-0 flex h-16 items-center">
      <div className="flex-end flex w-full items-center justify-between p-6">
        <img src="#" alt="logo" />
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Releases</li>
        </ul>
        <div className="">Social bar</div>
      </div>
    </nav>
  );
};

export default Navbar;
