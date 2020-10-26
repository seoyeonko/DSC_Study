var list = document.getElementById('list');
var button = document.getElementById('addButton');
var input = document.getElementById('input_list');


var count = 1;

button.addEventListener('click', clickButton); // 버튼 클릭시 리스트 추가

function clickButton() {
    var li = document.createElement('li'); // input 태그를 생성해 li 변수에 저장
    li.setAttribute("id", "li" + count) // 생성한 li에 id 속성 부여
    li.setAttribute("class", "list-group-item"); // 생성한 li에 class 속성 부여 

    li.innerHTML = input.value; // 생성한 li에 input의 value값을 넣음
    li.innerHTML += '<button style="float: right;" class="button" id="doneButton" onclick="remove(' + count + ')">Done</button>'
    list.appendChild(li);

    input.value = "";

    count = count + 1 // count++;
}

function remove(count) {
    var li = document.getElementById('li' + count);
    list.removeChild(li);

}


function printTime() {
    var clock = document.getElementById("clock");            // 출력할 장소 선택
    var now = new Date();                                                  // 현재시간
    var nowTime = now.getFullYear() + "." + (now.getMonth() + 1) + "." + now.getDate() + "   |  " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    clock.innerHTML = nowTime;           // 현재시간을 출력

    setTimeout("printTime()", 1000);         // setTimeout(“실행할함수”,시간) 시간은1초의 경우 1000
}

window.onload = function () {                         // 페이지가 로딩되면 실행
    printTime();
}