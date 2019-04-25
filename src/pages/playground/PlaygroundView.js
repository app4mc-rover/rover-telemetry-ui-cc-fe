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
import { Subscribe } from 'unstated'

import { compose } from 'recompose';

import CommandList from '../../components/CommandList/CommandList';
import CommandAddButton from '../../components/CommandAddButton/CommandAddButton';
import CommandPlayButton from '../../components/CommandPlayButton/CommandPlayButton';

import PlaygroundContainer from '../../containers/PlaygroundContainer'

import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class PlaygroundView extends Component {

    state = {
        value: 'rover1',
    };

    handleChange = event => {
        console.log(event.target.value)
        this.setState({ value: event.target.value });
    };


    onDragEnd = result => {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = this.state.columns[source.droppableId];
        const newCommandIds = Array.from(column.commandIds);

        newCommandIds.splice(source.index, 1);
        newCommandIds.splice(destination.index, 0, draggableId - 1);

        const newColumn = {
            ...column,
            commandIds: newCommandIds
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn
            }
        }

        this.setState(newState);
    }


    render() {
        const { classes } = this.props;
        return (
            <Subscribe to={[PlaygroundContainer]}>
                {playgroundContainer => (
                    <div>
                        <center>
                            <label>Rover1
                                <Radio
                                    checked={this.state.value === 'rover1'}
                                    onChange={this.handleChange}
                                    value="rover1"
                                    name="radio-button-demo"
                                    aria-label="Rover1"
                                />
                            </label>

                            <label>Rover2
                                <Radio
                                    checked={this.state.value === 'rover2'}
                                    onChange={this.handleChange}
                                    value="rover2"
                                    name="radio-button-demo"
                                    aria-label="Rover2"
                                />
                            </label>

                            <label>Rover3
                                <Radio
                                    checked={this.state.value === 'rover3'}
                                    onChange={this.handleChange}
                                    value="rover3"
                                    name="radio-button-demo"
                                    aria-label="Rover3"
                                />
                            </label>

                            <label>Rover4
                                <Radio
                                    checked={this.state.value === 'rover4'}
                                    onChange={this.handleChange}
                                    value="rover4"
                                    name="radio-button-demo"
                                    aria-label="Rover4"
                                />
                            </label>
                        </center>
                        <div className="main">
                            <CommandAddButton addCommand={playgroundContainer.addCommand} />
                            <CommandList initialData={playgroundContainer.state} onDragEnd={this.onDragEnd} commandList={playgroundContainer.state.commandList} deleteCommand={playgroundContainer.deleteCommandByIndex} />
                            <CommandPlayButton
                                allowed={playgroundContainer.state.playAllowed}
                                playCommandList={playgroundContainer.playCommandList}
                                progress={playgroundContainer.state.currentProgress}
                                success={playgroundContainer.state.success}
                                loading={playgroundContainer.state.loading}
                                handleButtonClick={playgroundContainer.playCommandList}
                                roverID={this.state.value}
                            />
                        </div>
                    </div>
                )}
            </Subscribe>
        );
    }
}


export default compose(
    withStyles(styles),
)(PlaygroundView);