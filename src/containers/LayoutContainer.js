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

class LayoutContainer extends Container {
    state = {
        currentHeaderValue: 0,
        value: 'recents',
    };

    handleHeaderChange = (value) => {
        this.setState({
            currentHeaderValue: value
        })
    }

    handleFooterChange = (event, value) => {
        this.setState({ value });
    };

}

export default LayoutContainer