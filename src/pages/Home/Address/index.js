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
        this.offsetArr=[];
    }
    componentDidMount(){
        this.props.getCity();
        document.getElementsByClassName('app-container').onscroll=()=>{
            // console.log(this.A.offsetTop);
        };
    }
    componentWillReceiveProps({city}){
        if(city&&city.A){
             setTimeout(()=>{
                Object.keys(city).map((key)=>{
                    if(key!=='hotcity')
                    this.offsetArr.push(this[key].offsetTop);
                });
             });
        }
    }
    handleIndex=(key)=>{
        document.getElementsByClassName('app-container')[0].scrollTop=this.offsetArr[Object.keys(this.props.city).indexOf(key)];
    };
    handleClick=(city)=>{
      this.props.saveCity(city);
      this.props.pop();
    };
    render(){
        const {city}=this.props;
        return(<div className={styles.container}>
            <div className={styles.title}>你所在的地区</div>
            <div className={styles.location}><img src={location} alt=""/>成都</div>
            <div className={styles.title}>热门城市</div>
            <div className={styles.hotCity}>
                {
                    city.hotcity&&city.hotcity.map((hcity,index)=>{
                        return(<div key={index}
                            onClick={()=>this.handleClick(hcity)}
                            className={styles.location}
                               >{hcity.name}</div>);
                    })
                }
            </div>
            <div>
                {(()=>{
                    let arr=[];
                    Object.keys(city).map((key)=>{
                        if(key!=='hotcity'){
                            arr.push(
                                <div key={key}>
                                    <div ref={(index)=>{this[key]=index;}} className={styles.title}>
                                        {key}
                                    </div>
                                    {
                                        (()=>{
                                            let citys=[];
                                            city[key].forEach((value,index)=>{
                                                citys.push(
                                                    <div className={styles.city}
                                                        onClick={()=>this.handleClick(value)}
                                                        key={index}
                                                    >{value.name}</div>
                                                );
                                            });
                                            return citys;
                                        })()
                                    }
                                </div>
                            );
                        }
                    });
                    return arr;
                })()
                }
            </div>
            <div className={styles.indexes} >
                {Object.keys(city).map((key)=>{
                    if(key!=='hotcity'){
                        return(<div key={key} className={styles.index}
                            onClick={()=>this.handleIndex(key)}
                               >{key}</div>);
                    }
                })}
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
    },
    saveCity(city){
        dispatch({
            type:actionTypes.SAVE_CITY,
            payload:city
        });
    }

});

export default connect(mapStateToProps,mapDispatchToProps)(Index);