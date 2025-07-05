import axios from "axios";
import React, { useState, useEffect } from "react";
import News from "../pages/News";
import stockNews from "../data/stock_news.json";

export default function YourNews() {
  const [UserData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email= localStorage.getItem("userEmail");
    if(!email) return;

    axios
        .get(`https://marketlens-8yun.onrender.com/api/users/$(email)`)
        .then((res) => {
            setUserData(res.data);
            setLoading(false);
        })
        console.log(UserData)
        .catch((err) => {
            console.error("Failed to fetch personalised news:");
            setLoading(false);
        })
  }, []);

function getNewsByUserStocks(userData) {
    if (!userData || !userData.stocks) return [];

    // Get selected stock names
    const selectedStocks = Object.entries(userData.stocks)
        .filter(([_, selected]) => selected)
        .map(([stockName]) => stockName.toLowerCase());

    // Filter news where any keyword matches a selected stock
    return stockNews.filter(news =>
        news.keywords &&
        news.keywords.some(keyword =>
            selectedStocks.includes(keyword.toLowerCase())
        )
    );
}

const newsData = { results: getNewsByUserStocks(UserData) };

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}


  if (loading) {
    return <div className="text-white text-center py-10">Loading...</div>;
  }

  if (!UserData || !UserData.results) {
    return <div className="text-white text-center py-10">No news found.</div>;
  }

// Print only the selected stocks
const selectedStocks = UserData && UserData.stocks
    ? Object.entries(UserData.stocks)
            .filter(([_, selected]) => selected)
            .map(([stockName]) => stockName)
    : [];

return (
    <div className="text-white text-center py-6">
        <div className="mb-4">
            <span className="font-semibold">Selected Stocks:</span>
            {selectedStocks.length > 0 ? (
                <ul className="inline-block ml-2">
                    {selectedStocks.map(stock => (
                        <li key={stock} className="inline-block bg-blue-600/80 rounded-full px-3 py-1 mx-1 text-white text-sm">
                            {stock}
                        </li>
                    ))}
                </ul>
            ) : (
                <span className="ml-2 text-gray-400">None</span>
            )}
        </div>
        {/* Existing News UI */}
        <>
            {/* Desktop view */}
            <div className="hidden md:block">
                <div className="max-h-[800px] overflow-y-auto scrollbar-hide pr-4">
                    <div className="space-y-6">
                        {newsData.results.map((news) => (
                            <div
                                key={news.article_id}
                                className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden group-hover:bg-white/10 transition-all">
                                    <div className="flex h-65">
                                        {/* Left - Image */}
                                        <div className="w-1/3 relative">
                                            <img
                                                src={news.image_url}
                                                alt={news.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/20"></div>
                                        </div>
                                        {/* Right - Content */}
                                        <div className="w-2/3 p-6 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1 rounded-full text-white text-sm font-medium">
                                                        {news.source_id || news.source_name || "Unknown"}
                                                    </span>
                                                    <span className="text-gray-400 text-sm">
                                                        {formatDate(news.pubDate)}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                                                    {news.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                                                    {news.description}
                                                </p>
                                            </div>
                                            <div className="mt-4">
                                                <a
                                                    href={news.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors whitespace-nowrap inline-flex items-center"
                                                >
                                                    Read More
                                                    <i className="ri-arrow-right-line ml-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile: Grid layout with square tiles */}
            <div className="md:hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {newsData.results.map((news) => (
                        <div
                            key={news.article_id}
                            className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden group-hover:bg-white/10 transition-all">
                                {/* Image */}
                                <div className="aspect-square relative">
                                    <img
                                        src={news.image_url}
                                        alt={news.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1 rounded-full text-white text-xs font-medium">
                                            {news.source_id || news.source_name || "Unknown"}
                                        </span>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-4">
                                    <div className="mb-2">
                                        <span className="text-gray-400 text-xs">
                                            {formatDate(news.pubDate)}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                                        {news.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {news.description}
                                    </p>
                                    <a
                                        href={news.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full block text-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors whitespace-nowrap"
                                    >
                                        Read More
                                        <i className="ri-arrow-right-line ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all cursor-pointer whitespace-nowrap">
                    View All News
                    <i className="ri-arrow-right-line ml-2"></i>
                </button>
            </div>
        </>
    </div>
);
}
