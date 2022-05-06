import React from 'react';
import {Line} from 'react-chartjs-2';

var state = {
  labels: ['2013', '2014', '2015'],
  datasets: [
    {
      label: 'Region',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [11904, 12384, 12352]
    }
  ]

}

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
    console.log(data);
  }
  
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}