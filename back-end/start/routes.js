'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const MusicController = use('App/Controllers/Http/MusicController')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/music', 'MusicController.index')
Route.post('/music', 'MusicController.create')
