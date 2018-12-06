import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {goBack} from 'react-router-redux';
import {clientHeight,clientWidth} from '../../utils';
import ListTemplate from '../../compnents/ListTemplate';
import * as actionTypes from '../../actions/actionTypes';
import GoodsCard  from '../../compnents/common/GoodsCard';
import search from '../../assets/img/search.png';
import styles from './index.module.scss';
const SearchBarHeight=document.getElementsByTagName('html')[0].style.fontSize.replace('px','')*0.4;
class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            fixedBar:false,
            activeTab:0
        };
    }
    componentDidMount(){
    }
    changeTab=(index)=> {
        const {fixedBar}=this.state;
        if(fixedBar){
            this.scrollBox.scrollTop=SearchBarHeight;
        }
        this.setState({
            activeTab:index
        },()=>{
            this.props.clear();
            this.listTemplate.setState({
                init:true,
                first:false
            });
        });
    };
    render() {
        const {list,getList,pending,pageEnd} = this.props;
        const {fixedBar,activeTab}=this.state;
        let tabParam={};
        if(activeTab!==0){
           tabParam={cateid:activeTab};
        }

        return (
            <div  className={styles.content}>
                {fixedBar&&
                <div className={classNames([styles.tabs,fixedBar&&styles.fixed])}>
                    <div className={classNames([styles.tab,activeTab===0&&styles.active])}
                        onClick={()=>this.changeTab(0)}
                    >
                        <div className={styles.text}>推荐</div>
                    </div>
                    <div className={classNames([styles.tab,activeTab===1&&styles.active])}
                        onClick={()=>this.changeTab(1)}
                    >
                        <div className={styles.text}>酒店</div>
                    </div>
                    <div className={classNames([styles.tab,activeTab===2&&styles.active])}
                        onClick={()=>this.changeTab(2)}
                    >
                        <div className={styles.text}>餐饮</div>
                    </div>
                    <div className={classNames([styles.tab,activeTab===3&&styles.active])}
                        onClick={()=>this.changeTab(3)}
                    >
                        <div className={styles.text}>旅游</div>
                    </div>
                    <div className={classNames([styles.tab,activeTab===4&&styles.active])}
                        onClick={()=>this.changeTab(4)}
                    >
                        <div className={styles.text}>休闲</div>
                    </div>
                </div>
                }

                <div style={{transitionProperty: 'transform'}}>
                <div className={classNames(['clearfix',styles.recommend])}>
                    <ListTemplate
                        ref={(listTemplate)=>{this.listTemplate=listTemplate;}}
                        height={clientHeight-clientWidth/3.75*0.49}
                        distance={5}
                        fetch={()=>getList(tabParam)}
                        isLoading={pending}
                        endType={pageEnd}
                        getScroll={(scrollBox)=>this.scrollBox=scrollBox}
                        onScroll={(dom)=>{
                            if(dom.scrollTop>SearchBarHeight&&this.state.fixedBar!==true){
                                this.setState({fixedBar:true,canScroll:true});
                            }else if(dom.scrollTop<=SearchBarHeight&&this.state.fixedBar!==false){
                                this.setState({fixedBar:false,canScroll:false},);
                            }
                        }}
                    >
                        {(()=>{
                            let arr=[];
                            arr.push(
                                <div className={styles.search}>
                                <div className={styles.input} data-role="vehicleSearch">
                                    <img className={styles.img} src={search} alt=""/>
                                    输入关商户名称
                                </div>
                            </div>);
                            arr.push(
                                <div className={styles.tabs}>
                                    <div className={classNames([styles.tab,activeTab===0&&styles.active])}
                                        onClick={()=>this.changeTab(0)}
                                    >
                                        <div className={styles.text}>推荐</div>
                                    </div>
                                    <div className={classNames([styles.tab,activeTab===1&&styles.active])}
                                        onClick={()=>this.changeTab(1)}
                                    >
                                        <div className={styles.text}>酒店</div>
                                    </div>
                                    <div className={classNames([styles.tab,activeTab===2&&styles.active])}
                                        onClick={()=>this.changeTab(2)}
                                    >
                                        <div className={styles.text}>餐饮</div>
                                    </div>
                                    <div className={classNames([styles.tab,activeTab===3&&styles.active])}
                                        onClick={()=>this.changeTab(3)}
                                    >
                                        <div className={styles.text}>旅游</div>
                                    </div>
                                    <div className={classNames([styles.tab,activeTab===4&&styles.active])}
                                        onClick={()=>this.changeTab(4)}
                                    >
                                        <div className={styles.text}>休闲</div>
                                    </div>
                                </div>
                            );
                            list.map((value,index)=>{
                                arr.push(<div className={styles.store} key={index}>
                                    <GoodsCard
                                        key={index}
                                        img={value.cover}
                                        title={value.storename}
                                        starNum={value.rate}
                                        distance={value.distance}
                                    />
                                </div>);
                            });
                            return arr;
                        })()
                        }
                    </ListTemplate>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    pending:state.listData.getIn([actionTypes.STORE_LIST,'pending']),
    list:state.listData.getIn([actionTypes.STORE_LIST,'data']),
    pageEnd:state.listData.getIn([actionTypes.STORE_LIST,'pageEnd'])
});
const mapDispatchToProps = (dispatch) => ({
    pop(url) {
        dispatch(goBack(url));
    },
    getList(data) {
        dispatch({
            type:actionTypes.STORE_LIST,
            params:[{...data,limit:10}]
            }
        );
    },
    clear(){
        dispatch({
            type:actionTypes.CLEAR_LIST_DATA,
            key:actionTypes.STORE_LIST
        });
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);