/**
 * 我的
 */

const requests = (Fetch) => {
    Fetch.userInfo = () => { return Fetch('center.user/info', 'POST');};
    Fetch.billList = (page,limit) => {  return Fetch('/center.money/finance', 'POST',{page,limit});};
};
export default requests;