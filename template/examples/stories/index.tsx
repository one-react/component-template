import React, { CSSProperties} from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from "@storybook/addon-info"
// import { action } from '@storybook/addon-actions'

import Hello from 'index'

storiesOf('Hello', module)
  .add('with text', () => (
    <Hello content="world" />
  ))
  .add('docs', withInfo({ inline: true })(() => (
    <div style={styles.container}>
      <div style={styles.firstCellContainer}>
        <Hello content="world!!!233" />
      </div>
      <div style={styles.cellContainer}>
      <Hello content="world" />
      </div>
    </div>
  )))

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
  },
  cellContainer: {
    width: 100,
    height: 100,
    backgroundColor: "rgb(72, 78, 104)",
  },
};
styles.firstCellContainer = { ...styles.cellContainer, marginRight: 20 };
