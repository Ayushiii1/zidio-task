const uploadArea = document.querySelector('.upload-area');
const fileInput = document.getElementById('fileInput');

uploadArea.addEventListener('click', () => fileInput.click());

uploadArea.addEventListener('dragover', e => {
  e.preventDefault();
  uploadArea.classList.add('dragover');
});
uploadArea.addEventListener('dragleave', e => uploadArea.classList.remove('dragover'));
uploadArea.addEventListener('drop', e => {
  e.preventDefault();
  uploadArea.classList.remove('dragover');
  handleFiles(e.dataTransfer.files);
});
fileInput.addEventListener('change', e => handleFiles(e.target.files));

function handleFiles(files) {
  const file = files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const csv = e.target.result;
    const rows = csv.split('\n').map(r=>r.split(','));
    fetch('/api/files/upload', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        filename: file.name,
        fileType: file.name.split('.').pop(),
        uploader: localStorage.getItem('userId'),
        dataPreview: rows.slice(0,8)
      })
    }).then(res=>res.json())
      .then(data=>{
        alert('File uploaded!');
        window.location = 'reports.html';
      });
  };
  reader.readAsText(file);
}