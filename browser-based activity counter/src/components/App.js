import { Component } from 'react'
import { ConcertDayList } from './ConcertDayList'
import { ConcertDayCount } from './ConcertDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'
export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      allConcertDays: [
        // {
        //   resort: "Grand Star Jazz Club",
        //   date: new Date("1/2/2016"),
        //   heatwave: true,
        //   rainy: false
        // },
        // {
        //   resort: "The End",
        //   date: new Date("1/17/2018"),
        //   heatwave: false,
        //   rainy: true
        // },
        {
          resort: "Blackbird Ordinary",
          date: "2018-01-02",
          heatwave: false,
          rainy: false
        }
      ]
    }
    this.addDay = this.addDay.bind(this)
  }

  addDay(newDay) {
    this.setState({
      allConcertDays:[
        ...this.state.allConcertDays,
        newDay
      ]
    })
  }


  countDays(filter){
    const { allConcertDays } = this.state
    return allConcertDays.filter(
      (day) => (filter) ?  day[filter] : day).length
  }
  render(){
    return (
      <div className="app">
        <Menu />
        {(this.props.location.pathname === "/") ?
          <ConcertDayCount total ={this.countDays()}
                           heatwave={this.countDays("heatwave")}
                           rainy={this.countDays("rainy")} /> :
          (this.props.location.pathname === "/add-day") ?
          <AddDayForm onNewDay={this.addDay}/> :
          <ConcertDayList days={this.state.allConcertDays}
                          filter={this.props.params.filter}/>
        }
      </div>
    )
  }
}
