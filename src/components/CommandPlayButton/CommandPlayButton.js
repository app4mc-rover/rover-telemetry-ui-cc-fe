/*******************************************************************************
 * Copyright (c) 2019 Dortmund University of Applied Sciences and Arts and others.
 *
 * This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License 2.0
 * which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *     Dortmund University of Applied Sciences and Arts - initial API and implementation
 *******************************************************************************/
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import PlayArrow from '@material-ui/icons/PlayArrow';

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
});

class CommandPlayButton extends React.Component {
    render() {
        const { loading, success } = this.props;
        const { classes } = this.props;
        const buttonClassname = classNames({
            [classes.buttonSuccess]: success,
        });
        if (this.props.allowed) {
            return (
                <div className={classes.root}>
                    <div className={classes.wrapper}>
                        <Fab color="primary" className={buttonClassname} onClick={()=>this.props.handleButtonClick(this.props.roverID)}>
                            {success ? <CheckIcon /> : <PlayArrow />}
                        </Fab>
                        {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className={classes.root}>
                    <div className={classes.wrapper}>
                        <Fab color="primary" disabled className={buttonClassname} onClick={()=>this.props.handleButtonClick(this.props.roverID)}>
                            {success ? <CheckIcon /> : <PlayArrow />}
                        </Fab>
                        {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                    </div>
                </div>
            );
        }

    }
}

CommandPlayButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommandPlayButton);