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
import Grid from '@material-ui/core/Grid';

import CommandControlButton from '../../components/CommandControlButton/CommandControlButton';
import { compose } from 'recompose';
import { withNamespaces } from 'react-i18next';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class CommandControlView extends Component {

  render() {
    const { t, classes } = this.props;
    return (
      <div className="main">
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <CommandControlButton roverID={this.props.roverID} name={t('commands.forward')} command="W" />
            </Grid>
            <Grid item xs={6}>
            <CommandControlButton roverID={this.props.roverID} name={t('commands.left')} command="J" />
            </Grid>
            <Grid item xs={6}>
            <CommandControlButton roverID={this.props.roverID} name={t('commands.right')} command="K" />
            </Grid>
            <Grid item xs={12}>
              <CommandControlButton roverID={this.props.roverID} name={t('commands.backward')} command="S" />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default compose(
  withNamespaces('telemetry'),
  withStyles(styles)
)(CommandControlView);
