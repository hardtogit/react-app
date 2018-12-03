import React,{Component} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {goBack, push} from 'react-router-redux';
import * as actionType from '../../../actions/actionTypes';
import ListTemplate from '../../../compnents/ListTemplate';
import {clientHeight,clientWidth} from '../../../utils';
import styles from './index.module.scss';


class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            level:1
        };
    }
    handleTabChange=(index)=>{
        this.setState({
            level:index
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
    }
    render(){
        const {list,getList,pending,pageEnd} = this.props;
        const {level} =this.state;
        return(
            <div>
                <div className={styles.tabs}>
                    <div className={classNames([styles.tab,level===1&&styles.active])}
                        onClick={()=>this.handleTabChange(1)}
                    >
                        <div className={styles.text}>伙伴</div>
                    </div>
                    <div className={classNames([styles.tab,level===2&&styles.active])}
                        onClick={()=>this.handleTabChange(2)}
                    >
                        <div className={styles.text}>同事</div>
                    </div>
                    <div className={classNames([styles.tab,level===3&&styles.active])}
                        onClick={()=>this.handleTabChange(3)}
                    >
                        <div className={styles.text}>家人</div>
                    </div>
                </div>
                <div className={styles.titles}>
                    <div className={styles.name}>名称</div>
                    <div className={styles.consumption}>消费</div>
                    <div className={styles.rank}>排名</div>
                </div>
                    <ListTemplate ref={(listTemplate)=>{this.listTemplate=listTemplate;}}
                        height={clientHeight-clientWidth/3.75*0.90} distance={5} fetch={()=>getList(level)} isLoading={pending}
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
    pending:listData.getIn([actionType.TEAM_LIST,'pending']),
    list:listData.getIn([actionType.TEAM_LIST,'data']),
    pageEnd:listData.getIn([actionType.TEAM_LIST,'pageEnd'])
});
const mapDispatchToProps = (dispatch) => ({
    pop(url) {
        dispatch(goBack(url));
    },
    push(url){
        dispatch(push(url));
    },
    getList(level){
        dispatch({
            type:actionType.TEAM_LIST,
            params:[{level}]
        });
    },
    clear(){
        dispatch({
            type:actionType.CLEAR_LIST_DATA,
            key:actionType.TEAM_LIST
        });
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);