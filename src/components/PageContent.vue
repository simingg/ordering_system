<template>
    <div id="itemsList">
        <ul>
            <li v-for="item in items" v-bind:key="item">
                <p id="itemName">{{ item.name }} </p>
                <img id="img" v-bind:src="item.imageURL" />
                <QuantityCounter v-bind:itemSelected="item" v-on:counter="onCounter"/>
            </li>
        </ul>
        <Basket v-bind:selected="itemsSelected" />
    </div>
</template>

<script>
import QuantityCounter from './QuantityCounter.vue'
import Basket from './Basket.vue'
export default {
    name: 'PageContent',
    components: {
        QuantityCounter,
        Basket,
    },
    props: {
        items: {
            type: Array
        }
    },
    data() {
        return {
         itemsSelected: [],
         }
    },
    methods: {
        onCounter: function (item, count) {
            if (this.itemsSelected.length === 0 && count > 0) {
                //If there is nothing in items selected, push the ORDER in
                this.itemsSelected.push([item.name, count, item.price]);
            } else {
                var temp_item = null;
                // Loop through everything to check what is not in the basket
                for (let i = 0; i < this.itemsSelected.length; i++) {
                const curr_item = this.itemsSelected[i];
                const item_name = curr_item[0];

                if (item_name == item.name && count > 0) {
                    this.$set(this.itemsSelected[i], 1, count)
                    temp_item = curr_item;
                }
                else if (item_name == item.name && count == 0) {
                    temp_item = curr_item;
                    this.$set(this.itemsSelected, i, null)
                }
                // if item_name is the same as item.name and the count is more than 0, update this.itemsSelected
                // otherwise, if the item is not in itemSelected, add it to itemsSelected by pushing the ORDER in.
                }
                if (temp_item == null) {
                    this.itemsSelected.push([item.name, count, item.price])
                }
            }
        }
    }
}
</script>

<style scoped>
#itemsList {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}
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
img {
  width: 135px;
  height: 135px;
}

#price {
  font-size: 30px;
}

#itemName {
  font-size: 30px;
}

#shoppingBasket {
  position: absolute;
  top: 23%;
  left: 78%;
}
</style>