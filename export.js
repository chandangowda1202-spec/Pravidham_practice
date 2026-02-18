document.getElementById("exportBtn").onclick = function () {
  const tx = db.transaction("sessions", "readonly");
  const store = tx.objectStore("sessions");
  const request = store.getAll();

  request.onsuccess = function () {
    let csv = "Subject,Date,Duration\n";
    request.result.forEach(s => {
      csv += `${s.subject},${s.date},${s.duration}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "consistency_data.csv";
    link.click();
  };
};
