// pages/api/generate-invoice.js

import { PDFDocument, rgb } from 'pdf-lib';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extract patient details from request body
    const { patientName, dateOfVisit, price } = req.body;

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add a page to the document
    const page = pdfDoc.addPage();

    // Set up some basic text styles
    const fontSize = 12;
    const titleFontSize = 20;
    const lineSpacing = 18;

    // Set up fonts
    const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);
    const boldFont = await pdfDoc.embedFont(PDFDocument.Font.HelveticaBold);

    // Define some content to add to the invoice
    const title = 'Medical Screening Invoice';
    const doctorName = 'Dr. Jane Smith';
    const clinicAddress = '123 Health St., Wellness City';
    const serviceDescription = 'Comprehensive Medical Screening';

    // Get the width and height of the page
    const { width, height } = page.getSize();

    // Draw the title and clinic information
    page.drawText(title, {
      x: 50,
      y: height - 4 * lineSpacing,
      size: titleFontSize,
      font: boldFont,
      color: rgb(0, 0.53, 0.71),
    });

    page.drawText(clinicAddress, {
      x: 50,
      y: height - 6 * lineSpacing,
      size: fontSize,
      font: font,
      color: rgb(0, 0, 0),
    });

    // Add patient name and date of visit
    page.drawText(`Patient Name: ${patientName}`, {
      x: 50,
      y: height - 10 * lineSpacing,
      size: fontSize,
      font: font,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Date of Visit: ${dateOfVisit}`, {
      x: 50,
      y: height - 12 * lineSpacing,
      size: fontSize,
      font: font,
      color: rgb(0, 0, 0),
    });

    // Add service description and price
    page.drawText(`Service Provided: ${serviceDescription}`, {
      x: 50,
      y: height - 16 * lineSpacing,
      size: fontSize,
      font: font,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Price: $${price}`, {
      x: 50,
      y: height - 18 * lineSpacing,
      size: fontSize,
      font: boldFont,
      color: rgb(0.6, 0.2, 0.2),
    });

    // Serialize the PDFDocument to bytes
    const pdfBytes = await pdfDoc.save();

    // Set the HTTP response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');

    // Send the PDF bytes to the client
    res.send(Buffer.from(pdfBytes));
  } else {
    // Handle any other HTTP method
    res.status(405).send('Method Not Allowed');
  }
}
