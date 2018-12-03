import React,{Component} from 'react';
import ListTempalte from '../../../compnents/ListTemplate';
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
        this.props.clear()
    }
    render() {
        const {billList,getBillList,pending,pageEnd} = this.props;
        const {height} =this.state;
        return (
            <div style={{height:'100%'}} ref={(listContainer)=>{this.listContainer=listContainer;}}>
                <ListTempalte height={height} distance={5} fetch={()=>getBillList()} isLoading={pending}
                    endType={pageEnd}
                >
                    {
                        billList&&billList.map((value,index)=>{
                            return(
                                <div className={styles.containerBox} key={index}>
                                    <div className={styles.dataList}>
                                        <div className={styles.dataItem}  >
                                            <div className={styles.left}>
                                                <div className={styles.amount}>{value.amount}</div>
                                                <div className={styles.time} >{value.createtime}</div>
                                            </div>
                                            <div className={styles.right}>
                                                {/*<span v-if="item.status===1" >{index}提交申请</span>*/}
                                                {/*<span v-if="item.status===2" className="ing">提款中</span>*/}
                                                {/*<span v-if="item.status===3" className="success">提款成功</span>*/}
                                                {/*<span v-if="item.status===4" className="fail">提款失败*/}
                                                    {/*<span  className={styles.reason}>?</span>*/}
                                                {/*</span>*/}
                                                {value.remark}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </ListTempalte>
            </div>

        );

    }
}

const mapStateToProps = ({listData}) => ({
    pending:listData.getIn([actionType.BILL_LIST,'pending']),
    billList:listData.getIn([actionType.BILL_LIST,'data']),
    pageEnd:listData.getIn([actionType.BILL_LIST,'pageEnd'])
});
const mapDispatchToProps = (dispatch) => ({
    pop(url) {
        dispatch(goBack(url));
    },
    push(url){
        dispatch(push(url));
    },
    getBillList(){
        dispatch({
            type:actionType.BILL_LIST,
            data:{limit:2}
        });
    },
    clear(){
        dispatch({
            type:actionType.CLEAR_LIST_DATA,
            key:actionType.BILL_LIST
        })
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);