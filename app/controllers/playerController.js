import { AppState } from "../AppState.js"
import { playerService } from "../services/playerService.js"

export class PlayerController {
    constructor() {
        console.log('player constructor loaded')
        this.drawPlayers()
    }

    incrementScore(playerName) {
        playerService.incrementScore(playerName)
        console.log('score incrementing')
        this.drawPlayers()
    }

    decrementScore(playerName) {
        playerService.incrementScore(playerName)
        console.log('score decrementing')
        this.drawPlayers()
    }

    addPlayer(playerName) {
        event.preventDefault()
        const form = event.target
        // @ts-ignore
        const userInput = form.playerName.value
        playerService.addPlayer(`${userInput}`)
        this.drawPlayers()
    }

    drawPlayers() {
        const playerCards = document.getElementById('playerCardArea')
        let playerCardsHTML = ''
        const players = AppState.players
        players.forEach((player) => {
            playerCardsHTML += `<div class="col-12 col-md-4 d-flex justify-content-between align-items-center border">
            <p class="mb-0">${player.name}</p>
            <button onclick="app.PlayerController.decrementScore('${player.name}')">-</button>
            <p class="mb-0">${player.score}</p>
            <button onclick="app.PlayerController.incrementScore('${player.name}')">+</button>
          </div>`
        });
        playerCards.innerHTML = playerCardsHTML
    }
}