/**
 * 附近
 */

const requests = (Fetch) => {
    Fetch.storeList = (page,limit,arg) => {  return Fetch('stores.show/storesList', 'POST',{page,limit,...arg});};

};
export default requests;