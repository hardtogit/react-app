import React,{Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import BaseText from '../../../compnents/BaseText';
import * as actionTypes from '../../../actions/actionTypes';
import phone from '../../../assets/img/phone.png';
import StoreHeader from '../../../compnents/common/StoreHeader';
import StarBar from '../../../compnents/StarBar';
import locationIcon from '../../../assets/img/locationIcon.png';
import styles from './index.module.scss';
class Index extends Component {
    componentDidMount() {
        const {params:{id},getDetail} = this.props;
        getDetail({store_id:id});
    }
    render() {
        const {detail,push}=this.props;
        const labels=['24小时前随时退'];
        if(detail.isbookin===1){
            labels.push('需提前预约');
        }
        return (
           <div className={styles.content}>
               <StoreHeader
                   imgs={detail.plist||[]}
               />
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
               <BaseText label={<div><img className={styles.location} src={locationIcon} alt=""/>{detail.address}</div>} />
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
                       <BaseText label="查看全部" borderType="five"
                           onClick={()=>{
                                     push(`/evaluate/${detail.id}`);
                                 }}
                           containerStyle={{padding:'0'}}
                       />
                   </div>

               </div>}
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