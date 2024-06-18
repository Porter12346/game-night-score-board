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
        playerService.decrementScore(playerName)
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
        // @ts-ignore
        form.reset()
    }

    drawPlayers() {
        const playerCards = document.getElementById('playerCardArea')
        let playerCardsHTML = ''
        const players = AppState.players
        players.forEach((player) => {
            playerCardsHTML += /*HTML*/ `<div class="col-12 col-md-7 d-flex justify-content-between align-items-center border mb-3 rounded-3">
            <p class="mb-0 text-capitalize">${player.name}</p>
            <div class="d-flex gap-3 align-items-center">
            <button onclick="app.PlayerController.decrementScore('${player.name}')" class="btn btn-light rounded-1">-</button>
            <p class="mb-0">${player.score}</p>
            <button onclick="app.PlayerController.incrementScore('${player.name}')" class="btn btn-light rounded-1">+</button>
            </div></div>`
        });
        playerCards.innerHTML = playerCardsHTML
    }
}