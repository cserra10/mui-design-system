import React, { useEffect } from 'react'
import { NativeSelect, Typography, createMuiTheme } from '@material-ui/core'

const BaseComponent = ({
  onSelectTheme,
  themes,
  theme
}) => {
  const themesArr =  Object.keys(themes)
  if (themesArr.length < 1) {
    return (
      <Typography
        variant="caption"
        color="textSecondary">
        No themes provided. Using default mui theme
      </Typography>
    )
  }

  if (!theme) theme = themesArr[0]

  return (
    <NativeSelect
      value={theme}
      onChange={(e) => onSelectTheme(e.target.value)}
    >
      {themesArr.map((themeId) => (
        <option key={themeId} value={themeId}>
          {themeId}
        </option>
      ))}
    </NativeSelect>
  )
}

export const Themes = ({ channel, active }) => {
  const [theme, setTheme] = React.useState(localStorage.getItem('mds-theme'))
  const [themes, setThemes] = React.useState({})

  useEffect(() => {
    const muiTheme = createMuiTheme(themes[theme])
    document.getElementById("storybook-preview-iframe").style.background = muiTheme.palette.background.default
  })

  React.useEffect(() => {
    channel.on('setThemes', onReceiveThemes)
    return () => {
      channel.removeListener('setThemes', onReceiveThemes)
    }
  }, [])

  const onReceiveThemes = (newThemes) => {
    setThemes(newThemes)
  }

  const onSelectTheme = (themeId) => {
    setTheme(themeId)
    localStorage.setItem('mds-theme', themeId)
    channel.emit('themeSelected', themeId)
  }

  return active ? (
    <div style={{padding: 20}}>
      <BaseComponent
        onSelectTheme={onSelectTheme}
        themes={themes}
        theme={theme}
      />
    </div>
  ) : null
}
