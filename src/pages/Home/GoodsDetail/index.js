import React,{Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import BaseText from '../../../compnents/BaseText';
import * as actionTypes from '../../../actions/actionTypes';
import phone from '../../../assets/img/phone.png';
import common  from '../../../assets/img/common.png';
import goodsDetail from '../../../assets/img/goodsDetail.png';
import home from '../../../assets/img/home.png';
import service from '../../../assets/img/service.png';
import GoodsHeader from '../../../compnents/common/GoodsHeader';
import StarBar from '../../../compnents/StarBar';
import BuyPopup from './BuyPopup';
import styles from './index.module.scss';
class Index extends Component {
    componentDidMount() {
        const {params:{id},getDetail} = this.props;
        getDetail({gid:id});
    }
    render() {
        const {detail}=this.props;
        const labels=['24小时前随时退'];
        if(detail.isbookin===1){
            labels.push('需提前预约');
        }
        return (
           <div className={styles.content}>
               <GoodsHeader
                   imgs={detail.plist||[]}
                   title={detail.goodsname}
                   deadline={detail.closetime+'结束'}
                   style={{marginBottom:'0.1rem'}}
                   currentPrice="34.56"
                   originalPrice="86.00"
                   copies={detail.sales}
                   labels={labels}
               />
               {detail.goods_rate&&<div className={styles.evaluate}>
                   <div className={styles.header}>
                       <div className={styles.left}>评价({detail.ratenum})</div>
                       <div className={styles.right} ><div className={styles.stars}><StarBar starNum={detail.goods_rate.rates}/></div></div>
                   </div>
                   <div className={styles.user}>
                       <div className={styles.left}>
                           <img src={detail.goods_rate.headimgurl} alt=""/>
                       </div>
                       <div className={styles.center} >
                           <div className={styles.name}>
                               单你
                           </div>
                           <div className={styles.star}>
                               <StarBar starNum={detail.goods_rate.rates}/>
                           </div>
                       </div>
                       <div className={styles.right}>
                           {detail.goods_rate.createtime}
                       </div>
                   </div>
                   <div className={styles.content}>
                       {detail.goods_rate.ratecontent}
                   </div>
                   <div className={styles.more}>
                   <BaseText label="查看全部" borderType='five' containerStyle={{padding:'0'}}/>
                   </div>

               </div>}
               <div className={styles.storeInfo}>
                   <div className={styles.container}>
                       <div className={styles.flex}>
                           <div className={styles.left}>
                               <div className={styles.name}>{detail.storename}</div>
                               <div className={styles.time}>营业时间：{detail.businesstime}</div>
                           </div>
                           <div className={styles.right}>
                               <a  href="tel:15311480726"><img src={phone} alt=""/></a>
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
const mapStateToProps=({infoData})=>({
    detail:infoData.getIn([actionTypes.GOODS_DETAIL_INFO,'data']).data||{}
    });
const mapDispatchToProps=(dispatch)=>{
    return{
        push(url){
            dispatch(push(url));
        },
        getDetail(data){
            dispatch({
                type:actionTypes.GOODS_DETAIL_INFO,
                params:[data]
            });
        }
    };

};
export default connect(mapStateToProps,mapDispatchToProps)(Index);