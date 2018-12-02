import React,{Component} from 'react';
import classNames from 'classnames';
import OrderPanel from '../../../compnents/common/OrderPanel';
import store from '../../../assets/img/store.png';
import styles from './index.module.scss';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div>
                <div className={styles.tabs}>
                    <div className={classNames([styles.tab,styles.active])}>
                        <div className={styles.text}>待使用</div>
                    </div>
                    <div className={styles.tab}>
                        <div className={styles.text}>已使用</div>
                    </div>
                    <div className={styles.tab}>
                        <div className={styles.text}>退款</div>
                    </div>
                </div>
                <div className={styles.orderItem}>
                    <OrderPanel
                        orderNo={23234245}
                        img={store}
                        title="一把骨周年庆全城店通用（3-4人餐)"
                        currentPrice={11.89}
                        originalPrice={88.23}
                        copies={3}
                        btns={[<div className={classNames([styles.back,styles.btn])}>申请退款</div>,
                            <div className={classNames([styles.use,styles.btn])}>使用</div>]}
                    />
                </div>
                <div className={styles.orderItem}>
                    <OrderPanel
                        orderNo={23234245}
                        img={store}
                        title="一把骨周年庆全城店通用（3-4人餐)"
                        currentPrice={11.89}
                        originalPrice={88.23}
                        copies={3}
                        btns={[<div className={classNames([styles.back,styles.btn])}>申请退款</div>,
                            <div className={classNames([styles.use,styles.btn])}>使用</div>]}
                    />
                </div>
                <div className={styles.orderItem}>
                    <OrderPanel
                        orderNo={23234245}
                        img={store}
                        title="一把骨周年庆全城店通用（3-4人餐)"
                        currentPrice={11.89}
                        originalPrice={88.23}
                        copies={3}
                        btns={[<div className={classNames([styles.back,styles.btn])}>申请退款</div>,
                            <div className={classNames([styles.use,styles.btn])}>使用</div>]}
                    />
                </div>
            </div>
        );
    }
}
export default Index;