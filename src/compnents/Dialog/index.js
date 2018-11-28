import React from 'react'
import Boron from '../../exclude/boron/Boron'
import PropTypes from 'prop-types'
/**
 弹出模态对话框 多种动画可选 例子见example
 */

export default class Dialog extends React.PureComponent {
    static propTypes = {
        mode: PropTypes.oneOf(['OutlineModal', 'ScaleModal', 'FadeModal', 'FlyModal', 'DropModal', 'WaveModal'])
    }

    static defaultProps = {
        mode: 'ScaleModal'
    }

    toggle = () => this.refs.modal.toggle()

    show = () => this.refs.modal.show()

    hide = () => this.refs.modal.hide()

    render() {
        const Modal = Boron[this.props.mode]
        return (
            <Modal
                ref="modal"
            >{this.props.children}</Modal>
        )
    }
}
