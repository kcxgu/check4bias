import { useState } from "react";

const Tabs = ({ frontPageHeadlines }) => {
    const [openTab, setOpenTab] = useState(1);
    return (
        <>
            <div className="flex flex-wrap w-11/12 lg:w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
                <div className="pb-6">
                    <h3 className="text-3xl lg:text-4xl font-medium">Read News. Critically.</h3>
                    <p className="text-lg lg:text-xl pt-1.5 md:pt-2">Analysing news headlines is an important part of staying informed about current events. Enter a keyword in the search bar above to compare headlines from different newspapers.
                    </p>
                </div>
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs md:text-sm lg:text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal tracking-wide " +
                                    (openTab === 1
                                        ? "text-white bg-pink"
                                        : "text-pink bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Newspapers we analyse
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs md:text-sm lg:text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal tracking-wide " +
                                    (openTab === 2
                                        ? "text-white bg-pink"
                                        : "text-pink bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                See Today's Front Page
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 pb-6 px-1 shadow-lg rounded-lg lg:rounded-xl lg:font-medium">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="grid grid-cols-3 gap-4 lg:gap-8">
                                        <a className="hover:opacity-90" href="https://www.theguardian.com/uk">
                                            <div className="min-h-max h-44 flex flex-col justify-center text-xs lg:text-sm uppercase text-GreyGoose">
                                                <img
                                                    className="max-w-sm py-2 border-b-2 border-red"
                                                    src="https://www.allsides.com/sites/default/files/2000px-The_Guardian_2.svg_.png"
                                                    alt="check4bias: the Guardian"
                                                />
                                                <p className="py-1.5">Political Leaning: Left-Wing*</p>
                                            </div>
                                        </a>
                                        <a className="hover:opacity-90" href="https://www.bbc.co.uk/news">
                                            <div className="min-h-max h-44 flex flex-col justify-center text-xs lg:text-sm uppercase text-GreyGoose">
                                                <img
                                                    className="max-w-sm py-4 border-b-2 border-indigo"
                                                    src="http://newsimg.bbc.co.uk/shared/bsp/xsl/rss/img/news_logo.gif"
                                                    alt="check4bias: BBC News" />
                                                <p className="py-1.5">Political Leaning: Neutral*</p>
                                            </div>
                                        </a>
                                        <a className="hover:opacity-90" href="https://www.telegraph.co.uk/">
                                            <div className="min-h-max h-44 flex flex-col justify-center text-xs lg:text-sm uppercase text-GreyGoose">
                                                <img
                                                    className="max-w-sm py-6 px-4 border-b-2 border-blue"
                                                    src="https://upload.wikimedia.org/wikipedia/commons/4/48/The_Telegraph_logo.svg" alt="check4bias: the Telegraph" />
                                                <p className="py-1.5">Political Leaning: Right-Wing*</p>
                                            </div>
                                        </a>
                                        <a className="hover:opacity-90" href="https://www.ft.com/">
                                            <div className="min-h-max h-44 flex flex-col justify-center text-xs lg:text-sm uppercase text-GreyGoose">
                                                <img
                                                    className="max-w-sm py-4 border-b-2 border-indigo"
                                                    src="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-masthead?source=image-url-builder" alt="check4bias: the FT" />
                                                <p className="py-1.5">Political Leaning: Neutral*</p>
                                            </div>
                                        </a>
                                        <a className="hover:opacity-90" href="https://www.economist.com/">
                                            <div className="min-h-max h-44 flex flex-col justify-center text-xs lg:text-sm uppercase text-GreyGoose">
                                                <img
                                                    className="max-w-sm py-4 border-b-2 border-indigo"
                                                    src="https://upload.wikimedia.org/wikipedia/commons/6/65/The_Economist_Logo.svg" alt="check4bias: the Economist" />
                                                <p className="py-1.5">Political Leaning: Neutral*</p>
                                            </div>
                                        </a>
                                        <a className="hover:opacity-90" href="https://metro.co.uk/">
                                            <div className="min-h-max h-44 flex flex-col justify-center text-xs lg:text-sm uppercase text-GreyGoose">
                                                <img
                                                    className="max-w-sm py-4 border-b-2 border-b-fuchsia"
                                                    src="https://metro.co.uk/wp-content/themes/metro-parent/img/branding/metro.co.uk/m-black-share.png" alt="check4bias: the Metro" />
                                                <p className="py-1.5">Political Leaning: Centre-Left*</p>
                                            </div>
                                        </a>
                                        <a className="hover:opacity-90" href="https://www.independent.co.uk/">
                                            <div className="min-h-max h-44 flex flex-col justify-center text-xs lg:text-sm uppercase text-GreyGoose">
                                                <img
                                                    className="max-w-sm py-4 border-b-2 border-b-fuchsia"
                                                    src="https://upload.wikimedia.org/wikipedia/sco/a/ab/The_Independent_logo.svg" alt="check4bias: the Independent" />
                                                <p className="py-1.5">Political Leaning: Centre-Left*</p>
                                            </div>
                                        </a>
                                        <a className="hover:opacity-90" href="https://www.dailymail.co.uk/home/index.html">
                                            <div className="min-h-max h-44 flex flex-col justify-center text-xs lg:text-sm uppercase text-GreyGoose">
                                                <img
                                                    className="max-w-sm py-4 border-b-2 border-blue"
                                                    src="https://i.dailymail.co.uk/i/sitelogos/logo_mol.gif" alt="check4bias: Daily Mail" />
                                                <p className="py-1.5">Political Leaning: Right-Wing*</p>
                                            </div>
                                        </a>
                                        <a className="hover:opacity-90" href="https://www.express.co.uk/">
                                            <div className="min-h-max h-44 flex flex-col justify-center text-xs lg:text-sm uppercase text-GreyGoose">
                                                <img
                                                    className="max-w-sm py-4 border-b-2 border-blue"
                                                    src="https://cdn.images.express.co.uk/img/logo/dr/logo.png" alt="check4bias: Daily Express" />
                                                <p className="py-1.5">Political Leaning: Right-Wing*</p>
                                            </div>
                                        </a>
                                        <a className="hover:opacity-90" href="https://www.dailystar.co.uk/">
                                            <div className="min-h-max h-44 flex flex-col justify-center text-xs lg:text-sm uppercase text-GreyGoose">
                                                <img
                                                    className="max-w-sm py-4 border-b-2 border-indigo"
                                                    src="https://s2-prod.dailystar.co.uk/@trinitymirrordigital/chameleon-branding/publications/dailystar/img/logo-dailystar.png" alt="check4bias: Daily Star" />
                                                <p className="py-1.5">Political Leaning: Neutral*</p>
                                            </div>
                                        </a>
                                        <a className="hover:opacity-90" href="https://www.mirror.co.uk/">
                                            <div className="min-h-max h-44 flex flex-col justify-center text-xs lg:text-sm uppercase text-GreyGoose">
                                                <img
                                                    className="max-w-sm py-4 border-b-2 border-red"
                                                    src="https://s2-prod.mirror.co.uk/@trinitymirrordigital/chameleon-branding/publications/mirror/img/logo-mirror-social-sharing.png" alt="check4bias: Daily Mirror" />
                                                <p className="py-1.5">Political Leaning: Left-Wing*</p>
                                            </div>
                                        </a>
                                        <a className="hover:opacity-90" href="https://www.thesun.co.uk/">
                                            <div className="min-h-max h-44 flex flex-col justify-center text-xs lg:text-sm uppercase text-GreyGoose">
                                                <img
                                                    className="max-w-sm py-4 border-b-2"
                                                    src="https://www.thesun.co.uk/wp-content/themes/thesun/images/sunmasthead.svg" alt="check4bias: The Sun" />
                                                <p className="py-1.5">Political Leaning: Populist*</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="text-center font-normal pt-8 lg:pt-10 px-6 tracking-wide text-sm lg:text-base">
                                        <p>* Political bias rating based on independent review and research from sources such as
                                            <a className="text-blue hover:text-GreyGoose" href="https://www.britannica.com"> Encyclopaedia Britannica</a>.</p>
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="flex flex-col items-center justify-center gap-4 pb-10">
                                        {frontPageHeadlines.length > 8 ? (
                                            <>
                                                {frontPageHeadlines.map((item, i) =>
                                                    <img src={item} alt="check4bias newspaper frontpage headlines" className="max-w-lg my-2" />
                                                )}
                                            </>
                                        ) : (
                                            <p className="uppercase text-GreyGoose text-center font-semibold tracking-wide">Loading...</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};

export default Tabs;