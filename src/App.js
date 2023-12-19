import React, { useState } from "react";
import './Styles/App.css'
import Box9x9 from "./Components/Box9x9/Box9x9";

// Используемые цвета, границы.
const red = 'rgb(220, 20, 60)';
const blue = 'rgb(0, 191, 255)';
const marker = 'rgb(0, 40, 255)';
const block_classic_border = '2px solid gold';
const block_border = '2px solid ' + marker;
const Box_classic_border = '3px solid red';
const Box_border = '3px solid ' + marker;

//Массив для проверки условия победы.
const winArray = [
// 1  2  3  4  5  6  7  8  9 блок (индексы 0 1 2 3 4 5 6 7 8 9 соответсвенно)
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // 1 бокс, индекс 0
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // 2 бокс, индекс 1
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // 3 бокс, индекс 2
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // 4 бокс, индекс 3
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // 5 бокс, индекс 4
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // 6 бокс, индекс 5
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // 7 бокс, индекс 6
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // 8 бокс, индекс 7
  [0, 0, 0, 0, 0, 0, 0, 0, 0]  // 9 бокс, индекс 8
]
let IsWinner = false;
//Согласование id-шников блока и бокса.
const number_trans = {
  "1": 'One',
  "2": 'Two',
  "3": 'Three',
  "4": 'Four',
  "5": 'Five',
  "6": 'Six',
  "7": 'Seven',
  "8": 'Eight',
  "9": 'Nine'
}


function App() {
  let [lastColor, setLastColor] = useState('');
  let [lastId, setLastId] = useState('');
  let [text, setText] = useState('');
  //Меняет цвет блока, переключая его при ходе.
  function changeColor(sid, Box_id){
    //Переменный, используемые в функции.
    const blockID = sid[9]; // id блока внутри бокса на который кликнули
    const BoxID = sid[11]; // id бокса
    const winTable = document.getElementById('winTable'); // окно победы
    const winButton = document.getElementById('restartButton'); // кнопка рестарта
    const Box = document.getElementById(Box_id); // Бокс в котором мы находимся
    const elem = document.getElementById(sid); // Блок, на который мы кликаем
    const prevElem = document.getElementById(lastId); //Блок, на который мы в прошлый раз кликнули(по умолчанию == NUll)
    const nextBox = document.getElementById(number_trans[blockID]); // Следующий Бокс  здесь sid[9](blockID) -- id следующего бокса(нажатой клетки)
    var typecolor = window.getComputedStyle(elem, null).backgroundColor; //Цвет заднего фона блока
    var activeBox = window.getComputedStyle(Box, null).border; // Параметры границ бокса(9 блоков)

    //проверка, что кликаем не на закрашенный блок и на бокс с синим контуром
    if (typecolor === 'rgba(0, 0, 0, 0)' && activeBox === Box_border  && !IsWinner){ 
      if (lastColor === blue){ //определяем цвет, с помощью предыдущего, чтобы не перекрашивать блоки.
        typecolor = red;
        setLastColor(typecolor);
        setLastId(sid);
        winArray[+BoxID - 1][+blockID - 1] = -1; //Отмечаем ход красного в матрице ходов.
      }
      else{
        typecolor = blue;
        setLastColor(typecolor);
        setLastId(sid);
        winArray[+BoxID - 1][+blockID - 1] = 1; //Отмечаем ход синего в матрице ходов.
    }
    Box.style.border = Box_classic_border; // Здесь в Box храниться предыдущий элемент, у которого граница возвращается к норме.
    nextBox.style.border = Box_border; // Здесь мы меняем цвет следующего бокса
    elem.style.backgroundColor = typecolor;
    elem.style.border = block_border; // перекрашиваем границу последнего кликнутого блока
    if (prevElem != null){ //возвращаем цвет границы назад
      prevElem.style.border = block_classic_border;
    }
    console.log(blockID, BoxID, winArray[+BoxID -1 ]); // Отладка
    }
    if (!IsWinner){  
        for (let x=-1; x < 2; x+=2){
          // Перебор всех выигрышных комбинаций как для красного, так и для синего игрока.
          // +BoxID - 1 индекс бокса, в котором был совершен последний(предположительно победный) ход.
        if ((winArray[+BoxID - 1][0] === winArray[+BoxID - 1][1] && winArray[+BoxID - 1][1] === winArray[+BoxID - 1][2] && winArray[+BoxID - 1][1] === x) ||
        (winArray[+BoxID - 1][3] === winArray[+BoxID - 1][4] && winArray[+BoxID - 1][4] === winArray[+BoxID - 1][5]  && winArray[+BoxID - 1][4] === x) || 
        (winArray[+BoxID - 1][6] === winArray[+BoxID - 1][7] && winArray[+BoxID - 1][7] === winArray[+BoxID - 1][8]  && winArray[+BoxID - 1][7] === x) ||
        (winArray[+BoxID - 1][0] === winArray[+BoxID - 1][3] && winArray[+BoxID - 1][3] === winArray[+BoxID - 1][6]  && winArray[+BoxID - 1][3] === x) ||
        (winArray[+BoxID - 1][1] === winArray[+BoxID - 1][4] && winArray[+BoxID - 1][4] === winArray[+BoxID - 1][7]  && winArray[+BoxID - 1][4] === x) || 
        (winArray[+BoxID - 1][2] === winArray[+BoxID - 1][5] && winArray[+BoxID - 1][5] === winArray[+BoxID - 1][8]  && winArray[+BoxID - 1][5] === x) ||
        (winArray[+BoxID - 1][0] === winArray[+BoxID - 1][4] && winArray[+BoxID - 1][4] === winArray[+BoxID - 1][8]  && winArray[+BoxID - 1][4] === x) || 
        (winArray[+BoxID - 1][2] === winArray[+BoxID - 1][4] && winArray[+BoxID - 1][4] === winArray[+BoxID - 1][6]  && winArray[+BoxID - 1][4] === x)) {
          if (x === -1){
            console.log('Red wins');
            IsWinner = true;
            winTable.style.backgroundColor = red;
            winTable.style.display = "block";
            winButton.style.backgroundColor = blue;
            setText('Red won');
          }
          if (x === 1){
            console.log('Blue wins');
            IsWinner = true;
            winTable.style.backgroundColor = blue;
            winTable.style.display = 'block';
            winButton.style.backgroundColor = red;
            setText("Blue won");
          }
        }
      }
    }
  }
  return (
    <div className="App">
      <div id={"winTable"}>{text}
      <button id={'restartButton'} onClick={() => window.location.reload()}>Restart</button>
      </div>
      <Box9x9 getId={changeColor}/>
    </div>
  );
}

export default App; 