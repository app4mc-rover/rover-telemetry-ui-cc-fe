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
import { Droppable } from 'react-beautiful-dnd';

import styled from 'styled-components';
import Command from './Command/Command';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;    
`;
const Title = styled.h3`
    padding: 8px;
`;
const CommandList = styled.div`
    padding: 8px;
`;

export default class Column extends Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {provided => (
                        <CommandList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.props.commands.map((command, index) => <Command key={command.id} command={command} index={index}/>)}
                            {provided.placeholder}
                        </CommandList>
                    )}
                </Droppable>
            </Container>
        );
    }
}
