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
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/FolderRounded';
import { withNamespaces } from 'react-i18next';
import { compose } from 'recompose';

import LayoutContainer from '../../containers/LayoutContainer'

const styles = {
  root: {
    width: 500,
  },
};


class FooterView extends React.Component {
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { t } = this.props;
    return (
      <Subscribe to={[LayoutContainer]}>
        {layoutContainer => (
          <center>
            <BottomNavigation value={value} onChange={layoutContainer.handleFooterChange} className={classes.root}>
              <BottomNavigationAction label={t('footer.recents')} value="recents" icon={<RestoreIcon />} />
              <BottomNavigationAction label={t('footer.favorites')} value="favorites" icon={<FavoriteIcon />} />
              <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
              <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
            </BottomNavigation>
          </center>
        )}
      </Subscribe>
    );
  }
}



FooterView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withNamespaces('common'),
  (withStyles(styles))
)(FooterView);