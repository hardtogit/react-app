import React,{Component} from 'react';
import styles from './index.module.scss';
import Picker from '../../../compnents/Picker';
import BestInput from '../../../compnents/BestInput';
import BaseText from '../../../compnents/BaseText';
import * as actionType from '../../../actions/actionTypes';
import toast from '../../../utils/toast';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'点击选择'
        };
        this.cityid=undefined;
        this.townid=undefined;
    }
    componentWillReceiveProps({submit}){
       if(submit.code===0){
           toast('推荐成功');
       }else {
           if(submit.code===400){
               toast(submit.msg);
           }
       }
    }
    componentWillUnmount(){
        this.picker.destroy();
    }
    handleSubmit=()=>{
        const params={};
        params.store_name=this.store_name.value;
        params.phone=this.phone.value;
        params.address=this.address.value;
        params.cityid=this.cityid;
        params.townid=this.townid;
        this.props.submitFn(params);
    };
    handleSelect=(values,texts)=>{
        console.log(values);
        this.setState({
            text:`${texts[0].text}-${texts[1].text}-${texts[2].text}`
        });
        this.cityid=values[1];
        this.townid=values[2];
    };
    render(){
        const {text}=this.state;
        return(
            <div className={styles.container}>
                <div className={styles.content}>
                    <BestInput getInput={(store_name)=>{this.store_name=store_name;}}
                        label="商户名称" right="填写您的商户名称" borderType="four"
                    />
                    <BestInput getInput={(phone)=>{this.phone=phone;}} label="联系方式"
                        right="填写您的商户联系方式" borderType="four"
                    />
                </div>
                <BaseText label="商户地址" borderType="four" content={text} onClick={()=>this.picker.show()}/>
                <Picker ref={(picker)=>this.picker=picker} onSelect={this.handleSelect}/>
                <div className={styles.content}>
                    <BestInput getInput={(address)=>{this.address=address;}} label="详细地址"
                        right="填写您的商户详细地址" borderType="four"
                    />
                </div>
                <div className={styles.submit} onClick={this.handleSubmit}>
                    提交
                </div>
                <div className={styles.cooperation}>合作须知</div>
            </div>
        );
    }
}
const mapStateToProps = ({infoData}) => ({
    submit:infoData.getIn([actionType.STORE_INVITE_INFO,'data'])
});
const mapDispatchToProps = (dispatch) => ({
    pop(url) {
        dispatch(goBack(url));
    },
    submitFn(params){
        dispatch({
            type:actionType.STORE_INVITE_INFO,
            params:[params]
        });
    },
    clear(){
        dispatch({
            type:actionType.CLEAR_LIST_DATA,
            key:actionType.CLIENT_LIST
        });
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);