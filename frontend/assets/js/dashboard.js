window.onload = function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-3d';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '220px';
  canvas.style.zIndex = '-1';
  canvas.width = window.innerWidth - 220;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let t = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 60; i++) {
      let x = (canvas.width/60)*i + Math.sin(t+i)*18;
      let y = canvas.height/2 + Math.cos(t+i)*80;
      ctx.beginPath();
      ctx.arc(x, y, 22 + Math.sin(t+i)*8, 0, 2*Math.PI);
      ctx.fillStyle = `rgba(${84+i},${104+i*2},255,0.15)`;
      ctx.fill();
    }
    t += 0.035;
    requestAnimationFrame(animate);
  }
  animate();
};

fetch('/api/files/user/' + localStorage.getItem('userId'))
  .then(res => res.json())
  .then(files => {
    document.getElementById('total-uploads').innerText = files.length;
    document.getElementById('file-types').innerText = [...new Set(files.map(f=>f.fileType))].length;
    document.getElementById('recent-activity').innerText = files[0]?.filename || 'No recent activity';
    let table = '';
    files.slice(0,5).forEach(file => {
      table += `<tr><td>${file.filename}</td><td>${file.fileType}</td><td>${new Date(file.uploadDate).toLocaleString()}</td></tr>`;
    });
    document.getElementById('activity-table').innerHTML = table;
  });