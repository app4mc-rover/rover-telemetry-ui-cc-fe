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

import i18n from 'i18next';


import common_de from '../../locales/de/common.json';
import common_en from '../../locales/en/common.json';
import common_tr from '../../locales/tr/common.json';


import playground_de from '../../locales/de/playground.json';
import playground_en from '../../locales/en/playground.json';
import playground_tr from '../../locales/tr/playground.json';


import telemetry_de from '../../locales/de/telemetry.json';
import telemetry_en from '../../locales/en/telemetry.json';
import telemetry_tr from '../../locales/tr/telemetry.json';


const resources = {
    en: {
        common: common_en,
        playground: playground_en,
        telemetry: telemetry_en
    },
    de: {
        common: common_de,
        playground: playground_de,
        telemetry: telemetry_de
    },
    tr: {
        common: common_tr,
        playground: playground_tr,
        telemetry: telemetry_tr
    }
};

i18n
    .init(
        {
            resources,
            lng: "en",
            fallbackLng: "en",
            interpolation: {
                escapeValue: false
            },
        }
    );





export default i18n;