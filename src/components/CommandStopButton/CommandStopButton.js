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
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';


import StopIcon from '@material-ui/icons/Stop';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


class CommandStopButton extends React.Component {

    handleClick = () => {
        console.log("Implement Stop Button")
    }

    render() {
        return (
            <div>
                <IconButton disabled className={this.props.classes.button} variant="fab" color="primary" aria-label="Delete" onClick={this.handleClick}>
                    <StopIcon />
                </IconButton>
            </div>
        );
    }
}



CommandStopButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(CommandStopButton);