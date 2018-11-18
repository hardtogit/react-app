import React ,{Component} from 'react'
import IScroll from  'iscroll'
class Index extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        var myScroll = new IScroll(this.scrollDom,{scrollbars: true});
        this.scrollDom.addEventListener('touchmove',function(e){
            e.preventDefault();
        });
    }
    render(){
        return(
            <div id='wrapper' ref={(scrollDom)=>{this.scrollDom=scrollDom}} style={{height:'100%',position:'relative'}}>
                {this.props.children}
            </div>
        )
    }

}
export default Index