import Terrain from 'react-icons/lib/ti/weather-shower'
import Calendar from 'react-icons/lib/fa/calendar'
// import Headphones from 'react-icons/lib/fa/headphones'
import WeatherSunny from 'react-icons/lib/ti/weather-sunny'
import { ConcertDayRow } from './ConcertDayRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const ConcertDayList = ({days, filter}) => {
  const filteredDays = (!filter ||
    !filter.match(/heatwave|rainy/))?
    days:
    days.filter(day => day[filter])
    return (
      <div className= "Concert-Day-list">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Resort</th>
              <th>Heatwave</th>
              <th>Rainy</th>
            </tr>
            <tr>
    				<td colSpan={4}>
    					<Link to="/list-days">
    						All Days
    					</Link>
    					<Link to="/list-days/heatwave">
    						heatwave Days
    					</Link>
    					<Link to="/list-days/rainy">
    						rainy Days
    					</Link>
    				</td>
    			</tr>
          </thead>
          <tbody>
            {filteredDays.map((day, i) =>
              <ConcertDayRow key={i}
                             {...day}/>
            )}
          </tbody>
        </table>
      </div>
  )
}
ConcertDayList.propTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)) {
			return new Error(
				"ConcertDayList should be an array"
				)
		} else if(!props.days.length) {
			return new Error(
				"ConcertDayList must have at least one record"
				)
		} else {
			return null
		}
	}
}
