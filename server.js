var express = require('express')
var path = require('path')
var app = express()

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/dist'))

app.get('/api', function(req, res) {
  res.send('Hello World!')
})

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at " + app.get('port'))
})
