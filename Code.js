function myFunction() {
  // Eventually this will update all 18F unmaintained documents.
  // For development, it just adds an orange header to your most recently edited Google Doc.
    
  var MILLIS_PER_DAY = 1000 * 60 * 60 * 24;
  var today = new Date();
  var a_year_ago = new Date(today.getTime() - (MILLIS_PER_DAY * 365));
  var formatted_a_year_ago = Utilities.formatDate(a_year_ago, "PST", "yyyy-MM-dd");
  
  // Get all Google Docs
  // that haven't been updated in a year
  // that are owned by me.
  var files = DriveApp.searchFiles('mimeType = "application/vnd.google-apps.document" and modifiedDate > "' + formatted_a_year_ago + '" and "me" in owners');
  
  //while (files.hasNext()) {
  // use while loop when we are ready to edit all files
    var file = files.next();
    var name = file.getName();
    var last_updated = file.getLastUpdated();
    var id = file.getId();
    
    var doc = DocumentApp.openById(id);
    var header = doc.getHeader();
    
    // Add header if needed
    if (header == null) {
      header = doc.addHeader()
    }
  
    // Add a warning header  
    var paragraph = header.appendParagraph("MIGHT BE OUT OF DATE - REMOVE IF NOT NEEDED");
  
    // Define a custom paragraph style.
    var style = {};
    style[DocumentApp.Attribute.FONT_SIZE] = 18;
    style[DocumentApp.Attribute.BOLD] = true;
    style[DocumentApp.Attribute.BACKGROUND_COLOR] = "#FFA533";
  
    // Apply the custom style.
    paragraph.setAttributes(style);
  //}
  
  
  
}
