import React, {Component} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {goBack} from 'react-router-redux'
import GoodsCard  from '../../compnents/common/GoodsCard'
import Scorll from '../../compnents/Scorll'
import search from '../../assets/img/search.png'
import styles from './index.module.scss'
const SearchBarHeight=document.getElementsByTagName('html')[0].style.fontSize.replace('px','')*0.4;
class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            fixedBar:false,
            activeTab:0,
            scrollIng:false
        }
    }
    changeTab=(index)=> {
        const {fixedBar,scrollIng}=this.state;
        if(scrollIng){
            return
        }
        if(fixedBar){
            this.myScroll.scrollTop=SearchBarHeight
        }
        this.setState({
            activeTab:index
        })

    }
    render() {
        const {fixedBar,activeTab}=this.state;
        return (
            <div  className={styles.content}>
                {fixedBar&&
                <div className={classNames([styles.tabs,fixedBar&&styles.fixed])}>
                    <div className={classNames([styles.tab,activeTab===0&&styles.active])}
                         onClick={()=>this.changeTab(0)}>
                        <div className={styles.text}>推荐</div>
                    </div>
                    <div className={classNames([styles.tab,activeTab===1&&styles.active])}
                         onClick={()=>this.changeTab(1)}>
                        <div className={styles.text}>酒店</div>
                    </div>
                    <div className={classNames([styles.tab,activeTab===2&&styles.active])}
                         onClick={()=>this.changeTab(2)}>
                        <div className={styles.text}>餐饮</div>
                    </div>
                    <div className={classNames([styles.tab,activeTab===3&&styles.active])}
                         onClick={()=>this.changeTab(3)}>
                        <div className={styles.text}>旅游</div>
                    </div>
                    <div className={classNames([styles.tab,activeTab===4&&styles.active])}
                         onClick={()=>this.changeTab(4)}>
                        <div className={styles.text}>休闲</div>
                    </div>
                </div>
                }

            <Scorll
                getScroll={(myScroll)=>{this.myScroll=myScroll}}
                scrollStart={()=>this.setState({scrollIng:true})}
                scrollEnd={()=>this.setState({scrollIng:false})}
                scroll={(e)=>{
                    if(e.target.scrollTop>SearchBarHeight&&this.state.fixedBar!==true){
                        this.setState({fixedBar:true})
                    }else if(e.target.scrollTop<=SearchBarHeight&&this.state.fixedBar!==false){
                        this.setState({fixedBar:false})
                    }
                }}
            >
                <div style={{transitionProperty: 'transform'}}>
                <div className={styles.search}>
                    <div className={styles.input} data-role="vehicleSearch">
                        <img className={styles.img} src={search} alt=""/>
                        输入关商户名称
                    </div>
                </div>
                <div className={styles.tabs}>
                    <div className={classNames([styles.tab,activeTab===0&&styles.active])}
                         onClick={()=>this.changeTab(0)}>
                        <div className={styles.text}>推荐</div>
                    </div>
                    <div className={classNames([styles.tab,activeTab===1&&styles.active])}
                         onClick={()=>this.changeTab(1)}>
                        <div className={styles.text}>酒店</div>
                    </div>
                    <div className={classNames([styles.tab,activeTab===2&&styles.active])}
                         onClick={()=>this.changeTab(2)}>
                        <div className={styles.text}>餐饮</div>
                    </div>
                    <div className={classNames([styles.tab,activeTab===3&&styles.active])}
                         onClick={()=>this.changeTab(3)}>
                        <div className={styles.text}>旅游</div>
                    </div>
                    <div className={classNames([styles.tab,activeTab===4&&styles.active])}
                         onClick={()=>this.changeTab(4)}>
                        <div className={styles.text}>休闲</div>
                    </div>
                </div>
                <div className={classNames(['clearfix',styles.recommend])}>
                    {(()=>{
                        let arr=[]
                        for(let i=0;i<60;i++){
                        arr.push(
                            <div className={styles.store} key={i}>
                                <GoodsCard
                                    key={i}
                                    img='https://p1.meituan.net/deal/893175033c96530ce73b0c2a7421657855504.jpg.webp@180w_180h_1e_1c_1l_80q%7Cwatermark=0'
                                    title='大通冰室'
                                    starNum={4}
                                    distance='500m'
                                />
                            </div>
                        )}
                        return arr
                    })()

                    }
                </div>
                </div>
            </Scorll>
            </div>
        )
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    pop(url) {
        dispatch(goBack(url))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)