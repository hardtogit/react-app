/**
 * 附近
 */

const requests = (Fetch) => {
    Fetch.storeList = (page,limit,arg) => {  return Fetch('stores.show/storesList', 'POST',{page,limit,...arg});};
    Fetch.storeInfo = (data) => {  return Fetch('stores.show/storesDetail', 'POST',data);};

};
export default requests;