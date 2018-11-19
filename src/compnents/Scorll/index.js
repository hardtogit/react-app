import React ,{Component} from 'react'
import IScroll from  'iscroll/build/iscroll-probe'
const functionType=['beforeScrollStart','scrollCancel','scrollStart','scroll','scrollEnd','flick','zoomStart','zoomEnd']
class Index extends Component{
    constructor(props){
        super(props);
        this.myScroll={};
    }
    componentDidMount(){
        // const $this=this;
        const {getScroll,scroll}=this.props;
        // this.myScroll = new IScroll(this.scrollDom,{scrollbars: false,probeType:3});
        getScroll(this.scrollDom)//将Scroll返回给外部调用
        // this.scrollDom.addEventListener('touchmove',function(e){
        //     e.preventDefault();
        // });
        // functionType.forEach((value)=>{
        //     if(this.props[value]){
        //         this.myScroll.on(value,this.props[value]);
        //     }
        // })
        this.scrollDom.addEventListener('scroll',scroll,false)

    }
    render(){
        return(
            <div id='wrapper'
                 ref={(scrollDom)=>{this.scrollDom=scrollDom}}
                 style={{height:'100%',position:'relative',overflow:'scroll'}}

            >
                {this.props.children}
            </div>
        )
    }
}
export default Index