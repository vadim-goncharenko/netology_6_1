import React from 'react';
import moment from 'moment-timezone';
class Watch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: moment().tz(this.props.item.zone)};
    }

    submitWatch = evt => {
      this.props.delWatch(evt.target.id)
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: moment().tz(this.props.item.zone)
      });
    }
  
    render() {
      return (
        <>
          <tr>
                <td>
                  {this.props.item.name}
                </td>
                <td>
                  {this.props.item.zone}
                </td>
                <td>
                  <time>{this.state.date.format('HH:mm:ss')}</time>
                </td>
                <td>
                  <input type="submit" id={this.props.item.id} onClick={this.submitWatch} value="✘"/>
                </td>
              </tr>
        </>
      );
    }
  }
  
  export default Watch;