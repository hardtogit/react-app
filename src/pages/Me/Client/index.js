import React,{Component} from 'react';
import {connect} from 'react-redux';
import {goBack, push} from 'react-router-redux';
import * as actionType from '../../../actions/actionTypes';
import ListTemplate from '../../../compnents/ListTemplate';
import {clientHeight,clientWidth} from '../../../utils';
import styles from './index.module.scss';


class Index extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    componentWillUnmount(){
        this.props.clear();
    }
    render(){
        const {list,getList,pending,pageEnd} = this.props;
        return(
            <div>
                <div className={styles.titles}>
                    <div className={styles.name}>名称</div>
                    <div className={styles.consumption}>消费</div>
                    <div className={styles.rank}>排名</div>
                </div>
                    <ListTemplate ref={(listTemplate)=>{this.listTemplate=listTemplate;}}
                        height={clientHeight-clientWidth/3.75*0.40} distance={5} fetch={()=>getList()} isLoading={pending}
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
                                                    <div className={styles.time} >{value.createtime}</div>
                                                </div>
                                                <div className={styles.center}>
                                                    <div className={styles.amount}>{value.consume}</div>
                                                </div>
                                                <div className={styles.right}>
                                                    {index+1}
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
    pending:listData.getIn([actionType.CLIENT_LIST,'pending']),
    list:listData.getIn([actionType.CLIENT_LIST,'data']),
    pageEnd:listData.getIn([actionType.CLIENT_LIST,'pageEnd'])
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
            type:actionType.CLIENT_LIST
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