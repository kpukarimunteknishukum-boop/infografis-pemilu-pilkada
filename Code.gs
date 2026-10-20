var SPREADSHEET_ID = "17qR_4VChFgQ2vt2R2fKPDp3-hoOnofK5Hi4iCft3rro";

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Infografis Sejarah Pemilu & Pilkada Kab. Karimun')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Fungsi umum untuk mengambil data dari Sheet
function getDataFromSheet(sheetName) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];
  
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return []; // Jika hanya ada header
  
  var headers = data.shift(); // Ambil baris pertama sebagai header
  
  return data.map(function(row) {
    var obj = {};
    headers.forEach(function(header, index) {
      obj[header] = row[index];
    });
    return obj;
  });
}
