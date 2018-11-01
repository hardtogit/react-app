import React,{Component} from 'react'
import {connect} from 'react-redux'
import {push,goBack} from 'react-router-redux'
class Index extends Component {
    render() {
        return (
            <div onClick={()=>{this.props.push('/home')}}>发现页面</div>
        )
    }
}
const mapStateToProps=()=>({});
const mapDispatchToProps=(dispatch)=>({
   push(url){
       dispatch(push(url))
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)