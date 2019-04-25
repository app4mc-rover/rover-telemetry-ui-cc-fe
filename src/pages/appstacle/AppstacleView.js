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
import Grid from '@material-ui/core/Grid';

import InfoCard from '../../components/InfoCard/InfoCard';
import './AppstacleView.css';

import axios from 'axios';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class AppstacleView extends React.Component {

    state = {
        spacing: '8',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    handleClick = () => {
        console.log("Clicked")
        axios.get('http://172.22.167.42:8081/secured/string')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        return (
            <div className="main">
                <button onClick={this.handleClick}>Klick hier !</button>
            <Grid container className={classes.root} spacing={8}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                            <Grid key={0} item>
                            <InfoCard class="infoCards" image="/appstacle.jpg" alt="Alt" title="Appstacle" text="Today automotive software-intensive systems are developed in silos by each car manufacturer or original equipment manufacturer (OEM) in-house.
                                This approach cannot meet the long-term challenges of the industry. One solution is to establish a standard car-to-cloud connection, open for
                                external applications and the use of open source software wherever possible without compromising safety and security. The APPSTACLE result will
                                include an open and secure cloud platform that interconnects a wide range of vehicles to the cloud via open in-car and Internet connection and
                                is supported by an integrated open source software development ecosystem."/>
                            </Grid>
                            
                            <Grid key={1} item>
                            <InfoCard className="infoCards" image="/itea.png" alt="Alt" title="Project Partners" text="Assystem Germany GmbH, BHTC, Bosch Software Innovations GmbH, Dortmund University of Applied Sciences and Arts, 
                            Eclipse Foundation Europe Gmbh, Eindhoven University of Technology, Ericsson, Fraunhofer IEM, Haltian Oy, KoçSistem, Link Motion, NETAS, NXP Semiconductors, 
                            Otokar Otomotiv ve Savunma Sanayi A.S., Robert Bosch GmbH, SecurityMatters BV, taskit GmbH, Technolution, Tieto, University of Oulu, University of Paderborn"/>
                            </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
        );
    }
}

AppstacleView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppstacleView);