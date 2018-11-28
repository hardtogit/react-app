import React,{Component} from 'react'
import Popup from '../../../compnents/Popup'
import close from '../../../assets/img/close.png'
import checked from '../../../assets/img/checked.png'
import classNames from 'classnames'
import styles from './index.module.scss'
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            number:1
        }
    }
    show=()=>{
       this.popup.show()
    };
    hidden=()=>{
       this.popup.hidden()
    };
    add=()=>{
        this.setState((state)=>{
            return{
                number:state.number+1
            }
        })
    };
    subtract=()=>{
        this.setState((state)=>{
            return{
                number:state.number===1?1:state.number-1
            }
        })
    };
    render(){
        const {number}=this.state;
        return(
            <Popup ref={(popup)=>{this.popup=popup}}>
                <div className={styles.buyContainer}>
                <div className={styles.buyPopup}>
                    <div className={styles.close}>
                        <img onClick={this.hidden} src={close} alt=""/>
                    </div>
                   <div className={styles.goodsInfo}>
                        <div className={styles.left}>
                            <img src={close} alt=""/>
                        </div>
                       <div className={styles.right}>
                           <div className={styles.popTitle}>一把骨周年庆全城店通用（3-4人餐）</div>
                           <div>
                               <span className={styles.oneUnit}>¥</span><span className={styles.currentPrice}>68.90</span>
                           </div>
                           <div className={styles.flex}>
                               <div className={styles.left}><span className={styles.twoUnit}>¥</span><span className={styles.originalPrice}>168.90</span></div>
                               <div className={styles.right}>
                                   剩余999
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
                            <input type="text" placeholder="填写备注信息"/>
                        </div>

                    </div>
                    <div className={styles.amount}>
                        小记：<span className={styles.oneUnit}>¥</span><span className={styles.currentPrice}>68.90</span>
                    </div>
                    <div className={styles.clause}>
                        <img src={checked} alt=""/>已阅读并同意网站条款
                    </div>
                </div>
                    <div className={styles.buy}>
                        <div className={styles.left}>
                            <div className={styles.text}>合计实际支付金额</div>
                            <div><span className={styles.oneUnit}>¥</span><span className={styles.currentPrice}>68.90</span></div>
                        </div>
                        <div className={styles.right}>立即支付</div>
                    </div>
                </div>
            </Popup>
        )
    }

}
export default Index