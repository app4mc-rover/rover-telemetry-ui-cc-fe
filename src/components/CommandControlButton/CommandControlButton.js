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
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Subscribe } from 'unstated'
import TelemetryContainer from '../../containers/TelemetryContainer'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


class CommandControlButton extends Component {
    render() {
        return (
            <Subscribe to={[TelemetryContainer]}>
                {telemetryContainer => (
                    <div>
                        <center>
                            <Button variant="contained" onMouseDown={() => telemetryContainer.sendCommand(this.props.command, 400, this.props.roverID)} onMouseUp={ ()=>telemetryContainer.sendCommand(this.props.command, 0, this.props.roverID)} className={this.props.classes.button}>
                                {this.props.name}
                            </Button>
                        </center>
                    </div>
                )}
            </Subscribe>
        );
    }
}

export default withStyles(styles)(CommandControlButton);