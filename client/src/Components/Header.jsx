import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="bg-teal-100 text-teal-700">
        <div className="flex justify-between items-center max-w-6xl h-16 mx-auto">
          <Link to="/">
            <h1 className="font-bold">Auth App</h1>
          </Link>
          <ul className="flex gap-4 text-lg">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/sign-in">
              <li>Sign In</li>
            </Link>
            <Link to="/sign-up">
              <li>Sign Up</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
