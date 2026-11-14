import * as pdfjsLib from 'pdfjs-dist';

// Configure worker for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

export async function convertPdfToImage(file: File): Promise<{ file: File | null; imageUrl: string | null }> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdfDoc = await loadingTask.promise;
    const page = await pdfDoc.getPage(1);

    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    if (!context) {
      return { file: null, imageUrl: null };
    }

    await page.render({
      canvasContext: context,
      viewport: viewport,
    }).promise;

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          resolve({ file: null, imageUrl: null });
          return;
        }
        const imageFile = new File([blob], file.name.replace(/\.[^/.]+$/, '') + '.png', {
          type: 'image/png',
        });
        const imageUrl = URL.createObjectURL(blob);
        resolve({ file: imageFile, imageUrl });
      }, 'image/png');
    });
  } catch (error) {
    console.error('Error converting PDF to image:', error);
    return { file: null, imageUrl: null };
  }
}