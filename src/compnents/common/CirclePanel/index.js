import React from 'react';
import ClipboardJS from 'clipboard';
import classNames from 'classnames';
import toast from '../../../utils/toast';
import styles from  './index.module.scss';
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
        this.clipboard=undefined;
    }
    componentDidMount(){
        this.clipboard = new ClipboardJS('.copy');
        this.clipboard.on('success', (e) => {
            toast('复制成功');
            e.clearSelection();
        });
    }
    componentWillUnmount(){
        this.clipboard.destroy();
    }

    render() {
        const {headImg,title,imgs=[],content}=this.props;
        return (
            <div className={styles.panel}>
                <div className={styles.left}>
                    <img className={styles.headImg} src={headImg} alt=""/>
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.content}>{content}</div>
                    <div className={styles.imgContainer}>
                        {imgs.map((img, i) => {
                            return <img className={styles.img} key={i} src={img} alt=""/>;
                        })}
                    </div>
                    <div className={styles.btns}>
                        <div className={classNames([styles.btn,'copy'])} data-clipboard-text={content}>
                            复制文案
                        </div>
                        <div className={styles.btn}>
                            保存图片
                        </div>
                        <div className={styles.btn}>
                            商品分享
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Index;