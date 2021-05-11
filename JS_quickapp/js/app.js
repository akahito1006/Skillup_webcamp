const quiz = [
  {
    question: 'ゲーム市場最も売れたゲーム機はどれ？',
    answers: [
      'スーパーファミコン',
      'PS2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
      question: '任天堂の看板ゲームといえば？',
      answers: [
        'MOTHER2',
        'スーパーマリオブラザーズ3',
        'スーパードンキーコング',
        '星のカービィ'
      ],
      correct: 'MOTHER2'
  }, {
      question: 'FF4の主人公は？',
      answers: [
        'フリオニール', 
        'クラウド', 
        'ティーダ', 
        'セシル'
      ],
      correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
  // $button[0].textContent = answers[0];
  // $button[1].textContent = answers[1];
  // $button[2].textContent = answers[2];
  // $button[3].textContent = answers[3];
};

setupQuiz();

// オブジェクトe・・・マウスイベント
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  } else {
    window.alert('ハズレ')
  }
  
  quizIndex++;
  
  if(quizIndex < quizLength){
    // 問題があれば実行
    setupQuiz();
  } else {
    // もうなければこちらを実行
    window.alert('終了！あなたの成果数は' + score + '/' + quizLength + 'です！');
    // 文字列と変数は+で結合できる
  }
};

// ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  })
  handleIndex++;
};

console.log(
);

// 利用したレッスン：https://www.youtube.com/watch?v=fAluwAmHrws