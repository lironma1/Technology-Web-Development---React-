import { PropTypes, Component} from 'react'

const concertResorts = [
  "Moon Palace Cancun Mexico",
  "Barceló Maya Grand Resort Playa del Carmen Mexico",
  "Casa de Campo Dominican Republic",
  "Atlantis Paradise Island Bahamas",
  "Sandals Resorts, Various Locations"
]

class Autocomplete extends Component {

  get value() {
    return this.refs.inputResorts.value
  }

  set value(inputValue) {
    this.refs.inputResorts.value = inputValue
  }

  render() {
    return (
      <div>
        <input ref="inputResorts"
               type="text"
               list="concert-Resorts" />
        <datalist id="concert-Resorts">
          {this.props.options.map(
            (opt, i) => <option key={i}>{opt}</option>
          )}
        </datalist>
      </div>
    )
  }
}

export const AddDayForm = ({ resort, date, heatwave, rainy, onNewDay }) => {

  let _resort, _date, _heatwave, _rainy

  const submit = (e) => {
    e.preventDefault()
    onNewDay({
      resort: _resort.value,
      date: _date.value,
      heatwave: _heatwave.checked,
      rainy: _rainy.checked
    })
     _resort.value = ''
     _date.value = ''
     _heatwave.checked = false
     _rainy.checked = false
  }

  return (
    <form onSubmit={submit} className="add-day">

        <label htmlFor="resort">Resort Name</label>
          <Autocomplete options={concertResorts}
    				   		  ref={input => _resort = input}/>

      <label htmlFor="date">Date</label>
      <input id="date"
        type="date"
        required
        defaultValue={date}
        ref={input => _date = input} />

      <div>
        <input id="heatwave"
          type="checkbox"
          defaultChecked={heatwave}
          ref={input => _heatwave = input} />
        <label htmlFor="heatwave">heatwave Day</label>
      </div>

      <div>
        <input id="rainy"
          type="checkbox"
          defaultChecked={rainy}
          ref={input => _rainy = input}/>
        <label htmlFor="rainy">rainy Day</label>
      </div>
      <button>Add Day</button>
    </form>
  )
}

AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  heatwave: PropTypes.bool.isRequired,
  rainy: PropTypes.bool.isRequired
}

AddDayForm.defaultProps = {
	resort: "madison square garden",
	date: "2018-02-12",
	heatwave: true,
	rainy: false
}
