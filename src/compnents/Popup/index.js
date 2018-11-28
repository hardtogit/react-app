import React,{Component} from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false
        }
    }
    show=()=>{
        this.setState({
            visible:true
        })
    };
    hidden=()=>{
        this.setState({
            visible:false
        })
    };
    render(){
        const {visible}=this.state;
        return(
            <div className={classNames([styles.popup,visible&&styles.active])}>
                <div className={styles.bg}></div>
            <div className={styles.PopupContainer}>
                {this.props.children}
            </div>
            </div>
        )
    }

}
export default Index