import { useEffect, useState, useMemo } from "react";
import Sentiment from "sentiment";

const SortByNewspaper = ({ source, data }) => {
    const [sentimentScore, setSentimentScore] = useState(null);
    let accScore = useMemo(() => [], []);

    const getSentimentScore = (title) => {
        accScore.push(sentiment.analyze(title).score)
        return sentiment.analyze(title).score
    }

    useEffect(() => {
        setSentimentScore(accScore.reduce((partialSum, a) => partialSum + a, 0))
    }, [accScore])

    const sentiment = new Sentiment();

    return (
        <div className="max-w-md sm:max-w-none flex flex-col border border-lightGrey rounded-lg bg-white py-5 px-4 md:px-5 lg:px-4">
            {sentimentScore !== null ?
                <div className="group relative flex flex-col items-end">
                    <span className="absolute max-w-xs md:max-w-sm lg:max-w-lg bg-GreyGoose text-white text-justify -top-44 -right-3 md:-top-40 md:-right-10 lg:-right-14 xl:-top-36 scale-0 rounded-lg py-3 px-4 group-hover:scale-100">How emotive the below headlines are (in total) for the newspaper, based on words rated for goodness/badness on a scale of -5 (extremely negative) to 5 (extremely positive) via 0 (neutral) -
                        <a href="http://www2.imm.dtu.dk/pubdb/pubs/6010-full.html" target="_blank" rel="noopener noreferrer" className="underline pl-1 pr-2.5"
                        >
                            AFINN-en-165.
                        </a>
                        Indicative purposes only.
                    </span>
                    <p className="text-right pt-1.5 pb-2 my-0.5 cursor-help text-indigo font-medium tracking-wide">Total Sensationalist Score: {sentimentScore}
                        <span className="ml-1 bg-lightGrey rounded-full px-1 text-sm align-super text-GreyGoose">?</span>
                    </p>
                </div>
                :
                "Unknown"
            }
            <div className="w-full h-96 overflow-y-auto py-1 px-2">
                {data.map((item, i) =>
                    <div key={i}>
                        <div className="flex flex-row">
                            <a href={item.link} key={i} className="underline underline-offset-4 decoration-lighterGrey decoration-dashed hover:text-pink">
                                <p className="py-1 text-lg font-medium tracking-wide">{item.title}
                                    <span className="text-right py-1 my-0.5 pl-1.5 cursor-help text-indigo font-medium tracking-wide">({getSentimentScore(item.title)})</span>
                                </p>
                            </a>
                        </div>
                        <p className="mb-1 text-GreyGoose">{new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
                    </div>
                )}
            </div>
            <p className="text-end py-1 mt-8 mb-1 uppercase bg-pink text-white font-semibold w-fit place-self-end px-2 rounded shadow-sm">{source}</p>
        </div>
    )
}

export default SortByNewspaper