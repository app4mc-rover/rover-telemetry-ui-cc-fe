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
import SockJsClient from 'react-stomp';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Subscribe } from 'unstated'
import { compose } from 'recompose';

import FormRow from '../../components/FormRow/FormRow';
import TelemetryContainer from '../../containers/TelemetryContainer'

import './TelemetryView.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


//TODO: Couldn't be tested because rover software does not connect to hono to send telemetry data
class Telemetry extends Component {
  render() {
    const { classes, roverID } = this.props;
    //will cause problems if the database does not contain the following infomation: core0, core1, core2, core3,  ! See the implemented data to see which data shouldn't be missed !
    return (
      <Subscribe to={[TelemetryContainer]}>
        {telemetryContainer => (
          <div>
            <SockJsClient url='http://172.22.167.42:8081/gs-guide-websocket'
              topics={['/topic/' + roverID + '/telemetry']}
              onMessage={telemetryContainer.handleTelemetryUpdate}
              ref={(client) => { this.clientRef = client }} />

            {Object.keys(telemetryContainer.state.telemetryTelegram).length > 0 && telemetryContainer.state.telemetryTelegram.cores != null ? ( //testing just one object, but this is not 100% safe. Check for more when nessassary
              <div className="main" >
                <Grid container spacing={8}>
                  <Grid container item xs={12} spacing={8}>
                    <FormRow classes={classes} name1="Timestamp" value1={telemetryContainer.state.telemetryTelegram.timestamp} />
                  </Grid>
                  <Grid container item xs={12} spacing={8}>
                    <FormRow classes={classes}
                      name1="Core 0" value1={telemetryContainer.state.telemetryTelegram.cores.core0}
                      name2="Core 1" value2={telemetryContainer.state.telemetryTelegram.cores.core1}
                      name3="Core 2" value3={telemetryContainer.state.telemetryTelegram.cores.core2}
                      name4="Core 3" value4={telemetryContainer.state.telemetryTelegram.cores.core3}
                    />
                  </Grid>
                  <Grid container item xs={12} spacing={8}>
                    <FormRow classes={classes}
                      name1="Ultrasonic Front"
                      name2="Ultrasonic Rear"
                      value1={telemetryContainer.state.telemetryTelegram.ultrasonic.front}
                      value2={telemetryContainer.state.telemetryTelegram.ultrasonic.rear} />
                  </Grid>
                  <Grid container item xs={12} spacing={8}>
                    <FormRow classes={classes}
                      name1="Infrared Front Left"
                      name2="Infrared Front Right"
                      name3="Infrared Rear Left"
                      name4="Infrared Rear Right"
                      value1={telemetryContainer.state.telemetryTelegram.infrared.frontLeft}
                      value2={telemetryContainer.state.telemetryTelegram.infrared.frontRight}
                      value3={telemetryContainer.state.telemetryTelegram.infrared.rearLeft}
                      value4={telemetryContainer.state.telemetryTelegram.infrared.rearRight} />
                  </Grid>
                  <Grid container item xs={12} spacing={8}>
                    <FormRow classes={classes}
                      name1="Accelerometer X"
                      name2="Accelerometer Y"
                      name3="Accelerometer Z"
                      value1={telemetryContainer.state.telemetryTelegram.gy521.accelerometer.x}
                      value2={telemetryContainer.state.telemetryTelegram.gy521.accelerometer.y}
                      value3={telemetryContainer.state.telemetryTelegram.gy521.accelerometer.z} />
                  </Grid>
                  <Grid container item xs={12} spacing={8}>
                    <FormRow classes={classes}
                      name1="Angle X"
                      name2="Angle Y"
                      name3="Angle Z"
                      value1={telemetryContainer.state.telemetryTelegram.gy521.angle.x}
                      value2={telemetryContainer.state.telemetryTelegram.gy521.angle.y}
                      value3={telemetryContainer.state.telemetryTelegram.gy521.angle.z} />
                  </Grid>
                  <Grid container item xs={12} spacing={8}>
                    <FormRow classes={classes}
                      name1="Gyroscope X"
                      name2="Gyroscope Y"
                      name3="Gyroscope Z"
                      value1={telemetryContainer.state.telemetryTelegram.gy521.gyroscope.x}
                      value2={telemetryContainer.state.telemetryTelegram.gy521.gyroscope.y}
                      value3={telemetryContainer.state.telemetryTelegram.gy521.gyroscope.z} />
                  </Grid>
                  <Grid container item xs={12} spacing={8}>
                    <FormRow classes={classes} name1="Bearing" value1={telemetryContainer.state.telemetryTelegram.hmc5883l.bearing} />
                  </Grid>
                </Grid>
              </div >)
              : (<div>Lädt</div>)}
          </div>
        )}
      </Subscribe>
    );
  }
}

export default compose(
  withStyles(styles)
)(Telemetry);
