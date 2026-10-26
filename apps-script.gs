function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('RSVPs') || ss.insertSheet('RSVPs');
    if (sheet.getLastRow() === 0) sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', '+1s']);
    var p = e.parameter;
    sheet.appendRow([new Date(), p.name, p.email, "'" + p.phone, "'" + (p.plusOnes || '0')]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
