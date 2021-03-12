<template>
    <div>
        <!-- itemS = arr -->
        <ul>
        <li v-for="itemS in orders" v-bind:key="itemS[0]">
         <!-- itemS.items is an array, item is an object -->
            <div v-for="item in itemS[1]" v-bind:key="item">
                <li v-for="food in item" :key="food">
                    {{food.name}} x {{food.count}}
                </li> 
            </div>
            <button v-bind="itemS[0]" v-on:click="deleteItems(itemS[0])"> Delete </button>
            <button v-bind="itemS[0]" v-on:click="route(itemS[0])"> Modify </button>
        </li>
        </ul>
    </div>
</template>
<script>
import database from "../firebase.js"

export default {
    name: 'Orders',
    data() {
        return {
            orders: [],
        }
    },
    methods : {
        deleteItems: function(id) {
            console.log(id);
            database.collection('orders').doc(id).delete().then(() => { location.reload() })
        },
        fetchItems: function() {
            database.collection('orders').get().then((querySnapShot) => {
                let item = {}
                querySnapShot.forEach(doc => {
                    item = doc.data()
                    item.show = false
                    this.orders.push([doc.id, item]);
                })
            })
        },
        route: function(id) {
            this.$router.push({ name: 'Modify', params:  { order_id: id }})
        }
    },
    beforeMount() {
        this.fetchItems();
    },
}
</script>
<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>