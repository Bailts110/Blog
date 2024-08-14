import { Link } from "react-router-dom";
import Button from "../components/Button";
export default function Navbar() {
  return (
    <header className="w-full bg-white border-b">
      <nav className="flex items-center justify-between p-4  max-w-[1440px] mx-auto ">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-medium ">Help Scout</h1>

          <Link
            className="text-gray-500 hover:text-black transition-colors"
            to={"/"}
          >
            Home
          </Link>


          
        </div>

        <Button>
          <Link to={"add"}>Add Post</Link>
        </Button>
      </nav>
    </header>
  );
}
