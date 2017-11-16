import React from 'react'
import { storiesOf } from '@storybook/react'

import Hello from '../src'

storiesOf('Hello', module)
  .add('with text', () => (
    <Hello text='hahaha' />
  ))
  .add('without text', () => (
    <Hello />
  ))
