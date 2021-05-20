function players(){
    const player1 = player_1_item.value === "" ? "Player 1" :  player_1_item.value;
    const player2 = player_2_item.value === "" ? "Player 2" :  player_2_item.value;

    document.querySelector(".p1").innerHTML = player1;
    document.querySelector(".p2").innerHTML = player2;
    player1_nick.innerHTML = player1;
    player2_nick.innerHTML = player2;
}

export default players;