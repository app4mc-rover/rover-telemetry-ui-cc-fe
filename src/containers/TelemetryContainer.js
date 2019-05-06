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
import { Container } from 'unstated'
import axios from 'axios';

class TelemetryContainer extends Container {
    state = {
        telemetryTelegram: {},
        isCommandPushed: false
    };

    pushCommandSwitch = (value) => {
        this.setState({
            isCommandPushed: value
        })
    }

    sendCommand = (command, speed, roverID) => {
        //Sending command to backend which sends to the rover
        var telegram = {
            command: command,
            speed: speed,
            mode: 1
        }

        axios.post('http://localhost:8081/rover/' + roverID + '/command-control', telegram)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error, "REAL ERROR");
            });

    }

    handleTelemetryUpdate = (data) => {
        // this.setState({
        //     telemetryTelegram: data
        // })

        this.state.telemetryTelegram = data;
        console.log(this.state.telemetryTelegram, data)
    }
}

export default TelemetryContainer
