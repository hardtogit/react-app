import React,{Component} from 'react';
import styles from './index.module.scss';
import BestInput from '../../../compnents/BestInput';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.content}>
                    <BestInput label="商户名称" right="填写您的商户名称" borderType="four"/>
                    <BestInput label="联系方式" right="填写您的商户联系方式" borderType="four"/>
                    <BestInput label="商户地址" right="填写您的商户地址" borderType="four"/>
                    <div className={styles.cooperation}>合作须知</div>
                </div>
                <div className={styles.submit}>
                    提交
                </div>
            </div>
        );
    }
}
export default Index;