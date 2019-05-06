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


class PlaygroundContainer extends Container {
    state = {
        commandList: [],
        currentProgress: 0,
        playAllowed: false,
        loading: false,
        success: false,
        numberOfCommands: 0,
        columns: {
            'column-1': {
                id: 'column-1',
                title: 'Todos',
                commandIds: []
            }
        },
        columnOrder: ['column-1'],
    };

    getCommandOutOfString = (value) => {
        switch (value) {
            case 'Left' || 'Links' || 'Sol':
                return 'A';
            case 'Right' || 'Rechts' || 'Sag':
                return 'D';
            case 'Forward' || 'Vorne' || 'Ileri':
                return 'W';
            case 'Backward' || 'Rückwärts' || 'Geri':
                return 'S';
            case 'Stop' || 'Stopp' || 'Dur':
                return 'F';
            default:
                break;
        }
    }

    addCommand = (command) => {

        const column = this.state.columns['column-1'];
        const newCommandIds = Array.from(column.commandIds);
        newCommandIds.push(this.state.numberOfCommands);

        const newColumn = {
            ...column,
            commandIds: newCommandIds
        }

        const newState = {
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn
            },
            numberOfCommands: (this.state.numberOfCommands + 1),
        }

        this.setState(newState);


        this.state.numberOfCommands++;

        this.setState({
            commandList: {
                ...this.state.commandList,
                [this.state.numberOfCommands]: {
                    id: this.state.numberOfCommands,
                    content: command
                }
            },
            playAllowed: this.state.commandList != null ? true : false
        });
    }

    deleteCommandByIndex = (index) => {
        const runnableCommandList = Object.values(this.state.commandList)

        this.setState({
            commandList: runnableCommandList.filter((x, i) => i !== index),
            playAllowed: this.state.commandList != null ? true : false
        })
    }

    deleteLastCommand = () => {
        const column = this.state.columns['column-1'];
        const newCommandIds = Array.from(column.commandIds);

        newCommandIds.splice(0, 1);


        const newColumn = {
            ...column,
            commandIds: newCommandIds
        }

        const runnableCommandList = Object.values(this.state.commandList)
        const newState = {
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn
            },
            commandList: runnableCommandList.filter((x, i) => (i !== 0)),
            playAllowed: this.state.commandList != null ? true : false
        }

        this.setState(newState);
    }




    refreshButtonProperties = () => {
        const { commandList } = this.state;
        const runnableList = Object.values(commandList)

        this.setState({
            loading: (runnableList.length > 1 ? true : false),
            success: (runnableList.length <= 1 ? true : false),
        })
    }

    playCommandList = (roverID) => {
        const { commandList } = this.state;
        const runnableList = Object.values(commandList)

        runnableList.map((obj, index) => {
            setTimeout(() => {
                var telegram = {
                    command: this.getCommandOutOfString(obj.content), //converting from String to needed command. Otherwise the list would show the Command instead of the fully qualified string of the command
                    speed: 400,
                    mode: 1
                }
                axios.post('http://localhost:8081/rover/'+roverID+'/command-control', telegram)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                /** remove command which already has been used */
                this.deleteLastCommand();
                this.refreshButtonProperties()
            }, 2000 * index); //foreach runs through list simultanously and this line causes a time difference between the calls. Very Important line for delay. Otherwise the commands will be send at the same time without delay
            return 0;
        })
    }
}

export default PlaygroundContainer
