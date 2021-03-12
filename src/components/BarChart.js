import { Bar } from 'vue-chartjs'
import database from '../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: ["Pork Fried Rice", "Mapo Tofu", "Sambal KangKung", "Cereal Prawn", "Dry Beef Hor Fun", "Prawn Omelette"],
            datasets: [{
                label: "Total number of each dish",
                backgroundColor: ['rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'],
                data: [0,0,0,0,0,0]
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  //data[pork, mapo, sambal,cereal, dry beef, prawn omelette]
  methods: {
    fetchItems: function () {
      database.collection('orders').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          //order = array of ordered items
          var order = doc.data().push_item;
          for (let i = 0; i < order.length; i++) {
            var name = order[i].name
            if (name == "Pork Fried Rice") {
              this.datacollection.datasets[0].data[0] += order[i].count;
            } else if (name == "Mapo Tofu") {
              this.datacollection.datasets[0].data[1] += order[i].count;
            } else if (name == "Sambal Kangkung") {
              this.datacollection.datasets[0].data[2] += order[i].count;
            } else if (name == "Cereal Prawn") {
              this.datacollection.datasets[0].data[3] += order[i].count;
            } else if (name == "Dry Beef Hor Fun") {
              this.datacollection.datasets[0].data[4] += order[i].count;
            } else if (name == "Prawn Omellete") {
              this.datacollection.datasets[0].data[5] += order[i].count;
            }
          }
        })
      this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}