import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import  PropTypes  from "prop-types";

 
const News= (props)=>{
  
    const articles = [
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Ryan Young",
    "title": "British Open: Follow Tommy Fleetwood, Max Homa, Brooks Koepka and more Friday at Royal Liverpool - Yahoo Sports",
    "description": "Keep up with Friday's action at the British Open with Yahoo Sports.",
    "url": "https://sports.yahoo.com/british-open-follow-tommy-fleetwood-max-homa-brooks-koepka-and-more-friday-at-royal-liverpool-043001710.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/IbVXIJ9uLsqj7SuzZWdUrQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTk-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/d37940e0-2775-11ee-b7fb-9d7ef2be0a45",
    "publishedAt": "2023-07-21T10:18:29Z",
    "content": "Let's run it back.\r\nThe British Open resumes on Friday morning from Royal Liverpool Golf Club, and Englishman Tommy Fleetwood holds a share of the lead at 5-under par. Fleetwood has yet to win on the… [+1308 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Alex Harring",
    "title": "Stock futures are higher after Dow registers longest winning streak since 2017: Live updates - CNBC",
    "description": "Wall Street is coming off a mixed session.",
    "url": "https://www.cnbc.com/2023/07/20/stock-market-today-live-updates.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107265018-1688068082545-NYSE-Traders-20230629-CC-PRESS-23.jpg?v=1689890521&w=1920&h=1080",
    "publishedAt": "2023-07-21T09:40:00Z",
    "content": "Stock futures were higher Friday as traders assessed the latest corporate earnings results, and the Dow Jones Industrial Average tried to stretch its winning streak to 10 sessions.\r\nFutures tied to t… [+1230 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Elizabeth Pritchett",
    "title": "Alabama executes James Barber by lethal injection for 'heinous, atrocious and cruel' murder of Dorothy Epps - Fox News",
    "description": "Alabama inmate James Barber, 64, was put to death by lethal injection in the early morning hours of July 21 for the 2001 murder of 75-year-old Dorothy Epps at her home in Harvest.",
    "url": "https://www.foxnews.com/us/alabama-executes-james-barber-lethal-injection-heinous-atrocious-cruel-murder-dorothy-epps",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/07/James-Barber-Alabama-inmate-executed.jpg",
    "publishedAt": "2023-07-21T09:31:00Z",
    "content": "Alabama executed James Barber Friday morning for the brutal beating death of an elderly woman 22 years ago, marking the state's first lethal injection death following a monthslong halt to review proc… [+3109 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Reuters",
    "title": "Zelenskiy sacks Ukraine's ambassador to UK after criticism - Reuters.com",
    "description": "President Volodymyr Zelenskiy dismissed Vadym Prystaiko as Ukraine's ambassador to Britain on Friday, days after the envoy publicly criticised the president.",
    "url": "https://www.reuters.com/world/europe/zelenskiy-dismisses-ukraines-ambassador-britain-2023-07-21/",
    "urlToImage": "https://www.reuters.com/resizer/K_sxN2wWVhdZTIn5KBYtZeBd3Xw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KLWBKHVH5VMVHASKJV3FMBULZY.jpg",
    "publishedAt": "2023-07-21T09:05:00Z",
    "content": "KYIV, July 21 (Reuters) - President Volodymyr Zelenskiy dismissed Vadym Prystaiko as Ukraine's ambassador to Britain on Friday, days after the envoy publicly criticised the president.\r\nA presidential… [+1327 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Lauren Feiner",
    "title": "White House secures voluntary pledges from Microsoft, Google to ensure A.I. tools are secure - CNBC",
    "description": "Amazon, Anthropic, Google, Inflection, Meta, Microsoft and OpenAI each agreed Friday to a set of voluntary commitments in developing the technology.",
    "url": "https://www.cnbc.com/2023/07/21/white-house-secures-voluntary-pledges-from-microsoft-google-on-ai.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107260015-1687350527308-gettyimages-1500220073-sjm-l-biden-0620-9.jpeg?v=1689930001&w=1920&h=1080",
    "publishedAt": "2023-07-21T09:00:01Z",
    "content": "Seven top artificial intelligence companies, including Google, Microsoft and OpenAI, will convene at the White House on Friday, pledging to create ways for consumers to identify AI-generated material… [+2870 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Reuters",
    "title": "Russian navy rehearses firing rockets at ships in Black Sea after warning to Ukraine - Reuters.com",
    "description": "Russia's Defence Ministry said on Friday that its Black Sea Fleet had practised firing rockets at surface targets in a live fire exercise, two days after it warned that ships heading to Ukraine's Black Sea ports could be considered military targets.",
    "url": "https://www.reuters.com/world/europe/russian-navy-rehearses-firing-rockets-surface-objects-black-sea-after-warning-2023-07-21/",
    "urlToImage": "https://www.reuters.com/resizer/HO2YmW0txrbaCaSj-Sa-_elblfI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2HA22ZJNS5JBVGJKLRDNBGYHTM.jpg",
    "publishedAt": "2023-07-21T08:46:00Z",
    "content": "MOSCOW, July 21 (Reuters) - Russia's Defence Ministry said on Friday that its Black Sea Fleet had practised firing rockets at surface targets in a live fire exercise, two days after it warned that sh… [+1179 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Kelsey Ables, Ellen Francis",
    "title": "Russia-Ukraine war news: Strikes hit Odessa; U.S. says Kyiv using cluster munitions ‘effectively - The Washington Post",
    "description": "The Russian navy held a live firing exercise in the Black Sea. NSC spokesman John Kirby said the cluster munitions impacting “Russia’s defensive formations.\"",
    "url": "https://www.washingtonpost.com/world/2023/07/21/russia-ukraine-war-news/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Y2C52GD7YH2PZDP363Y7BNOAPY.JPG&w=1440",
    "publishedAt": "2023-07-21T08:23:00Z",
    "content": "Russia struck Odessa early Friday in the fourth day of pounding the Ukrainian port region, the governor said. The attack on an agricultural facility there injured two employees and destroyed tons of … [+4583 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Deadline"
    },
    "author": "Max Goldbart",
    "title": "“We Are Not Going To Have The UK Used As A Backdoor To Undermine SAG,” Says British Equity Boss On Eve Of London Rally - Deadline",
    "description": "EXCLUSIVE: “We are not going to have the UK used as a backdoor to undermine SAG-AFTRA’s dispute,” the leader of UK actors union Equity has declared. Speaking exclusively to Deadli…",
    "url": "https://deadline.com/2023/07/sag-aftra-actors-strike-equity-boss-uk-undermine-dispute-1235442886/",
    "urlToImage": "https://deadline.com/wp-content/uploads/2023/07/GettyImages-1243657965.jpg?w=1024",
    "publishedAt": "2023-07-21T08:04:00Z",
    "content": "EXCLUSIVE: “We are not going to have the UK used as a backdoor to undermine SAG-AFTRA’s dispute,” the leader of UK actors union Equity has declared. \r\nSpeaking exclusively to Deadline prior to Equity… [+3858 chars]"
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": null,
    "title": "Muslim-majority nations express outrage and plan street protests over Quran desecration in Sweden - The Associated Press",
    "description": "Muslim-majority nations are expressing outrage over the desecration of a copy of the Quran in Sweden. Some prepared for street demonstrations following Friday prayers to show their anger. In Iran, Iraq and Lebanon, protesters planned demonstrations after Swed…",
    "url": "https://apnews.com/article/iraq-iran-sweden-quran-protests-bb61c10405423266b18c1073d5ce97f0",
    "urlToImage": "https://dims.apnews.com/dims4/default/56ea3b3/2147483647/strip/true/crop/4739x2666+0+206/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F46%2F02%2F8d942114b88abbd09d06c9a8fb26%2Fa4ed2dd9f14a4ae6b91069f96071a445",
    "publishedAt": "2023-07-21T07:33:00Z",
    "content": "BAGHDAD (AP) Muslim-majority nations expressed outrage Friday at the desecration of a copy of the Quran in Sweden. Some prepared for street demonstrations following midday prayers to show their anger… [+5768 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Rob Picheta",
    "title": "Rishi Sunak suffers two election losses as British voters reject ailing Conservative government - CNN",
    "description": "Britain’s beleaguered Prime Minister Rishi Sunak suffered a damaging political blow on Friday as voters rejected his party in two parliamentary elections it could ordinarily have expected to win.",
    "url": "https://www.cnn.com/2023/07/20/uk/uk-byelections-rishi-sunak-boris-johnson-intl-gbr/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230328073155-rishi-sunak-030823.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-07-21T07:30:00Z",
    "content": "Britains beleaguered Prime Minister Rishi Sunak suffered a damaging political blow on Friday as voters rejected his party in two parliamentary elections it could ordinarily have expected to win.\r\nThe… [+3745 chars]"
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "HEATHER HOLLINGSWORTH",
    "title": "Attention turns to Mega Millions after California store sells winning Powerball ticket - The Associated Press",
    "description": "Lottery dreamers are setting their sights on the growing Mega Millions jackpot now that a ticket worth more than $1 billion finally has been sold for the Powerball lottery.",
    "url": "https://apnews.com/article/mega-millions-jackpot-drawing-7a684b6fc3c79470b5f43009bff6ef46",
    "urlToImage": "https://dims.apnews.com/dims4/default/87963ae/2147483647/strip/true/crop/8134x4575+0+424/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe9%2F2e%2Fcff248537152fc4130f3c73b8c41%2F50eebcba3fa142eaa7018c169b619beb",
    "publishedAt": "2023-07-21T05:59:00Z",
    "content": "Lottery dreamers are setting their sights on the growing Mega Millions jackpot drawing on Friday after a ticket worth more than $1 billion was sold for the Powerball lottery. Heres a look at how this… [+3090 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GameSpot"
    },
    "author": "Hayley Williams",
    "title": "The FTC Is Suspending Its In-House Antitrust Lawsuit Against Microsoft - GameSpot",
    "description": "After it was denied an injuction by a US federal court, the FTC has also put a hold on its internal challenge against Microsoft's acquisition of Activision-Blizzard.",
    "url": "https://www.gamespot.com/articles/the-ftc-is-suspending-its-in-house-antitrust-lawsuit-against-microsoft/1100-6516170/",
    "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1597/15975876/4168541-3965788-atvi.jpg",
    "publishedAt": "2023-07-21T05:52:13Z",
    "content": "The Federal Trade Commission's case against Microsoft's intended acquisition of Activision-Blizzard is slowing down, after it announced it would be suspending its in-house lawsuit. As reported by The… [+1347 chars]"
    },
    {
    "source": {
    "id": "abc-news",
    "name": "ABC News"
    },
    "author": "Luke Barr, Jolie Lash",
    "title": "Washington Commanders' Dan Snyder ordered to pay NFL $60M following investigation - ABC News",
    "description": "The investigation concluded the club improperly hid finances from the NFL.",
    "url": "https://abcnews.go.com/Sports/washington-commanders-dan-snyder-ordered-pay-nfl-60m/story?id=101537606",
    "urlToImage": "https://s.abcnews.com/images/US/dan-snyder-file-gty-jef-230720_1689892293368_hpMain_16x9_992.jpg",
    "publishedAt": "2023-07-21T04:52:54Z",
    "content": "Washington Commanders owner Dan Snyder will have to pay $60 million to the NFL in resolution after an investigation concluded the club improperly hid finances from the NFL and that Snyder inappropria… [+3549 chars]"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "Accused Gilgo Beach killer Rex Heuermann routinely burned his garbage at home, neighbor claims - New York Post ",
    "description": null,
    "url": "https://families.google.com/service-restricted",
    "urlToImage": null,
    "publishedAt": "2023-07-21T04:39:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "KABC-TV"
    },
    "author": null,
    "title": "LA County tops list of US counties with greatest number of people living with Alzheimer's disease - KABC-TV",
    "description": "New research reveals California has the largest number of people living with the disease in the country, affecting 12% of state residents over 65.",
    "url": "https://abc7.com/alzheimers-disease-los-angeles-county-us-counties-zaldy-tan/13527907/",
    "urlToImage": "https://cdn.abcotvs.com/dip/images/13528303_alzheimers-TN-img.jpg?w=1600",
    "publishedAt": "2023-07-21T04:29:36Z",
    "content": "LOS ANGELES (KABC) -- On the heels of a new federally-approved drug for Alzheimer's disease, scientists expect there could soon be another, and a new non-invasive way to screen for the disease looks … [+2238 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Variety"
    },
    "author": "Elizabeth Wagmeister",
    "title": "Britney Spears and Will.i.am Drop New Song ‘Mind Your Business’ - Variety",
    "description": "Britney Spears is getting back to the music — again. The Princess of Pop and her frequent collaborator, Will.i.am, have dropped a new single, “Mind Your Business,” which is t…",
    "url": "https://variety.com/2023/music/news/britney-spears-will-i-am-song-mind-your-business-1235673190/",
    "urlToImage": "https://variety.com/wp-content/uploads/2023/07/williamXbritney_MindYourBusiness_CVR_IMAGE.jpg?crop=0px%2C551px%2C3000px%2C1687px&resize=1000%2C563",
    "publishedAt": "2023-07-21T04:07:00Z",
    "content": "Britney Spears is getting back to the music — again.\r\nThe Princess of Pop and her frequent collaborator, Will.i.am, have dropped a new single, “Mind Your Business,” which is the second song to be rel… [+3177 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "TSMC: Chip giant delays Arizona production in blow to Biden - BBC",
    "description": "Taiwan-based TSMC says semiconductors manufacturing at its Arizona plant will no longer begin in 2024.",
    "url": "https://www.bbc.com/news/business-66264392",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/26E5/production/_130475990_gettyimages-1556474759.jpg",
    "publishedAt": "2023-07-21T03:38:43Z",
    "content": "Chipmaking giant Taiwan Semiconductor (TSMC) has delayed the start of production at its factory in the US state of Arizona, in a setback to President Biden's technology ambitions.\r\nThe firm says chip… [+2218 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Action Network"
    },
    "author": "Jason Sobel",
    "title": "Open Championship Round 2 Picks: Bet Rory McIlroy, Viktor Hovland and Rickie Fowler - The Action Network",
    "description": "Jason Sobel explains why bettors should add Rory McIlroy, Viktor Hovland and Rickie Fowler to their Open Championship cards.",
    "url": "https://www.actionnetwork.com/golf/open-championship-round-2-picks-consider-betting-rory-mcilroy-viktor-hovland-and-rickie-fowler",
    "urlToImage": "https://images.actionnetwork.com/blog/2023/07/Rory-McIlroy.jpg",
    "publishedAt": "2023-07-21T03:26:00Z",
    "content": "The opening round of the 151st Open Championship is in the books. Royal Liverpool Golf Club showed out as a fast, firm, world-class venue well, except for the internal O.B., which still rubs me the w… [+3292 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera",
    "title": "Google developing AI tools to help journalists report the news - Al Jazeera English",
    "description": "Tech giant says AI-powered tool is not intended to replace ‘essential’ role journalists play in covering the news.",
    "url": "https://www.aljazeera.com/economy/2023/7/21/google-developing-ai-tools-to-help-journalists-report-the-news",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/07/AP23201643159449-1689900879.jpg?resize=1920%2C1440",
    "publishedAt": "2023-07-21T02:14:56Z",
    "content": "Google is developing artificial intelligence-enabled tools to help journalists research and write news articles, a development that is likely to rattle nerves across the media industry after years of… [+2011 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Ben Morse",
    "title": "Canada headlines second day of Women’s World Cup action as Olympic champion faces Nigeria - CNN",
    "description": "The Women’s World Cup is finally here and the tournament’s second day of action holds plenty of intriguing storylines.",
    "url": "https://www.cnn.com/2023/07/20/football/womens-world-cup-canada-nigeria-switzerland-philippines-spain-costa-rica-spt-intl/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230719122720-04-wwc-2023-lookahead.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-07-21T01:26:00Z",
    "content": "The Womens World Cup is finally here and the tournaments second day of action holds plenty of intriguing storylines.\r\nOlympic champion Canada kicks off its campaign in the opening game of Fridays act… [+6989 chars]"
    }
    ]
    
  // const [articles,setArticles] = useState([]);
  // const [loading,setLoading] = useState(true);
  // const [page,setPage] = useState(1)
  // const [totalResults,setTotal] = useState(0)
 
  
  // useEffect( ()=>{
  //    document.title = `${capitalizefunc(props.category)}-News`;
  //   updateNew();



  // },[])

 
    
  

  // const updateNew = async () => {
  //   props.setProgress(0)
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=436c89326589452183f54e44be1cdda4&page=${page}&pageSize=${props.pageSize}`;
    
  //   let data = await fetch(url);
  //   props.setProgress(50)
  //   var parsedData = await data.json();
  //   props.setProgress(70)
  //   console.log(parsedData);
  //   setArticles(parsedData.articles);
  //   setTotal(parsedData.totalResults)
  //   setLoading(false)
    
   
  //   props.setProgress(100)
  // };

  // const capitalizefunc = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // };






  


  

  // const fetchMoreData = async ()=>{
  //   setLoading(true)
    
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=436c89326589452183f54e44be1cdda4&page=${page+1}&pageSize=${props.pageSize}`;
  //   setPage(page+1);
    
  //   let data = await fetch(url);
  //   var parsedData = await data.json();
  //   console.log(parsedData);
  //   setArticles(articles.concat(parsedData.articles))
  //   setTotal(parsedData.totalResults)
  //   setLoading(false)


  
  // };

  


  return(
      <>
         
        
         
          
        {/* {loading && <Spinner/>} */}
        {/* <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={
            loading && <Spinner/>
          }
        > */}
          <div>
           
          </div>
          <h2 className="text-center margin"style={{color:"black"}}>
           {/* Top {capitalizefunc(props.category)} headlines - NewsNow{" "}  */}
           Top headlines - NewsNow
        </h2>
          <div className="container  ">
          
         
          <div className="row ">
          
            {articles.map((element) => {
              return (
                <div className="col-lg-4 col-md-6  col-sm-12 center  " key={element.url}>
                  {" "}
                  <NewsItem
                    author={element.author}
                    date={element.publishedAt}
                    title={
                      element.title ? element.title.slice(0, 40) + "..." : ""
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 60) + ".."
                        : ""
                    }
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://tse1.mm.bing.net/th?id=OIP.gKA5pLQOuERfI69KW-jIOgHaE8&pid=Api&P=0&h=180"
                    }
                    newsUrl={element.url}
                  />
                </div>
                
              );
            })}
            </div>
          </div>
        {/* </InfiniteScroll> */}
       
      </>
    
    );
   



}

News.propTypes = {
  country: PropTypes.string,
  pageSize:PropTypes.number,
}
News.defaultProps = {
country:"us",
pageSize:10,
category:"general"
}



export default News;