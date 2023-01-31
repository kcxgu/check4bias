const Feed = ({ title, link, date }) => {

    let formatted = { day: "numeric", month: "long", year: "numeric" }
    let articleDate = new Date(date).toLocaleDateString("en-GB", formatted)

    return (
        <>
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:opacity-90 hover:text-pink">
                <h3 className="text-xl mb-1 underline tracking-wide font-medium">{title}</h3>
                <p className="mb-1 pb-1">{articleDate}</p>
            </a>
        </>
    )
}

export default Feed;