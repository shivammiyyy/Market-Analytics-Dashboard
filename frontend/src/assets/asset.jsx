import CrashImg from './crash.jpg';
import Black from './black.jpg';
import Global from './global.jpg';
import Covid from './crash.jpg';
import Soros from './soros.jpg';
import Lynch from './lynch.jpg';
import Buffet from './buffett.jpg';
import Livermore from './livermore.jpg';
import Tudor from './tudor.jpg';
import Abbvie from './abbvie.png';
import Alphabet from './alphabet.png';
import Amazon from './amazon.jpg';
import Apple from './apple.png';
import Berkshire from './berkshire.png';
import Chevron from './chevron.png';
import Exxon from './exxon.png';
import Home from './home.png';
import Johnson from './johnson.jpg';
import Jp from './jp.png';
import Master from './master.webp';
import Meta from './meta.png';
import Microsoft from './microsoft.png';
import Nvidia from './nvidia.png';
import Pepsico from './pepsico.png';
import Proctor from './proctor.webp';
import Tesla from './tesla.jpg'
import United from './united.png';
import Visa from './visa.png';
export const CrashData = {
    'wall-street':{
        img:CrashImg,
        name:'Wall Street Crash (1929)',
        pOne:'The Wall Street Crash of 1929 was one of the most catastrophic financial collapses in history, marking the beginning of the Great Depression. The crisis unfolded in October 1929, with panic selling intensifying between October 24 (Black Thursday) and October 29 (Black Tuesday). On Black Thursday, around 12.9 million shares were traded—nearly triple the daily average—causing stock prices to plummet. By Black Tuesday, investors dumped 16.4 million shares, leading to a complete market collapse.',
        pTwo:'In the aftermath, the Dow Jones Industrial Average (DJIA) fell from 381 points in September 1929 to just 41 points by July 1932, a decline of nearly 89%. Investors lost an estimated $30 billion, equivalent to roughly $440 billion in today\'s money. The banking sector was devastated, with over 9,000 banks failing between 1930 and 1933, wiping out people\'s savings. The economic impact was severe, with unemployment soaring to 25% in the U.S. and GDP shrinking by 15%.',
        pThree:'The crash also had global repercussions, as economies worldwide fell into deep recessions. Countries that relied on American loans, such as Germany and the UK, faced banking crises and mass unemployment. The New Deal policies of President Franklin D. Roosevelt, including financial reforms like the Glass-Steagall Act, were introduced to regulate banking and prevent future crises. The Securities Exchange Act of 1934 established the Securities and Exchange Commission (SEC) to oversee the stock market and curb speculation.'
    },
    'black-monday':{
        img: Black,
        name:'Black Monday (1987)',
        pOne:'On October 19, 1987, global stock markets experienced one of the sharpest single-day declines in history, known as Black Monday. The Dow Jones Industrial Average (DJIA) dropped 508 points, a 22.6% decline, marking the largest one-day percentage loss ever recorded. Similar declines were observed worldwide, with the FTSE 100 (UK) falling 26.4%, and the Hang Seng Index (Hong Kong) plunging 45.8% over a few days.',
        pTwo:'Several factors contributed to the crash, including computerized trading (program trading), portfolio insurance strategies, and geopolitical tensions. Automated trading systems executed massive sell orders as prices dropped, worsening the decline. Concerns over rising interest rates, U.S. trade deficits, and a weakening dollar also fueled investor panic.',
        pThree:'Despite the severity of the crash, the economy rebounded relatively quickly. The Federal Reserve, led by Alan Greenspan, intervened by cutting interest rates and injecting liquidity into financial markets, preventing a prolonged recession. By early 1989, markets had fully recovered. Black Monday led to the introduction of circuit breakers—mechanisms that temporarily halt trading to prevent similar crashes in the future.'
    },
    'global':{
        img:Global,
        name:'Global Financial Crisis (2008-2009)',
        pOne:'The Global Financial Crisis (GFC) of 2008-2009 was the worst economic downturn since the Great Depression, triggered by the collapse of the U.S. housing market and subprime mortgage industry. Leading up to the crisis, banks issued high-risk mortgages to borrowers with poor credit, bundling these loans into complex financial products like mortgage-backed securities (MBS) and collateralized debt obligations (CDOs).',
        pTwo:'The crisis peaked on September 15, 2008, when Lehman Brothers, the fourth-largest U.S. investment bank, declared bankruptcy with $600 billion in assets. This event caused widespread panic, leading to a stock market collapse. The S&P 500 fell more than 50%, from 1,576 in October 2007 to 666 in March 2009. Global markets lost an estimated $30 trillion in value. The economic impact was devastating. In the U.S., unemployment rose to 10%, and GDP contracted by 4.3%. Several major financial institutions, including AIG, Bear Stearns, and Fannie Mae & Freddie Mac, required government bailouts. The Troubled Asset Relief Program (TARP) allocated $700 billion to stabilize the financial system, while the Federal Reserve slashed interest rates to near zero.',
        pThree:'The crisis had global consequences, pushing Europe into a sovereign debt crisis, severely impacting countries like Greece, Spain, and Italy. In response, the Dodd-Frank Act (2010) introduced stricter banking regulations, including higher capital requirements and restrictions on risky trading activities.'
    },
    'covid':{
        img:Covid,
        name:'COVID-19 Crash (2020)',
        pOne:'The COVID-19 market crash of February–March 2020 was the fastest stock market decline in history, caused by fears of a global economic shutdown due to the coronavirus pandemic. Between February 20 and March 23, 2020, the S&P 500 lost 34% of its value, while the Dow Jones fell more than 10,000 points. The crash triggered four historic circuit breaker halts—temporary trading pauses meant to prevent panic selling.',
        pTwo:'The global economy faced an unprecedented crisis as governments imposed nationwide lockdowns, shutting down businesses and travel. Unemployment in the U.S. spiked to 14.8% in April 2020, the highest since the Great Depression, as over 20 million jobs were lost in a single month. GDP contracted by 9.1% in Q2 2020, marking the sharpest decline in modern history. In response, central banks and governments introduced massive stimulus measures. The U.S. launched a $2.2 trillion relief package (CARES Act), providing direct payments to citizens, business loans, and unemployment benefits. The Federal Reserve slashed interest rates to near zero and injected trillions into financial markets. Similar stimulus efforts were enacted globally, including €750 billion in emergency funds by the European Central Bank.',
        pThree:'Unlike past crashes, the stock market rebounded swiftly. By August 2020, the S&P 500 reached new all-time highs, driven by technology stocks, e-commerce, and healthcare industries. The pandemic accelerated digital transformation, boosting companies like Amazon, Zoom, and Tesla, while travel and hospitality industries suffered long-term damage.'
    }
}
export const brokerData = {
    'jesse_livermore': {
        img: Livermore,
        name: 'Jesse Livermore',
        birth: 'July 26, 1877, in Shrewsbury, Massachusetts',
        earlyLife: 'Born into a financially constrained family, Jesse Livermore had limited formal education. At 14, he began working as a board boy at a Boston brokerage, posting stock quotes. This early exposure ignited his passion for stock trading, leading him to start trading at bucket shops—establishments that accepted bets on stock prices—where he quickly gained a reputation for his analytical skills and success.',
        investmentStrategies: 'Livermore was renowned for his speculative trading approach, focusing on market timing and price patterns. He believed in studying market behavior and was adept at identifying trends, often taking substantial short positions ahead of market downturns. His strategy emphasized patience, waiting for the right market conditions before making significant moves, and he was known for his ability to capitalize on both bull and bear markets.',
        netWorth: 'At his peak, Livermore\'s net worth was estimated at approximately $100 million in 1929, equivalent to about $1.5 billion today. Despite his immense earnings, he faced multiple bankruptcies throughout his career, highlighting the volatile nature of his speculative strategies.'
    },
    'warren_buffett': {
        img: Buffet,
        name: 'Warren Buffett',
        birth: 'August 30, 1930, in Omaha, Nebraska',
        earlyLife: 'Warren Buffett exhibited a keen interest in business and investing from a young age. At 11, he made his first stock purchase, and by 13, he was running his own businesses, including a paper route and selling horseracing tip sheets. He pursued higher education at the University of Nebraska and later at Columbia Business School, where he studied under Benjamin Graham, the father of value investing. This education laid the foundation for his future investment philosophy.',
        investmentStrategies: 'Buffett\'s investment approach centers on value investing—identifying undervalued companies with strong fundamentals and holding them for the long term. He emphasizes investing in businesses he understands, with durable competitive advantages and competent management. Buffett advocates for patience and discipline, often stating that his preferred holding period is "forever." His strategy has led to significant investments in companies like Coca-Cola, Apple, and Geico, contributing to Berkshire Hathaway\'s substantial growth.',
        netWorth: 'As of March 2025, Warren Buffett\'s net worth is estimated at $165 billion, reflecting his success in building Berkshire Hathaway into a conglomerate valued at nearly $1 trillion. Despite his immense wealth, Buffett is known for his frugality and commitment to philanthropy, having pledged to donate the majority of his fortune to charitable causes.'
    },
    'george_soros': {
        img: Soros,
        name: 'George Soros',
        birth: 'August 12, 1930, in Budapest, Hungary',
        earlyLife: 'George Soros was born into a Jewish family in Budapest during a tumultuous period marked by World War II and the Nazi occupation of Hungary. Surviving the war, he emigrated to England in 1947, where he attended the London School of Economics. There, he studied under philosopher Karl Popper, whose concept of reflexivity influenced Soros\'s investment philosophy and understanding of market dynamics.',
        investmentStrategies: 'Soros is best known for his theory of reflexivity, which posits that market participants\' biases and perceptions can influence market fundamentals, creating feedback loops that drive market trends. He applied this theory through his hedge fund, Soros Fund Management, making speculative bets on currency and stock markets. His most famous trade was shorting the British pound in 1992, earning over $1 billion and earning him the moniker "The Man Who Broke the Bank of England."',
        netWorth: 'As of March 2025, George Soros\'s net worth is approximately $6.7 billion. Over his career, he has donated more than $32 billion to philanthropic causes through his Open Society Foundations, supporting initiatives related to education, human rights, and democratic governance worldwide.'
    },
    'peter_lynch': {
        img: Lynch,
        name: 'Peter Lynch',
        birth: 'January 19, 1944, in Newton, Massachusetts',
        earlyLife: 'Peter Lynch faced adversity early in life, losing his father to cancer when he was just 10 years old. To support his family, he worked as a caddie, which later provided him with a scholarship to attend Boston College. He graduated with a degree in finance and earned an MBA from the Wharton School at the University of Pennsylvania. These academic pursuits equipped him with the knowledge and skills that would propel his investment career.',
        investmentStrategies: 'Lynch is renowned for his "invest in what you know" philosophy, encouraging individual investors to leverage their personal experiences and insights to identify promising investment opportunities. As the manager of the Fidelity Magellan Fund from 1977 to 1990, he employed a blend of growth and value investing strategies, focusing on companies with strong earnings growth potential that were undervalued by the market. His approach emphasized thorough research, adaptability, and a long-term perspective.',
        netWorth: 'As of March 2025, Peter Lynch\'s net worth is estimated at $450 million. His success with the Magellan Fund, which achieved an average annual return of 29% under his management, solidified his reputation as one of the most successful and influential investors in history.'
    },
    'paul_tudor': {
        img: Tudor,
        name: 'Paul Tudor Jones',
        birth: 'September 28, 1954, in Memphis, Tennessee',
        earlyLife: 'Paul Tudor Jones grew up in a middle-class family in Memphis. He attended the University of Virginia, where he earned a degree in economics. During his time at university, he was an amateur boxer, a discipline that instilled in him the importance of strategy, risk management, and resilience—qualities that would later define his trading career.',
        investmentStrategies: 'Jones is renowned for his macroeconomic approach to trading, focusing on global economic trends and their impact on financial markets. He employs a combination of technical analysis and fundamental analysis to identify trading opportunities, particularly in futures and currencies. Jones places a strong emphasis on risk management, utilizing stop-loss orders and maintaining a conservative approach to position sizing. His adaptability and keen market insights have enabled him to navigate various market conditions successfully.',
        netWorth: 'As of March 2025, Paul Tudor Jones\'s net worth exceeds $8 billion. Beyond his financial success, he is recognized for his philanthropic efforts, including founding the Robin Hood Foundation, which focuses on combating poverty in New York City.'
    }
};
export const Companies = {
  'AAPL': {
    name: 'Apple Inc.',
    industry: 'IT',
    founded: '1976',
    img: Apple
  },
  'MSFT': {
    name: 'Microsoft Corporation',
    industry: 'IT',
    founded: '1975',
    img: Microsoft
  },
  'AMZN': {
    name: 'Amazon.com Inc.',
    industry: 'CONSUMER',
    founded: '1994',
    img: Amazon
  },
  'NVDA': {
    name: 'NVIDIA Corporation',
    industry: 'IT',
    founded: 'April 5, 1993',
    img: Nvidia
  },
  'GOOGL': {
    name: 'Alphabet Inc. (Class A)',
    industry: 'COMMUNICATION',
    founded: '2015',
    img: Alphabet
  },
  'GOOG': {
    name: 'Alphabet Inc. (Class C)',
    industry: 'COMMUNICATION',
    founded: '2015',
    img: Alphabet
  },
  'BRK.B': {
    name: 'Berkshire Hathaway Inc.',
    industry: 'FINANCE',
    founded: '1839',
    img: Berkshire
  },
  'META': {
    name: 'Meta Platforms Inc.',
    industry: 'COMMUNICATION',
    founded: '2004',
    img: Meta
  },
  'TSLA': {
    name: 'Tesla Inc.',
    industry: 'CONSUMER',
    founded: '2003',
    img: Tesla
  },
  'UNH': {
    name: 'UnitedHealth Group',
    industry: 'HEALTH',
    founded: '1977',
    img: United
  },
  'JNJ': {
    name: 'Johnson & Johnson',
    industry: 'HEALTH',
    founded: '1886',
    img: Johnson
  },
  'JPM': {
    name: 'JPMorgan Chase & Co.',
    industry: 'FINANCE',
    founded: '2000',
    img: Jp
  },
  'V': {
    name: 'Visa Inc.',
    industry: 'FINANCE',
    founded: '1958',
    img: Visa
  },
  'PG': {
    name: 'Procter & Gamble Co.',
    industry: 'CONSUMER',
    founded: '1837',
    img: Proctor
  },
  'XOM': {
    name: 'Exxon Mobil Corporation',
    industry: 'ENERGY',
    founded: '1999',
    img: Exxon
  },
  'MA': {
    name: 'Mastercard Incorporated',
    industry: 'FINANCE',
    founded: '1966',
    img: Master
  },
  'HD': {
    name: 'The Home Depot Inc.',
    industry: 'CONSUMER',
    founded: '1978',
    img: Home
  },
  'CVX': {
    name: 'Chevron Corporation',
    industry: 'ENERGY',
    founded: '1879',
    img: Chevron
  },
  'ABBV': {
    name: 'AbbVie Inc.',
    industry: 'HEALTH',
    founded: '2013',
    img: Abbvie
  },
  'PEP': {
    name: 'PepsiCo Inc.',
    industry: 'CONSUMER',
    founded: '1898',
    img: Pepsico
  }
};

  
  