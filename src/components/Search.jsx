function Search({ searchTerm, setSearchTerm, errorMsg, handleSearch }) {

    return (
        <>
            <p className="text-center mt-5 mb-2 text-xl font-medium tracking-wide">Compare newspaper headlines</p>
            <div className="w-11/12 lg:w-full max-w-lg md:max-w-2xl flex flex-row items-center gap-2 sm:gap-4 mx-auto">
                <input
                    className="w-full border border-lightGrey rounded-lg py-2.5 px-2 sm:py-4 sm:px-3 sm:text-xl text-GreyGoose"
                    id="search"
                    type="text"
                    placeholder="Search any topic to compare"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyUp={(e) => (e.key === "Enter" ? handleSearch() : null)}
                    value={searchTerm}
                />
                <button
                    className="bg-black text-white rounded-lg py-2.5 px-2 sm:py-4 sm:px-3 sm:text-xl font-semibold tracking-wide hover:opacity-80  ease-linear transition-all duration-150"
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