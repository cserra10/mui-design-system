import React from 'react'
import ThemesProvider from './ThemesProviders'

export default (themes={}) => (story) => {
  return (
    <ThemesProvider story={story} themes={themes}>
      {story()}
    </ThemesProvider>
  )
}
