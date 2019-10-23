function myFunction() {
  //1. 現在のスプレッドシートを取得
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  //2. 現在のシートを取得
  var sheet = spreadsheet.getActiveSheet();
  //3. 指定するセルの範囲（A1）を取得
  var range = sheet.getRange("A1");
  //4. 値を取得する
  var value = range.getValue();
 
  //ログに出力
  Logger.log(value);
}
