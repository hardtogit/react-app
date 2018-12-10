import React,{Component} from 'react';
import Popup from '../../../compnents/Popup';
import close from '../../../assets/img/close.png';
import checked from '../../../assets/img/checked.png';
import classNames from 'classnames';
import toast from '../../../utils/toast';
import styles from './index.module.scss';
const  returnFloat=(value)=>{
     value=Math.round(parseFloat(value)*100)/100;
    let s=value.toString().split('.');
    if(s.length==1){
        value=value.toString()+'.00';
        return value;
    }
    if(s.length>1){
        if(s[1].length<2){
            value=value.toString()+'0';
        }
        return value;
    }
};
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            goodsIndex: 0,
            selectAttr:{

            }
        };
        this.goods = {};
        this.payment = '0.00';
    }

    componentWillReceiveProps({detail}){
        if(detail.minpretium){
            const attr=detail.attr;
            let obj={};
            attr.map((key)=>{
               obj[key.key]=detail.spec[0][key.key];
            });
            console.log(obj,1111);
            this.goods=detail.spec[0];
            this.setState({
                selectAttr:obj
            });
        }
    }
    handleSelectAttr=(key,value)=>{
        const {detail}=this.props;
        let  {selectAttr}=this.state;
        selectAttr={...selectAttr,[key]:value};
        console.log(key,value);
        let flag=false;
        detail.spec.map((goods, index)=>{
            let dFlag=true;
            Object.keys(selectAttr).map((key)=>{
                if(goods[key]!==selectAttr[key]){
                    dFlag=false;
                }
            });
            if(dFlag){
                flag=true;
                console.log(Object.keys(selectAttr).length,detail.attr.length);
                if(Object.keys(selectAttr).length===detail.attr.length){
                    this.setState({
                        goodsIndex:index
                    });
                }
            }
        });
        if(flag){
            this.setState({
                selectAttr

            });
        }else{
            this.setState({
                selectAttr:{[key]:value}
            });
            toast('您选择的组合不存在，请重新选择');
        }
    };
    show=()=>{
       this.popup.show();
    };
    hidden=()=>{
       this.popup.hidden();
    };
    add=()=>{
        if(this.state.number===this.goods.stocks ){
            toast(`库存不足!最多只能购买${this.state.number}份`);
            return;
        }
        this.setState((state)=>{
            return{
                number:state.number+1
            };
        });
    };
    subtract=()=>{
        this.setState((state)=>{
            return{
                number:state.number===1?1:state.number-1
            };
        });
    };
    render(){
        const {number}=this.state;
        const {goodsIndex,selectAttr}=this.state;
        const {detail}=this.props;
        if(detail.spec){
            this.goods=detail.spec[goodsIndex];
            this.payment=returnFloat(this.goods.pretium*number);
        }

        return(
            <Popup ref={(popup)=>{this.popup=popup;}}>
                <div className={styles.buyContainer}>
                <div className={styles.buyPopup}>
                    <div className={styles.close}>
                        <img onClick={this.hidden} src={close} alt=""/>
                    </div>
                   <div className={styles.goodsInfo}>
                        <div className={styles.left}>
                            <img src={detail.cover} alt=""/>
                        </div>
                       <div className={styles.right}>
                           <div className={styles.popTitle}>{detail.goodsname}</div>
                           <div>
                               <span className={styles.oneUnit}>¥</span><span className={styles.currentPrice}>{this.goods.pretium}</span>
                           </div>
                           <div className={styles.flex}>
                               <div className={styles.left}><span className={styles.twoUnit}>¥</span><span className={styles.originalPrice}>{this.goods.martetprices}</span></div>
                               <div className={styles.right}>
                                   剩余{this.goods.stocks}份
                               </div>
                           </div>
                       </div>
                   </div>
                    {
                        detail.attr&&detail.attr.map((value,i)=>{
                            return(
                                <div key={i} className={styles.propertyContainer}>
                                    <div className={styles.propertyTitle}>
                                        {value.label}
                                    </div>
                                    {value.values.map((item,index)=>{
                                        return(<div key={index}
                                            className={classNames([styles.propertyName,selectAttr[value.key]===item.name&&styles.active])}
                                            onClick={()=>{
                                                this.handleSelectAttr(value.key,item.name);
                                            }}
                                               >{item.name}</div>);
                                    })}
                                </div>
                            );

                        })
                    }
                    <div className={styles.numFlex}>
                        <div className={styles.left}>
                            购买数量
                        </div>
                        <div className={styles.right}>
                            <div className={styles.add} onClick={this.add}>+</div>
                            <div className={styles.number}>{number}</div>
                            <div className={classNames([styles.subtract,number===1&&styles.disabled])} onClick={this.subtract} >-</div>
                        </div>
                    </div>
                    <div className={styles.remarkFlex}>
                        <div className={styles.left}>
                            备注
                        </div>
                        <div className={styles.right}>
                            <input ref={(remark)=>{this.remark=remark;}} type="text"  placeholder="填写备注信息"/>
                        </div>

                    </div>
                    <div className={styles.amount}>
                        小记：<span className={styles.oneUnit}>¥</span><span className={styles.currentPrice}>{this.payment}</span>
                    </div>
                    <div className={styles.clause}>
                        <img src={checked} alt=""/>已阅读并同意网站条款
                    </div>
                </div>
                    <div className={styles.buy}>
                        <div className={styles.left}>
                            <div className={styles.text}>合计实际支付金额</div>
                            <div><span className={styles.oneUnit}>¥</span><span className={styles.currentPrice}>{this.payment}</span></div>
                        </div>
                        <div className={styles.right}>立即支付</div>
                    </div>
                </div>
            </Popup>
        );
    }

}
export default Index;