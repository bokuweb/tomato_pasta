import jsonp from 'jsonp';
import request from 'browser-request';

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
    request(url, {}, (err, data) => {
      console.dir(date);
      if (err) reject(err);
      resolve(data);
    });
  });
}

