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
    constructor(props){
        super(props);
        this.state={
            tags:1
        };
        this.search={};
        this.location={};
    }
    componentDidMount(){
        const {location,city,getBanner}=this.props;
        getBanner();
        if(city){
            this.location={cityid:city.cityid};
            this.props.getList({cityid:city.cityid,tags:this.state.tags});
        }else if(location){
            this.location={lng:location.longitude,lat:location.latitude};
            this.props.getList({lng:location.longitude,lat:location.latitude,tags:this.state.tags});
            // this.props.getCityName({lng:location.longitude,lat:location.latitude,tags:this.state.tags});
        }
    }
    componentWillReceiveProps({location}){
         if(location&&location!==this.props.location){
             this.location={lng:location.longitude,lat:location.latitude};
             this.props.getList({lng:location.longitude,lat:location.latitude,tags:this.state.tags});
             // this.props.getCityName({lng:location.longitude,lat:location.latitude,tags:this.state.tags});
         }
    }
    handleTabChange=(index)=>{
        this.setState({
            tags:index
        });
        this.props.getList({...this.location,tags:index});
    };
    render() {
        const {goodsInfo,push,city,cityName,bannerInfo}=this.props;
        const {tags}=this.state;
        let cityText='定位中...';
        if(city&&city.name){
            cityText=city.name;
        }else if(cityName&&cityName.city){
            cityText=cityName.city;
        }
        return (
           <div className={styles.content}>
               <div className={styles.search}>
                   <div className={styles.text} onClick={()=>push('/address')}>{cityText}</div>
                   <div className={styles.input} data-role="vehicleSearch" onClick={()=>push('/search')}>
                       <img className={styles.img} src={search} alt=""/>
                       输入关键词
                   </div>
               </div>
               <Swiper>
                   {bannerInfo&&bannerInfo.map((banner,i)=>{
                       return(
                           <div key={i} className={styles.slide} onClick={()=>{push(banner.href);}}>
                               <img className={styles.img} src={banner.photo} />
                           </div>
                       );
                   })}
               </Swiper>
               <div className={styles.menus}>
                   <div className={styles.menu} onClick={()=>push('/home/near?tab=1')}>
                       <img className={styles.img} src={hotel} alt=""/>
                       <div className={styles.text}>酒店</div>
                   </div>
                   <div className={styles.menu} onClick={()=>push('/home/near?tab=2')}>
                       <img className={styles.img} src={repast} alt=""/>
                       <div className={styles.text}>餐饮</div>
                   </div>
                   <div className={styles.menu} onClick={()=>push('/home/near?tab=3')}>
                       <img className={styles.img} src={travel} alt=""/>
                       <div className={styles.text}>旅游</div>
                   </div>
                   <div className={styles.menu} onClick={()=>push('/home/near?tab=4')}>
                       <img className={styles.img} src={relaxation} alt=""/>
                       <div className={styles.text}>休闲</div>
                   </div>
               </div>
               <div className={styles.types}>
                   <div className={classNames([styles.type,tags===1&&styles.active])}>
                       <div className={styles.label} onClick={()=>this.handleTabChange(1)}>限时特卖</div>
                   </div>
                   <div className={classNames([styles.type,tags===2&&styles.active])}>
                       <div className={styles.label} onClick={()=>this.handleTabChange(2)}>即将售罄</div>
                   </div>
                   <div className={classNames([styles.type,tags===3&&styles.active])}>
                       <div className={styles.label} onClick={()=>this.handleTabChange(3)}>抢购预告</div>
                   </div>
               </div>
               <div className={styles.goods}>
                   {goodsInfo.map((value,index)=>{
                       return (
                           <GoodsPanel
                               key={index}
                               img={value.cover}
                               title={value.goodsname}
                               deadline={value.closetime+'结束'}
                               style={{marginBottom:'0.1rem'}}
                               currentPrice={value.minpretium}
                               originalPrice={value.maxmartetprices}
                               copies={value.sales}
                               onClick={()=>{push(`/goodsDetail/${value.id}`);}}
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
    city:global.city,
    cityName:infoData.getIn([actionTypes.CITY_NAME_INFO,'data']).data||{},
    goodsInfo:infoData.getIn([actionTypes.GOODS_INFO,'data']).data||[],
    bannerInfo:infoData.getIn([actionTypes.BANNER_INFO,'data']).data||[]
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
        },
        getBanner(){
            dispatch({
                type:actionTypes.BANNER_INFO
            });
        },
        getCityName(location){
            dispatch({
                type:actionTypes.CITY_NAME_INFO,
                params:[location]
            });
        }

    };

};
export default connect(mapStateToProps,mapDispatchToProps)(Index);