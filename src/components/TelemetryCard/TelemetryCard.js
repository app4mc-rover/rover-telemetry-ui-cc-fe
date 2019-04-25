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
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TimeGraph from '../TimeGraph/TimeGraph';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { compose } from 'recompose';
import { withNamespaces } from 'react-i18next';

import './TelemetryCard.css';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});


class TelemetryCard extends Component {


    state = {
        controlSwitch: false
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {

        const {t} = this.props;

        if (this.props.name === undefined || this.props.value === undefined) {
            return (
                <div></div>
            );
        }

        return (
            <div>
                <Paper className={this.props.classes.root} elevation={1}>
                    <Typography variant="h6" component="h1">
                        {this.props.name} <br/>
                        <FormControlLabel className="visualizeSwitch"
                            control={
                                <Switch
                                    checked={this.state.controlSwitch}
                                    onChange={this.handleChange('controlSwitch')}
                                    value="controlSwitch"
                                    color="primary"
                                />
                            }
                            label={
                                <Typography variant="subtitle2"> {t('telemetryCard.visualize')}</Typography>}
                        />
                    </Typography>
                    <Typography component="p">
                        {Math.round(this.props.value*100)/100}
                    </Typography>
                    <Typography component="p">
                    </Typography>
                    {(((this.props.data !== undefined) && (this.props.enableGraph === true)) || ((this.props.data !== undefined) && (this.state.controlSwitch === true))) ? <TimeGraph data={this.props.data} /> : ""}
                </Paper>
            </div>
        );
    }

}


// const TelemetryCard = (props) => {
//     const { classes } = props;

//     if (props.name === undefined || props.value === undefined) {
//         return (
//             <div></div>
//         );
//     }
//     return (
//         <div>
//             <Paper className={classes.root} elevation={1}>
//                 <Typography variant="h5" component="h3">
//                     {props.name}
//                     <FormControlLabel
//                         control={
//                             <Switch
//                                 value="controlSwitch"
//                                 color="primary"
//                             />
//                         }
//                         label="Visualize"
//                     />
//                 </Typography>
//                 <Typography component="p">
//                     {props.value}
//                 </Typography>
//                 <Typography component="p">
//                 </Typography>
//                 {(props.data !== undefined && props.enableGraph === true) ? <TimeGraph data={props.data} /> : ""}
//             </Paper>
//         </div>
//     );
// }

export default compose(
    withNamespaces('telemetry'),
    withStyles(styles)
)(TelemetryCard);