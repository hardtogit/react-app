import React,{Component} from 'react'
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux'
import './index.scss'
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
            <TransitionGroup>
                <CSSTransition  key={this.props.routing.locationBeforeTransitions.key}
                               timeout={3000} classNames="slide-in">
                    <div style={{position:'absolute',top:0,left:0,right:0,width:'100%',height:'100%'}} >
                    {this.props.children}
                    </div>
                </CSSTransition>
            </TransitionGroup>
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