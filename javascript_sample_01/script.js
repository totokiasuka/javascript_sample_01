// JavaScript
//console.log('Hello world!');
//console.log(1+2);

function MyFunction01() {
    const obj = document.body;
    obj.style.backgroundColor = 'gray';
  } 
//ID要素の背景色を変える
  function MyFunction02() {
    const obj = document.getElementById('id01');
    obj.style.backgroundColor = 'orange';
  }
// CLASS要素 の背景色を変える
function MyFunction03() {
    const lines = document.getElementsByClassName('class01');
    console.log(lines);
    for( let i=0; i<lines.length; i++){
      lines[i].style.backgroundColor = 'green';
    }
  }
// HTML要素 の背景色を変える
function MyFunction04() {
    const obj = document.getElementsByTagName('p');
    for( let i=0; i<obj.length; i++ ) {
      obj[i].style.backgroundColor = 'blue';
    }
  }