import React,{Component} from 'react';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux';
import * as actionTypes from '../../../actions/actionTypes';
import location from '../../../assets/img/location.png';
import styles from './index.module.scss';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount(){
        const {getCity}=this.props;
        getCity();
    }
    render(){
        return(<div className={styles.container}>
            <div className={styles.title}>你说在的地区</div>
            <div className={styles.location}><img src={location} alt=""/>成都</div>
            <div className={styles.title}>热门城市</div>
            <div className={styles.hotCity}>
                <div className={styles.location}>成都</div>
                <div className={styles.location}>成都</div>
                <div className={styles.location}>成都</div>
            </div>
            <div className={styles.hotCity}>
                <div className={styles.location}>成都</div>
                <div className={styles.location}>成都</div>
                <div className={styles.location}>成都</div>
            </div>

        </div>);
    }


}
const mapStateToProps=({infoData})=>({
    city:infoData.getIn([actionTypes.GET_CITY,'data']).data||{}
});
const mapDispatchToProps=(dispatch)=>({
    pop(){
        dispatch(goBack());
    },
    getCity(){
        dispatch({
            type:actionTypes.GET_CITY
        });
    }

});

export default connect(mapStateToProps,mapDispatchToProps)(Index);