fetch('/api/files/user/' + localStorage.getItem('userId'))
  .then(res => res.json())
  .then(files => {
    const months = Array.from({length:12}, (_,i)=>new Date(0, i).toLocaleString('en', {month:'short'}));
    const monthly = Array(12).fill(0);
    files.forEach(f => {
      const m = new Date(f.uploadDate).getMonth();
      monthly[m]++;
    });
    new Chart(document.getElementById('barChart'), {
      type: 'bar',
      data: {
        labels: months,
        datasets: [{ label: 'Monthly Uploads', data: monthly, backgroundColor: '#5468ff' }]
      }
    });

    const types = {};
    files.forEach(f => { types[f.fileType] = (types[f.fileType]||0)+1; });
    new Chart(document.getElementById('pieChart'), {
      type: 'pie',
      data: {
        labels: Object.keys(types),
        datasets: [{ data: Object.values(types), backgroundColor: ['#5468ff','#44d9e6','#ede7f6','#ffb366'] }]
      }
    });

    const days = {};
    files.forEach(f => {
      const day = new Date(f.uploadDate).toISOString().slice(0,10);
      days[day] = (days[day]||0)+1;
    });
    const sortedDays = Object.keys(days).sort();
    new Chart(document.getElementById('lineChart'), {
      type: 'line',
      data: {
        labels: sortedDays,
        datasets: [{ label: 'Usage', data: sortedDays.map(d=>days[d]), borderColor:'#44d9e6', fill:false }]
      }
    });
  });