import { AppState } from "../AppState.js"
import { playerService } from "../services/playerService.js"

export class PlayerController {
    constructor() {
        console.log('player constructor loaded')
    }

    incrementScore(playerName) {
        playerService.incrementScore(playerName)
        console.log('score incrementing')
    }

    decrementScore(playerName) {
        playerService.incrementScore(playerName)
        console.log('score decrementing')
    }

    drawPlayers() {
        playerService.drawPlayers()
    }
}