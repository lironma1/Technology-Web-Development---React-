import Terrain from 'react-icons/lib/ti/weather-shower'
import Calendar from 'react-icons/lib/fa/calendar'
// import Headphones from 'react-icons/lib/fa/headphones'
import WeatherSunny from 'react-icons/lib/ti/weather-sunny'
import { PropTypes } from 'react'

export const ConcertDayRow = ({resort, date, heatwave, rainy}) => (

  <tr>
    <td>
      {date}
    </td>
    <td>
      {resort}
    </td>
    <td>
      {(heatwave) ? <WeatherSunny /> : null}
    </td>
    <td>
      {(rainy) ? <Terrain /> : null}
    </td>
  </tr>

)

ConcertDayRow.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  heatwave: PropTypes.bool,
  rainy: PropTypes.bool
}
