// -------------1.変数と定数-------------
// 変数
let let_word = 'Hello World';
let_word = 'Hello World2';

// 定数
const const_word = 'Hi world!!!';

// -------------2.配列-------------
let weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri']
// console.log(weekdays[0]);

// -------------3.ループ文-------------
// let index = 0;
// while (index < weekdays.length) {
//   // 繰り返したい命令
//   console.log(weekdays[index])
//   index++; //index = 5
// }

// if/else
if (weekdays.length > 5) {
  console.log('土日はまだ？');
} else {
  console.log('お疲れ！')
};

// -------------4.関数-------------
const test = (arg) => { //arg;引数
  // const test = function() {
  // ここに実行したい処理を書く
  if (weekdays.length > arg) {
    console.log('土日はまだ？');
  } else {
    console.log('お疲れ！')
  }
};
// test(3);

// -------------5.オブジェクト-------------
const phone = {
  // key: value;
  color: 'white',
  size: 'handful',
  stars: '4 of 5',
  // 関数
  ring: () => {
    console.log('ring!');
  }
};
// console.log(phone.ring());

// -------------6.あらかじめあるオブジェクト-------------
// 1.window
// window.alert('Hello!!!');

// 2.document
// console.log(document.getElementsByTagName('p')[0]);

// 3.event
document.getElementsByTagName('p')[0].addEventListener('click', () => {
  // 命令を書く
  window.alert('Hello World!')
});

// 分割代入（※配列）
const sample = () => [() => console.log("a!"), () => window.alert('Hello World!')];

const [a, b] = sample();

a();  // a!が出力される


function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}

console.log(getRectArea(3, 4));
// expected output: 12

console.log(getRectArea(-3, 4));
// expected output: 0