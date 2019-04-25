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
import { Provider } from 'unstated';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

import HeaderView from './pages/layout/HeaderView';
import routes from './pages/routes';


class App extends Component {
    render() {
        return (
            <Provider> 
                <Router>
                    <div>
                        <HeaderView />
                        <Switch>
                            {routes}
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}



export default withNamespaces('common')(App);