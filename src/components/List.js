import React from 'react';
import Watch from './Watch';
function Listing(props) {
  const { watches, delWatch } = props

    return  (
            
      <div className="item-list">
        <table>
          <thead>
            <tr>
              <th>
                Название
              </th>
              <th>
                Временная зона
              </th>
              <th>
                Время
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            {watches.map((item) =>
              <Watch key={item.id} item={item} delWatch={delWatch}/>
              // <tr key={item.id}>
              //   <td>
              //     {item.name}
              //   </td>
              //   <td>
              //     {item.zone}
              //   </td>
              //   <td>
              //     <time>{moment(Date()+1).format('LTS')}</time> 
              //   </td>
              //   <td>
              //     <input type="submit" id={item.id} value="✘" onClick={submitWatch}/>
              //   </td>
              // </tr>
            )}
          </tbody>
        </table>
      </div>
      
            
    )
}

export default Listing;