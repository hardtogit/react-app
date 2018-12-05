/**
 * Fetch
 */
import qs from 'qs';
import home from './home';
import near from './near'
import me  from './me';
// const ROOT_URL = '/mobile_api/'
const ROOT_URL = 'https://pdd.supai.net/wechat/';
const transferObjectToFormat = (o) => {
  let result = [];
  Object.keys(o).map(key => result.push(key + '=' + encodeURIComponent(o[key])));
  return result.join('&');
};

const Fetch = (url, type, data={}, headers) => {
  return new Promise((resolve) => {
    let options = {
        // credentials:"include",
        method: type || 'GET'
    };
    let _headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    };

    options.headers = Object.assign({
      // 'Accept-Language': 'zh-CN',
      // 'Cache-Control': 'no-cache',
    }, _headers, headers || {});
    if (type && type.toUpperCase() === 'POST') {
      if (data.hasOwnProperty('file')){
           options.body=data.data;
           delete options.headers;
       }
      else if(data.get){
          options.body=data;
          delete options.headers;
      }
      else {
          if(sessionStorage.getItem('token')){
              data={...data,token:sessionStorage.getItem('token')};
          }
          options.body =qs.stringify(data);
       }
    } else if (type && type.toUpperCase() === 'GET') {
        if(url.indexOf('?')!==-1){
            url = data
                ? url + '&' + transferObjectToFormat(data)
                : url;
        }else{
            url = data
                ? url + '?' + transferObjectToFormat(data)
                : url;
        }
    }
    fetch(ROOT_URL + url, options)
    .then((response) => {
      return response.json();
    })
    .then(
      response => resolve({response}),
      error => resolve({error})
    );

  });
};
home(Fetch);
near(Fetch);
me(Fetch);
export default Fetch;