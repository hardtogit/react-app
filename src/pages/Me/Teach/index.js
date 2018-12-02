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
                <BaseText label="推广二维码教程" borderType="four" />
                <BaseText label="推广商户教程" borderType="three" />
            </div>
        );
    }
}
export default Index;