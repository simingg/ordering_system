<template>
<div>
<bar-chart></bar-chart>
<line-chart></line-chart>
</div>
</template>

<script>
import BarChart from './BarChart.vue';
import LineChart from './CallAPI.vue';

export default {
    name: 'Dashboard',
    components: {
        BarChart,
        LineChart
    }
}
</script>

<style scoped>

</style>