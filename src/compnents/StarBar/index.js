
import React, {Component} from 'react';
import styles from './index.module.scss';
import star from '../../assets/img/star.png';
import staro from '../../assets/img/staro.png';

class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            starNum:props.starNum||0
        };
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.starNum){
            this.setState({
                starNum:nextProps.starNum
            });
        }
    }
    getStar=(starNum)=>{
        let starArr=[];
           for (let i=0;i<5;i++){
               starArr.push(
                   <div className={styles.star} key={i}>
                       <img src={i<starNum?star:staro} alt=""/>
                   </div>
               );
           }
           return starArr;
    };
    render() {
        const {starNum}=this.state;
        return (
            <div className={styles.starBar} >
                {this.getStar(starNum)}
                <div className={styles.text}>{starNum}分</div>
            </div>);

    }

}

export default Index;