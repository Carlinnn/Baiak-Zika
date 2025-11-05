import axios from 'axios';
import * as cheerio from 'cheerio';

export interface Kill {
  number: string;
  date: string;
  info: string;
  killedBy: string;
  type: 'player' | 'monster';
}

export async function fetchLastKills(): Promise<Kill[]> {
  const { data } = await axios.get('https://www.baiak-zika.online/?lastkills');
  const $ = cheerio.load(data);
  const kills: Kill[] = [];
  $('.TableContent tr').each((_: number, el: cheerio.Element) => {
    const tds = $(el).find('td');
    if (tds.length === 3) {
      const number = $(tds[0]).text().trim();
      const date = $(tds[1]).text().trim();
      const infoHtml = $(tds[2]).html() || '';
      const infoText = $(tds[2]).text().trim();
      const match = infoHtml.match(/by (?:<a [^>]+>([^<]+)<\/a>|([^<.]+))/);
      let killedBy = '';
      let type: 'player' | 'monster' = 'monster';
      if (match) {
        if (match[1]) {
          killedBy = match[1].trim();
          type = 'player';
        } else if (match[2]) {
          killedBy = match[2].replace('.', '').trim();
          type = 'monster';
        }
      }
      kills.push({ number, date, info: infoText, killedBy, type });
    }
  });
  return kills;
}
