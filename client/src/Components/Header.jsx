import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div class="bg-teal-100 text-teal-700">
        <div class="flex justify-between items-center max-w-6xl h-16 mx-auto">
          <Link to="/">
            <h1 class="font-bold">Auth App</h1>
          </Link>
          <ul class="flex gap-4 text-lg">
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
