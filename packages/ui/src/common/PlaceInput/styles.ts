import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../../utils'

export type StylesAPI = {
  root?: CSSProperties
  label?: CSSProperties
  input?: CSSProperties
  close?: CSSProperties
  inputStartAdornment?: CSSProperties
  inputEndAdornment?: CSSProperties
  placeList?: CSSProperties
}

export default (theme: Theme) => {
  const defaultStyles = createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },

    input: {
      display: 'flex',
      borderBottom: `1px solid ${theme.palette.text.disabled}`
    },

    inputStartAdornment: {
      marginRight: 10
    }
  }) as StylesAPI

  // @ts-ignore
  return combineStyles(defaultStyles,theme.styles['common/PlaceInput'] || {})(theme)
}
