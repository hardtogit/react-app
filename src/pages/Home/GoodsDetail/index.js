import React,{Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import classNames from 'classnames';
import phone from '../../../assets/img/phone.png';
import common  from '../../../assets/img/common.png';
import goodsDetail from '../../../assets/img/goodsDetail.png';
import home from '../../../assets/img/home.png';
import service from '../../../assets/img/service.png';
import GoodsHeader from '../../../compnents/common/GoodsHeader';
import BuyPopup from './BuyPopup';
import styles from './index.module.scss';
class Index extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        const {changeAnimateType,push}=this.props;
        return (
           <div className={styles.content}>
               <GoodsHeader
                   imgs={['https://img.meituan.net/msmerchant/799a8a2c28aae03e02b3b906515ac36b1345678.jpg@750w_320h_1e_1c',
                       'https://img.meituan.net/msmerchant/799a8a2c28aae03e02b3b906515ac36b1345678.jpg@750w_320h_1e_1c',
                       'https://img.meituan.net/msmerchant/799a8a2c28aae03e02b3b906515ac36b1345678.jpg@750w_320h_1e_1c',
                       'https://img.meituan.net/msmerchant/799a8a2c28aae03e02b3b906515ac36b1345678.jpg@750w_320h_1e_1c']}
                   title="峨眉山山脚温泉酒店"
                   deadline="12月31日 23:59:59 结束"
                   style={{marginBottom:'0.1rem'}}
                   currentPrice="34.56"
                   originalPrice="86.00"
                   copies="688"
                   labels={['24小时提前退','需提前预约']}
               />
               <div className={styles.storeInfo}>
                   <div className={styles.container}>
                       <div className={styles.flex}>
                           <div className={styles.left}>
                               <div className={styles.name}>一把骨</div>
                               <div className={styles.time}>营业时间：9:00-22:00</div>
                           </div>
                           <div className={styles.right}>
                               <img src={phone} alt=""/>
                           </div>
                       </div>
                   </div>
               </div>
               <img className={styles.title} src={goodsDetail} alt=""/>
               <img className={styles.subTitle} src={common} alt=""/>
               <div className={styles.bottom}>
                   <div className={styles.left}>
                       <div className={styles.home}>
                           <img src={home} alt=""/>
                           <div className={styles.text}>首页</div>
                       </div>
                       <div className={styles.service}>
                           <img src={service} alt=""/>
                           <div className={styles.text}>客服</div>
                       </div>
                   </div>
                   <div className={styles.right} onClick={()=>this.buyPopup.show()}>立即抢购</div>
               </div>
               <BuyPopup ref={(buyPopup)=>{this.buyPopup=buyPopup;}} />
           </div>
        );
    }
}
const mapStateToProps=()=>({})

;
const mapDispatchToProps=(dispatch)=>{
    return{
        push(url){
            dispatch(push(url));
        },
        changeAnimateType(type){
            dispatch({
                type:'CHANGE_ANIMATE_TYPE',
                payload:type
            });
        }
    };

};
export default connect(mapStateToProps,mapDispatchToProps)(Index);