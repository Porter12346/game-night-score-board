import { AppState } from "../AppState.js";
import { Player } from "../models/player.js";
class PlayerService {
    constructor() {
        console.log('service started')
    }

    incrementScore(playerName) {
        const players = AppState.players
        const foundPlayer = players.find((player) => player.name == playerName)
        foundPlayer.score++
    }

    decrementScore(playerName) {
        const players = AppState.players
        const foundPlayer = players.find((player) => player.name == playerName)
        foundPlayer.score--


    }

    addPlayer(playerName) {
        let player = new Player(playerName)
        const players = AppState.players
        players.push(player)
    }


}

export const playerService = new PlayerService()