import React, { PureComponent } from 'react'
import a from './a'

interface Props {
  /**
   * Value to display, either empty string or you passed
   *
   * @default ""
   **/
  content?: string;
}

export class Hello extends PureComponent<Props, {}> {
  render () {
    return (
      <div className='title'>
        {a} {this.props.content}
      </div>
    )
  }
}
