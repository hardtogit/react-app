import React,{Component} from 'react';
import styles from './index.module.scss';
import weChat from '../../../assets/img/wechat.png';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div>
            <div className={styles.content}>
                <div className={styles.text}>提取至</div>
                <div className={styles.to}><img src={weChat} alt=""/><div>微信</div></div>
                <div className={styles.text}>提取现金</div>
                <div className={styles.input}>
                    <div className={styles.left}>¥</div>
                    <input className={styles.center} placeholder="可提取金额9999.99" type="number" />
                    <div className={styles.right}>全部</div>
                </div>
            </div>
            <div className={styles.submit}>
                提交
            </div>
            </div>
        );
    }
}
export default Index;