// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randNumber: 0}

  generateRandNum = () => {
    const newNumber = Math.ceil(Math.random() * 101 - 1)
    this.setState({randNumber: newNumber})
  }

  render() {
    const {randNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateRandNum}
          >
            Generate
          </button>
          <p className="random-number">{randNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
