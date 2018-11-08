import React,{Component} from 'react'
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import './index.scss'
class Index extends Component{
    render(){
        const {routing,animateType}=this.props;
        let animateTypeStr=animateType;
        let animateClass='';
        switch (routing.locationBeforeTransitions.action){
            case 'PUSH':
                animateClass=`${animateTypeStr}-push`;
                break;
            case 'POP':
                animateClass=`${animateTypeStr}-pop`;
                break;
            default:
                animateClass=`${animateTypeStr}-pop`;
                break
        }
        return(
            <TransitionGroup className={animateClass}>
                <CSSTransition  key={this.props.routing.locationBeforeTransitions.key}
                               timeout={300} classNames={'animate'}>
                            <div  className='app-container' >
                                {this.props.children}
                            </div>
                </CSSTransition>
            </TransitionGroup>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        routing:state.routing,
        animateType:state.global.animateType
    }
};

const mapDispatchToProps=()=>({});
export default  connect(mapStateToProps,mapDispatchToProps)(Index)
