/**
 * 抢购
 */
const requests = (Fetch) => {
    Fetch.getCity = () => { return Fetch('auth.city/getPinyin', 'POST');};
    Fetch.getGoods = (data) =>{ return Fetch('auth.city/getPinyin', 'POST' ,data);};
    Fetch.goodsList = (page,limit,arg) =>{ return Fetch('goods.show/goodsList', 'POST' ,{page,limit,...arg});};

};

export default requests;