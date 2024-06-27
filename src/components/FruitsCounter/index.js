// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananasCount: 0,
  }
  onClickEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }
  onClickEatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }
  render() {
    const {mangoCount, bananasCount} = this.state
    return (
      <div className="fruitsCounterContainer">
        <div className="fruitsCounter">
          <h1 className="countText">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count">{bananasCount}</span> bananas
          </h1>
          <div className="counterControlContainer">
            <div className="counterControl">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruitImage"
              />
              <div className="buttonContainer">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>

            <div className="counterControl">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruitImage"
              />
              <div className="buttonContainer">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
