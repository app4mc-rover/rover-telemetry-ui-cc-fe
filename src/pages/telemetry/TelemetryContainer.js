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
import Switch from '@material-ui/core/Switch';
import { Subscribe } from 'unstated'

import CommandControlView from './CommandControlView';
import Telemetry from './TelemetryView';

import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import TelemetryContainer from '../../containers/TelemetryContainer'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class TelemetryContainerView extends Component {
  state = {
    value: 'rover1',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <Subscribe to={[TelemetryContainer]}>
        {telemetryContainer => (
          <center>
            <FormControlLabel
              control={
                <Switch
                  checked={telemetryContainer.state.isCommandPushed}
                  onChange={(event) => telemetryContainer.pushCommandSwitch(event.target.checked)}
                  value="controlSwitch"
                  color="primary" />
              }
              label="Control"
            />

            <div>
              <label>Rover1
              <Radio
                  checked={this.state.value === 'rover1'}
                  onChange={this.handleChange}
                  value="rover1"
                  name="radio-button-demo"
                  aria-label="Rover1"
                />
              </label>

              <label>Rover2
            <Radio
                  checked={this.state.value === 'rover2'}
                  onChange={this.handleChange}
                  value="rover2"
                  name="radio-button-demo"
                  aria-label="Rover2"
                />
              </label>

              <label>Rover3
            <Radio
                  checked={this.state.value === 'rover3'}
                  onChange={this.handleChange}
                  value="rover3"
                  name="radio-button-demo"
                  aria-label="Rover3"
                />
              </label>

              <label>Rover4
            <Radio
                  checked={this.state.value === 'rover4'}
                  onChange={this.handleChange}
                  value="rover4"
                  name="radio-button-demo"
                  aria-label="Rover4"
                />
              </label>
            </div>
            {telemetryContainer.state.isCommandPushed === true ?
              (<div>
                <CommandControlView roverID={this.state.value} />
              </div>) : (<div>
                <Telemetry roverID={this.state.value} />
              </div>)}
          </center>
        )}
      </Subscribe>
    );
  }
}


export default compose(
  withStyles(styles),
)(TelemetryContainerView);
