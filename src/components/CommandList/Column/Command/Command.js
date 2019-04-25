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
import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    background-color: ${props => (props.isDragging ? 'WhiteSmoke' : 'white')};
`;



export default class Command extends Component {
  render() {
    if (this.props.command != null) {
      return (
        <Draggable draggableId={this.props.command.id} index={this.props.index}>
          {(provided, snapshot) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              {this.props.command.content}
            </Container>
          )}
        </Draggable>
      )
    }
  }
}
