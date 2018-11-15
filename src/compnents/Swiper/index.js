import React,{Component} from 'react'
import Swiper from 'swipe-js-iso'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
class ReactSwiper extends Component{
      static propTypes={
      swipeOptions: PropTypes.shape({
      startSlide: PropTypes.number,
      speed: PropTypes.number,
      auto: PropTypes.number,
      continuous: PropTypes.bool,
      disableScroll: PropTypes.bool,
      stopPropagation: PropTypes.bool,
      swiping: PropTypes.func,
      callback: PropTypes.func,
      transitionEnd: PropTypes.func
    }),
    style: PropTypes.shape({
      container: PropTypes.object,
      wrapper: PropTypes.object,
      child: PropTypes.object
    }),
    id: PropTypes.string,
    className: PropTypes.string,
    active:PropTypes.string
      }
      static defaultProps={
          swipeOptions: {
              startSlide:0,
                auto:3000,
                speed:500,
                disableScroll: true,
                continuous:true,
                callback() {
                },
                transitionEnd() {
                }
          },
            style: {
            container: {
                overflow: 'hidden',
                visibility: 'hidden',
                position: 'relative',
            },

            wrapper: {
                overflow: 'hidden',
                position: 'relative'
            },

            child: {
                float: 'left',
                width: '100%',
                position: 'relative',
                transitionProperty: 'transform'
            },

            },
            className: '',
      }
      constructor(props) {
        super(props);
        this.state = {pagenunm: 0,Did:false}
    }
    componentWillMount(){
        if(this.swipe){
          this.swipe.kill();
          this.swipe = void 0;
        }
    }
    componentDidMount(){
        let { swipeOptions } = this.props;
            const fns=swipeOptions.callback;
            swipeOptions.callback=()=>{
               const num=this.getPos();
                  if(this.set){
                    this.set(num); 
                  }
            fns()     
          }
          this.swipe = Swiper(this.refs.container, swipeOptions); 
    }
    componentWillUnmount(){
        if(this.swipe){
          this.swipe.kill();
          this.swipe = void 0;
          this.set=null;  
        }
    }
    set =(num)=>{
         this.setState({
                pagenunm:num
            })
    }
    next() {
    this.swipe.next();
    }

    prev() {
        this.swipe.prev();
    }

    slide(...args) {
        this.swipe.slide(...args);
    }

    getPos =()=>{
        if(this.swipe){
          return this.swipe.getPos();
        }
    }

    getNumSlides() {
        return this.swipe.getNumSlides();
    }
    render(){
        const { id, className, style, children,active} = this.props;
        var Swiper=[],
            Slider=[];
            React.Children.map(children,(child,i)=>{
              Swiper.push(React.cloneElement(child, {style: style.child}))
              Slider.push(<span  className={classNames(styles.swipeSlider,i==this.state.pagenunm&&styles.active||'')} key={i}></span>)
            })
        return(
            <div ref="container" id={id} className={`react-swipe-container ${className}`} style={style.container}>
                <div style={style.wrapper} className={styles.swipeBox}>
                {Swiper}
                </div>
                <div className={styles.swiperPagination}>
                {Slider}
                </div>
            </div>
        )
    }
}
export default ReactSwiper
