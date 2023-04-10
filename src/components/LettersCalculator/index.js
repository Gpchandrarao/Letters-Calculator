// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {string: ''}

  onChangeOfLettersCount = e => {
    this.setState({string: e.target.value})
  }

  render() {
    const {string} = this.state

    return (
      <div className="container">
        <div className="text-container">
          <div className="input-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="description" htmlFor="letter">
                Enter the phrase
              </label>
              <input
                className="input-text"
                id="letter"
                type="text"
                placeholder="Enter the phrase"
                onChange={this.onChangeOfLettersCount}
                value={string}
              />
            </div>
            <p className="btn">No.of letters: {string.length}</p>
          </div>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
