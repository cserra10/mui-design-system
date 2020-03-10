import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../../utils'

export type StylesAPI = {
  root?: CSSProperties
  placeGroup?: CSSProperties
  placeHeader?: CSSProperties
  place?: CSSProperties
  placeLabel?: CSSProperties
  placeIcon?: CSSProperties
}

export default (theme: Theme) => {
  const defaultStyles = createStyles({
    root: {

    },

    placeGroup: {
      marginBottom: theme.spacing(1)
    },

    placeHeader: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(.7)
    },

    place: {
      padding: theme.spacing(.7),
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.text.primary
    }
  }) as StylesAPI

  // @ts-ignore
  return combineStyles(defaultStyles, theme.styles['common/PlaceList'])(theme)
}
