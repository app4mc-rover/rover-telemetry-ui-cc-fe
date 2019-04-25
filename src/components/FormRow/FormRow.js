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

import Grid from '@material-ui/core/Grid';
import TelemetryCard from '../TelemetryCard/TelemetryCard';

function FormRow(props) {
  let counter = 0;
  let xs_calculated;

  if (props.name1 !== undefined)
    counter++;

  if (props.name2 !== undefined)
    counter++;

  if (props.name3 !== undefined)
    counter++;

  if (props.name4 !== undefined)
    counter++;


  xs_calculated = 12/counter;
  return (
    <React.Fragment>
      <Grid item xs={xs_calculated}>
        <TelemetryCard name={props.name1} value={props.value1} data={props.value1} enableGraph={props.enableGraph1}/>
      </Grid>
      <Grid item xs={xs_calculated}>
        <TelemetryCard name={props.name2} value={props.value2} data={props.value2} enableGraph={props.enableGraph2}/>
      </Grid>
      <Grid item xs={xs_calculated}>
        <TelemetryCard name={props.name3} value={props.value3} data={props.value3} enableGraph={props.enableGraph3}/>
      </Grid>
      <Grid item xs={xs_calculated}>
        <TelemetryCard name={props.name4} value={props.value4} data={props.value4} enableGraph={props.enableGraph4}/>
      </Grid>
    </React.Fragment>
  );
}


export default FormRow;