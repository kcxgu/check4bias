import axios from "axios";
import { useState } from "react";

function Search({ setFoundArticles }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSearch = async (e) => {
        if (searchTerm) {
            try {
                const res = await axios.get(`http://localhost:3001/search/${searchTerm}`)
                setFoundArticles(res.data.data)
            } catch (err) {
                console.log(err);
                setErrorMsg("No articles found")
            }
            setErrorMsg("")
        }
    }

    return (
        <>
            <p className="text-center mt-5 mb-2 text-xl font-medium tracking-wide">Compare newspaper headlines</p>
            <div className="w-11/12 lg:w-full max-w-lg md:max-w-2xl flex flex-row items-center gap-4 mb-10 mx-auto">
                <input
                    className="w-full border border-lightGrey rounded-lg py-4 px-3 text-xl text-GreyGoose"
                    id="search"
                    type="text"
                    placeholder="Enter a keyword to search and compare"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyUp={(e) => (e.key === "Enter" ? handleSearch() : null)}
                    value={searchTerm}
                />
                <button
                    className="bg-black text-white rounded-lg py-4 px-5 text-xl font-semibold tracking-wide hover:opacity-80"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <p className="text-red text-center">{errorMsg}</p>
        </>
    )
}

export default Search;