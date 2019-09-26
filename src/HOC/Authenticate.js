import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


export default (ComposedComponent) => {
    class Authenticate extends React.Component {
        constructor(props){
            super(props);
            console.log(this.props)
        }

        UNSAFE_componentWillMount() {
            this.checkAndRedirect();
        }

        UNSAFE_componentWillUpdate() {
            this.checkAndRedirect();
        }

        checkAndRedirect() {
            const {isAuthenticated} = this.props;
            console.log(this.props)
            if(!isAuthenticated) {
                console.log("coming hereee")
                this.props.history.push("/")
            }
        }

        

        render() {
            return (
                <React.Fragment>
                   
                    { this.props.isAuthenticated ? <ComposedComponent {...this.props} /> : null }
                </React.Fragment>
            )
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuthenticated : (state.auth) ? state.auth.isAuthenticated : null
        }
    }
    
    return compose(withRouter,connect(mapStateToProps,null))(Authenticate);
}