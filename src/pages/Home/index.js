import React,{Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import animateType from '../../compnents/common/RootComponent/animateType'
import styles from './index.module.scss'
class Index extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        const {changeAnimateType,push}=this.props
        return (
           <div>
               <h4 className={styles.title} onClick={()=>push('/find?animateType=FADE')}>页面切换动画</h4>
               <p onClick={()=>{changeAnimateType(animateType.SLIDE);push('/find?animateType=FADE')}}>slide</p>
               <p onClick={()=>{changeAnimateType(animateType.FADE);push('/find?animateType=FADE')}}>fade</p>
               <p onClick={()=>{changeAnimateType(animateType.FADE_VERTICAL);push('/find?animateType=FADE')}}>slide-vertical</p>
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