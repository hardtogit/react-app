import React,{Component} from 'react';
import {connect} from 'react-redux';
import search from '../../../assets/img/search.png';
import styles from './index.module.scss';
import {push,goBack} from 'react-router-redux';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        const {pop,push}=this.props;
        return(
            <div className={styles.content}>
                <div className={styles.search}>
                    <input className={styles.input} type="search" placeholder="输入关键词"/>
                    <div className={styles.text} onClick={pop}>取消</div>
                    <img className={styles.img} src={search} alt=""/>
                </div>
                <div className={styles.tips}>
                    <div className={styles.title}>热门搜索</div>
                    <div className={styles.tip}>西昌烧烤</div>
                    <div className={styles.tip}>火锅</div>
                    <div className={styles.tip}>串串</div>

                </div>

            </div>
        );
    }

}
const mapStateToProps=()=>({})

;
const mapDispatchToProps=(dispatch)=>{
    return{
        push(url){
            dispatch(push(url));
        },
        pop(){
            dispatch(goBack());
        },
        changeAnimateType(type){
            dispatch({
                type:'CHANGE_ANIMATE_TYPE',
                payload:type
            });
        }
    };

};

export default connect(mapStateToProps,mapDispatchToProps)(Index);