function downloadPdfFromBuffer(apiResponse) {
  // Extract the raw byte array
  const bufferData = apiResponse.data.data;

  // Convert to Uint8Array
  const uint8Array = new Uint8Array(bufferData);

  // Create a Blob
  const blob = new Blob([uint8Array], { type: "application/pdf" });

  // Create object URL
  const url = URL.createObjectURL(blob);

  // Create a download link
  const a = document.createElement("a");
  a.href = url;
  a.download = "report.pdf"; // filename
  document.body.appendChild(a);
  a.click();

  // Cleanup
  a.remove();
  URL.revokeObjectURL(url);
}