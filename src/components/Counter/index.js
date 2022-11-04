import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 1}
  onIncreament = () => {
    this.setState(preState => {
      console.log(`Preveious state value ${preState.count}`)
      return {count: preState.count + 1}
    })
  }
  onDecreament = () => {
    this.setState(preState => {
      console.log(`Preveious state value ${preState.count}`)
      return {count: preState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">Counter Application</h1>
        <h1 className="heading">Counter</h1>

        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncreament}>
            Increase
          </button>
          <button className="button" onClick={this.onDecreament}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
