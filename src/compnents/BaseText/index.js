import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import arrowRight from '../../assets/img/arrowRight.png';
import styles from './index.module.scss';
class BaseText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue || ''
        };

        this.validateRu = this.validateRun.bind(this);
    }
    static nameq = 'BaseText';
    static propTypes = {
        className: PropTypes.string,
        defaultValue: PropTypes.string,   // 默认值
        label: PropTypes.oneOfType([      // 右侧图标
            PropTypes.string,
            PropTypes.object
        ]),          // 左侧文本
        content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),                                     // 中间内容
        right: PropTypes.oneOfType([      // 右侧图标
            PropTypes.bool,
            PropTypes.element
        ]),
        borderType: PropTypes.string,    // 边框类型
        onClick: PropTypes.func,         // 点击触发事件
        onChange: PropTypes.func,        // 值发生变化触发事件
        containerStyle: PropTypes.object,
        contentStyle: PropTypes.object
    }

    validateRun() {
        return !this.state.value ? { result: false } : { result: true };
    }

    setValue(value) {
        if (value) {
            this.setState({ value });
            this.props.onChange && this.props.onChange(value);
        }
    }

    clickHandle = () => {
        this.props.onClick && this.props.onClick();
    }

    renderLeft() {
        return (
            <div className={styles.left}>
                {this.props.label && <span style={this.props.leftStyle} className={styles.leftText}>{this.props.label}</span>}
            </div>
        );
    }

    renderContent() {
        const content = this.props.content;
        let children;

        if (content) {
            if (typeof content == 'object') {
                children = content;
            } else {
                children = <span className={styles.contentText} style={this.props.contentStyle}>{content}</span>;
            }
        }

        return (
            <div className={classNames(styles.content)}>
                {children}
            </div>
        );
    }

    // 右侧显示内容
    renderRight() {
        const right = this.props.right;

        if ( right === false )
            return null;

        return (
            <div className={styles.right}>
                {typeof right == 'object' ? right :
                    <img className={styles.arrowIcon} src={arrowRight} />}
            </div>
        );
    }

    render() {
        const props = this.props;
        const borderType = props.borderType;

        return (
            <div
                className={classNames([styles.container, borderType && styles[borderType], props.className])}
                style={this.props.containerStyle}
            >
                <div className={styles.wrap} onClick={this.clickHandle}>
                    {this.renderLeft()}
                    {this.renderContent()}
                    {this.renderRight()}
                </div>
            </div>
        );
    }
}

export default BaseText;
