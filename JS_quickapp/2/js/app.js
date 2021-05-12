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

  // 定数　question(問題文), answers(選択肢), correct(答え)の各要素を配列で格納。
  // ※answers要素はさらに複数の配列を格納している。「多次元配列」。


const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

  // 定数　quiz配列の要素の数＝問題＋答えの組み合わせの数
  // 変数　現在の問題番号、初期値0番（配列の最初）
  // 変数　現在のスコア、初期値0点


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

  // 定数　中身がHTML要素なので先頭に$マーク、documentオブジェクトのbutton要素（複数なので配列）
  // 定数　ボタンの数、$button（配列）の要素数


// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
  // whileを使ったリファクタリングの前
  // $button[0].textContent = answers[0];
  // $button[1].textContent = answers[1];
  // $button[2].textContent = answers[2];
  // $button[3].textContent = answers[3];
};

  // 関数の定義 アロー関数() => {} は、function() {}の置き換え。丸かっこ()には引数が入る
    // 代入　id'js-question'をもつ要素のテキストに、最初に定義したquiz配列※番目のquestion要素を代入する
    // 変数　ボタン要素の番号（何番目か）、初期値0番（最初）
    // ループ関数　ループ条件(ボタン要素の番号 < $button配列の数)・・・要素の番号は0番（1つ目）から、配列の要素の数は1個から数えるので最後のループでは(3 < 4)となり適切
      // 代入　〇番目のボタンのテキストに、X番目の問題の選択肢（〇番目）をそれぞれ代入する
      // 1足して次のボタンもループさせる
    // ループ関数の注意：ループが終わるようにすること。クラッシュの原因


setupQuiz();

// 定義した関数を呼び出して実行


// オブジェクトe・・・マウスイベント
const clickHandler = (e) => {
  // 正誤の判定
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  } else {
    window.alert('ハズレ');
  }
  // 問題番号に1足す
  quizIndex++;

  // 出題終了の判定
  if(quizIndex < quizLength) {
    // 問題があれば実行
    setupQuiz();
  } else {
    // もうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    // 文字列と変数は+で結合できる
  }
};

  // 関数の定義　引数はオブジェクトe:マウスイベント
    // if　マウスで選択したテキストとquiz配列のcorrect要素のテキストが一致するなら。。。
      // windowオブジェクトに正解とのalert
      // scoreに1足す
    // else 一致しない場合。。。
      // windowオブジェクトにハズレとのalert
    // 問題番号に1足す

    // if　問題番号 < quiz配列要素の数ならば。。。
      // setupQuizを実行
    // else そうでないならば。。。
      // windowオブジェクトに終了、scoreと出題数を表示


// ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  })
  handleIndex++;
};
