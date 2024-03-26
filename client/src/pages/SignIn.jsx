import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate() 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);

        const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(ture);
        return;
      }
      navigate("/")
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-indigo-800 text-3xl text-center font-semibold uppercase p-6">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
        
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-indigo-100 p-3  rounded-lg placeholder:text-indigo-800"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-indigo-100 p-3  rounded-lg placeholder:text-indigo-800"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-indigo-800 text-indigo-100 font-bold p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don<sup>'</sup>t have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      <p className="text-red-700 mt-2">{error && "Something went wrong!"}</p>
    </div>
  );
}

export default SignIn;
