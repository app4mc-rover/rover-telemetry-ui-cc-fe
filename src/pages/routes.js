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
import { Route } from 'react-router-dom';
import AppstacleView from './appstacle/AppstacleView';
import PlaygroundView from './playground/PlaygroundView';
import TelemetryContainer from './telemetry/TelemetryContainer';

export default [
    <Route key="/appstacle" path="/appstacle" component={AppstacleView} />,
    <Route key="/playground" path="/playground" component={PlaygroundView} />,
    <Route key="/telemetry" path="/telemetry" component={TelemetryContainer} />
];