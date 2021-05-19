import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [fullSize, setFullSize] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 200 && !fullSize) {
      setFullSize(true);
    } else if (window.scrollY < 200) {
      setFullSize(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`search-bar${fullSize ? " full-size" : ""}`}>
      <AiOutlineSearch size={20} color="white" />
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
