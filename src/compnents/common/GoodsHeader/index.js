import React,{Component} from 'react'
import Swipe from 'swipe-js-iso'
import labelIcon from '../../../assets/img/labelIcon.png'
import styles from  './index.module.scss'
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            activeIndex:1
        }
    }
    componentDidMount(){
        const $this=this;
        setTimeout(()=>{
            let mySwipe = Swipe(this.mySwipe,{
                speed: 400,
                auto: 3000,
                continuous: true,
                disableScroll: false,
                stopPropagation: false,
                transitionEnd: function(index) {
                    $this.setState({
                        activeIndex:index+1
                    })
                }
            });
        },300)
    }
    render(){
        const {imgs,deadline,title,currentPrice,originalPrice,award,copies,style,labels=[]}=this.props;
        const {activeIndex}=this.state;
        return(
            <div className={styles.panel} style={style} >
                <div className={styles.img}>
                    <div className={styles.swipe} ref={(mySwipe)=>{this.mySwipe=mySwipe}}>
                        <div className={styles.swipeWrap}>
                            {imgs.map((img,i)=>{
                                return <div key={i}><img  className="banner" src={img}/></div>
                            })}
                        </div>
                    </div>
                    <div className={styles.deadline}>
                        <div className={styles.left}>限时抢购</div>
                        <div className={styles.right}>{deadline}</div>
                    </div>
                    <div className={styles.pagination}>
                        {activeIndex}/{imgs.length}
                    </div>
                </div>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.price}>
                    <div className={styles.left}>
                        <span className={styles.oneUnit}>¥</span><span className={styles.currentPrice}>{currentPrice}</span>
                        <span className={styles.twoUnit}>¥</span><span className={styles.originalPrice}>{originalPrice}</span>
                        {
                            award&& <div className={styles.commission}>
                                <div className={styles.left}>佣金</div>
                                <div className={styles.right}>
                                    <span className={styles.treeUnit}>¥</span>
                                    <span className={styles.num}>{award}</span>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={styles.right}>已售{copies}份</div>

                </div>
                <div className={styles.labels}>
                    {
                        labels.map((label,i)=>{
                            return <span key={i} className={styles.label}><img src={labelIcon} alt=""/>{label}</span>
                        })
                    }
                </div>
            </div>
        )
    }

}
export default Index