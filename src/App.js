import axios from "axios";
import { useEffect, useState } from "react";
import Articles from "./components/Articles";
import Feed from "./components/Feed";
import Search from "./components/Search";
// import ServerError from "./assets/404.svg"

function App() {
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

  const getNews = async () => {

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
  }

  useEffect(() => {
    getNews();
  }, [])

  return (
    <div className="flex flex-col">
      <header className="flex flex-col items-center md:mb-5">
        <a href="/">
          <h1 className="text-6xl text-center mt-8 md:mt-12 mb-2 py-4 px-8 rounded-lg  shadow-lightGrey shadow-inner">check4bias</h1>
        </a>
        <h2 className="text-2xl text-center mt-2 mb-4 py-2 px-6 md:mt-4 md:mb-2 shadow shadow-lightGrey rounded-lg">UK Newspapers</h2>
      </header>

      <div className="w-full md:max-w-2xl mt-2 mb-1 mx-auto">
        <Search setFoundArticles={setFoundArticles} />
      </div>

      {foundArticles.length > 0 ? (
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
      ) : (
        <>
          {serverError ? (
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 mt-20 sm:my-10 pt-4 px-6 text-xl md:text-2xl font-medium text-GreyGoose">
              <div className="max-w-lg bg-white mt-10 py-6 px-4 rounded-lg border text-center">
                <p className="sm:py-4">Our server seems to be on a coffee break. Please check back later.</p>
                <p>If the problem persists, please let us know
                  <a href="https://forms.gle/TttFjTyVBEMg5cyL8"
                    className="underline decoration-blue decoration-4 underline-offset-4 px-2 hover:opacity-80"
                  >
                    via our contact form
                  </a>
                </p>
                {/* <p>You can still use the
                  <span className="underline decoration-blue decoration-4 underline-offset-4 px-2">search and compare</span>
                  functionality above.
                </p> */}
              </div>
              {/* <img
                className="w-2/5 max-w-xl lg:max-w-lg"
                src={ServerError}
                alt="check4bias server error"
              /> */}
            </div>
          ) : (
            <>
              <h3 className="text-3xl text-center font-medium mb-4 py-2 px-6 md:mt-4 md:mb-6">Today's News:</h3>

              <div className="flex flex-col gap-4 pb-10 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-10">

                {/* The Guardian */}
                <div className="w-3/4 md:w-full max-w-lg border mx-auto p-5 rounded-xl">
                  <div className="bg-guardianBlue flex flex-col items-center rounded-lg py-5 mb-5">
                    <img src="https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2010/03/01/poweredbyguardianWHITE.png" alt="check4bias: the Guardian" />
                  </div>
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
                </div>

                {/* BBC News */}
                <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                  <div className="bg-white flex flex-col items-center rounded-lg py-6 mb-5">
                    <img src="http://newsimg.bbc.co.uk/shared/bsp/xsl/rss/img/news_logo.gif" alt="check4bias: BBC News" />
                  </div>
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
                </div>

                {/* The Telegraph */}
                <div className="w-3/4 md:w-full max-w-lg border mx-auto p-5 rounded-xl">
                  <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/The_Telegraph_logo.svg" alt="check4bias: the Telegraph" />
                  </div>
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
                </div>

                {/* Financial Times */}
                <div className="w-3/4 md:w-full max-w-lg border mx-auto p-5 rounded-xl">
                  <div className="bg-FT flex flex-col items-center rounded-lg py-5 px-8 mb-5">
                    <img src="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-masthead?source=image-url-builder" alt="check4bias: the FT" />
                  </div>
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
                </div>

                {/* The Economist */}
                <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                  <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/The_Economist_Logo.svg" alt="check4bias: the Economist" />
                  </div>
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
                </div>

                {/* The Metro */}
                <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                  <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                    <img src="https://metro.co.uk/wp-content/themes/metro-parent/img/branding/metro.co.uk/m-black-share.png" alt="check4bias: the Metro"
                      className="h-36"
                    />
                  </div>
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
                </div>

                {/* The Independent */}
                <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                  <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                    <img src="https://upload.wikimedia.org/wikipedia/sco/a/ab/The_Independent_logo.svg" alt="check4bias: the Independent" />
                  </div>
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
                </div>

                {/* The Daily Mail */}
                <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                  <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                    <img src="https://i.dailymail.co.uk/i/sitelogos/logo_mol.gif" alt="check4bias: Daily Mail" />
                  </div>
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
                </div>

                {/* The Daily Express */}
                <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                  <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                    <img src="https://cdn.images.express.co.uk/img/logo/dr/logo.png" alt="check4bias: Daily Express" />
                  </div>
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
                </div>

                {/* The Daily Star */}
                <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                  <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                    <img src="https://s2-prod.dailystar.co.uk/@trinitymirrordigital/chameleon-branding/publications/dailystar/img/logo-dailystar.png" alt="check4bias: Daily Star" className="h-36" />
                  </div>
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
                </div>

                {/* The Daily Mirror */}
                <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                  <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                    <img src="https://s2-prod.mirror.co.uk/@trinitymirrordigital/chameleon-branding/publications/mirror/img/logo-mirror-social-sharing.png" alt="check4bias: Daily Mirror" className="h-36" />
                  </div>
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
                </div>

                {/* The Sun */}
                <div className="w-3/4 lg:w-full max-w-lg border mx-auto p-5 rounded-xl">
                  <div className="flex flex-col items-center rounded-lg py-5 mb-5">
                    <img src="https://www.thesun.co.uk/wp-content/themes/thesun/images/sunmasthead.svg" alt="check4bias: The Sun" className="h-36" />
                  </div>
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
                </div>


              </div >
            </>
          )}
        </>
      )}

    </div>
  );
}

export default App;
