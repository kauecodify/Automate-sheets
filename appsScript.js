let app = SpreadsheetApp;
let Spreadsheet = app.getActiveSpreadsheet();
let sheet = Spreadsheet.getSheetByName('products');
let token = 'your-token'

function getProductById() 
{
let id = sheet.getRange('A6').getValue();

let options = {
  'method' : 'post',
  'payload' : {
    token: token,
    id: id,
    formato: 'json'
  }
};
let reqs = UrlFetchApp.fetch('https://api.tiny.com.br/api2/produto.obter.php', options);
let ress = JSON.parse(reqs.getContentText());
let produto = ress.retorno.produto;
sheet.getRange('B6:D6').setValues([
  [
    produto.nome,
    produto.codigo,
    produto.preco
  ]
]);
} 

