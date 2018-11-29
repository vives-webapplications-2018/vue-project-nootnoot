

Vue.use(VueMqtt.default, 'mqtt://mqtt.labict.be:1884')

Vue.config.productionTip = false

/* eslint-disable no-new */

var vm = new Vue({
  el: '#vm',
  methods: {
    subscribe () {
      this.$mqtt.subscribe('vue-project-nootnoot/test')
      console.log('subscribe')
    },
    message (){

    },
    publish () {
      this.$mqtt.publish('vue-project-nootnoot/test', message)
      console.log('publich')
    }
  },
  data: {
    message:1
  }
  mqtt: {
    'vue-project-nootnoot/test' (data, topic) {
      console.log(topic + ': ' + String.fromCharCode.apply(null, data))
    }
    
  },
    data () {
      return {
        buff: 'Sub1:<br>'
      }
    },
    mqtt: {
      /** 'VueMqtt/publish1' or '+/publish1' */
      'vue-project-nootnoot/test' (data) {
        this.buff = this.buff + data + '<br>'
      }
    }

})