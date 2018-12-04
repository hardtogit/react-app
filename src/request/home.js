/**
 * 抢购
 */
const requests = (Fetch) => {
    Fetch.getCity = () => { return Fetch('auth.city/getPinyin', 'POST');};
    Fetch.getGoods = (data) =>{ return Fetch('auth.city/getPinyin', 'POST' ,data);};
    Fetch.goodsInfo = (data) =>{ return Fetch('goods.show/goodsList', 'POST' ,data);};
    Fetch.goodsDetailInfo = (data) =>{ return Fetch('goods.show/goodsDetail', 'POST' ,data);};

};

export default requests;