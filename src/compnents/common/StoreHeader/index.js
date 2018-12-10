import React,{Component} from 'react';
import Swipe from 'swipe-js-iso';
import labelIcon from '../../../assets/img/labelIcon.png';
import styles from  './index.module.scss';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            activeIndex:1
        };
    }
    componentDidMount(){
        const $this=this;
        let mySwipe = Swipe(this.mySwipe,{
            speed: 400,
            auto: 3000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            transitionEnd: function(index) {
                $this.setState({
                    activeIndex:index+1
                });
            }
        });

    }
    render(){
        const {imgs,style}=this.props;
        const {activeIndex}=this.state;
        return(
            <div className={styles.panel} style={style} >
                <div className={styles.img}>
                    <div className={styles.swipe} ref={(mySwipe)=>{this.mySwipe=mySwipe;}}>
                        <div className={styles.swipeWrap}>
                            {imgs.map((img,i)=>{
                                return <div key={i}><img  className="banner" src={img}/></div>;
                            })}
                        </div>
                    </div>
                    <div className={styles.pagination}>
                        {activeIndex}/{imgs.length}
                    </div>
                </div>
            </div>
        );
    }

}
export default Index;