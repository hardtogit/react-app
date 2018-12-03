import React,{Component} from 'react';
import ListTemplate from '../../../compnents/ListTemplate';
import styles from './index.module.scss';
import * as actionType from '../../../actions/actionTypes';
import {connect} from 'react-redux';
import {goBack, push} from 'react-router-redux';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height:400
        };
    }

    componentDidMount() {
        this.setState({
            height:this.listContainer.offsetHeight
        });
    }
    componentWillUnmount(){
        this.props.clear();
    }
    render() {
        const {list,getList,pending,pageEnd} = this.props;
        const {height} =this.state;
        return (
            <div style={{height:'100%'}} ref={(listContainer)=>{this.listContainer=listContainer;}}>
                <ListTemplate height={height} distance={5} fetch={()=>getList()} isLoading={pending}
                    endType={pageEnd}
                >
                    {
                        list.map((value,index)=>{
                            return(
                                <div className={styles.containerBox} key={index}>
                                    <div className={styles.dataList}>
                                        <div className={styles.dataItem}  >
                                            <div className={styles.header}>
                                                <img src={value.headimgurl} alt=""/>
                                            </div>
                                            <div className={styles.left}>
                                                <div className={styles.amount}>{value.nickname}</div>
                                                <div className={styles.time} >{value.updatedtime}</div>
                                            </div>
                                            <div className={styles.right}>
                                                <div className={styles.amount}>{value.amount}</div>
                                                {value.genre===1&&<span >直销奖励</span>}
                                                {value.genre===2&&<span className={styles.ing}>二级管理</span>}
                                                {value.genre===3&&<span className={styles.success}>三级管理</span>}
                                                {/*<span v-if="item.status===1" >{index}提交申请</span>*/}
                                                {/*<span v-if="item.status===2" className="ing">提款中</span>*/}
                                                {/*<span v-if="item.status===3" className="success">提款成功</span>*/}
                                                {value.remark}
                                            </div>
                                        </div>
                                    </div>
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
    pending:listData.getIn([actionType.AWARD_WAIT_LIST,'pending']),
    list:listData.getIn([actionType.AWARD_WAIT_LIST,'data']),
    pageEnd:listData.getIn([actionType.AWARD_WAIT_LIST,'pageEnd'])
});
const mapDispatchToProps = (dispatch) => ({
    pop(url) {
        dispatch(goBack(url));
    },
    push(url){
        dispatch(push(url));
    },
    getList(){
        dispatch({
            type:actionType.AWARD_WAIT_LIST,
            params:[{status:'wait'}]
        });
    },
    clear(){
        dispatch({
            type:actionType.CLEAR_LIST_DATA,
            key:actionType.AWARD_WAIT_LIST
        });
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);