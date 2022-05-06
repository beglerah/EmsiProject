import React from "react";
import "./Industries.css";
import "./Header.css"

export default class IndustriesTable extends React.Component {
  state = {
    loading: true,
    APIdata: null,
  };

  async componentDidMount() {
    const url = "https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ APIdata: data.employing_industries, loading: false});
    console.log(data);
    const columnOne = data.employing_industries.industries[0];
    console.log(columnOne);
    console.log(data.employing_industries.industries.length);
    const column = this.state.APIdata.jobs;
    console.log(column);
  }

  render() {

    return (

      <div >
        {this.state.loading || !this.state.APIdata ? (
          <div>loading...</div>
        ) : (
          <div style = {{textAlign:'left', color: "grey", paddingTop: "50px"}}>
            <div class = "header"> 
              <h4>Industries Employing Computer Programmers</h4>
            </div>
              <table style = {{"border-top": "solid","border-bottom": "solid", 'borderColor':"#ededed", "borderWidth":"2px"}}>

      

                <tr>
                  <th style={{width: '70%', height: "80px", fontSize: '15px'}}>Industry</th>
                  <th style={{textAlign: 'right', fontSize: '15px', width: '10%'}}>Occupation Jobs <br /> in Industry <br /> (2015)</th>
                  <th style={{textAlign: 'right', fontSize: '15px', width: '10%'}}>% of Occupation <br /> in Industry <br /> (2015) </th>
                  <th style={{textAlign: 'right', fontSize: '15px'}}> % of Total <br /> Jobs in <br /> Industry <br /> (2015)</th>
                </tr>

                <tr>
                  <span style={{ color: 'dodgerblue' , fontSize: '15px'}}>
                    <td style={{"paddingTop": "5px", height: "25px"}}> {this.state.APIdata.industries[0].title} </td>
                  </span>
                  <td style={{textAlign: 'right'}}> {this.state.APIdata.industries[0].in_occupation_jobs} </td>
                  <td style={{textAlign: 'right'}}> {(this.state.APIdata.industries[0].in_occupation_jobs / this.state.APIdata.jobs * 100).toFixed(1)}% </td>
                  <td style={{textAlign: 'right'}}> {(this.state.APIdata.industries[0].in_occupation_jobs / this.state.APIdata.industries[0].jobs * 100).toFixed(1)}% </td>
                </tr>

                <tr>
                  <span style={{ color: 'dodgerblue' , fontSize: '15px'}}>
                    <td style={{"paddingTop": "5px", height: "20px"}}> {this.state.APIdata.industries[1].title} </td>
                  </span>
                  <td style={{textAlign: 'right'}}> {this.state.APIdata.industries[1].in_occupation_jobs} </td>
                  <td style={{textAlign: 'right'}}> {(this.state.APIdata.industries[1].in_occupation_jobs / this.state.APIdata.jobs * 100).toFixed(1)}% </td>
                  <td style={{textAlign: 'right'}}> {(this.state.APIdata.industries[1].in_occupation_jobs / this.state.APIdata.industries[1].jobs * 100).toFixed(1)}% </td>
                </tr>

                <tr>
                  <span style={{ color: 'dodgerblue' , fontSize: '15px'}}>
                    <td style={{"paddingTop": "5px", height: "20px"}}> {this.state.APIdata.industries[2].title} </td>
                  </span>
                  <td style={{textAlign: 'right'}}> {this.state.APIdata.industries[2].in_occupation_jobs} </td>
                  <td style={{textAlign: 'right'}}> {(this.state.APIdata.industries[2].in_occupation_jobs / this.state.APIdata.jobs * 100).toFixed(1)}% </td>
                  <td style={{textAlign: 'right'}}> {(this.state.APIdata.industries[2].in_occupation_jobs / this.state.APIdata.industries[2].jobs * 100).toFixed(1)}% </td>
                </tr>

                <tr>
                  <span style={{ color: 'dodgerblue' , fontSize: '15px'}}>
                    <td style={{"paddingTop": "5px", height: "20px"}}> {this.state.APIdata.industries[3].title} </td>
                  </span>
                  <td style={{textAlign: 'right'}}> {this.state.APIdata.industries[3].in_occupation_jobs} </td>
                  <td style={{textAlign: 'right'}}> {(this.state.APIdata.industries[3].in_occupation_jobs / this.state.APIdata.jobs * 100).toFixed(1)}% </td>
                  <td style={{textAlign: 'right'}}> {(this.state.APIdata.industries[3].in_occupation_jobs / this.state.APIdata.industries[3].jobs * 100).toFixed(1)}% </td>
                </tr>

                <tr>
                  <span style={{ color: 'dodgerblue' , fontSize: '15px'}}>
                    <td style={{"paddingTop": "5px", height: "20px"}}> {this.state.APIdata.industries[4].title} </td>
                  </span>
                  <td style={{textAlign: 'right'}}> {this.state.APIdata.industries[4].in_occupation_jobs} </td>
                  <td style={{textAlign: 'right'}}> {(this.state.APIdata.industries[4].in_occupation_jobs / this.state.APIdata.jobs * 100).toFixed(1)}% </td>
                  <td style={{textAlign: 'right'}}> {(this.state.APIdata.industries[4].in_occupation_jobs / this.state.APIdata.industries[0].jobs * 100).toFixed(1)}% </td>
                </tr>

              </table>
          </div>
        )}
      </div>
    );
  }
}
