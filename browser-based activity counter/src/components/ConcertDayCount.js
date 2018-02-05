import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/ti/weather-shower'
import Calendar from 'react-icons/lib/fa/calendar'
// import Headphones from 'react-icons/lib/fa/headphones'
import WeatherSunny from 'react-icons/lib/ti/weather-sunny'
import { PropTypes } from 'react'
// react-icons/lib/fa/music
// react-icons/lib/md/wb-sunny
// react-icons/lib/ti/weather-sunny

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const ConcertDayCount = ({total, heatwave, rainy, goal=100}) => (
		<div className="Concert-Day-Count">
			<div className="total-days">
				<span>{total}</span>
        <Calendar />
				<span>days</span>
			</div>
			<div className="heatwave-days">
				<span>{heatwave}</span>
        <WeatherSunny />
				<span>days</span>
			</div>
			<div className="rainy-days">
				<span>{rainy}</span>
        <Terrain />
				<span>days</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(
						total,
						goal
					)}
				</span>
			</div>
		</div>
)

ConcertDayCount.propTypes = {
  total: PropTypes.number,
  heatwave: PropTypes.number,
  rainy: PropTypes.number,
  goal: PropTypes.number
}
