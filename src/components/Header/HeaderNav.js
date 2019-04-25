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
import { Subscribe } from 'unstated'
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { compose } from 'recompose';
import { withNamespaces } from 'react-i18next';
import Button from '@material-ui/core/Button';

import LayoutContainer from '../../containers/LayoutContainer'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class HeaderNav extends React.Component {
  render() {
    const { classes, t } = this.props;

    return (
      <Subscribe to={[LayoutContainer]}>
        {layoutContainer => (
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Tabs value={layoutContainer.state.currentHeaderValue} onChange={(event, value) => layoutContainer.handleHeaderChange(value)}>
                <Tab label={t('common:header.appstacle')} component={Link} to="/appstacle" />
                <Tab label={t('common:header.roverTelemetry')} component={Link} to="/telemetry" />
                <Tab label={t('common:header.appstore')} component={Link} to="/appstore" disabled />
                <Tab label={t('common:header.playground')} component={Link} to="/playground" />
                <Button color="inherit" onClick={() => { this.props.i18n.changeLanguage('de') }}>DE</Button>
                <Button color="inherit" onClick={() => { this.props.i18n.changeLanguage('en') }}>EN</Button>
                <Button color="inherit" onClick={() => { this.props.i18n.changeLanguage('tr') }}>TR</Button>
              </Tabs>

            </AppBar>
          </div>
        )}
      </Subscribe>
    );
  }
}

HeaderNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withNamespaces(),
  withRouter,
  withStyles(styles)
)(HeaderNav)