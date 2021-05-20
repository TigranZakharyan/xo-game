import x from "./x.js";
import o from "./o.js";
import players from "./players.js";
class Area {
    player = "x";
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    change(e){
        if (this.player == "x") {
            this.setX(e);
        } else {
            this.setO(e);
        }
        this.win()
    }
    constructor() {
        const elems = ["top-left", "top-middle", "top-right", "middle-left", "middle", "middle-right", "bottom-left", "bottom-middle", "bottom-right"];
        box.innerHTML = "";
        let z = 0;
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                box.innerHTML += `<div class="elem ${elems[z++]}" x="${y}" y="${x}"></div>`;
            }
        }
        document.querySelectorAll(".elem").forEach(e => {
            e.addEventListener("click", () => {
                this.change(e)
            })
        });
        document.querySelectorAll(".start_btn").forEach(e => {
            e.addEventListener("click", () => {
                start.style.animationName = "clear";
                win.style.animationName = "clear";
                players();
                new Area;
            })
        })
        document.querySelector(".restart_btn").addEventListener("click", () => {
            player_1_item.value = "";
            player_2_item.value = "";
            p1_count.innerHTML = 0;
            p2_count.innerHTML = 0;
            start.style.animationName = "win";
            win.style.animationName = "clear";
            document.querySelector(".p1").innerHTML = "";
            document.querySelector(".p2").innerHTML = "";
            new Area;
        })
    }
    setX(e) {
        const elemX = e.getAttribute("y");
        const elemY = e.getAttribute("x");
        if (this.board[elemX][elemY] == "") {
            x(e);
            this.board[elemX][elemY] = "x";
            this.player = "o";
        }
    }
    setO(e) {
        const elemX = e.getAttribute("y");
        const elemY = e.getAttribute("x");
        if (this.board[elemX][elemY] == "") {
            o(e);
            this.board[elemX][elemY] = "o";
            this.player = "x";
        }

    }
    win() {
        const board = this.board;
        let y;
        board.map(e => {
            e.map(k => {
                if(k != ""){
                    y = true;
                }else{
                    y = false;
                }
            })
        })
        console.log(y);
        if ((board[0][0] == "x" && board[0][1] == "x" && board[0][2] == "x") ||
            (board[1][0] == "x" && board[1][1] == "x" && board[1][2] == "x") ||
            (board[2][0] == "x" && board[2][1] == "x" && board[2][2] == "x") ||
            (board[0][0] == "x" && board[1][0] == "x" && board[2][0] == "x") ||
            (board[0][1] == "x" && board[1][1] == "x" && board[2][1] == "x") ||
            (board[0][2] == "x" && board[1][2] == "x" && board[2][2] == "x") ||
            (board[0][0] == "x" && board[1][1] == "x" && board[2][2] == "x") ||
            (board[0][2] == "x" && board[1][1] == "x" && board[2][0] == "x")) {
            this.winner("x");
        } else if (
            (board[0][0] == "o" && board[0][1] == "o" && board[0][2] == "o") ||
            (board[1][0] == "o" && board[1][1] == "o" && board[1][2] == "o") ||
            (board[2][0] == "o" && board[2][1] == "o" && board[2][2] == "o") ||
            (board[0][0] == "o" && board[1][0] == "o" && board[2][0] == "o") ||
            (board[0][1] == "o" && board[1][1] == "o" && board[2][1] == "o") ||
            (board[0][2] == "o" && board[1][2] == "o" && board[2][2] == "o") ||
            (board[0][0] == "o" && board[1][1] == "o" && board[2][2] == "o") ||
            (board[0][2] == "o" && board[1][1] == "o" && board[2][0] == "o")
        ){
            this.winner("o");
        } else if(
            board[0][0] != "" &&
            board[0][1] != "" &&
            board[0][2] != "" &&
            board[1][0] != "" &&
            board[1][1] != "" &&
            board[1][2] != "" &&
            board[2][0] != "" &&
            board[2][1] != "" &&
            board[2][2] != ""
        ){
            this.winner("nowin")
        }
    }
    winner(e){
        document.querySelectorAll(".elem").forEach(e => {
            this.change = () => {
                false;
            }
        })
        nowin.innerHTML = "";
        win.style.animationName = "win";
        if(e == "x"){
            let i = ++p1_count.innerHTML;
            console.log(i)
            p1_count.innerHTML = i;
        }else if(e == "o"){
            let i = ++p2_count.innerHTML;
            p2_count.innerHTML = i;
        }else if(e == "nowin"){
            nowin.innerHTML = "Nobody won";
        }
    }
}
const game = new Area();