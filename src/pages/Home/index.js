import React,{Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import classNames from 'classnames';
import * as actionTypes from '../../actions/actionTypes';
import GoodsPanel from '../../compnents/common/GoodsPanel';
import Confirm from '../../compnents/Dialog/Confirm';
import hotel from '../../assets/img/hotel.png';
import relaxation from '../../assets/img/relaxation.png';
import repast from '../../assets/img/repast.png';
import search from '../../assets/img/search.png';
import travel from '../../assets/img/travel.png';
import styles from './index.module.scss';
import Swiper from '../../compnents/Swiper';
class Index extends Component {
    componentDidMount(){
        const {location}=this.props;
        if(location){
            this.props.getList({lng:location.longitude,lat:location.latitude});
        }
    }
    componentWillReceiveProps({location}){
         if(location&&location!==this.props.location){
             this.props.getList({lng:location.longitude,lat:location.latitude});
         }
    }
    render() {
        console.log(this.props);
        const {goodsInfo,push}=this.props;
        return (
           <div className={styles.content}>
               <div className={styles.search}>
                   <div className={styles.text} onClick={()=>push('/Address')}>成都</div>
                   <div className={styles.input} data-role="vehicleSearch" onClick={()=>push('/search')}>
                       <img className={styles.img} src={search} alt=""/>
                       输入关键词
                   </div>
               </div>
               <Swiper>
                   <div key={1} className={styles.slide}>
                       <img className={styles.img} src="https://img.meituan.net/msmerchant/799a8a2c28aae03e02b3b906515ac36b1345678.jpg@750w_320h_1e_1c" />
                   </div>
                   <div key={2} className={styles.slide}>
                       <img className={styles.img} src="https://img.meituan.net/msmerchant/799a8a2c28aae03e02b3b906515ac36b1345678.jpg@750w_320h_1e_1c" />
                   </div>
                   <div key={3} className={styles.slide}>
                       <img className={styles.img} src="https://img.meituan.net/msmerchant/799a8a2c28aae03e02b3b906515ac36b1345678.jpg@750w_320h_1e_1c" />
                   </div>
               </Swiper>
               <div className={styles.menus}>
                   <div className={styles.menu}>
                       <img className={styles.img} src={hotel} alt=""/>
                       <div className={styles.text}>酒店</div>
                   </div>
                   <div className={styles.menu}>
                       <img className={styles.img} src={repast} alt=""/>
                       <div className={styles.text}>餐饮</div>
                   </div>
                   <div className={styles.menu}>
                       <img className={styles.img} src={travel} alt=""/>
                       <div className={styles.text}>旅游</div>
                   </div>
                   <div className={styles.menu}>
                       <img className={styles.img} src={relaxation} alt=""/>
                       <div className={styles.text}>休闲</div>
                   </div>
               </div>
               <div className={styles.types}>
                   <div className={classNames([styles.type,styles.active])}>
                       <div className={styles.label}>限时特卖</div>
                   </div>
                   <div className={classNames([styles.type])}>
                       <div className={styles.label}>即将售罄</div>
                   </div>
                   <div className={classNames([styles.type])}>
                       <div className={styles.label}>抢购预告</div>
                   </div>
               </div>
               <div className={styles.goods}>
                   {goodsInfo.map((value,index)=>{
                       return (
                           <GoodsPanel
                               key={index}
                               img="https://img.meituan.net/msmerchant/799a8a2c28aae03e02b3b906515ac36b1345678.jpg@750w_320h_1e_1c"
                               title="峨眉山山脚温泉酒店"
                               deadline="12月31日 23:59:59 结束"
                               style={{marginBottom:'0.1rem'}}
                               currentPrice="34.56"
                               originalPrice="86.00"
                               copies="688"
                               onClick={()=>{push('/goodsDetail');}}
                           />
                       );
                   })}
               </div>
               <Confirm   ref={(confirm)=>{this.confirm=confirm;}}/>
           </div>
        );
    }
}
const mapStateToProps=({global,infoData})=>({
    location:global.location,
    goodsInfo:infoData.getIn([actionTypes.GOODS_INFO,'data']).data||[]
    })

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
        },
        getList(location){
            dispatch({
                type:actionTypes.GOODS_INFO,
                params:[{...location,page:1,limit:10}]
            });

        }
    };

};
export default connect(mapStateToProps,mapDispatchToProps)(Index);