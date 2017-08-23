var express = require('express')
var path = require('path')
var app = express()
var apiRoutes = require('./routes/api');

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/dist'))

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoutes);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at " + app.get('port'))
})
