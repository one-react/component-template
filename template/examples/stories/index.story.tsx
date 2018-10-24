import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Sample from 'or-<%= name %>'
import { previewCode } from './util'

import Example from './example'

import './styles.scss'

const handleClick = action('basic-click')
storiesOf('or-<%= name %>', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [Sample],
      propTablesExclude: [Example],
      styles: {
        jsxInfoContent: {
          borderTop: 'none',
          margin: 0
        }
      }
    })
  )
  .add('basic', () => <Sample onClick={handleClick}>Test</Sample>)
  .add('sample', () => <Example />, {
    info: {
      source: false,
      text: previewCode(require('!!raw-loader!./example.tsx'))
    }
  })
