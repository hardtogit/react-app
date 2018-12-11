/**
 * 我的
 */

const requests = (Fetch) => {
    Fetch.userInfo = () => { return Fetch('center.user/info', 'POST');};
    Fetch.billList = (page,limit) => {  return Fetch('center.money/finance', 'POST',{page,limit});};
    Fetch.awardAcceptList = (page,limit,arg) => {  return Fetch('center.invite/profit', 'POST',{page,limit,...arg});};
    Fetch.awardWaitList = (page,limit,arg) => {   return Fetch('center.invite/profit', 'POST',{page,limit,...arg});};
    Fetch.teamList = (page,limit,arg) => {   return Fetch('center.invite/superior', 'POST',{page,limit,...arg});};
    Fetch.clientList = (page,limit,arg) => {   return Fetch('center.invite/recommend', 'POST',{page,limit,...arg});};
    Fetch.storeInviteInfo = (arg) => {   return Fetch('stores.invite/storeInvite', 'POST',{...arg});};
    Fetch.jsSdkConfigInfo = (arg) => {   return Fetch('general/user.sdk/get', 'POST',{...arg});};
    Fetch.orderList = (page,limit,arg) => {return Fetch('orders.show/orderList', 'POST',{page,limit,...arg});};
};
export default requests;