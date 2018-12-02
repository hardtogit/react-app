import React,{Component} from 'react'
import classNames from 'classnames'
import Config from './config'
import styles from './index.css'
import PropTypes from 'prop-types'
class Scroll extends Component{
    static propTypes={
           height:PropTypes.number,
           fetch:PropTypes.func,
           isLoading:PropTypes.bool,
           loading:PropTypes.object,
           endType:PropTypes.bool,
           endload:PropTypes.object,
           initLoad:PropTypes.object,
           distance:PropTypes.number,
           nullDom:PropTypes.element,
           fsDom:PropTypes.element,
        titleChild:PropTypes.element
    }
    static defaultProps={
           height:400,
           fetch(){

           },
           isLoading:true,
           loading:Config.loadingDom(),
           endType:false,
           endload:Config.loadingEndDom(),
           initLoad:Config.loadingInitDom(),
           style:{
               height:400,
               overflowY:'scroll',
               position: 'relative',
               width:'100%'
           },
          distance:5,
          listLoad:{
              display:'none'
          },
          listzg:{
              display:'block'
          },
         nullDom:Config.nullDom(),
        titleChild:null
    }
    constructor(props){
        super(props)
        this.state={
            init:true,
            allHeight:0,
            loadHeight:0,
            initLoading:false
        }
    }
    componentDidMount(){
        this.setState({
            init:true,
            allHeight:0,
            loadHeight:0,
            first:true,
            initLoading:true
        })
        this.getListall()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.isLoading){
            const loadHeight=this.refs.loadingBox.offsetHeight;
            this.setState({
              loadHeight,
            })
        }
    }
    componentDidUpdate(prevProps,prevState){
       const iniTzt=this.state.init;
        if((prevProps.isLoading&&iniTzt)||(!this.state.first&&iniTzt)){
            const Self=this
             setTimeout(()=>{
             Self.getListall()
             },0)
            if(!this.state.first&&iniTzt){
                this.setState({
                    first:true
                })
            }
        }else if(prevProps.isLoading&&!iniTzt){
             setTimeout(()=>{
             const height=this.refs.listBox.offsetHeight;
              this.setState({
                  allHeight:height
              })
             },0)
        }
    }
    getListall(){
        const Dom=this.refs.listBox,
              {height,fetch,endType}=this.props;
        if(Dom){
            const Height=Dom.offsetHeight;
                  if(Height<=height&&!endType){
                      fetch();
                  }else{
                   const eventDom=this.refs.scrollBox;
                     this.setState({
                         init:false,
                         allHeight:Height
                     })
                     this.addScroll(eventDom)
                  }
           }else{
               return false
           };
    }
    addScroll(Element){
        Element.addEventListener('scroll',()=>{
            const Top=Element.scrollTop
                  this.next(Top)
        })
    }
    next(top){
        const {distance,height,fetch,endType}=this.props,
               {allHeight,loadHeight}=this.state,
               surplus=allHeight+loadHeight-height-top;
               if(!endType){
                  if(surplus<=distance){
                   fetch()
               }
               }
    }
    render(){
        const {children,loading,height,style,fetch,endType,endload,listLoad,listzg,initLoad,nullDom,titleChild} = this.props,
            {initLoading}=this.state,
         listArry=[];
         style.height=height;
             children&&children.map((child,i)=>{
              listArry.push(React.cloneElement(child))
            });
         let loadType,
             ListDom,
             initLoadDom;
          if (initLoading){
              initLoadDom=initLoad
          }
          if(!endType){
             loadType=loading
          }else if (listArry!=0){
            loadType=endload
          }
          if (listArry.length==0&&!titleChild){
              ListDom=nullDom;
          }else {
              ListDom=listArry;
          }
        return(
            <div style={style} ref='scrollBox'>
              <div ref='listBox'>
              <div>
                  {titleChild}
              {
                  ListDom
              }
              </div>
              <div className={classNames(styles.fsLoading,this.state.init&&!endType&&styles.block||styles.hidden)}>
                 {
                     this.state.init&&!endType&&initLoadDom||null
                 }
              </div>
              </div>
             <div ref='loadingBox' style={this.state.DomHeight} className={classNames(this.state.init&&!endType&&styles.hidden||styles.block)}>
               {
                   loadType
               }
              </div>
            </div>

            )
    }
}
export default Scroll
