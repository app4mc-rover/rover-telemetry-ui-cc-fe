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
import { DragDropContext } from 'react-beautiful-dnd';
import CommandListElement from './CommandListElement/CommandListElement';
import Column from './Column/Column';

class CommandList extends Component {
    render() {

        let runOriginal = false;

        if (runOriginal) {
            return (
                <div>
                    {this.props.commandList.map((name, index) => {
                        return <CommandListElement key={index} name={name} index={index} deleteCommand={this.props.deleteCommand} />;
                    })}
                </div>
            );
        }
        else {
            return this.props.initialData.columnOrder.map((columnId) => {
                const column = this.props.initialData.columns[columnId];
                const unorderedCommands = Object.values(this.props.commandList)
                //const orderedCommands = column.commandIds.map(commandId => commandId != null ? unorderedCommands[commandId] : null); //TODO: is buggy because state management is not good

                return <DragDropContext onDragEnd={this.props.onDragEnd}><Column key={column.id} column={column} commands={unorderedCommands} /></DragDropContext>;
            })
        }
    }
}



export default (CommandList);