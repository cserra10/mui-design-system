import React, { useEffect, useState } from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { DialogPlaceInput } from '@mds/ui'
import fetchPlaces from './fetchPlaces'

export default {
  component: DialogPlaceInput,
  title: 'common/DialogPlaceInput',
  decorators: [withKnobs]
}

export const Default = (
  () => (
    <DialogPlaceInput
      fetchPlaces={fetchPlaces}
      onPlaceChange={action('on change')}
    />
  )
)


const OriginDestinationDemo = ({ onChange }) => {
  const [data, setData] = useState({
    origin: null,
    destination: null
  })

  const handleOnChange = (type, place) => {
    setData(prevState => ({
      ...prevState,
      [type]: place
    }))
  }

  useEffect(() => {
    onChange(data)
  }, [data])

  return (
    <div
      style={{
        padding: 15,
        border: '1px solid #e7e7e7'
      }}
    >
      <DialogPlaceInput
        label="Origin:"
        fetchPlaces={fetchPlaces}
        onPlaceChange={p => handleOnChange('origin', p)}
        value={data.origin}
      />

      <br />

      <DialogPlaceInput
        label="Destination:"
        fetchPlaces={fetchPlaces}
        onPlaceChange={p => handleOnChange('destination', p)}
        value={data.destination}
      />
    </div>
  )
}

export const OriginDestination = (
  () => <OriginDestinationDemo onChange={action('onChange')} />
)
