import React,{Component} from 'react';
import {connect} from 'react-redux';
import {goBack, push} from 'react-router-redux';
import {clientHeight,clientWidth} from '../../../utils';
import ListTemplate from '../../../compnents/ListTemplate';
import CirclePanel from '../../../compnents/common/CirclePanel';
import * as actionType from '../../../actions/actionTypes';
import styles from './index.module.scss';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {

    }
    componentWillUnmount(){
        this.props.clear();
    }
    render() {
        const {list,getList,pending,pageEnd} = this.props;
        return (
            <div className={styles.circle}>
                <ListTemplate height={clientHeight} distance={5}
                    fetch={()=>getList({gid:this.props.params.id})} isLoading={pending}
                    endType={pageEnd}
                >
                    {
                        list.map((value,index)=>{
                            return(
                                <div className={styles.item} key={index}>
                                <CirclePanel
                                    headImg={value.headimgurl}
                                    title={value.nickname}
                                    content={value.ratecontent}
                                    imgs={value.plist}
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
    pending:listData.getIn([actionType.GOODS_EVALUATE_LIST,'pending']),
    list:listData.getIn([actionType.GOODS_EVALUATE_LIST,'data']),
    pageEnd:listData.getIn([actionType.GOODS_EVALUATE_LIST,'pageEnd'])
});
const mapDispatchToProps = (dispatch) => ({
    pop(url) {
        dispatch(goBack(url));
    },
    push(url){
        dispatch(push(url));
    },
    getList(data){
        dispatch({
            type:actionType.GOODS_EVALUATE_LIST,
            params:[data]
        });
    },
    clear(){
        dispatch({
            type:actionType.GOODS_EVALUATE_LIST,
            key:actionType.GOODS_EVALUATE_LIST
        });
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);