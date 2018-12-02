import React,{Component} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import Scroll from './index'
import styles from './demo.css'

class findMessage extends Component{
    render(){
        const {
            listData,
            pending,
            end
        }=this.props;
        const Height=document.body.clientHeight-44;
        return(
             <div className={styles.findMessage}>
              <div className={styles.messageContent}>
                
              <Scroll height={Height} fetch={this.props.getList} 
               isLoading={pending} distance={20} endType={end} endload={<div>没有更多了哦</div>}>
              {
                  
                  listData&&listData.map((item,i)=>{
                      const {title,content,description,date,msgKey,id,type,is_read}=item
                      return(
                          <div className={styles.massageList} key={i}>
                            <div className={styles.massageOne}>
                            <div className={styles.massageTitle}>
                            <span className={classNames(styles.massageIcon,type==1&&styles.system||styles.notice)}>{is_read=='0'&&'New'||type==1&&'系统'||'公告'}</span>
                            <span className={styles.massageNew}>{title}</span>
                            </div>
                            <div className={styles.massageBody}>
                            {content}
                            </div>
                            <div className={styles.massagefooter}>
                             {date}
                            </div>
                            <span className={styles.glyphiconChevronRight}></span>
                            </div>
                        </div>
                      )
                  })
              }
              </Scroll>
            </div>
            </div>
        )
    }
}
const initMymassege=(state,own)=>{
    return{
     listData:state.listdata.getIn(['FETCH_MY_MASSAGE_S','data']),
     pending:state.listdata.getIn(['FETCH_MY_MASSAGE_S','pending']),
     end:state.listdata.getIn(['FETCH_MY_MASSAGE_S','pageEnd'])
    }
}
const initMymassegefn=(dispatch,own)=>({
       getList(){
          dispatch({
              type:'FETCH_MY_MASSAGE_S'
          }) 
       }
})
export default connect(initMymassege,initMymassegefn)(findMessage)