import React, {Component} from 'react'
import styles from './index.module.scss'

class Index extends Component {
    render() {
        const {title,onLeft} = this.props;
        return (
            <div className={styles.navBar} >
                <div className={styles.btnBack} onClick={onLeft&&onLeft}>
                    <span className={styles.arrowBack}></span>
                </div>

                <div className={styles.title}>
                    {title}
                </div>
            </div>)

    }

}

export default Index