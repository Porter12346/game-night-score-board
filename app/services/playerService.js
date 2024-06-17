import { AppState } from "../AppState.js";

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


}

export const playerService = new PlayerService()