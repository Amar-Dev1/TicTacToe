let tern = 'x';
let squares = [];


const again = document.getElementById("again-btn");
let title = document.getElementById('title');

let body = document.body;
const whoWin = (num1, num2, num3) => {
    title.innerHTML = `${squares[num1]} winner !`;
    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';
}

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        whoWin(1, 2, 3); again.style.display = "block";
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        whoWin(4, 5, 6,); again.style.display = "block";
    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
        whoWin(7, 8, 9); again.style.display = "block";
    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        whoWin(1, 4, 7); again.style.display = "block";
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        whoWin(2, 5, 8); again.style.display = "block";
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        whoWin(3, 6, 9); again.style.display = "block";
    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
        whoWin(1, 5, 9); again.style.display = "block";
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
        whoWin(3, 5, 7); again.style.display = "block";
    } else if (squares[1] != '' && squares[2] != '' && squares[3] != '' && squares[4] != '' && squares[5] != '' && squares[6] != '' && squares[7] != '' && squares[8] != '' && squares[9] != '') {
        setInterval(() => { title.innerHTML = 'Drow !' }, 500);
        again.style.display = "block";
    }

}

const playAgain = () => {
    location.reload();
}

const game = (id) => {
    element = document.getElementById(id);
    if (tern === "x") {
        element.innerHTML = "<span style='color: red'>x</span>";
        tern = "o";
    } else if (tern === "o") {
        element.innerHTML = "<span style='color: blue'>o</span>";
        tern = "x";

    }
    title.style.display = "block";
    title.innerHTML = tern + " turn";
    winner();
}