import { Player } from './models/player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  players = [
    new Player('porter'),
    new Player('zeke')
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())