import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux';
import NavBar from '../../compnents/NavBar';

class Index extends Component {
    render() {
        return (
            <div  onClick={() => {
                this.props.pop();
            }}
            >
                <NavBar title="slide"/>
                发现页面
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