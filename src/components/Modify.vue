
<template>
    <div>
        <li v-for="(item, index) in datapacket" v-bind:key="item">
            {{ item.name }} : {{item.count}}
            <input id="index" placeholder=0 type="number" min=0 v-model="counts[index]"/>
        </li>
        <button v-bind="order_id" v-on:click="updateOrder(order_id)"> Update Order </button>
    </div>
</template>
<script>
import database from "../firebase.js"
export default {
    name: 'Modify',
    props: ['order_id'],
    data() {
        return {
            datapacket: {},
            counts : [0,0,0,0,0,0],
        }
    },
    methods: {
        fetchItems: function(id){
            console.log(id)
            var docRef = database.collection('orders').doc(id);
            docRef.get().then((doc) => {
                this.datapacket = doc.data().push_item;
            })
        },
        updateOrder: function(id) {
            let new_order = this.datapacket;
            for (let i = 0; i < this.datapacket.length; i++) {
                new_order[i].count = this.counts[i];
            }
            database.collection('orders').doc(id).set({push_item : new_order}).then(() => { location.reload() })
        }
    },
    created() {
        this.fetchItems(this.order_id);
    }
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