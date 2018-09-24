import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Button from '../../src'

import './styles.scss'

const handleClick = action('sample-click')
storiesOf('or-sample', module).add(
  'sample',
  withInfo({ inline: true })(() => (
    <div>
      <h1>button type:</h1>
      <div>
        <Button type="primary" onClick={handleClick}>
          ADD TO CART
        </Button>
        <Button onClick={handleClick}>SIGN UP</Button>
        <Button type="warning" onClick={handleClick}>
          DELETE
        </Button>
        <Button onClick={handleClick}>TOO LOOOOOOOOOOOOOOOOOOG</Button>
      </div>
    </div>
  ))
)
