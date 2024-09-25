import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="sticky top-0 flex text-primary py-6 px-2 justify-center font-medium z-50 bg-white">
      <nav className="flex gap-[clamp(1rem,10vw,3.5rem)]">
        <NavLink href="/">홈</NavLink>
        <NavLink href="/about">회사 소개</NavLink>
        <NavLink href="/export">중고차 직수출</NavLink>
      </nav>
    </header>
  );
};

export default Header;
