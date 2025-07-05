import React, { useState } from "react";

const SoapNews = () => {
  const [newsData, setNewsData] = useState({
    status: "success",
    totalResults: 1140,
    results: [
      {
        article_id: "08315229d752ce7fb060370b4c302fcf",
        title:
          "Pakistan's Prime Minister Offers To Develop Low-Carbon Corridors Within ECO",
        link: "https://menafn.com/1109760290/Pakistans-Prime-Minister-Offers-To-Develop-Low-Carbon-Corridors-Within-ECO",
        creator: ["marketing@menafn.com (MENAFN)"],
        description:
          "(MENAFN - Trend News Agency) KHANKENDI, Azerbaijan, July 4. Pakistan's Prime Minister Shehbaz Sharif has proposed developing low-carbon corridors within the ECO framework...",
        pubDate: "2025-07-04 07:07:34",
        image_url:
          "https://menafn.com/updates/pr/2025-07/04/TNA_3a05dimage_story.jpg",
        source_name: "Menafn",
      },
      {
        article_id: "bd07626c18a4a469510f1db38249f85e",
        title: "Kharge, Telangana CM Unveil Rosaiah's Statue",
        link: "https://www.deccanchronicle.com/southern-states/telangana/kharge-telangana-cm-unveil-rosaiahs-statue-1889301",
        creator: ["Nida Mehraj"],
        description:
          "Rosaiah served as CM for over a year after YS Rajasekhara Reddy's demise in September 2009.",
        pubDate: "2025-07-04 07:05:45",
        image_url:
          "https://www.deccanchronicle.com/h-upload/2025/07/04/1934671-untitled-design-59.jpg",
        source_name: "Andhrabhoomi",
      },
    ],
  });


    return (
        <div className="shadow-lg w-full max-w-6xl h-40 relative group cursor-pointer transform hover:scale-105 transition-all duration-300 backdrop-blur-md bg-black/50 rounded-2xl border border-white/10 mx-auto">
            <div className="w-full h-full flex gap-8">
                <div className="w-60 bg-amber-200 rounded-lg h-full"></div>
                <div>
                    <h1 className="text-white">Heading of the news</h1>
                </div>
            </div>
        </div>
    )
};

export default SoapNews;
