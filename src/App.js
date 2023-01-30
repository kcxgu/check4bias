import axios from "axios";
import { useEffect, useState } from "react";
import Feed from "./components/Feed";
import Search from "./components/Search";

function App() {
  const [BBCNews, setBBCNews] = useState([]);
  const [GuardianNews, setGuardianNews] = useState([]);
  const [theTelegraph, setTheTelegraph] = useState([]);
  const [theFT, setTheFT] = useState([]);
  const [theEconomist, setTheEconomist] = useState([]);
  const [theIndependent, setTheIndependent] = useState([]);

  const getNews = async () => {
    try {
      const res = await axios.get("http://localhost:3001/rss-parser");
      setBBCNews(res.data.BBCNews);
      setGuardianNews(res.data.GuardianNews);
      setTheTelegraph(res.data.theTelegraph);
      setTheFT(res.data.theFT);
      setTheEconomist(res.data.theEconomist);
      setTheIndependent(res.data.theIndependent);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNews();
  }, [])

  return (
    <div className="flex flex-col">
      <header className="flex flex-col items-center md:mb-5">
        <h1 className="text-6xl text-center mt-8 mb-2 py-4 px-8 rounded-lg  shadow-lightGrey shadow-inner">check4bias</h1>
        <h2 className="w-fit text-2xl text-center mt-2 mb-4 py-2 px-6 shadow shadow-lightGrey rounded-lg">UK Newspapers</h2>
      </header>

      <Search />

      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-10">

        {/* The Guardian */}
        <div className="w-3/4 md:w-full max-w-lg border mx-auto p-5 rounded-xl">
          <div className="bg-guardianBlue flex flex-col items-center rounded-lg py-5 mb-5">
            <img src="https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2010/03/01/poweredbyguardianWHITE.png" alt="check4bias: the Guardian" />
          </div>
          <div>
            {GuardianNews.slice(0, 21).map((item, i) =>
              <Feed
                key={i}
                title={item.item.title}
                link={item.item.link}
                date={item.item.pubDate}
              />
            )}
          </div>
        </div>

        {/* BBC News */}
        <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
          <div className="flex flex-col items-center rounded-lg py-5 mb-5">
            <img src="http://newsimg.bbc.co.uk/shared/bsp/xsl/rss/img/news_logo.gif" alt="check4bias: BBC News" />
          </div>
          <div>
            {BBCNews.slice(0, 21).map((item, i) =>
              <Feed
                key={i}
                title={item.item.title}
                link={item.item.link}
                date={item.item.pubDate}
              />
            )}
          </div>
        </div>

        {/* The Telegraph */}
        <div className="w-3/4 md:w-full max-w-lg border mx-auto p-5 rounded-xl">
          <div className="flex flex-col items-center rounded-lg py-5 mb-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/The_Telegraph_logo.svg" alt="check4bias: the Telegraph" />
          </div>
          <div>
            {theTelegraph.slice(0, 21).map((item, i) =>
              <Feed
                key={i}
                title={item.item.title}
                link={item.item.link}
                date={item.item.pubDate}
              />
            )}
          </div>
        </div>

        {/* Financial Times */}
        <div className="w-3/4 md:w-full max-w-lg border mx-auto p-5 rounded-xl">
          <div className="bg-FT flex flex-col items-center rounded-lg py-5 px-8 mb-5">
            <img src="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-masthead?source=image-url-builder" alt="check4bias: the FT" />
          </div>
          <div>
            {theFT.slice(0, 21).map((item, i) =>
              <Feed
                key={i}
                title={item.item.title}
                link={item.item.link}
                date={item.item.pubDate}
              />
            )}
          </div>
        </div>

        {/* The Economist */}
        <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
          <div className="flex flex-col items-center rounded-lg py-5 mb-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/The_Economist_Logo.svg" alt="check4bias: the Economist" />
          </div>
          <div>
            {theEconomist.slice(0, 21).map((item, i) =>
              <Feed
                key={i}
                title={item.item.title}
                link={item.item.link}
                date={item.item.pubDate}
              />
            )}
          </div>
        </div>

        {/* The Independent */}
        <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
          <div className="flex flex-col items-center rounded-lg py-5 mb-5">
            <img src="https://upload.wikimedia.org/wikipedia/sco/a/ab/The_Independent_logo.svg" alt="check4bias: the Independent" />
          </div>
          <div>
            {theIndependent.slice(0, 21).map((item, i) =>
              <Feed
                key={i}
                title={item.item.title}
                link={item.item.link}
                date={item.item.pubDate}
              />
            )}
          </div>
        </div>


      </div >
    </div>
  );
}

export default App;
