import React,{Component} from 'react';
import classNames from 'classnames';
import OrderPanel from '../../../compnents/common/OrderPanel';
import store from '../../../assets/img/store.png';
import styles from './index.module.scss';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div>
                <div className={styles.tabs}>
                    <div className={classNames([styles.tab,styles.active])}>
                        <div className={styles.text}>伙伴</div>
                    </div>
                    <div className={styles.tab}>
                        <div className={styles.text}>同事</div>
                    </div>
                    <div className={styles.tab}>
                        <div className={styles.text}>家人</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Index;