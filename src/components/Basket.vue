<<<<<<< HEAD
<template>
    <div>
        <ul v-for="itemS in selected" v-bind:key="itemS">
            {{itemS[0]}} x {{ itemS[1] }}
        </ul>
        <button v-on:click="findTotal(); sendOrder()"> Total Cost </button>
        <p v-show="clicked"> Subtotal: {{subtotal}} </p>
        <p v-show="clicked"> Grand Total: {{ grandTotal }} </p>
    </div>
</template>

<script>
import database from '../firebase.js'

export default {
    name: 'Basket',
    props: {
        //list of items and its corresponding quantity
        selected: Array,
    },
    data() {
        return {
            clicked: false,
            subtotal: 0,
            total: 0,
        }
    },
    methods: {
        sendOrder: function() {
            let push_item = []
            for (let i = 0; i < this.selected.length; i++) {
                console.log(this.selected);
                push_item.push({
                name: this.selected[i][0],
                count: this.selected[i][1],
                });
            }
            database.collection('orders').add( {push_item}).then(() => {location.reload() });
        },
        findTotal: function() {
            if (this.clicked == false) {
            for (let i = 0; i < this.selected.length; i++) {
                this.subtotal = this.subtotal + this.selected[i][2];
            }
            this.clicked = true;
            console.log(this.subtotal)
            }
        }
    },
    computed: {
        grandTotal: function() {
            return this.subtotal * 1.17;
        }
    },
    watch: {
        selected: {
            deep: true,
        }
    }
}
=======
<template>
    <div>
        <ul v-for="itemS in selected" v-bind:key="itemS">
            {{itemS[0]}} x {{ itemS[1] }}
        </ul>
        <button v-on:click="findTotal"> Total Cost </button>
        <p v-show="clicked"> Subtotal: {{subtotal}} </p>
        <p v-show="clicked"> Grand Total: {{ grandTotal }} </p>
    </div>
</template>

<script>
export default {
    name: 'Basket',
    props: {
        //list of items and its corresponding quantity
        selected: Array,
    },
    data() {
        return {
            clicked: false,
            subtotal: 0,
            total: 0,
        }
    },
    methods: {
        findTotal: function() {
            if (this.clicked == false) {
            for (let i = 0; i < this.selected.length; i++) {
                this.subtotal = this.subtotal + this.selected[i][2];
            }
            this.clicked = true;
            console.log(this.subtotal)
            }
        }
    },
    computed: {
        grandTotal: function() {
            return this.subtotal * 1.17;
        }
    },
    watch: {
        selected: {
            deep: true,
        }
    }
}
>>>>>>> 6fb04ef7292bc349dc5115b90d366250a913a551
</script>