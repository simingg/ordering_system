import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            //time & date of graph
            labels: [],
            datasets: [
                { 
                    label: 'west',
                    data: [],
                    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                    fill: false
                },
                {
                    label: 'national',
                    backgroundColor: ['Blue'],
                    data: [],
                    fill: false
                },
                {
                    label: 'east',
                    backgroundColor: ['Green'],
                    data:[],
                    fill: false
                },
                {
                    label: 'central',
                    backgroundColor: ['Yellow'],
                    data: [],
                    fill: false
                },
                {
                    label: 'south',
                    backgroundColor: ['Purple'],
                    data: [],
                    fill: false
                },
                {
                    label: 'north',
                    backgroundColor: ['Black'],
                    data: [],
                    fill: false
                }
        ]
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: ''
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            var items = response.data.items;
            for (let i = 0; i < items.length; i++) {
                //orderBy timestamp
                this.datacollection.labels.push(items[i].update_timestamp)
                var readings = items[i].readings.psi_twenty_four_hourly;
                this.datacollection.datasets[0].data.push(readings.west)
                this.datacollection.datasets[1].data.push(readings.national)
                this.datacollection.datasets[2].data.push(readings.east)
                this.datacollection.datasets[3].data.push(readings.central)
                this.datacollection.datasets[4].data.push(readings.south)
                this.datacollection.datasets[5].data.push(readings.north)
            }
            this.renderChart(this.datacollection, this.options)
            })
        }
  },
  created () {
    this.fetchItems()
  }
}