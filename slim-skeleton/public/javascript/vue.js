

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
      this.$mqtt.publish('mitsuruog', document.getElementById("text").value)
      console.log('publish')
      console.log(document.getElementById("text").value)
    }
  },
    
    mqtt: {
      'mitsuruog' (text) {
        this.buff = this.buff + text + '<br>'
      }
    }
})

// canvas tekenen pixels
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
        
document.getElementById("button").onclick = function(){            
var userColor = document.getElementById("colorselect").value;
var userpixx = document.getElementById("userpixx").value;
var userpixy = document.getElementById("userpixy").value;
ctx.fillStyle = userColor;
ctx.fillRect(userpixx, userpixy, 10, 10);
};

//canvas to json 

var reader = new FileReader();

// event handler for the save button
document.getElementById('button').addEventListener('click', function () {
  // retrieve the canvas data
  var canvasContents = canvas.toDataURL(); // a data URL of the current canvas image
  var data = { image: canvasContents, date: Date.now() };
  var string = JSON.stringify(data);

  // 
fetch('/submit',{
method: 'POST',
body: string,
headers: { "Content-Type": "application/json; charset=utf-8" }
})

  
});

// event handler for the load button
document.getElementById('load').addEventListener('change', function () {
  if (this.files[0]) {
    // read the contents of the first file in the <input type="file">
    reader.readAsText(this.files[0]);
  }
});

// this function executes when the contents of the file have been fetched
reader.onload = function () {
  var data = JSON.parse(reader.result);
  var image = new Image();
  image.onload = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0); // draw the new image to the screen
  }
  image.src = data.image; // data.image contains the data URL
};
