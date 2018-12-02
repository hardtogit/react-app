import React,{Component} from 'react';
import BaseText from '../../../compnents/BaseText';
import styles from './index.module.scss';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div>
                <BaseText label="通知内容" borderType="four"  content="只能推荐" />
                <BaseText label="抢购活动通知" borderType="four" content="每天一条" />
                <BaseText label="新增客户提醒" borderType="four" content="每天三条"/>
                <BaseText label="免打扰时间" borderType="three"  content="9:00-11:00"/>
            </div>
        );
    }
}
export default Index;