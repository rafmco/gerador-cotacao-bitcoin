<template>
  <apexchart
    type="candlestick"
    height="350"
    :options="chartOptions"
    :series="series"
  />
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import VueApexCharts from 'vue3-apexcharts'
import { Prop } from 'vue-property-decorator'
import Candle from '../models/Candle'

@Options({
  components: {
    apexchart: VueApexCharts
  }
})

export default class CandleStickChart extends Vue {
  @Prop()
  /* Propriedade “candles” deve ser reativa (!)
     para garantir que qualquer alteração nos dados dessa propriedade
     (por exemplo, adicionar novas candles) será refletida automaticamente
     no gráfico sem a necessidade de atualizações manuais
  */
  candles!: Candle[]

  chartOptions = {
    chart: {
      type: 'candlestick',
      height: 350
    },
    title: {
      text: 'Bitcoin last prices',
      align: 'left'
    },
    xaxis: {
      type: 'time'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }

  get series() {
    const series = [{
      data: this.candles
    }]

    return series
  }
}

</script>

<style>
</style>