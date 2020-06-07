import React from 'react';
import CirculaProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const CustomCirculaProgress = withStyles({
    root: {
        color: '#888888',
        margin: 'auto'
    }
})(CirculaProgress);

const withSpinner = (WrappedComponent) => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading
            ? <CustomCirculaProgress />
            : <WrappedComponent {...otherProps} />
    }
    return Spinner;
};

export default withSpinner;