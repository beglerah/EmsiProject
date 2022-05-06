
import React from "react";
import "./Occupation.css";

/*
export default props => (
  <div class="flexbox-container">
    <div style = {{textAlign:'center'}}>
      <p>
        12,352 <br />
        Jobs(2015) <br />
        190% above National Average
      </p>
    </div>

    <div style = {{textAlign:'center'}}>
      <p>
        12,352 <br />
        Jobs(2015) <br />
        190% above National Average
      </p>
    </div>

    <div style = {{textAlign:'center'}}>
      <p>
        12,352 <br />
        Jobs(2015) <br />
        190% above National Average
      </p>
    </div>
    
  </div>
);
*/

export default class Occupation extends React.Component {

  state = {
    loading: true,
    APIdata: null,
  };

  async componentDidMount() {
    const url = "https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ APIdata: data.summary, loading: false});
    console.log(data);
  }

  render() {

    return (

      <div style = {{textAlign:'center', "border-top": "solid","border-bottom": "solid", 'borderColor':"#ededed", "borderWidth":"2px"}}>
        {this.state.loading || !this.state.APIdata ? (
          <div>loading...</div>
        ) : (

          <div class="flexbox-container">
  

            <div style = {{textAlign:'center', "width": "400px", borderRight: "solid", 'borderColor':"#ededed", "borderWidth":"2px"}}>
              <p>
                <span style={{ color: 'grey' , fontSize: '40px'}}>
                  {parseFloat(this.state.APIdata.jobs.regional).toLocaleString()} <br />
                </span>
                Jobs ({this.state.APIdata.jobs.year}) <br />
                {(this.state.APIdata.jobs.regional / this.state.APIdata.jobs.national_avg * 100).toFixed(0)}%  <span style={{ color: 'green'}}>above</span> national average
              </p>
            </div>

            <div style = {{textAlign:'center', "width": "400px", "border-right": "solid", 'borderColor':"#ededed", "borderWidth":"2px" }}>
              <p>
                <span style={{ color: 'green' , fontSize: '40px'}}>
                  +{parseFloat(this.state.APIdata.jobs_growth.regional).toLocaleString()}% <br />
                </span>
                <span style={{ color: 'black' , fontSize: '15px'}}>
                  % Change (2013-2018) <br />
                  Nation: <span style={{ color: 'green'}}> +{parseFloat(this.state.APIdata.jobs_growth.national_avg).toLocaleString()}% </span>
                </span>
              </p>
            </div>

            <div style = {{textAlign:'center', "width": "400px" }}>
              <p>
                <span style={{ color: 'grey' , fontSize: '40px'}}>
                  ${this.state.APIdata.earnings.regional}/hr <br />
                </span>
                <span style={{ color: 'black' , fontSize: '15px'}}>
                  Median Hourly Earnings <br />
                  Nation: ${this.state.APIdata.earnings.national_avg.toFixed(2)}/hr
                </span>
              </p>
            </div>

          </div>
        )}
      
      
      </div>
    );
  }
}
   



