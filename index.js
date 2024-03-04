// const man = {
//     name: "John",
//     age: 35,
//     gender: "man",
//     family: ["母", "父", "犬"],
//     from: 'japan',
// }



// console.log(`男性の家族構成は、自分と${man.family[0]}と${man.family[1]}と${man.family[2]}の${man.family.length}人(匹)です`);

// console.log("男性の家族構成は、自分と" + man.family[0] + "と" + man.family[1] + "と" + man.family[2] + "の" + man.family.length + "人(匹)です");


// let number = 100;
// let string = '文字';
// let bool = true;
// let foo = null;
// let test = undefined;

// console.log(number);
// console.log(string);
// console.log(bool);
// console.log(foo);
// console.log(test);


// if (number > 10) {
//     console.log('10より大きい');
// } else if (number <= 10) {
//     console.log('10以下');
// }



// const score = 70;

// if (score >= 80 ) {
//     console.log('優秀');    
// } else if (score >= 60) {
//     console.log('良好');
// } else {
//     console.log('改善が必要');
// }

// const quantity = 1; 

// if (quantity >= 50) {
//     console.log('割引率は20%です');     
// } else if (quantity >= 20) {
//     console.log('割引率は15%です');
// } else if (quantity >= 10) {
//     console.log('割引率は10%です');
// } else {
//     console.log('割引はありません');
// }


// const score = 99;

// if (score >= 90) {
//     console.log('成績はAです');    
// } else if (score >= 80) {
//     console.log('成績はBです');
// } else if (score >= 70) {
//     console.log('成績はCです');
// } else if (score >= 60) {
//     console.log('成績はDです');
// } else {
//     console.log('成績はFです');
// }

// let hour = 1;

// if (hour >= 21) {
//     console.log('遅い時間ですね。おやすみなさい！');
// } else if (hour >= 17) {
//     console.log('こんばんは！');
// } else if (hour >= 12) {
//     console.log('こんにちは！');
// } else if (hour >= 6) {
//     console.log('おはようございます！');
// } else {
//     console.log('深夜ですね。おやすみなさい！');
// }

// // メインディッシュとサイドオプションの選択肢
// const mainDish = 'ビーフ'; // ここでメインディッシュを 'ビーフ', 'チキン', 'ベジタリアン' のいずれかに設定
// const sideOption = 'ポテト'; // ここでサイドオプションを 'サラダ', 'スープ', 'ポテト' のいずれかに設定

// // 条件分岐を用いたフィードバックの出力
// if (mainDish === 'ベジタリアン') {
//     if (sideOption === 'サラダ') {
//         console.log('ヘルシーな選択ですね！');
//     } else {
//         console.log('バランスの取れた食事ですね！');
//     }
// } else if (mainDish === 'チキン') {
//     if (sideOption === 'スープ') {
//         console.log('心温まる食事ですね！');
//     } else {
//         console.log('素晴らしい組み合わせです！');
//     }
// } else if (mainDish === 'ビーフ') {
//     if (sideOption === 'ポテト') {
//         console.log('クラシックな選択です！');
//     } else {
//         console.log('冒険的な食事ですね！');
//     }
// }



// //ユーザーからの入力を想定
// const hour     = 1;  //時間帯
// const distance = 1; //距離(Km)

// if (distance >= 10) {
//     console.log('タクシー');    
// } else if (distance >= 5 || hour >= 20 || hour < 8) {
//     console.log('地下鉄');
// } else {
//     console.log('自転車');
// }





// //ユーザーの年齢
// const age = 100000;

// if (age >= 18) {
//     console.log('成人向けコンテンツにアクセスできます');    
// } else if (age >= 12) {
//     console.log('ティーン向けコンテンツにアクセスできます');
// } else {
//     console.log('子供向けコンテンツにアクセスできます');
// }


// const age     = 18;   //年齢
// const consent = true; //参加同意書
// const score   = 50;   //スコア

// if (age >= 18 && consent) { // 年齢が18以上かつ参加同意書がある
//     if (score >= 60 || age >= 30) { // スコアが60以上、または年齢が30以上
//         console.log('参加資格があります');
//     } else {
//         console.log('参加資格がありません：スキルテストのスコアが基準に達していません');
//     }
// } else {
//     // 年齢が18未満または参加同意書がない場合
//     console.log('参加資格がありません：年齢が基準に達していないか、参加同意書が提出されていません');
// }

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }

// const avr = sum / 100;

// console.log(sum);
// console.log(avr);
 




// let n1 = 0; // 最初の項
// let n2 = 1; // 二番目の項
// let nextTerm;

// console.log(n1); // 最初の項を出力
// console.log(n2); // 二番目の項を出力

// for (let i = 3; i <= 10; i++) {
//     nextTerm = n1 + n2;
//     console.log(nextTerm);
//     n1 = n2;
// //     n2 = nextTerm;
// // }


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// let n1 = 0; //奇数
// let n2 = 0; //偶数

// numbers.forEach





// const greet = (name) => {
//      console.log(`Hello,${ name}`);   
// };

// greet('Yusuke');



// const double = (number) => {
//     return number * 2;
// };

// console.log(double(10));


// const half = (number) => {
//     return number / 2;
// };

// console.log(half(100));


// const subtractTen = (number) => {
//     return number - 10;
// };

// console.log(subtractTen(1));




