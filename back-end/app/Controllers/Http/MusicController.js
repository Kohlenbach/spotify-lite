'use strict'
const Music = use('App/Models/Music')

class MusicController {
  async index({ req, res }) {
    let musics = await Music.all()
    
    return musics
  }

  async create({ request, response }) {
    let { name, producer, singer, time } = request.post()
    let newMusic = new Music()

    newMusic.name = name
    newMusic.producer = producer
    newMusic.singer = singer
    newMusic.time = time
    
    await newMusic.save()
  }
}

module.exports = MusicController
