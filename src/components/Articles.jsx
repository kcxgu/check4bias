import { useEffect, useState } from "react";
import Sentiment from "sentiment";

const Articles = ({ source, title, link, date }) => {
    const [sentimentScore, setSentimentScore] = useState(null);

    let formatted = { day: "numeric", month: "long", year: "numeric" }
    let articleDate = new Date(date).toLocaleDateString("en-GB", formatted)

    useEffect(() => {
        const sentiment = new Sentiment();
        setSentimentScore(sentiment.analyze(title));
    }, [title]);

    return (
        <>
            <div className="w-full border border-lightGrey rounded-lg py-4 sm:py-5 px-5 md:px-4 lg:px-5 bg-white shadow-lg">
                {sentimentScore !== null ?
                    <div className="group relative flex flex-col items-end">
                        <span className="absolute max-w-xs md:max-w-sm lg:max-w-lg bg-GreyGoose text-white text-justify -top-40 -right-3 md:-top-36 md:-right-10 lg:-top-40 lg:-right-14 xl:-top-36 scale-0 rounded-lg py-3 px-4 group-hover:scale-100">How emotive the headline is, based on words rated for goodness/badness on a scale of -5 (extremely negative) to 5 (extremely positive) via 0 (neutral) -
                            <a href="http://www2.imm.dtu.dk/pubdb/pubs/6010-full.html" target="_blank" rel="noopener noreferrer" className="underline pl-1 pr-2.5"
                            >
                                AFINN-en-165.
                            </a>
                            Indicative purposes only.
                        </span>
                        <p className="text-right py-1 my-0.5 cursor-help text-indigo font-medium tracking-wide">Sensationalist Score: {sentimentScore.score}
                            <span className="ml-1 bg-lightGrey rounded-full px-1 text-sm align-super text-GreyGoose">?</span>
                        </p>
                    </div>
                    :
                    "Unknown"
                }
                <a href={link} target="_blank" rel="noopener noreferrer"
                    className="hover:text-pink"
                >
                    <p className="mb-3 text-xl font-medium tracking-wide">{title}</p>
                </a>
                <div className="flex flex-row lg:flex-col items-center lg:items-start lg:gap-1 xl:gap-0 justify-between">
                    <div className="flex flex-row items-center gap-4 uppercase text-xs">
                        <p>{articleDate}</p>
                        <p>{source}</p>
                    </div>
                    <a href={link} target="_blank" rel="noopener noreferrer"
                        className="bg-lightGrey text-white py-1 px-2 rounded font-semibold lg:mt-4 hover:bg-pink"
                    >
                        Read Article
                    </a>
                </div>
            </div>
        </>
    )
}

export default Articles