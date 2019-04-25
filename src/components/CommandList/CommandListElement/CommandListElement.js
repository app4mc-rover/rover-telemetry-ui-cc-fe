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

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 100,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});


class CommandListElement extends Component {
    state = {
        seconds: '',
        name: 'hai'
    };

    handleClick = () => {
        this.props.deleteCommand(this.props.index);
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                {this.props.name}
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="filled-age-simple">Sekunden</InputLabel>
                    <Select
                        value={this.state.seconds}
                        onChange={this.handleChange}
                        input={<FilledInput name="seconds" id="filled-age-simple" />}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) =>
                            <MenuItem value={value}>{value}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <IconButton className={this.props.classes.button} aria-label="Delete" onClick={this.handleClick}>
                    <DeleteIcon />
                </IconButton>
            </div>
        );
    }
}


CommandListElement.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommandListElement);