const express   = require( 'express' ),
      app       = express(),
      bodyParser= require( 'body-parser' ),
      helmet = require('helmet')
      favicon = require('serve-favicon')
      path = require('path')

// automatically deliver all files in the public folder
// with the correct headers / MIME type.
app.use( express.static( 'public' ) )

// get json when appropriate - middleware
app.use( bodyParser.json() )

// favicon - middleware
app.use(favicon(path.join(__dirname, 'favicon_package', 'favicon.ico')))

// helmet - middleware
app.use(helmet())

// domain views index.html
app.get('/', function(request, response) {
  response.sendFile( __dirname + '/views/index.html' )
})

app.listen( process.env.PORT || 3000 )

console.log("Server Up and Running")