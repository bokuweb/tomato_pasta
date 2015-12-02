import jsonp from 'jsonp';
import request from 'browser-request';
import {parseString} from 'xml2js';

export function fetch(url) {
  return new Promise((resolve, reject) => {
    jsonp(url, {}, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

export function fetchRSS(url) {
  return new Promise((resolve, reject) => {
    request(url, (err, res) => {
      console.dir(res.body);
      parseString(res.body, (err, result) => {
        const items = result["rdf:RDF"].item;
        console.dir(items);
        const data = items.map((item) => {
          return {
            link : item.link[0],
            categories : item['dc:subject'] || [],
            title : item.title[0],
            content : item['content:encoded'][0],
            contentSnippet : item.description[0],
            publishedDate : item['dc:date']
          };
        });
        console.dir(data);
        if (err) reject(err);
        resolve(data);
      });
    });
  });
}

