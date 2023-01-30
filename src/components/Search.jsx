function Search() {
    return (
        <div className="w-11/12 lg:w-full max-w-lg md:max-w-2xl flex flex-row items-center gap-4 mt-5 mb-10 mx-auto">
            <input
                className="w-full border border-lightGrey rounded-lg py-4 px-3 text-xl"
                type="text"
                placeholder="Search for a keyword to compare"
            />
            <button className="bg-black text-white rounded-lg py-4 px-6 text-xl font-semibold tracking-wide hover:opacity-80">Search</button>
        </div>
    )
}

export default Search;