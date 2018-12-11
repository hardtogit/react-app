import React,{Component} from 'react';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import './index.scss';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={};
        this.router='';
    }
    shouldComponentUpdate(nextProps) {
       if(this.router===nextProps.routing.locationBeforeTransitions.pathname){
            return false;
       }
       return true;
    }
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
                break;
        }
        let timeOut=300;
        if(routing.locationBeforeTransitions.pathname.indexOf('/home')!==-1){
            if(this.router.indexOf('/home')!==-1){
                 animateClass='';
                 timeOut=0;
            }
        }
        animateClass='';
        timeOut=0;
        this.router=routing.locationBeforeTransitions.pathname;
        console.log(this.router);
        return(
            <TransitionGroup className={animateClass}>
                <CSSTransition  key={this.props.routing.locationBeforeTransitions.key}
                    timeout={timeOut} classNames={'animate'}
                >
                            <div  className="app-container" >
                                {this.props.children}
                            </div>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        routing:state.routing,
        animateType:state.global.animateType
    };
};

const mapDispatchToProps=()=>({});
export default  connect(mapStateToProps,mapDispatchToProps)(Index);
