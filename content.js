document.addEventListener('copy', function(e) {
  e.preventDefault();
  
  const selection = window.getSelection();
  const CONTENT = selection.toString();
  
  const clipboardProvenance = {
    content: CONTENT,
    uri: window.location.href,
    datetime: new Date().toISOString()
  };
  
  const modifiedContent = JSON.stringify(clipboardProvenance, null, 2);
  
  e.clipboardData.setData('text/plain', modifiedContent);
});