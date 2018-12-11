import React,{Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import wx from 'weixin-js-sdk';
import BaseText from '../../../compnents/BaseText';
import * as actionTypes from '../../../actions/actionTypes';
import phone from '../../../assets/img/phone.png';
import StoreHeader from '../../../compnents/common/StoreHeader';
import GoodsCard from '../../../compnents/common/GoodsCard';
import StarBar from '../../../compnents/StarBar';
import locationIcon from '../../../assets/img/locationIcon.png';
import styles from './index.module.scss';
class Index extends Component {
    componentDidMount() {
        const {params:{id},getDetail} = this.props;
        getDetail({store_id:id});
    }
    openLocation=(location)=>{
        wx.openLocation({
            latitude: location.lat, // 纬度，浮点数，范围为90 ~ -90
            longitude: location.lng, // 经度，浮点数，范围为180 ~ -180。
            name: location.name, // 位置名
            address: '', // 地址详情说明
            scale: 18, // 地图缩放级别,整形值,范围从1~28。默认为最大
            infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
        });
    };
    render() {
        const {detail,push}=this.props;
        const labels=['24小时前随时退'];
        if(detail.isbookin===1){
            labels.push('需提前预约');
        }
        return (
           <div className={styles.content}>
               <div className={styles.bannerContainer}>
               {detail.plist&&detail.plist.length&&
               <StoreHeader
                   imgs={detail.plist}
               />
               }
               </div>
               <div className={styles.storeInfo}>
                   <div className={styles.container}>
                       <div className={styles.flex}>
                           <div className={styles.left}>
                               <div className={styles.name}>{detail.storename}</div>
                               <div className={styles.time}>营业时间：{detail.businesstime}</div>
                           </div>
                           <div className={styles.right}>
                               <a  href={`tel:${detail.phone}`}><img src={phone} alt=""/></a>
                           </div>
                       </div>
                   </div>
               </div>
               <BaseText onClick={()=>this.openLocation({lng:detail.lng,lat:detail.lat,name:detail.address})} label={<div><img className={styles.location} src={locationIcon} alt=""/>{detail.address}</div>} />
               {(detail.rates&&detail.rates.length)&&<div className={styles.evaluate}>
                   <div className={styles.header}>
                       <div className={styles.left}>评价({detail.ratenum})</div>
                       <div className={styles.right} ><div className={styles.stars}><StarBar starNum={detail.rates[0].rates}/></div></div>
                   </div>
                   <div className={styles.user}>
                       <div className={styles.left}>
                           <img src={detail.rates[0].headimgurl} alt=""/>
                       </div>
                       <div className={styles.center} >
                           <div className={styles.name}>
                               {detail.rates[0].nickname}
                           </div>
                           <div className={styles.star}>
                               <StarBar starNum={detail.rates[0].rates}/>
                           </div>
                       </div>
                       <div className={styles.right}>
                           {detail.rates[0].createtime}
                       </div>
                   </div>
                   <div className={styles.content}>
                       {detail.rates[0].ratecontent}
                   </div>
                   <div className={styles.more}>
                       <BaseText label="查看全部" borderType="five"
                           onClick={()=>{
                                     push(`/evaluate/${detail.id}`);
                                 }}
                           containerStyle={{padding:'0'}}
                       />
                   </div>

               </div>}
               <div className={styles.recommend}>
                   <div className={styles.rcTitle}>为你推荐精品</div>
                   {detail.goods&&detail.goods.map((goods,index)=>{
                       return(
                           <div className={styles.store} key={index}>
                               <GoodsCard
                                   onClick={()=>{push(`/goodsDetail/${goods.id}`);}}
                                   key={index}
                                   img={goods.cover}
                                   title={goods.goodsname}
                                   starNum={goods.totalrate}
                               />
                           </div>
                       );

                   })}
               </div>
           </div>
        );
    }
}
const mapStateToProps=({infoData})=>({
    detail:infoData.getIn([actionTypes.STORE_INFO,'data']).data||{}
    });
const mapDispatchToProps=(dispatch)=>{
    return{
        push(url){
            dispatch(push(url));
        },
        getDetail(data){
            dispatch({
                type:actionTypes.STORE_INFO,
                params:[data]
            });
        }
    };

};
export default connect(mapStateToProps,mapDispatchToProps)(Index);