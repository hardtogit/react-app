import React,{Component} from 'react'
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux'
// import './index.scss'
class Index extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    componentWillReceiveProps({routing}){
       console.log(routing)
    }

    render(){
        return(
            <CSSTransition className='slide-left' timeout={3000}>
                {this.props.children}
            </CSSTransition>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        routing:state.routing
    }
}

const mapDispatchToProps=()=>({});
export default connect(mapStateToProps,mapDispatchToProps)(Index) 