import { ContactButton } from "../ui/ContactButton";
import { NavLink } from "../ui/NavLink";

const Header = () => {
  return (
    <header className="p-4 bg-gray-100">
      <nav className="container">
        <ul className="flex gap-3">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <ContactButton />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
