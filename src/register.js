import React from 'react';
import { addons, types } from '@storybook/addons';
import Panel from './components/Panel.js';

const ADDON_ID = 'storybook-view-source';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, (api) => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'Source',
        render: ({ active, key }) => {
            return <Panel
                api={api}
                active={active}
                key={key}/>;
        }
    });
});