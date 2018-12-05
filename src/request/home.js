/**
 * 抢购
 */
const requests = (Fetch) => {
    Fetch.getCity = () => { return Fetch('auth.city/getPinyin', 'POST');};
    Fetch.getGoods = (data) =>{ return Fetch('auth.city/getPinyin', 'POST' ,data);};
    Fetch.goodsInfo = (data) =>{ return Fetch('goods.show/goodsList', 'POST' ,data);};
    Fetch.goodsDetailInfo = (data) =>{ return Fetch('goods.show/goodsDetail', 'POST' ,data);};
    Fetch.goodsEvaluateList = (page,limit,arg) =>{ return Fetch('goods.rate/getGoodsRate', 'POST' ,{page,limit,...arg});};

};

export default requests;