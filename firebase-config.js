// =========================================================
// CONFIGURAÇÃO DO FIREBASE (Compatível com login.html e index.html)
// =========================================================
const firebaseConfig = {
  apiKey: "AIzaSyDanJyXzzoRN8mDZXtaLdee_oseVZoWw28",
  authDomain: "estudos-banestes.firebaseapp.com",
  projectId: "estudos-banestes",
  storageBucket: "estudos-banestes.firebasestorage.app",
  messagingSenderId: "585748567685",
  appId: "1:585748567685:web:acd797c1d9e463706dbbec"
};

// Inicializa o Firebase, o Login (auth) e o Banco de Dados (db)
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// Habilita persistência offline
db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
    console.warn("Persistência offline aviso:", err.code);
});