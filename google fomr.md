code used to setup google form:
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Email', 'Interest', 'Message']);
  }
  sheet.appendRow([new Date(), e.parameter.name, e.parameter.phone, e.parameter.email, e.parameter.interest, e.parameter.message]);
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}


react function code gemini gave me to update:


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formData = new FormData();
  Object.entries(formState).forEach(([key, value]) => formData.append(key, value as string));

  try {
    await fetch("https://script.google.com/macros/s/AKfycbxExhKT3N9eznWPAywd2gYVKfA12GD7Ow1IPrwGTN9yKEgGVEC-cuxOrunpbokd0g/exec", {
      method: "POST",
      body: formData,
      mode: "no-cors"
    });
    setSubmitted(true);
  } catch (error) {
    console.error("Submission failed", error);
  }
};

https://script.google.com/macros/s/AKfycbw2eA6pAy00LYwYFjPMOQeaw8LsXRQwVPB-PfHVbixt7mJkogED92ab2QRAG3pgyK4/exec

      await fetch("https://script.google.com/macros/s/AKfycbw2eA6pAy00LYwYFjPMOQeaw8LsXRQwVPB-PfHVbixt7mJkogED92ab2QRAG3pgyK4/exec", {
