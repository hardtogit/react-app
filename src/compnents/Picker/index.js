import React,{Component} from 'react';
import Picker from 'better-picker';
import {getRegionByPid} from '../../utils/regionApi';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
        };
        this.picker={};
    }
    componentDidMount(){
        const $this=this;
        const {onSelect}=this.props;
        const data = [getRegionByPid(0),getRegionByPid(110000),getRegionByPid(110100)];

        this.picker  = new Picker({
            data: data,
            selectedIndex: [0, 0, 0]
        });

        this.picker.on('picker.select', function (selectedVal, selectedIndex) {
            onSelect(selectedVal,[data[0][selectedIndex[0]],data[1][selectedIndex[1]],data[2][selectedIndex[2]]]);
        });

        this.picker.on('picker.change', function (index, selectedIndex) {
            if(index===0) {
                data[1]=getRegionByPid(data[0][selectedIndex].value);
                $this.picker.scrollColumn(1, 0);
                $this.picker.refillColumn(1,data[1]);
                data[2]=getRegionByPid(data[1][0].value);
                $this.picker.scrollColumn(2, 0);
                $this.picker.refillColumn(2, data[2]);
            }
            if(index===1){
                data[2]=getRegionByPid(data[1][selectedIndex].value);
                $this.picker.scrollColumn(2, 0);
                $this.picker.refillColumn(2,data[2]);
            }
            console.log(index);
            console.log(selectedIndex);
        });

    }
    show=()=>{
        this.picker.show();
    };
    destroy=()=>{
        let paras = document.getElementsByClassName('picker');
        for(let i=0;i<paras.length;i++){
            if (paras[i] != null)
                paras[i].parentNode.removeChild( paras[i]);
        }
    };
    render(){
        return(
            <div  />
        );
    }
}
export default Index;