import React, { Component } from 'react'
import Slide from "react-reveal/Slide"
export default class Countdown extends Component {

  state = {
    deadline: '04 Mar 2021 00:12:00 GMT',
    days: 0,
    hours: 0,
    minuts: 0,
    seconds: 0
  }

  componentDidMount() {
    setInterval(() => { this.getCountDown(this.state.deadline) }, 1000)
  }


  getCountDown(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) { console.log("hello"); return; }
    const seconds = Math.floor((time / 1000) % 60);
    const minuts = Math.floor((time / 1000 * 60) % 60)
    const hours = Math.floor((time / 1000 * 60 * 60) % 24)
    const days = Math.floor((time / (1000 * 60 * 60 * 24)))
    console.log(time);
    this.setState({ days, hours, minuts, seconds })
  }

  render() {
    const { days, hours, minuts, seconds } = this.state
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">
            Event Starts In
        </div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">
                {days}
              </div>
              <div className="countdown_tag">
                days
            </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
                {hours}
              </div>
              <div className="countdown_tag">
                hours
            </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
                {minuts}
              </div>
              <div className="countdown_tag">
                minuts
            </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
                {seconds}
              </div>
              <div className="countdown_tag">
                seconds
            </div>
            </div>
          </div>
        </div>
      </Slide>

    )
  }
}
