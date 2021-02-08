<template>
    <div>
        <button v-on:click="add" id="left"> + </button>
         <p> {{ counter }} </p>
        <button v-on:click="minus" id="right"> - </button>
    </div>
</template>

<script>
 export default {
     name: 'QuantityCounter',
     props : {
         itemSelected: {
             type: Object
         }
     },
     data() {
         return {
             counter: 0,
         }
     },
     methods: {
        //creates a custome event called counter on this vue, passing itemSelected and counter.
        add: function() {
            this.counter = this.counter + 1;
            this.$emit('counter', this.itemSelected, this.counter)
        },
        minus: function() {
            this.counter = this.counter - 1;
            this.$emit('counter', this.itemSelected, this.counter)
        }
     }
 }
</script>

<style scoped>
 button {
    color:red;
    size: 20px;
    background-color: white;
}
</style>