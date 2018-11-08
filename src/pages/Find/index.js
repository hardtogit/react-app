import React,{Component} from 'react'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component {
    render() {
        return (
            <div style={{height:'100%',backgroundColor:'red'}} onClick={()=>{this.props.push('/home?a=3')}}>发现页面</div>
        )
    }
}
const mapStateToProps=()=>({});
const mapDispatchToProps=(dispatch)=>({
   push(url){
       dispatch(goBack(url))
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)