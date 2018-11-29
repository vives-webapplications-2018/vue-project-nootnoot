

Vue.use(VueMqtt.default, 'ws://broker.hivemq.com:8000/mqtt') //mqtt://mqtt.labict.be:1884

Vue.config.productionTip = false

/* eslint-disable no-new */

var vm = new Vue({
  el: '#vm',
  data: {
      buff: 'Sub1:<br>'
  },
  methods: {
    subscribe () {
      this.$mqtt.subscribe('mitsuruog')
      console.log('subscribe')
    },
    publish () {
      this.$mqtt.publish('mitsuruog', document.getElementById("canvas").value)
      console.log('publich')
      console.log(document.getElementById("canvas").value)
    }
  },
    
    mqtt: {
      'mitsuruog' (canvas) {
        this.buff = this.buff + canvas + '<br>'
      }
    }
})

