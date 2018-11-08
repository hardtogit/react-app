import React,{Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styles from './index.module.scss'
class Index extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
           <div>
               <h4 className={styles.title} onClick={()=>this.props.push('/find?animateType=FADE')}>页面切换动画</h4>


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
        }
    }

};
export default connect(mapStateToProps,mapDispatchToProps)(Index)