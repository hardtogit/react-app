/**
 * 我的
 */

const requests = (Fetch) => {
    Fetch.userInfo = () => { return Fetch('center.user/info', 'POST');};
};

export default requests;