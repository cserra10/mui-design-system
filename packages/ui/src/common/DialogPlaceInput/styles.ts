import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../../utils'

export type StylesAPI = {
  root?: CSSProperties
  close?: CSSProperties
  label?: CSSProperties
  input?: CSSProperties
  originInputStartAdornment?: CSSProperties
}

export default (theme: Theme) => {
  const styles = <StylesAPI> createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },

    close: {
      alignSelf: 'flex-end',
      padding: theme.spacing(1)
    },

    label: {
      marginBottom: theme.spacing(1)
    },

    input: {

    }
  })

  // @ts-ignore
  return combineStyles(styles, theme.styles['common/DialogPlaceList'])(theme)
}
