fetch('/api/files/user/' + localStorage.getItem('userId'))
  .then(res=>res.json())
  .then(files=>{
    let table = '';
    files.forEach(file=>{
      table += `<tr>
        <td>${file.filename}</td>
        <td>${file.fileType}</td>
        <td>${new Date(file.uploadDate).toLocaleString()}</td>
        <td>
          <button onclick="showPreview(${JSON.stringify(file.dataPreview)})">Preview</button>
        </td>
      </tr>`;
    });
    document.getElementById('reports-table').innerHTML = table;
  });

window.showPreview = function(data){
  let html = '<table class="table-preview">';
  data.forEach(row=>{
    html += '<tr>' + row.map(cell=>`<td>${cell}</td>`).join('') + '</tr>';
  });
  html += '</table>';
  document.getElementById('preview-modal').innerHTML = html;
  document.getElementById('preview-modal').style.display='block';
};

document.getElementById('close-preview').onclick = () => {
  document.getElementById('preview-modal').style.display='none';
};