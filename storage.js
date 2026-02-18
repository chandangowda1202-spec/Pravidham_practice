let db;

const request = indexedDB.open("ConsistencyDB", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;
  db.createObjectStore("sessions", { autoIncrement: true });
  db.createObjectStore("subjects", { keyPath: "name" });
};

request.onsuccess = function (event) {
  db = event.target.result;
};

function saveSession(session) {
  const tx = db.transaction("sessions", "readwrite");
  tx.objectStore("sessions").add(session);
}

function saveSubject(subject) {
  const tx = db.transaction("subjects", "readwrite");
  tx.objectStore("subjects").put(subject);
}
