import { Menu } from "./menu";
import { MenuMobile } from "./menu-mobile";

export function Header() {
  return (
    <header className="flex sticky top-4 items-center justify-end sm:justify-center transition-all ease-in-out duration-300 animate-fade-down animate-once animate-duration-700 animate-delay-300 animate-ease-in z-50">
      <nav className="flex rounded-2xl border-0 sm:border border-ring/30 bg-secondary p-1 sm:shadow-sm">
        <div className="flex sm:hidden pr-4">
          <MenuMobile />
        </div>
        <div className="hidden sm:flex sm:flex-row justify-center items-center space-x-1">
          <Menu />
        </div>
      </nav>
    </header>
  );
}
