'use strict'

const CHERRY = '🍒'

function placeCherryRand() {
    var emptyPos = getEmptyPos()
    //DOM
    renderCell(emptyPos, CHERRY)
    //model
    gBoard[emptyPos.i][emptyPos.j] = CHERRY
}