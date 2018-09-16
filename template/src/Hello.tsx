import React from 'react'
import a from './a'

class Hello extends React.PureComponent<{
  content: string;
}, {}> {
  render () {
    return (
      <div className='title'>
        {a} 2222 {this.props.content}
      </div>
    )
  }
}

export default Hello
