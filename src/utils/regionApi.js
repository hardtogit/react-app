import regionData from './region';
// let copyData=[];
// regionData.forEach((region)=>{
//     copyData.push({pid:region.pid,text:region.name,value:region.id});
// });
// console.log(JSON.stringify(copyData));
export const getRegionByPid=(pid)=>{
    return regionData.filter(region=>region.pid===pid);
};