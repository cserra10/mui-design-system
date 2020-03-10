import * as React from 'react'
import { Themes } from './Themes'
import { addons, types } from '@storybook/addons'

addons.register('storybook/mds-themes', (api) => {
  addons.add('storybook/mds-themes/panel', {
    type: types.PANEL,
    match: ({ viewMode }) => viewMode === 'story',
    render: ({ active, key }) => <Themes key={key} channel={addons.getChannel()} api={api} active={active} />,
    title: 'Theme Selector',
  })
})
