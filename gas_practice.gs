function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('追加メニュー') // メニューの追加
    .addItem('追加項目', 'myFunction') // 項目の追加
    .addSeparator()//区切り線
    .addSubMenu(SpreadsheetApp.getUi().createMenu('追加サブメニュー') // サブメニューの追加
      .addItem('サブメニューの項目1', 'test') //サブメニューの項目1の追加
      .addItem('サブメニューの項目２', 'test') //サブメニューの項目2の追加
    )
  .addToUi();
}

function myFunction() {
  Browser.msgBox("myFunctionダイアログ");
}

function test() {
  Browser.msgBox("testダイアログ");
}

function myFunction2() {
    var val = 'こんにちは　世界';
    Logger.log(val); // ログ出力
}