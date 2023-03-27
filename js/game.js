'use strict'

const WALL = '#'
const FOOD = '.'
const EMPTY = ' '
const SUPER_FOOD = '🥦'


const gGame = {
    score: 0,
    isOn: false
}

var gBoard

function onInit() {
    //isGameDone = false
    console.log('hello')
    gBoard = buildBoard()
    createGhosts(gBoard)
    createPacman(gBoard)
    renderBoard(gBoard, '.board-container')
    initScore()
    gGame.isOn = true

    foodOnBoard = getFoodCount() //60
    closeEndModal()
    setInterval(placeCherryRand, 15000)
}

function buildBoard() {
    const size = 10
    const board = []
    for (var i = 0; i < size; i++) {
        board.push([])
        for (var j = 0; j < size; j++) {
            board[i][j] = FOOD
            if (i === 0 || i === size - 1 ||
                j === 0 || j === size - 1 ||
                (j === 3 && i > 4 && i < size - 2)) {
                board[i][j] = WALL
            }
            if (i === 1 && j === 8 || i === 1 && j === 1 || i === 8 && j === 1 || i===8 && j===8) {
                board[i][j] = SUPER_FOOD
            }
        }
    }
    return board
}

function updateScore(diff) {

    // DONE: update model and dom
    // Model
    gGame.score += diff
    // DOM
    const elScore = document.querySelector('.score')
    elScore.innerText = gGame.score
}

function initScore() {
    gGame.score = 0
    const elScore = document.querySelector('.score')
    elScore.innerText = gGame.score
}

function gameOver() {
    console.log('Game Over')
    // TODO
    clearInterval(gIntervalGhosts)
    renderCell(gPacman.location, '🪦')
    gGame.isOn = false
    openEndModal('Game Over')
    clearInterval(placeCherryRand())

}

function openEndModal(value) {
    const elModal = document.querySelector('.modal-container')
    elModal.classList.remove('hide')
    const elH3 = document.querySelector('h3')
    elH3.innerText = value
}

function closeEndModal() {
    const elModal = document.querySelector('.modal-container')
    elModal.classList.add('hide')
}




