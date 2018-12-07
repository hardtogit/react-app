import React,{Component} from 'react';
import Popup from '../../../compnents/Popup';
import close from '../../../assets/img/close.png';
import checked from '../../../assets/img/checked.png';
import classNames from 'classnames';
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
            goodsIndex: 1
        };
        this.goods = {};
        this.payment = '0.00';
    }

    componentWillReceiveProps({detail}){
        if(detail.minpretium){
            detail.spec.map((value,index)=>{
                if(value.pretium===detail.minpretium){
                    this.goods=value;
                    this.setState({
                        goodsIndex:index
                    });
                }
            });
        }
    }
    show=()=>{
       this.popup.show();
    };
    hidden=()=>{
       this.popup.hidden();
    };
    add=()=>{
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
        const {goodsIndex}=this.state;
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
                    <div className={styles.propertyContainer}>
                        <div className={styles.propertyTitle}>
                            颜色
                        </div>
                        <div className={styles.propertyName}>红色</div>
                        <div className={styles.propertyName}>红色</div>
                        <div className={styles.propertyName}>红色</div>
                    </div>
                    <div className={styles.propertyContainer}>
                        <div className={styles.propertyTitle}>
                            颜色
                        </div>
                        <div className={classNames([styles.propertyName,styles.active])}>红色</div>
                        <div className={styles.propertyName}>红色</div>
                        <div className={styles.propertyName}>红色</div>
                    </div>
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