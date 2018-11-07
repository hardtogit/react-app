import React,{Component} from 'react'
import {connect} from 'react-redux'
import {push,goBack} from 'react-router-redux'
class Index extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div style={{height:'100%',backgroundColor:'blue'}} onClick={()=>{this.props.push('/find')}}>首页</div>
        )
    }
}
const mapStateToProps=()=>({})

;
const mapDispatchToProps=(dispatch)=>{
    console.log(dispatch)
    return{
        push(url){
            dispatch(push(url))
        }
    }

};
export default connect(mapStateToProps,mapDispatchToProps)(Index)