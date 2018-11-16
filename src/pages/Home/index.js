import React,{Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import classNames from 'classnames'
import GoodsPanel from '../../compnents/common/GoodsPanel'
import styles from './index.module.scss'
import Swiper from '../../compnents/Swiper'
class Index extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        const {changeAnimateType,push}=this.props
        return (
           <div>
               <div className={styles.search}>
                   <div className={styles.text}>成都</div>
                   <div className={styles.input} data-role="vehicleSearch">输入关键词</div>
               </div>
               <Swiper >
                   <div key={1} className={styles.slide}>
                       <img className={styles.img} src='https://bao-image.oss-cn-hangzhou.aliyuncs.com/uploadfile/img/month_180508/201805080846168589.jpg' />
                   </div>
                   <div key={2} className={styles.slide}>
                       <img className={styles.img} src='https://bao-image.oss-cn-hangzhou.aliyuncs.com/uploadfile/img/month_180508/201805080846168589.jpg' />
                   </div>
                   <div key={3} className={styles.slide}>
                       <img className={styles.img} src='https://bao-image.oss-cn-hangzhou.aliyuncs.com/uploadfile/img/month_180508/201805080846168589.jpg' />
                   </div>
               </Swiper>
               <div className={styles.menus}>
                   <div className={styles.menu}>
                       <img className={styles.img} src="" alt=""/>
                       <div className={styles.text}>酒店</div>
                   </div>
                   <div className={styles.menu}>
                       <img className={styles.img} src="" alt=""/>
                       <div className={styles.text}>餐饮</div>
                   </div>
                   <div className={styles.menu}>
                       <img className={styles.img} src="" alt=""/>
                       <div className={styles.text}>旅游</div>
                   </div>
                   <div className={styles.menu}>
                       <img className={styles.img} src="" alt=""/>
                       <div className={styles.text}>休闲</div>
                   </div>
               </div>
               <div className={styles.types}>
                   <div className={classNames([styles.type,styles.active]) }>
                       <div className={styles.label}>限时特卖</div>
                   </div>
                   <div className={classNames([styles.type]) }>
                       <div className={styles.label}>即将售罄</div>
                   </div>
                   <div className={classNames([styles.type]) }>
                       <div className={styles.label}>抢购预告</div>
                   </div>
               </div>
               <GoodsPanel img='https://bao-image.oss-cn-hangzhou.aliyuncs.com/uploadfile/img/month_180508/201805080846168589.jpg'
                           title='峨眉山山脚温泉酒店'/>

           </div>
        )
    }
}
const mapStateToProps=()=>({})

;
const mapDispatchToProps=(dispatch)=>{
    return{
        push(url){
            dispatch(push(url))
        },
        changeAnimateType(type){
            dispatch({
                type:'CHANGE_ANIMATE_TYPE',
                payload:type
            })
        }
    }

};
export default connect(mapStateToProps,mapDispatchToProps)(Index)