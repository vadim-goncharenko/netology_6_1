import React, { useState } from 'react';
import moment from 'moment-timezone';
function Form(props) {
    const { addWatch } = props
    const [form, setForm] = useState({
      id: null,
      name: '',
      zone: moment.tz.zonesForCountry('RU', true)[0].name
    })

    const submitWatch = evt => {
      evt.preventDefault()
      addWatch(form)
      setForm(() => ({
        id: null,
        name: '',
        zone: moment.tz.zonesForCountry('RU', true)[0].name
      }))
    }

    const handleChenge = evt => {
      setForm((prevForm) => ({
        ...prevForm, [evt.target.name]: evt.target.value
      }))
    }

    return  (
      <>
        <form onSubmit={submitWatch}>
          <label>Название
            <input type="text" name="name" value={form.name} onChange={handleChenge}/>
          </label>
          <label>Временная зона
            <select name="zone" value={form.zone} onChange={handleChenge}>
              {moment.tz.zonesForCountry('RU', true).map((item) =>
                <option key={item.name} >{item.name}</option>
              )}
            </select>
          </label>
          <input type="submit" value="ОК" />
        </form>
      </>
    )
}


export default Form;