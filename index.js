var fonts = {
  Roboto: {
    normal: "fonts/Roboto-Regular.ttf",
    bold: "fonts/Roboto-Medium.ttf",
    italics: "fonts/Roboto-Italic.ttf",
    bolditalics: "fonts/Roboto-MediumItalic.ttf",
  },
};

var PdfPrinter = require("pdfmake");
var printer = new PdfPrinter(fonts);
var fs = require("fs");

var docDefinition = {
  pageSize: "A4",
  pageMargins: [0, 0, 0, 0],
  content: {
    image: "images/test.jpg",
    padding: 0,
  },
};

console.log("Running this");
var now = new Date();
var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream("pdfs/absolute.pdf"));
pdfDoc.end();
console.log(new Date() - now);
