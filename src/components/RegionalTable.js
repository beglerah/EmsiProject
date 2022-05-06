import React from "react";
import "./RegionalTable.css";
import "./Header.css"

export default class RegionalTable extends React.Component {
  state = {
    loading: true,
    APIdata: null,
  };

  async componentDidMount() {
    const url = "https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ APIdata: data.trend_comparison, loading: false});
    console.log("hello");
  }

  render() {

    return (

      <div >
        {this.state.loading || !this.state.APIdata ? (
          <div>loading...</div>
        ) : (
          <div style = {{textAlign:'left', color: "grey"}}>
              <table>

      
                <tbody> 
                <tr>
                  <th style={{textAlign:'left', fontSize: '15px', paddingRight: '30px', width: '60%'}}>Region</th>
                  <th style={{textAlign: 'right', fontSize: '15px', padding: '0px', width: "10%"}}>2013 Jobs</th>
                  <th style={{textAlign: 'right', fontSize: '15px', padding: '20px', width: "10%"}}>2018 Jobs</th>
                  <th style={{textAlign: 'right', fontSize: '15px', padding: '20px', width: "10%"}}>Change</th>
                  <th style={{textAlign: 'right', fontSize: '15px', padding: '20px', width: "10%"}}>% Change</th>
                </tr>

                
                <tr>
                    <td style={{"paddingTop": "5px", height: "25px"}}> Region </td>
                    <td style={{textAlign: 'right'}}> {parseFloat(this.state.APIdata.regional[0]).toLocaleString()} </td>
                    <td style={{textAlign: 'right'}}> {parseFloat(this.state.APIdata.regional[5]).toLocaleString()} </td>
                    <td style={{textAlign: 'right'}}> {parseFloat(this.state.APIdata.regional[5] - this.state.APIdata.regional[0]).toLocaleString()} </td>
                    <td style={{textAlign: 'right'}}> {parseFloat((((this.state.APIdata.regional[5] / this.state.APIdata.regional[0])-1)*100).toFixed(1)).toLocaleString()}% </td>
                </tr>

                <tr>
                    <td style={{"paddingTop": "5px", height: "25px"}}> State </td>
                    <td style={{textAlign: 'right'}}> {parseFloat(this.state.APIdata.state[0]).toLocaleString()} </td>
                    <td style={{textAlign: 'right'}}> {parseFloat(this.state.APIdata.state[5]).toLocaleString()} </td>
                    <td style={{textAlign: 'right'}}> {parseFloat(this.state.APIdata.state[5] - this.state.APIdata.state[0]).toLocaleString()} </td>
                    <td style={{textAlign: 'right'}}> {parseFloat((((this.state.APIdata.state[5] / this.state.APIdata.state[0])-1)*100).toFixed(1)).toLocaleString()}% </td>
                </tr>

                <tr>
                    <td style={{"paddingTop": "5px", height: "25px"}}> Nation </td>
                    <td style={{textAlign: 'right'}}> {parseFloat(this.state.APIdata.nation[0]).toLocaleString()} </td>
                    <td style={{textAlign: 'right'}}> {parseFloat(this.state.APIdata.nation[4]).toLocaleString()} </td>
                    <td style={{textAlign: 'right'}}> {parseFloat(this.state.APIdata.nation[4] - this.state.APIdata.nation[0]).toLocaleString()} </td>
                    <td style={{textAlign: 'right'}}> {parseFloat((((this.state.APIdata.nation[4] / this.state.APIdata.nation[0])-1)*100).toFixed(1)).toLocaleString()}% </td>  
                </tr>

                </tbody>

              </table>
          </div>
        )}
      </div>
    );
  }
}