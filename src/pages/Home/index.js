import React,{Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
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