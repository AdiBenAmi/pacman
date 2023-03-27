'use strict'

const PACMAN = '🐦'
var gPacman
var foodOnBoard

function createPacman(board) {
    // TODO: initialize gPacman...
    gPacman = {
        location: {
            i: 2,
            j: 2
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN

}

function movePacman(ev) {
    if (!gGame.isOn) return
    // DONE: use getNextLocation(), nextCell
    const nextLocation = getNextLocation(ev.key)
    // console.log('nextLocation:', nextLocation)
    const nextCell = gBoard[nextLocation.i][nextLocation.j]
    console.log(' nextCell:', gBoard[nextLocation.i][nextLocation.j])
    // DONE: return if cannot move
    if (nextCell === WALL) return
    // DONE: hitting a ghost? call gameOver

    if ((nextCell === GHOST) && (gPacman.isSuper = false)) {
        gameOver()
        return
    }

    if (nextCell === FOOD) {
        updateScore(1)
        foodOnBoard--
        if (foodOnBoard === 0) {
            onVictoryModal()
        }
    }

    if (nextCell === CHERRY) {
        updateScore(10) 
        console.log('gBoard:', gBoard)
    }

    if (nextCell === SUPER_FOOD) {
        gPacman.isSuper = true
        foodOnBoard--
        onSuperFoodMode()
        //ךא הצלחתי שיאכלו ויוסרו מהרשימה
        setTimeout(superFoodModeOff, 5000)


        if (foodOnBoard === 0) {
            onVictoryModal()
        }
    }

    // DONE: moving from current location:
    // DONE: update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // DONE: update the DOM
    renderCell(gPacman.location, EMPTY)

    // DONE: Move the pacman to new location:
    // DONE: update the model
    gBoard[nextLocation.i][nextLocation.j] = PACMAN
    gPacman.location = nextLocation
    // DONE: update the DOM
    renderCell(nextLocation, PACMAN)
}


function getNextLocation(eventKeyboard) {
    console.log('eventKeyboard:', eventKeyboard)
    const nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }

    switch (eventKeyboard) {
        case 'ArrowUp':
            nextLocation.i--
            break;
        case 'ArrowRight':
            nextLocation.j++
            break;
        case 'ArrowDown':
            nextLocation.i++
            break;
        case 'ArrowLeft':
            nextLocation.j--
            break;
    }
    // DONE: figure out nextLocation
    return nextLocation
}

function getFoodCount() {
    foodOnBoard = 1
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j <= gBoard[0].length + 1; j++) {
            if (gBoard[i][j] === FOOD || gBoard[i][j] === SUPER_FOOD) {
                foodOnBoard++
                // console.log('foodOnBoard:', foodOnBoard)
            }
        }
    }
    return foodOnBoard
}

function onSuperFoodMode() {
    //ghosts color change
    color = '#ADD8E6'
    for (var i = 0; i < gGhosts.length; i++) {
        gGhosts[i].color = color
    }

    //can eat ghosts

}

function superFoodModeOff() {
    //ghost color change 
    for (var i = 0; i < gGhosts.length; i++) {
        color = getRandomColor()
        gGhosts[i].color = color
    }
}

function onVictoryModal() {
    openEndModal('You Won!!')
}

// function flipPacmanDirection () {

// }