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
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import { withNamespaces } from 'react-i18next';
import { compose } from 'recompose';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class CommandAddButton extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClick = (e) => {
    console.log("TARGET", e.target)
    this.props.addCommand(e.target.textContent);
    this.setState({ open: false });
  };

  render() {
    const { classes, t } = this.props;
    return (
      <div>
        <Fab color="primary" onClick={this.handleClickOpen}>
          <AddIcon />
        </Fab>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Close
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary={t('commands.forward')} onClick={this.handleClick} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={t('commands.backward')} onClick={this.handleClick} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={t('commands.left')} onClick={this.handleClick} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={t('commands.right')} onClick={this.handleClick} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={t('commands.stop')} onClick={this.handleClick} />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

CommandAddButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withNamespaces('playground'),
  withStyles(styles)
)(CommandAddButton);