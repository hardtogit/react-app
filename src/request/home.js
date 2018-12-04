/**
 * 抢购
 */
const requests = (Fetch) => {
    Fetch.getCity = () => { return Fetch('auth.city/getPinyin', 'POST');};
    Fetch.getGoods = (data) =>{ return Fetch('auth.city/getPinyin', 'POST' ,data);};
    Fetch.goodsList = (data) =>{ return Fetch('goods.show/goodsList', 'POST' ,data);};

};

export default requests;