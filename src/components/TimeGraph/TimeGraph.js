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
import React, {Component} from 'react';
import RTChart from 'react-rt-chart';
import './c3.css'

class TimeGraph extends Component {
    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 300);
    }
 
    render() {
        var data = {
          date: new Date(),
          Data: this.props.data
        };
     
        return <RTChart
                fields={['Data']}
                data={data} />
    }
}

export default TimeGraph;