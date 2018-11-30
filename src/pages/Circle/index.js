import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux';
import CirclePanel from '../../compnents/common/CirclePanel';
import styles from './index.module.scss';

class Index extends Component {
    render() {
        return (
            <div className={styles.circle}>
                {(()=>{
                    let arr=[];
                    for(let i=0;i<60;i++){
                        arr.push(
                            <div className={styles.item} key={i}>
                                <CirclePanel
                                    headImg="https://p1.meituan.net/deal/893175033c96530ce73b0c2a7421657855504.jpg.webp@180w_180h_1e_1c_1l_80q%7Cwatermark=0"
                                    title="票哆哆成都站"
                                    content="活动是由共同目的联合起来并完成一定社会职能的动作的总和。活动由目的、动机和动作构成，具有完整的结构系统。苏联心理学家从20年代起就对活动进行了一系列研究。"
                                    imgs={[
                                        'https://p1.meituan.net/deal/893175033c96530ce73b0c2a7421657855504.jpg.webp@180w_180h_1e_1c_1l_80q%7Cwatermark=0',
                                        'https://p1.meituan.net/deal/893175033c96530ce73b0c2a7421657855504.jpg.webp@180w_180h_1e_1c_1l_80q%7Cwatermark=0',
                                        'https://p1.meituan.net/deal/893175033c96530ce73b0c2a7421657855504.jpg.webp@180w_180h_1e_1c_1l_80q%7Cwatermark=0',
                                        'https://p1.meituan.net/deal/893175033c96530ce73b0c2a7421657855504.jpg.webp@180w_180h_1e_1c_1l_80q%7Cwatermark=0',
                                        'https://p1.meituan.net/deal/893175033c96530ce73b0c2a7421657855504.jpg.webp@180w_180h_1e_1c_1l_80q%7Cwatermark=0'
                                    ]}
                                />
                            </div>
                        );}
                    return arr;
                })()
                }
            </div>
        );
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    pop(url) {
        dispatch(goBack(url));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);