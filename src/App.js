import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import Articles from "./components/Articles";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [foundArticles, setFoundArticles] = useState([]);
  const [BBCNews, setBBCNews] = useState([]);
  const [GuardianNews, setGuardianNews] = useState([]);
  const [theTelegraph, setTheTelegraph] = useState([]);
  const [theFT, setTheFT] = useState([]);
  const [theEconomist, setTheEconomist] = useState([]);
  const [theIndependent, setTheIndependent] = useState([]);
  const [dailyMail, setDailyMail] = useState([]);
  const [dailyStar, setDailyStar] = useState([]);
  const [dailyExpress, setDailyExpress] = useState([]);
  const [dailyMirror, setDailyMirror] = useState([]);
  const [theSun, setTheSun] = useState([]);
  const [metro, setMetro] = useState([]);
  const [serverError, setServerError] = useState(false);
  const [sortDate, setSortDate] = useState(false);

  const getNews = useCallback(async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_RSS_RENDER);
      setBBCNews(res.data.BBCNews);
      setGuardianNews(res.data.theGuardian);
      setTheTelegraph(res.data.theTelegraph);
      setTheFT(res.data.theFT);
      setTheEconomist(res.data.theEconomist);
      setTheIndependent(res.data.theIndependent);
      setDailyMail(res.data.dailyMail);
      setDailyStar(res.data.dailyStar);
      setDailyExpress(res.data.dailyExpress);
      setDailyMirror(res.data.dailyMirror);
      setTheSun(res.data.theSun);
      setMetro(res.data.metro);
    } catch (error) {
      setServerError(true);
    }
  }, [BBCNews, GuardianNews, theTelegraph, theFT, theEconomist, theIndependent, dailyMail, dailyStar, dailyExpress, dailyMirror, theSun, metro])

  useEffect(() => {
    getNews();
  }, [BBCNews, GuardianNews, theTelegraph, theFT, theEconomist, theIndependent, dailyMail, dailyStar, dailyExpress, dailyMirror, theSun, metro])

  GuardianNews.sort((a, b) => {
    return new Date(b.item.pubDate) - new Date(a.item.pubDate);
  })

  BBCNews.sort((a, b) => {
    return new Date(b.item.pubDate) - new Date(a.item.pubDate);
  })

  theTelegraph.sort((a, b) => {
    return new Date(b.item.pubDate) - new Date(a.item.pubDate);
  })

  theFT.sort((a, b) => {
    return new Date(b.item.pubDate) - new Date(a.item.pubDate);
  })

  theEconomist.sort((a, b) => {
    return new Date(b.item.pubDate) - new Date(a.item.pubDate);
  })

  metro.sort((a, b) => {
    return new Date(b.item.pubDate) - new Date(a.item.pubDate);
  })

  theIndependent.sort((a, b) => {
    return new Date(b.item.pubDate) - new Date(a.item.pubDate);
  })

  dailyMail.sort((a, b) => {
    return new Date(b.item.pubDate) - new Date(a.item.pubDate);
  })

  dailyExpress.sort((a, b) => {
    return new Date(b.item.pubDate) - new Date(a.item.pubDate);
  })

  dailyStar.sort((a, b) => {
    return new Date(b.item.pubDate) - new Date(a.item.pubDate);
  })

  dailyMirror.sort((a, b) => {
    return new Date(b.item.pubDate) - new Date(a.item.pubDate);
  })

  theSun.sort((a, b) => {
    return new Date(b.item.pubDate) - new Date(a.item.pubDate);
  })

  const handleSearch = useCallback(async (e) => {
    if (searchTerm) {
      try {
        const res = await axios.get(`${process.env.REACT_APP_SEARCH_RENDER}/${searchTerm}`)
        setFoundArticles(res.data.data)
      } catch (err) {
        console.log(err);
        setErrorMsg("No articles found")
      }
      setErrorMsg("")
      setSortDate(false)
    }
  }, [searchTerm])

  const sortByDate = () => {
    setSortDate(true)
  }

  useEffect(() => {
    foundArticles.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    })
    setSortDate(false)
  }, [sortDate])

  return (
    <>
      <div className="flex flex-col">
        <header className="flex flex-col items-center md:mb-5">
          <a href="/">
            <h1 className="text-5xl sm:text-6xl text-center mt-8 md:mt-12 mb-2 py-4 px-8 rounded-lg  shadow-lightGrey shadow-inner">check4bias</h1>
          </a>
          <h2 className="text-xl sm:text-2xl text-center mt-2 mb-4 py-2 px-6 md:mt-4 md:mb-2 shadow shadow-lightGrey rounded-lg">UK Newspapers</h2>
        </header>

        <div className="w-full md:max-w-2xl mt-2 mb-10 mx-auto">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} errorMsg={errorMsg} handleSearch={handleSearch} />
          <p className="w-4/5 mt-4 py-1.5 px-3 text-center mx-auto font-semibold tracking-wide bg-red text-white rounded-lg">Note: We are currently using a free tier server provider, which is why it may take a while to load. Like an old car, refresh the page a handful of time should kickstart the server 😉.</p>
        </div>

        {foundArticles.length > 0 ? (
          <>
            <div className="mx-auto">
              <div className="flex flex-row justify-end items-baseline gap-2 lg:px-10">
                <p className="pr-2 text-lg text-GreyGoose font-medium">Sort By:</p>
                <button
                  className="mb-4 border rounded-lg py-1.5 px-3 font-medium hover:bg-lightGrey hover:text-white ease-linear transition-all duration-100"
                  onClick={handleSearch}
                >
                  Best Match
                </button>
                <button
                  className="mb-4 border rounded-lg py-1.5 px-3 font-medium hover:bg-lightGrey hover:text-white ease-linear transition-all duration-100"
                  onClick={sortByDate}
                >
                  Date
                </button>
                {/* <button className="mb-4 border rounded-lg py-1 px-2 font-medium hover:bg-lightGrey hover:text-white ease-linear transition-all duration-100">Sort by newspaper</button> */}
                {/* <button
                  className="mb-4 border rounded-lg py-1.5 px-3 font-medium hover:bg-lightGrey hover:text-white ease-linear transition-all duration-100"
                  onClick={sortBySentiment}
                >
                  Sentiment Score
                </button> */}
              </div>

              <div className="max-w-lg flex flex-col gap-4 mx-auto md:max-w-2xl lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-10 lg:px-10 lg:w-full pb-10">
                {foundArticles.map((item, i) =>
                  <Articles
                    key={i}
                    source={item.source}
                    title={item.title}
                    link={item.link}
                    date={item.date}
                  />
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            {!serverError ? (
              <>
                <h3 className="text-3xl text-center font-medium mb-4 py-2 px-6 md:mt-4 md:mb-6">Today's News:</h3>

                <div className="flex flex-col gap-4 pb-10 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-10">

                  {/* The Guardian */}
                  <div className="w-3/4 md:w-full max-w-lg border mx-auto p-5 rounded-xl">
                    <div className="bg-guardianBlue flex flex-col items-center rounded-lg py-5 mb-5">
                      <img src="https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2010/03/01/poweredbyguardianWHITE.png" alt="check4bias: the Guardian" />
                    </div>
                    {GuardianNews.length > 6 ? (
                      <>
                        <div>
                          {GuardianNews.slice(0, 8).map((item, i) =>
                            <Feed
                              key={i}
                              title={item.item.title}
                              link={item.item.link}
                              date={item.item.pubDate}
                            />
                          )}
                        </div>
                      </>
                    ) : (
                      <p className="uppercase text-GreyGoose text-center font-semibold tracking-wide">Loading...</p>
                    )}
                  </div>

                  {/* BBC News */}
                  <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                    <div className="bg-white flex flex-col items-center rounded-lg py-6 mb-5">
                      <img src="http://newsimg.bbc.co.uk/shared/bsp/xsl/rss/img/news_logo.gif" alt="check4bias: BBC News" />
                    </div>
                    {BBCNews.length > 6 ? (
                      <>
                        <div>
                          {BBCNews.slice(0, 8).map((item, i) =>
                            <Feed
                              key={i}
                              title={item.item.title}
                              link={item.item.link}
                              date={item.item.pubDate}
                            />
                          )}
                        </div>
                      </>
                    ) : (
                      <p className="uppercase text-GreyGoose text-center font-semibold tracking-wide">Loading...</p>
                    )}
                  </div>

                  {/* The Telegraph */}
                  <div className="w-3/4 md:w-full max-w-lg border mx-auto p-5 rounded-xl">
                    <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/The_Telegraph_logo.svg" alt="check4bias: the Telegraph" />
                    </div>
                    {theTelegraph.length > 6 ? (
                      <div>
                        {theTelegraph.slice(0, 8).map((item, i) =>
                          <Feed
                            key={i}
                            title={item.item.title}
                            link={item.item.link}
                            date={item.item.pubDate}
                          />
                        )}
                      </div>
                    ) : (
                      <p className="uppercase text-GreyGoose text-center font-semibold tracking-wide">Loading...</p>
                    )}
                  </div>

                  {/* Financial Times */}
                  <div className="w-3/4 md:w-full max-w-lg border mx-auto p-5 rounded-xl">
                    <div className="bg-FT flex flex-col items-center rounded-lg py-5 px-8 mb-5">
                      <img src="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-masthead?source=image-url-builder" alt="check4bias: the FT" />
                    </div>
                    {theFT.length > 6 ? (
                      <div>
                        {theFT.slice(0, 8).map((item, i) =>
                          <Feed
                            key={i}
                            title={item.item.title}
                            link={item.item.link}
                            date={item.item.pubDate}
                          />
                        )}
                      </div>
                    ) : (
                      <p className="uppercase text-GreyGoose text-center font-semibold tracking-wide">Loading...</p>
                    )}
                  </div>

                  {/* The Economist */}
                  <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                    <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/The_Economist_Logo.svg" alt="check4bias: the Economist" />
                    </div>
                    {theEconomist.length > 6 ? (
                      <div>
                        {theEconomist.slice(0, 8).map((item, i) =>
                          <Feed
                            key={i}
                            title={item.item.title}
                            link={item.item.link}
                            date={item.item.pubDate}
                          />
                        )}
                      </div>
                    ) : (
                      <p className="uppercase text-GreyGoose text-center font-semibold tracking-wide">Loading...</p>
                    )}
                  </div>

                  {/* The Metro */}
                  <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                    <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                      <img src="https://metro.co.uk/wp-content/themes/metro-parent/img/branding/metro.co.uk/m-black-share.png" alt="check4bias: the Metro"
                        className="h-36"
                      />
                    </div>
                    {metro.length > 6 ? (
                      <div>
                        {metro.slice(0, 8).map((item, i) =>
                          <Feed
                            key={i}
                            title={item.item.title}
                            link={item.item.link}
                            date={item.item.pubDate}
                          />
                        )}
                      </div>
                    ) : (
                      <p className="uppercase text-GreyGoose text-center font-semibold tracking-wide">Loading...</p>
                    )}
                  </div>

                  {/* The Independent */}
                  <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                    <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                      <img src="https://upload.wikimedia.org/wikipedia/sco/a/ab/The_Independent_logo.svg" alt="check4bias: the Independent" />
                    </div>
                    {theIndependent.length > 6 ? (
                      <div>
                        {theIndependent.slice(0, 8).map((item, i) =>
                          <Feed
                            key={i}
                            title={item.item.title}
                            link={item.item.link}
                            date={item.item.pubDate}
                          />
                        )}
                      </div>
                    ) : (
                      <p className="uppercase text-GreyGoose text-center font-semibold tracking-wide">Loading...</p>
                    )}
                  </div>

                  {/* The Daily Mail */}
                  <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                    <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                      <img src="https://i.dailymail.co.uk/i/sitelogos/logo_mol.gif" alt="check4bias: Daily Mail" />
                    </div>
                    {dailyMail.length > 6 ? (
                      <div>
                        {dailyMail.slice(0, 8).map((item, i) =>
                          <Feed
                            key={i}
                            title={item.item.title}
                            link={item.item.link}
                            date={item.item.pubDate}
                          />
                        )}
                      </div>
                    ) : (
                      <p className="uppercase text-GreyGoose text-center font-semibold tracking-wide">Loading...</p>
                    )}
                  </div>

                  {/* The Daily Express */}
                  <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                    <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                      <img src="https://cdn.images.express.co.uk/img/logo/dr/logo.png" alt="check4bias: Daily Express" />
                    </div>
                    {dailyExpress.length > 6 ? (
                      <div>
                        {dailyExpress.slice(0, 8).map((item, i) =>
                          <Feed
                            key={i}
                            title={item.item.title}
                            link={item.item.link}
                            date={item.item.pubDate}
                          />
                        )}
                      </div>
                    ) : (
                      <p className="uppercase text-GreyGoose text-center font-semibold tracking-wide">Loading...</p>
                    )}
                  </div>

                  {/* The Daily Star */}
                  <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                    <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                      <img src="https://s2-prod.dailystar.co.uk/@trinitymirrordigital/chameleon-branding/publications/dailystar/img/logo-dailystar.png" alt="check4bias: Daily Star" className="h-36" />
                    </div>
                    {dailyStar.length > 6 ? (
                      <div>
                        {dailyStar.slice(0, 8).map((item, i) =>
                          <Feed
                            key={i}
                            title={item.item.title}
                            link={item.item.link}
                            date={item.item.pubDate}
                          />
                        )}
                      </div>
                    ) : (
                      <p className="uppercase text-GreyGoose text-center font-semibold tracking-wide">Loading...</p>
                    )}
                  </div>

                  {/* The Daily Mirror */}
                  <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                    <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                      <img src="https://s2-prod.mirror.co.uk/@trinitymirrordigital/chameleon-branding/publications/mirror/img/logo-mirror-social-sharing.png" alt="check4bias: Daily Mirror" className="h-36" />
                    </div>
                    {dailyMirror.length > 6 ? (
                      <div>
                        {dailyMirror.slice(0, 8).map((item, i) =>
                          <Feed
                            key={i}
                            title={item.item.title}
                            link={item.item.link}
                            date={item.item.pubDate}
                          />
                        )}
                      </div>
                    ) : (
                      <p className="uppercase text-GreyGoose text-center font-semibold tracking-wide">Loading...</p>
                    )}
                  </div>

                  {/* The Sun */}
                  <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                    <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                      <img src="https://www.thesun.co.uk/wp-content/themes/thesun/images/sunmasthead.svg" alt="check4bias: The Sun" className="h-36" />
                    </div>
                    {theSun.length > 6 ? (
                      <div>
                        {theSun.slice(0, 8).map((item, i) =>
                          <Feed
                            key={i}
                            title={item.item.title}
                            link={item.item.link}
                            date={item.item.pubDate}
                          />
                        )}
                      </div>
                    ) : (
                      <p className="uppercase text-GreyGoose text-center font-semibold tracking-wide">Loading...</p>
                    )}
                  </div>
                </div >
              </>
            ) : (
              <div className="flex flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 pt-4 px-6 text-xl md:text-2xl font-medium text-GreyGoose">
                <div className="max-w-lg bg-white mt-10 py-6 px-4 rounded-lg border text-center">
                  <p className="sm:py-4">Our server seems to be on a coffee break. Please check back later.</p>
                  <p>If the problem persists, please let us know
                    <a href="https://forms.gle/TttFjTyVBEMg5cyL8"
                      className="underline decoration-blue decoration-4 underline-offset-4 px-2 hover:opacity-80"
                    >
                      via our contact form
                    </a>
                  </p>
                </div>
              </div>
            )}
          </>
        )}

      </div>
      <Footer />
    </>
  );
}

export default App;
