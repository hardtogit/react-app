import React,{Component} from 'react';
import classNames from 'classnames';
import OrderPanel from '../../../compnents/common/OrderPanel';
import ListTemplate from '../../../compnents/ListTemplate';
import store from '../../../assets/img/store.png';
import styles from './index.module.scss';
import {goBack, push} from 'react-router-redux';
import * as actionType from '../../../actions/actionTypes';
import {connect} from 'react-redux';
import {clientHeight, clientWidth} from '../../../utils';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            status:'wait'
        };
    }
    handleTabChange=(status)=>{
        this.setState({
            status
        },()=>{
            this.props.clear();
            this.listTemplate.setState({
                init:true,
                first:false
            });
            // this.listTemplate.setState({
            //     init:true,
            //     allHeight:0,
            //     loadHeight:0,
            //     initLoading:false
            // },()=>{

            // });
        });
    };
    render(){
        const {status}=this.state;
        const {list,getList,pending,pageEnd} = this.props;
        return(
            <div>
                <div className={styles.tabs}>
                    <div className={classNames([styles.tab,status==='wait'&&styles.active])} onClick={()=>this.handleTabChange('wait')}>
                        <div className={styles.text}>待使用</div>
                    </div>
                    <div className={classNames([styles.tab,status==='done'&&styles.active])} onClick={()=>this.handleTabChange('done')}>
                        <div className={styles.text}>已使用</div>
                    </div>
                    <div className={classNames([styles.tab,status==='pass'&&styles.active])} onClick={()=>this.handleTabChange('pass')}>
                        <div className={styles.text}>已过期</div>
                    </div>
                    <div className={classNames([styles.tab,status==='cancel'&&styles.active])} onClick={()=>this.handleTabChange('cancel')}>
                        <div className={styles.text}>退款</div>
                    </div>
                </div>
                <ListTemplate ref={(listTemplate)=>{this.listTemplate=listTemplate;}}
                    height={clientHeight-clientWidth/3.75*0.40} distance={5} fetch={()=>getList(status)} isLoading={pending}
                    endType={pageEnd}
                >
                    {
                        list.map((value,index)=>{
                            return(
                                <div className={styles.orderItem}>
                                    <OrderPanel
                                        orderNo={23234245}
                                        img={store}
                                        title="一把骨周年庆全城店通用（3-4人餐)"
                                        currentPrice={11.89}
                                        originalPrice={88.23}
                                        copies={3}
                                        btns={[<div className={classNames([styles.back,styles.btn])}>申请退款</div>,
                                            <div className={classNames([styles.use,styles.btn])}>使用</div>]}
                                    />
                                </div>
                            );
                        })
                    }
                </ListTemplate>
            </div>
        );
    }
}
const mapStateToProps = ({listData}) => ({
    pending:listData.getIn([actionType.ORDER_LIST,'pending']),
    list:listData.getIn([actionType.ORDER_LIST,'data']),
    pageEnd:listData.getIn([actionType.ORDER_LIST,'pageEnd'])
});
const mapDispatchToProps = (dispatch) => ({
    pop(url) {
        dispatch(goBack(url));
    },
    push(url){
        dispatch(push(url));
    },
    getList(status){
        dispatch({
            type:actionType.ORDER_LIST,
            params:[{status}]
        });
    },
    clear(){
        dispatch({
            type:actionType.CLEAR_LIST_DATA,
            key:actionType.ORDER_LIST
        });
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);