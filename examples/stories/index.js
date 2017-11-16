import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import Hello from '../../src'

storiesOf('Hello', module)
  .add('with text', () => (
    <Hello />
  ))
  // .add('with some emoji', () => (
  //   <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  // ))
