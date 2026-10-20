// =========================================================
// EDITAL VERTICALIZADO PADRÃO - BANESTES (TÉCNICO BANCÁRIO)
// =========================================================
const DEFAULT_BANESTES_DATA = [
    {
        id: "subj_1", name: "01 | Língua Portuguesa", shortName: "Português",
        block: "Gerais", weight: 1, examQuestions: 10, hours: 0, color: "#7c5cc4",
        topics: [
            "1 - Ortografia e acentuação.",
            "2 - Emprego do sinal indicativo de crase.",
            "3 - Compreensão e interpretação de textos de gêneros variados.",
            "4 - Relação do texto com seu contexto histórico.",
            "5 - Denotação e conotação.",
            "6 - Discurso direto, discurso indireto e discurso indireto livre.",
            "7 - Intertextualidade.",
            "8 - Figuras de linguagem.",
            "9 - Morfossintaxe.",
            "10 - Elementos estruturais e processos de formação de palavras.",
            "11 - Sinonímia e antonímia.",
            "12 - Pontuação.",
            "13 - Pronomes.",
            "14 - Concordância nominal e concordância verbal.",
            "15 - Flexão nominal e flexão verbal.",
            "16 - Vozes do verbo.",
            "17 - Correlação de tempos e modos verbais.",
            "18 - Regência nominal e regência verbal.",
            "19 - Coordenação e subordinação.",
            "20 - Conectivos.",
            "21 - Redação: Confronto e reconhecimento de frases corretas e incorretas; Organização e reorganização de orações e períodos; Equivalência e transformação de estruturas."
        ]
    },
    {
        id: "subj_2", name: "02 | Ética, Compliance e ESG", shortName: "Ética/ESG",
        block: "Gerais", weight: 1, examQuestions: 5, hours: 0, color: "#17bebb",
        topics: [
            "1 - Ética e moral (Conceitos, Princípios, Aplicação no ambiente organizacional).",
            "2 - Ética no serviço público e nas instituições financeiras.",
            "3 - Integridade, transparência, responsabilidade e conflitos de interesse.",
            "4 - Governança corporativa (Conceitos, Princípios, Boas práticas).",
            "5 - Compliance (Conceito, Objetivos, Controles internos, Gestão de riscos, Canais de denúncia, Programas de integridade).",
            "6 - Prevenção e combate à corrupção, fraudes e lavagem de dinheiro.",
            "7 - Proteção de dados pessoais e privacidade.",
            "8 - Noções da Lei Geral de Proteção de Dados Pessoais (LGPD).",
            "9 - ESG (Conceitos, fundamentos e aplicação nas organizações).",
            "10 - Sustentabilidade e responsabilidade socioambiental corporativa.",
            "11 - Aspectos ambientais, sociais e de governança (ESG) aplicados ao setor financeiro.",
            "12 - Desenvolvimento sustentável, Agenda 2030 e Objetivos de Desenvolvimento Sustentável (ODS).",
            "13 - Guia de Conduta Ética do Banestes."
        ]
    },
    {
        id: "subj_3", name: "03 | Matemática / Raciocínio Lógico e Quantitativo", shortName: "RLM/Mat",
        block: "Gerais (TB)", weight: 1, examQuestions: 10, hours: 0, color: "#9b7ede",
        topics: [
            "1 - Estrutura lógica de relações arbitrárias entre pessoas, lugares, objetos ou eventos fictícios.",
            "2 - Deduzir novas informações das relações fornecidas e avaliar as condições usadas.",
            "3 - Compreensão e elaboração da lógica das situações (Raciocínio verbal, matemático, sequencial, espacial/temporal, conceitos, discriminação).",
            "4 - Compreensão do processo lógico que, a partir de um conjunto de hipóteses, conduz a conclusões determinadas.",
            "5 - Números inteiros e racionais (Operações, Expressões numéricas, Múltiplos e divisores, Problemas).",
            "6 - Frações e operações com frações.",
            "7 - Números e grandezas proporcionais (Razões e proporções, Divisão proporcional, Regra de três, Porcentagem, Acréscimos e descontos).",
            "8 - Noções de Estatística (Medidas de tendência central, Medidas de dispersão, Leitura de gráficos e tabelas).",
            "9 - Contagem (Princípio multiplicativo e aditivo, Permutações e combinações simples)."
        ]
    },
    {
        id: "subj_4", name: "04 | Atualidades do Mercado Financeiro", shortName: "Atualidades",
        block: "Gerais (TB)", weight: 1, examQuestions: 5, hours: 0, color: "#2ec4b6",
        topics: [
            "1 - Sistema Financeiro Nacional (Estrutura, Órgãos normativos, Supervisores, Operadores).",
            "2 - Política monetária e seus impactos na economia (Copom, Taxa Selic, Inflação, Taxas de juros).",
            "3 - Mercado financeiro e de capitais (Conceitos, Produtos, Serviços, Principais indicadores).",
            "4 - Open Finance, Pix, moedas digitais, inovação e transformação digital no sistema financeiro.",
            "5 - Fintechs, bancos digitais, instituições de pagamento e tendências do setor bancário.",
            "6 - Educação financeira, inclusão financeira e proteção do consumidor financeiro.",
            "7 - Sustentabilidade, finanças sustentáveis e ESG no mercado financeiro.",
            "8 - Cenários econômico e geopolítico nacional e internacional e seus reflexos no sistema financeiro.",
            "9 - Atualidades e tendências do mercado financeiro brasileiro."
        ]
    },
    {
        id: "subj_5", name: "05 | Conhecimentos Bancários / Securitários", shortName: "Bancários",
        block: "Específicos", weight: 2, examQuestions: 15, hours: 0, color: "#6c4ab6",
        topics: [
            "1 - Sistema Financeiro Nacional (Estrutura, Órgãos normativos, Supervisores, Operadores).",
            "2 - Instituições financeiras e Instituições de Pagamento (Conceitos, Tipos, Funções, Operações).",
            "3 - Produtos e serviços bancários (Contas, Meios de pagamento, Crédito, Investimentos, Cartões, Canais de atendimento).",
            "4 - Captação, intermediação e aplicação de recursos financeiros.",
            "5 - Mercado financeiro e de capitais (Conceitos básicos e Principais instrumentos).",
            "6 - Política monetária e indicadores econômicos (Copom, Taxas de juros, Inflação, Indicadores).",
            "7 - Open Finance, Pix, meios eletrônicos de pagamento e inovação no sistema financeiro.",
            "8 - Prevenção à lavagem de dinheiro e ao financiamento do terrorismo.",
            "9 - Conselho de Controle de Atividades Financeiras (COAF).",
            "10 - Educação financeira e proteção do consumidor de produtos e serviços financeiros.",
            "11 - Noções de seguros (Conceitos, Princípios, Participantes, Modalidades pessoais e empresariais).",
            "12 - Previdência complementar aberta (Conceitos, Características, Modalidades).",
            "13 - Títulos de capitalização (Conceitos, Características, Funcionamento).",
            "14 - Produtos bancassurance: integração entre serviços bancários, seguros, previdência e capitalização.",
            "15 - Consórcio.",
            "16 - Regulação e supervisão dos mercados financeiro e securitário.",
            "17 - Atendimento, comercialização e adequação de produtos financeiros e securitários ao perfil do cliente.",
            "18 - Portabilidade.",
            "19 - Resolução CMN nº 4.966/2021."
        ]
    },
    {
        id: "subj_6", name: "06 | Matemática Financeira", shortName: "Mat. Fin.",
        block: "Específicos", weight: 2, examQuestions: 5, hours: 0, color: "#00a896",
        topics: [
            "1 - Razão, proporção, porcentagem e variação percentual.",
            "2 - Juros simples e juros compostos.",
            "3 - Taxas de juros (Nominal, Efetiva, Proporcional, Equivalente, Real).",
            "4 - Capitalização e desconto simples e composto.",
            "5 - Valor presente e valor futuro.",
            "6 - Séries de pagamentos (anuidades) e sistemas de amortização.",
            "7 - Fluxo de caixa e equivalência de capitais.",
            "8 - Cálculo financeiro aplicado a operações de crédito e investimentos.",
            "9 - Análise de financiamentos e empréstimos.",
            "10 - Matemática financeira aplicada ao mercado financeiro e bancário."
        ]
    },
    {
        id: "subj_7", name: "07 | Noções de Probabilidade e Estatística", shortName: "Estatística",
        block: "Específicos", weight: 2, examQuestions: 5, hours: 0, color: "#8a5cf5",
        topics: [
            "1 - Conceitos básicos de estatística e análise de dados.",
            "2 - População, amostra e técnicas de amostragem.",
            "3 - Organização, representação e interpretação de dados em tabelas e gráficos.",
            "4 - Medidas de tendência central (Média, Mediana, Moda).",
            "5 - Medidas de dispersão (Amplitude, Variância, Desvio padrão, Coeficiente de variação).",
            "6 - Probabilidade (Conceitos fundamentais, Eventos, Espaço amostral, Cálculo de probabilidades).",
            "7 - Probabilidade condicional e independência de eventos.",
            "8 - Distribuições de frequência e distribuição normal.",
            "9 - Análise e interpretação de indicadores estatísticos.",
            "10 - Aplicações de probabilidade e estatística em contextos financeiros, econômicos e organizacionais."
        ]
    },
    {
        id: "subj_8", name: "08 | Noções de Informática e Comportamentos Digitais", shortName: "Informática",
        block: "Específicos", weight: 2, examQuestions: 5, hours: 0, color: "#20c997",
        topics: [
            "1 - Lei Geral de Proteção de Dados Pessoais - LGPD (Fundamentos, Conceitos, Princípios, Bases legais, Direitos, Dados sensíveis, Agentes, Encarregado, Segurança, Boas práticas, Sanções).",
            "2 - Aplicações da LGPD ao setor bancário (Cadastro, Crédito, Fraude, Compartilhamento, Proteção do crédito, Decisões automatizadas).",
            "3 - Noções de Informática, Google Workspace e segurança digital (Hardware, Software, Windows e Linux, Internet, Correio eletrônico, Nuvem, Redes, Escritório, Colaboração, Senhas, Malware/Phishing, Privacidade).",
            "4 - Google Workspace (Gmail, Drive, Docs, Sheets, Slides, Forms, Calendar, Meet, Chat).",
            "5 - Inteligência Artificial e novas tecnologias (Conceitos de IA, Machine Learning, IA Generativa, Automação, Chatbots, PLN, Gemini no Workspace, Aplicações bancárias da IA, Riscos/Vieses, Governança, Segurança)."
        ]
    },
    {
        id: "subj_9", name: "09 | Vendas, Negociação e Atendimento", shortName: "Vendas",
        block: "Específicos", weight: 2, examQuestions: 10, hours: 0, color: "#a06cd5",
        topics: [
            "1 - Atendimento ao cliente (Conceitos, Princípios, Qualidade, excelência e satisfação do cliente).",
            "2 - Comunicação interpessoal, relacionamento com clientes e técnicas de atendimento presencial e digital.",
            "3 - Perfil, necessidades e comportamento do consumidor de produtos e serviços financeiros.",
            "4 - Técnicas de vendas e pós-venda.",
            "5 - Prospecção, fidelização e retenção de clientes.",
            "6 - Negociação (Conceitos, Etapas, Abordagens, Técnicas de negociação).",
            "7 - Gestão do relacionamento com clientes (CRM).",
            "8 - Marketing de relacionamento e experiência do cliente.",
            "9 - Produtos e serviços bancários: características, benefícios e adequação ao perfil do cliente.",
            "10 - Ética, transparência e responsabilidade no atendimento e na oferta de produtos e serviços financeiros.",
            "11 - Resolução de conflitos, tratamento de reclamações e mediação de situações de atendimento.",
            "12 - Canais de atendimento e transformação digital no setor bancário.",
            "13 - Educação financeira e orientação ao cliente na utilização de produtos e serviços financeiros."
        ]
    }
];

// =========================================================
// VARIÁVEIS DE ESTADO E FIREBASE
// =========================================================
let docRef = null;
let studyData = [];
let studyHistory = [];
let studyLog = [];
let profilePhoto = "";
let userName = "Victor Félix";
let currentChartDays = 7;
let currentCalendarDate = new Date();

let selectedNoteSubjectId = "subj_1";
let selectedNoteTopicId = "subj_1_top_1";
let pendingNoteAttachments = [];
let editalCollapsedMap = {};

// =========================================================
// INDEXED-DB LOCAL PARA ANEXOS PESADOS (PDFs E IMAGENS)
// =========================================================
let idbInstance = null;
function openAttachmentsDB() {
    return new Promise((resolve) => {
        if (idbInstance) return resolve(idbInstance);
        const req = indexedDB.open("BanestesNotesAttachmentsDB", 1);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains("attachments")) {
                db.createObjectStore("attachments", { keyPath: "id" });
            }
        };
        req.onsuccess = (e) => { idbInstance = e.target.result; resolve(idbInstance); };
        req.onerror = () => resolve(null);
    });
}

async function saveAttachmentToDB(attObj) {
    const db = await openAttachmentsDB();
    if (!db) return;
    return new Promise((resolve) => {
        const tx = db.transaction("attachments", "readwrite");
        tx.objectStore("attachments").put(attObj);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
    });
}

async function getAttachmentFromDB(id) {
    const db = await openAttachmentsDB();
    if (!db) return null;
    return new Promise((resolve) => {
        const tx = db.transaction("attachments", "readonly");
        const req = tx.objectStore("attachments").get(id);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
    });
}

async function deleteAttachmentFromDB(id) {
    const db = await openAttachmentsDB();
    if (!db) return;
    return new Promise((resolve) => {
        const tx = db.transaction("attachments", "readwrite");
        tx.objectStore("attachments").delete(id);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
    });
}

// =========================================================
// INICIALIZAÇÃO E AUTENTICAÇÃO FIREBASE
// =========================================================
function buildFreshBanestesData() {
    return DEFAULT_BANESTES_DATA.map((s, sIdx) => ({
        id: s.id,
        name: s.name,
        shortName: s.shortName,
        block: s.block,
        weight: s.weight,
        examQuestions: s.examQuestions,
        hours: 0,
        color: s.color,
        topics: s.topics.map((tName, tIdx) => ({
            id: `${s.id}_top_${tIdx + 1}`,
            name: tName,
            completed: false,
            qTotal: 0,
            qCorrect: 0,
            lastProgress: "",
            notes: []
        }))
    }));
}

function normalizeData() {
    if (!Array.isArray(studyData) || studyData.length === 0) {
        studyData = buildFreshBanestesData();
    }
    studyData.forEach((s, idx) => {
        s.hours = parseFloat(s.hours) || 0;
        if (!s.shortName) s.shortName = s.name.replace(/^\d+\s*\|\s*/, '').split(' ')[0];
        if (!s.color) s.color = idx % 2 === 0 ? "#7c5cc4" : "#17bebb";
        if (!Array.isArray(s.topics)) s.topics = [];
        s.topics.forEach((t, tIdx) => {
            if (!t.id) t.id = `${s.id}_top_${tIdx + 1}`;
            t.qTotal = parseInt(t.qTotal) || 0;
            t.qCorrect = parseInt(t.qCorrect) || 0;
            if (t.qCorrect > t.qTotal) t.qTotal = t.qCorrect;
            if (!Array.isArray(t.notes)) t.notes = [];
        });
    });
}

auth.onAuthStateChanged(async (user) => {
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    docRef = db.collection('app').doc(user.uid);
    await loadData();
    updateUI();
});

async function loadData() {
    const badge = document.getElementById('syncStatusBadge');
    try {
        const doc = await docRef.get();
        if (doc.exists) {
            const data = doc.data();
            studyData = data.studyData || buildFreshBanestesData();
            studyHistory = data.studyHistory || [];
            studyLog = data.studyLog || [];
            profilePhoto = data.profilePhoto || "";
            userName = data.userName || "Victor Félix";
        } else {
            studyData = buildFreshBanestesData();
            studyHistory = [];
            studyLog = [];
            await saveData();
        }
        if (badge) badge.innerHTML = `<i class="fa-solid fa-cloud-check"></i> Sincronizado no Firebase`;
    } catch (err) {
        console.error("Erro ao carregar do Firestore, usando backup local:", err);
        const localRaw = localStorage.getItem("banestes_firebase_fallback");
        if (localRaw) {
            const parsed = JSON.parse(localRaw);
            studyData = parsed.studyData || buildFreshBanestesData();
            studyHistory = parsed.studyHistory || [];
            studyLog = parsed.studyLog || [];
        } else {
            studyData = buildFreshBanestesData();
        }
        if (badge) badge.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Modo Local`;
    }
    normalizeData();
    if (profilePhoto) document.getElementById('sidebarAvatarImg').src = profilePhoto;
    document.getElementById('userNameDisplay').innerText = userName;
}

async function saveData() {
    const payload = { studyData, studyHistory, studyLog, profilePhoto, userName };
    localStorage.setItem("banestes_firebase_fallback", JSON.stringify(payload));
    if (docRef) {
        try {
            await docRef.set(payload);
            const badge = document.getElementById('syncStatusBadge');
            if (badge) badge.innerHTML = `<i class="fa-solid fa-cloud-check"></i> Salvo na Nuvem`;
        } catch (err) {
            console.error("Erro ao salvar no Firebase:", err);
        }
    }
    updateUI();
}

function logout() {
    auth.signOut().then(() => {
        window.location.href = 'login.html';
    });
}

// =========================================================
// CÁLCULOS E ESTATÍSTICAS
// =========================================================
function calcAcc(correct, total) {
    if (!total || total <= 0) return 0;
    return Math.round((correct / total) * 100);
}

function getBadgeClass(perc) {
    if (perc >= 80) return "bg-good";
    if (perc >= 60) return "bg-warn";
    return "bg-bad";
}

function getSubjectStats(subject) {
    let qTotal = 0, qCorrect = 0, completedTopics = 0, totalTopics = 0, notesCount = 0;
    subject.topics.forEach(t => {
        qTotal += (parseInt(t.qTotal) || 0);
        qCorrect += (parseInt(t.qCorrect) || 0);
        if (!t.id.startsWith("geral_")) {
            totalTopics++;
            if (t.completed) completedTopics++;
        }
        if (Array.isArray(t.notes)) notesCount += t.notes.length;
    });
    return {
        qTotal, qCorrect,
        acc: calcAcc(qCorrect, qTotal),
        completedTopics, totalTopics, notesCount
    };
}

// =========================================================
// NAVEGAÇÃO E ATUALIZAÇÃO DE TELA
// =========================================================
function showTab(tabId, btnEl) {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    const target = document.getElementById(tabId);
    if (target) target.classList.add("active");

    if (btnEl && btnEl.classList.contains("nav-tile")) {
        document.querySelectorAll(".nav-tile").forEach(b => b.classList.remove("active"));
        btnEl.classList.add("active");
    }
    if (tabId === "dashboard") setTimeout(() => { renderBarChart(); renderDonutChart(); }, 40);
}

function updateUI() {
    renderTopCards();
    renderHierarchyTree("dashboardHierarchyRoot", "all");
    renderQuestoesTab();
    renderNotesWorkspace();
    renderSelects();
    renderDirectSubjectHours();
    renderLogs();
    renderEdital();
    renderCalendar();
    renderBarChart();
    renderDonutChart();
}

function renderTopCards() {
    let totalQ = 0, totalC = 0, totalH = 0, totalComp = 0, totalTop = 0, totalNotes = 0;
    studyData.forEach(s => {
        totalH += parseFloat(s.hours) || 0;
        const st = getSubjectStats(s);
        totalQ += st.qTotal;
        totalC += st.qCorrect;
        totalComp += st.completedTopics;
        totalTop += st.totalTopics;
        totalNotes += st.notesCount;
    });

    document.getElementById("cardTotalQuestions").innerText = totalQ;
    document.getElementById("cardTotalCorrect").innerText = totalC;
    document.getElementById("cardAccuracy").innerText = `${calcAcc(totalC, totalQ)}%`;
    document.getElementById("cardTotalHours").innerText = `${totalH % 1 === 0 ? totalH : totalH.toFixed(1)}h`;
    document.getElementById("cardTotalNotes").innerText = totalNotes;
    const edPerc = totalTop > 0 ? Math.round((totalComp / totalTop) * 100) : 0;
    document.getElementById("cardEditalPerc").innerText = `${edPerc}%`;
    document.getElementById("cardEditalCount").innerText = `${totalComp}/${totalTop}`;
}

// =========================================================
// HIERARQUIA 3 NÍVEIS (GERAL > POR MATÉRIA > POR TÓPICO)
// =========================================================
function renderHierarchyTree(containerId, subjectFilter = "all") {
    const root = document.getElementById(containerId);
    if (!root) return;

    const openIds = new Set();
    root.querySelectorAll(".level2-subject-card.open").forEach(el => openIds.add(el.dataset.subjectId));

    let globalQ = 0, globalC = 0, globalH = 0;
    studyData.forEach(s => {
        globalH += parseFloat(s.hours) || 0;
        const st = getSubjectStats(s);
        globalQ += st.qTotal;
        globalC += st.qCorrect;
    });
    const globalAcc = calcAcc(globalC, globalQ);

    let html = `
        <div class="level1-summary-bar">
            <div>
                <span style="font-size:0.74rem; font-weight:700; text-transform:uppercase; color:var(--primary);">
                    <i class="fa-solid fa-trophy"></i> 1º NÍVEL • TOTAL GERAL ACUMULADO
                </span>
                <div style="font-size:1.05rem; font-weight:700; margin-top:3px;">
                    Edital Banestes — Técnico Bancário (9 Matérias)
                </div>
            </div>
            <div class="level1-metrics">
                <div class="level1-metric-item">
                    <span>Questões Resolvidas</span>
                    <strong>${globalQ}</strong>
                </div>
                <div class="level1-metric-item">
                    <span>Acertos Totais</span>
                    <strong style="color:var(--secondary);">${globalC}</strong>
                </div>
                <div class="level1-metric-item">
                    <span>Taxa de Acerto</span>
                    <strong>${globalAcc}%</strong>
                </div>
                <div class="level1-metric-item">
                    <span>Horas Totais</span>
                    <strong>${globalH % 1 === 0 ? globalH : globalH.toFixed(1)}h</strong>
                </div>
            </div>
        </div>
    `;

    const list = subjectFilter === "all" ? studyData : studyData.filter(s => s.id === subjectFilter);

    list.forEach((s, idx) => {
        const st = getSubjectStats(s);
        const hVal = parseFloat(s.hours) || 0;
        const isOpen = openIds.has(s.id) || (openIds.size === 0 && idx === 0 && containerId === "questoesHierarchyRoot");

        let topicsHtml = s.topics.map(t => {
            const tAcc = calcAcc(t.qCorrect, t.qTotal);
            const notesLen = Array.isArray(t.notes) ? t.notes.length : 0;
            return `
                <div class="level3-topic-row">
                    <div class="level3-topic-name ${t.completed ? 'done' : ''}">
                        <input type="checkbox" ${t.completed ? 'checked' : ''} onchange="toggleTopicCompleted('${s.id}', '${t.id}')" style="width:16px; height:16px; accent-color:var(--primary); cursor:pointer;">
                        <span>${escapeHtml(t.name)}</span>
                    </div>
                    <div class="level3-topic-metrics">
                        <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">Acertos:</span>
                        <input type="number" min="0" class="mini-q-input" value="${t.qCorrect || ''}" placeholder="0"
                            onchange="updateTopicQuestionField('${s.id}', '${t.id}', 'qCorrect', this.value)">
                        <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">de Questões:</span>
                        <input type="number" min="0" class="mini-q-input" value="${t.qTotal || ''}" placeholder="0"
                            onchange="updateTopicQuestionField('${s.id}', '${t.id}', 'qTotal', this.value)">
                        <span class="badge-pill ${getBadgeClass(tAcc)}">${tAcc}%</span>
                        <button class="btn btn-outline btn-sm" onclick="openTopicNotesFolder('${s.id}', '${t.id}')" title="Abrir pasta de anotações deste tópico">
                            <i class="fa-solid fa-folder-open"></i> ${notesLen}
                        </button>
                    </div>
                </div>
            `;
        }).join("");

        html += `
            <div class="level2-subject-card ${isOpen ? 'open' : ''}" data-subject-id="${s.id}">
                <div class="level2-subject-header" onclick="if(event.target.tagName !== 'INPUT' && event.target.tagName !== 'BUTTON') this.parentElement.classList.toggle('open')">
                    <div class="level2-subject-title">
                        <span class="subject-color-dot" style="background:${s.color};"></span>
                        <span>2º Nível: ${escapeHtml(s.name)}</span>
                        <span style="font-size:0.72rem; color:var(--text-muted); font-weight:600;">(Peso ${s.weight || 1})</span>
                    </div>
                    <div class="level2-stats">
                        <div class="stat-chip teal" onclick="event.stopPropagation();">
                            <i class="fa-regular fa-clock"></i> Horas:
                            <input type="number" step="0.5" min="0" class="inline-hours-input" value="${hVal}"
                                onchange="updateSubjectHoursDirect('${s.id}', this.value)">
                        </div>
                        <div class="stat-chip primary">
                            <i class="fa-solid fa-pen-to-square"></i> <strong>${st.qCorrect}/${st.qTotal}</strong> questões
                        </div>
                        <span class="badge-pill ${getBadgeClass(st.acc)}">${st.acc}%</span>
                        <i class="fa-solid fa-chevron-down" style="color:var(--text-muted); font-size:0.8rem;"></i>
                    </div>
                </div>
                <div class="level3-topics-wrap">
                    <div style="font-size:0.74rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:8px;">
                        <i class="fa-solid fa-turn-up fa-rotate-90"></i> 3º Nível • Questões Resolvidas por Tópico de ${escapeHtml(s.shortName)}
                    </div>
                    ${topicsHtml}
                </div>
            </div>
        `;
    });

    root.innerHTML = html;
}

function toggleAllHierarchy(containerId, expand) {
    const root = document.getElementById(containerId);
    if (!root) return;
    root.querySelectorAll(".level2-subject-card").forEach(c => {
        if (expand) c.classList.add("open");
        else c.classList.remove("open");
    });
}

// =========================================================
// ABA QUESTÕES
// =========================================================
function renderQuestoesTab() {
    const filterSel = document.getElementById("filterQuestoesSubject");
    if (filterSel) {
        const cur = filterSel.value || "all";
        filterSel.innerHTML = `<option value="all">Todas as 9 Matérias</option>` +
            studyData.map(s => `<option value="${s.id}">${escapeHtml(s.name)}</option>`).join("");
        filterSel.value = cur;
    }
    renderHierarchyTree("questoesHierarchyRoot", filterSel ? filterSel.value : "all");
}

function updateQuickQuestionTopics() {
    const sId = document.getElementById("qQuickSubject")?.value;
    const tSel = document.getElementById("qQuickTopic");
    if (!tSel) return;
    const subj = studyData.find(s => s.id === sId) || studyData[0];
    if (!subj) return;
    tSel.innerHTML = subj.topics.map(t => `<option value="${t.id}">${escapeHtml(t.name)}</option>`).join("");
}

function lancarQuestoesRapido() {
    const sId = document.getElementById("qQuickSubject").value;
    const tId = document.getElementById("qQuickTopic").value;
    const addTotal = parseInt(document.getElementById("qQuickTotal").value) || 0;
    const addCorrect = parseInt(document.getElementById("qQuickCorrect").value) || 0;

    if (!sId || !tId) return alert("Selecione a matéria e o tópico!");
    if (addTotal <= 0) return alert("Informe quantas questões você resolveu!");
    if (addCorrect < 0 || addCorrect > addTotal) return alert("O número de acertos não pode ser maior que o total resolvido!");

    const subj = studyData.find(s => s.id === sId);
    const topic = subj?.topics.find(t => t.id === tId);
    if (!topic) return;

    topic.qTotal = (parseInt(topic.qTotal) || 0) + addTotal;
    topic.qCorrect = (parseInt(topic.qCorrect) || 0) + addCorrect;

    document.getElementById("qQuickTotal").value = "";
    document.getElementById("qQuickCorrect").value = "";
    saveData();
}

function updateTopicQuestionField(sId, tId, field, rawVal) {
    const subj = studyData.find(s => s.id === sId);
    const topic = subj?.topics.find(t => t.id === tId);
    if (!topic) return;
    const val = Math.max(0, parseInt(rawVal) || 0);
    topic[field] = val;
    if (field === "qCorrect" && topic.qCorrect > topic.qTotal) topic.qTotal = topic.qCorrect;
    if (field === "qTotal" && topic.qCorrect > topic.qTotal) topic.qCorrect = topic.qTotal;
    saveData();
}

// =========================================================
// ABA ANOTAÇÕES (PASTAS POR MATÉRIA > TÓPICO + PDF/IMAGEM)
// =========================================================
function openTopicNotesFolder(sId, tId) {
    selectedNoteSubjectId = sId;
    selectedNoteTopicId = tId;
    const navBtn = document.querySelectorAll(".nav-tile")[2];
    showTab("anotacoesTab", navBtn);
    renderNotesWorkspace();
}

function renderNotesWorkspace() {
    if (!studyData.some(s => s.id === selectedNoteSubjectId)) {
        selectedNoteSubjectId = studyData[0]?.id || "";
    }
    const currentSubj = studyData.find(s => s.id === selectedNoteSubjectId);
    if (currentSubj && !currentSubj.topics.some(t => t.id === selectedNoteTopicId)) {
        selectedNoteTopicId = currentSubj.topics[0]?.id || "";
    }
    renderNotesFolderTree();
    renderSelectedTopicNotes();
}

function renderNotesFolderTree() {
    const treeEl = document.getElementById("notesFolderTree");
    if (!treeEl) return;
    const query = (document.getElementById("notesFolderSearch")?.value || "").toLowerCase().trim();

    let totalNotesAll = 0;
    studyData.forEach(s => s.topics.forEach(t => { totalNotesAll += (t.notes ? t.notes.length : 0); }));
    const badgeEl = document.getElementById("totalNotesCounterBadge");
    if (badgeEl) badgeEl.innerText = `${totalNotesAll} anotações`;

    let html = "";
    studyData.forEach(s => {
        const st = getSubjectStats(s);
        const filteredTopics = s.topics.filter(t =>
            !query || s.name.toLowerCase().includes(query) || t.name.toLowerCase().includes(query)
        );
        if (query && filteredTopics.length === 0) return;

        const isOpen = (s.id === selectedNoteSubjectId) || query.length > 0;

        const topicsHtml = filteredTopics.map(t => {
            const nCount = t.notes ? t.notes.length : 0;
            const isActive = (s.id === selectedNoteSubjectId && t.id === selectedNoteTopicId);
            return `
                <button class="folder-topic-btn ${isActive ? 'active' : ''}" onclick="selectNoteTopic('${s.id}', '${t.id}')">
                    <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                        <i class="fa-regular ${isActive ? 'fa-folder-open' : 'fa-file-lines'}"></i> ${escapeHtml(t.name)}
                    </span>
                    ${nCount > 0 ? `<span class="note-count-pill">${nCount}</span>` : ''}
                </button>
            `;
        }).join("");

        html += `
            <div class="folder-subject-block ${isOpen ? 'open' : ''}" id="folder_subj_${s.id}">
                <button class="folder-subject-btn" onclick="toggleFolderSubject('${s.id}')">
                    <span style="display:flex; align-items:center; gap:8px;">
                        <i class="fa-solid fa-folder" style="color:${s.color};"></i>
                        <span>${escapeHtml(s.shortName)}</span>
                    </span>
                    <span style="display:flex; align-items:center; gap:6px;">
                        <span class="note-count-pill">${st.notesCount}</span>
                        <i class="fa-solid fa-chevron-down" style="font-size:0.72rem; color:var(--text-muted);"></i>
                    </span>
                </button>
                <div class="folder-topics-sublist">
                    ${topicsHtml}
                </div>
            </div>
        `;
    });

    treeEl.innerHTML = html;
}

function toggleFolderSubject(sId) {
    const block = document.getElementById(`folder_subj_${sId}`);
    if (block) block.classList.toggle("open");
}

function selectNoteTopic(sId, tId) {
    selectedNoteSubjectId = sId;
    selectedNoteTopicId = tId;
    renderNotesFolderTree();
    renderSelectedTopicNotes();
}

function toggleNoteComposer() {
    const box = document.getElementById("noteComposerBox");
    if (box) box.classList.toggle("show");
}

function clearNoteComposer() {
    document.getElementById("noteTitleInput").value = "";
    document.getElementById("noteTextInput").value = "";
    document.getElementById("noteFilesInput").value = "";
    pendingNoteAttachments = [];
    renderPendingFilesPreview();
}

function handleNoteFilesSelect(input) {
    const files = Array.from(input.files || []);
    files.forEach(file => {
        const isImg = file.type.startsWith("image/");
        const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
        if (!isImg && !isPdf) return alert(`O arquivo "${file.name}" não é imagem nem PDF.`);

        const reader = new FileReader();
        reader.onload = (e) => {
            pendingNoteAttachments.push({
                id: "att_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
                name: file.name,
                mimeType: isPdf ? "application/pdf" : file.type,
                dataUrl: e.target.result
            });
            renderPendingFilesPreview();
        };
        reader.readAsDataURL(file);
    });
}

function renderPendingFilesPreview() {
    const wrap = document.getElementById("pendingFilesPreview");
    if (!wrap) return;
    wrap.innerHTML = pendingNoteAttachments.map((att, idx) => `
        <span class="pending-file-chip">
            <i class="fa-solid ${att.mimeType === 'application/pdf' ? 'fa-file-pdf' : 'fa-image'}"></i>
            ${escapeHtml(att.name)}
            <i class="fa-solid fa-xmark" style="cursor:pointer;" onclick="removePendingAttachment(${idx})"></i>
        </span>
    `).join("");
}

function removePendingAttachment(idx) {
    pendingNoteAttachments.splice(idx, 1);
    renderPendingFilesPreview();
}

async function saveNewNote() {
    const subj = studyData.find(s => s.id === selectedNoteSubjectId);
    const topic = subj?.topics.find(t => t.id === selectedNoteTopicId);
    if (!topic) return alert("Selecione uma matéria e um tópico na árvore à esquerda!");

    const title = document.getElementById("noteTitleInput").value.trim() || "Anotação de Estudo";
    const text = document.getElementById("noteTextInput").value.trim();

    if (!text && pendingNoteAttachments.length === 0) {
        return alert("Escreva uma anotação ou anexe pelo menos uma imagem ou PDF!");
    }

    const savedAttachmentsMeta = [];
    for (const att of pendingNoteAttachments) {
        await saveAttachmentToDB({
            id: att.id,
            name: att.name,
            mimeType: att.mimeType,
            dataUrl: att.dataUrl
        });
        savedAttachmentsMeta.push({
            id: att.id,
            name: att.name,
            mimeType: att.mimeType
        });
    }

    const now = new Date();
    const dateFormatted = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} às ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    if (!Array.isArray(topic.notes)) topic.notes = [];
    topic.notes.unshift({
        id: "note_" + Date.now(),
        title,
        text,
        createdAt: dateFormatted,
        attachments: savedAttachmentsMeta
    });

    clearNoteComposer();
    saveData();
}

async function renderSelectedTopicNotes() {
    const subj = studyData.find(s => s.id === selectedNoteSubjectId);
    const topic = subj?.topics.find(t => t.id === selectedNoteTopicId);
    const crumbEl = document.getElementById("notesBreadcrumb");
    const areaEl = document.getElementById("notesCardsArea");
    if (!crumbEl || !areaEl) return;

    if (!subj || !topic) {
        crumbEl.innerHTML = `<span class="subj-crumb">Selecione um tópico</span>`;
        areaEl.innerHTML = `<p style="color:var(--text-muted); padding:20px;">Escolha um tópico na árvore de pastas ao lado.</p>`;
        return;
    }

    crumbEl.innerHTML = `
        <span class="subj-crumb"><i class="fa-solid fa-folder-open"></i> ${escapeHtml(subj.name)}</span>
        <span class="topic-crumb">${escapeHtml(topic.name)}</span>
    `;

    const notes = topic.notes || [];
    if (notes.length === 0) {
        areaEl.innerHTML = `
            <div style="text-align:center; padding:45px 20px; color:var(--text-muted);">
                <i class="fa-regular fa-folder-open" style="font-size:2.6rem; color:var(--primary); opacity:0.6; margin-bottom:10px;"></i>
                <h3 style="color:var(--text-main); margin-bottom:6px;">Pasta vazia neste tópico</h3>
                <p style="font-size:0.85rem; margin-bottom:14px;">Adicione resumos escritos, imagens de mapas mentais ou arquivos PDF para este tópico do edital.</p>
                <button class="btn btn-sm" onclick="document.getElementById('noteComposerBox').classList.add('show'); document.getElementById('noteTitleInput').focus();">
                    <i class="fa-solid fa-plus"></i> Criar Primeira Anotação Aqui
                </button>
            </div>
        `;
        return;
    }

    let html = "";
    for (const note of notes) {
        let attHtml = "";
        if (Array.isArray(note.attachments) && note.attachments.length > 0) {
            let cards = "";
            for (const meta of note.attachments) {
                const stored = await getAttachmentFromDB(meta.id);
                const dataUrl = stored?.dataUrl || "";
                if (meta.mimeType === "application/pdf") {
                    cards += `
                        <div class="attachment-card">
                            <div class="attachment-pdf-box" onclick="openAttachmentModal('${meta.id}')">
                                <i class="fa-solid fa-file-pdf"></i>
                                <span style="font-size:0.78rem; font-weight:700; color:var(--text-main);">${escapeHtml(meta.name)}</span>
                                <small style="color:var(--text-muted);">Clique para ler o PDF</small>
                            </div>
                            <div class="attachment-bar">
                                <span><i class="fa-solid fa-file-pdf" style="color:var(--danger);"></i> ${escapeHtml(meta.name)}</span>
                                <a href="${dataUrl}" download="${escapeHtml(meta.name)}" style="color:var(--primary);"><i class="fa-solid fa-download"></i></a>
                            </div>
                        </div>
                    `;
                } else {
                    cards += `
                        <div class="attachment-card">
                            <img src="${dataUrl}" alt="${escapeHtml(meta.name)}" onclick="openAttachmentModal('${meta.id}')">
                            <div class="attachment-bar">
                                <span><i class="fa-solid fa-image" style="color:var(--secondary);"></i> ${escapeHtml(meta.name)}</span>
                                <a href="${dataUrl}" download="${escapeHtml(meta.name)}" style="color:var(--primary);"><i class="fa-solid fa-download"></i></a>
                            </div>
                        </div>
                    `;
                }
            }
            attHtml = `<div class="note-attachments-grid">${cards}</div>`;
        }

        html += `
            <div class="note-item-card">
                <div class="note-item-header">
                    <div>
                        <div class="note-item-title"><i class="fa-solid fa-thumbtack" style="color:var(--primary); margin-right:6px;"></i>${escapeHtml(note.title)}</div>
                        <div class="note-item-date"><i class="fa-regular fa-clock"></i> Salvo em ${note.createdAt}</div>
                    </div>
                    <button class="btn btn-danger btn-sm" onclick="deleteNote('${subj.id}', '${topic.id}', '${note.id}')" title="Excluir Anotação">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
                ${note.text ? `<div class="note-item-body">${escapeHtml(note.text)}</div>` : ''}
                ${attHtml}
            </div>
        `;
    }
    areaEl.innerHTML = html;
}

async function deleteNote(sId, tId, noteId) {
    if (!confirm("Deseja excluir esta anotação e seus anexos?")) return;
    const subj = studyData.find(s => s.id === sId);
    const topic = subj?.topics.find(t => t.id === tId);
    if (!topic || !Array.isArray(topic.notes)) return;

    const note = topic.notes.find(n => n.id === noteId);
    if (note && Array.isArray(note.attachments)) {
        for (const att of note.attachments) {
            await deleteAttachmentFromDB(att.id);
        }
    }
    topic.notes = topic.notes.filter(n => n.id !== noteId);
    saveData();
}

async function openAttachmentModal(attId) {
    const stored = await getAttachmentFromDB(attId);
    if (!stored) return alert("Arquivo não encontrado no armazenamento local deste navegador.");
    const modal = document.getElementById("attachmentModal");
    const title = document.getElementById("modalTitle");
    const body = document.getElementById("modalBodyContent");

    title.innerHTML = `<i class="fa-solid ${stored.mimeType === 'application/pdf' ? 'fa-file-pdf' : 'fa-image'}"></i> ${escapeHtml(stored.name)}`;
    if (stored.mimeType === "application/pdf") {
        body.innerHTML = `<iframe src="${stored.dataUrl}" style="width:100%; height:75vh; border:none; border-radius:10px;"></iframe>`;
    } else {
        body.innerHTML = `<img src="${stored.dataUrl}" style="max-width:100%; max-height:75vh; border-radius:10px;">`;
    }
    modal.classList.add("open");
}

function closeAttachmentModal() {
    document.getElementById("attachmentModal").classList.remove("open");
    document.getElementById("modalBodyContent").innerHTML = "";
}

// Suporte a colar imagem com Ctrl+V na aba de anotações
document.addEventListener("paste", (e) => {
    const sec = document.getElementById("anotacoesTab");
    if (!sec || !sec.classList.contains("active")) return;
    const items = e.clipboardData?.items || [];
    for (const item of items) {
        if (item.type.startsWith("image/")) {
            const file = item.getAsFile();
            if (file) {
                const reader = new FileReader();
                reader.onload = (ev) => {
                    document.getElementById("noteComposerBox").classList.add("show");
                    pendingNoteAttachments.push({
                        id: "att_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
                        name: `Print_${new Date().toLocaleTimeString().replace(/:/g, '-')}.png`,
                        mimeType: file.type,
                        dataUrl: ev.target.result
                    });
                    renderPendingFilesPreview();
                };
                reader.readAsDataURL(file);
            }
        }
    }
});

// =========================================================
// GRÁFICOS (COM MATÉRIA ESTUDADA NA BARRA DO GRÁFICO)
// =========================================================
function getSubjectsForDate(dateStr) {
    const names = [];
    studyLog.filter(l => l.date === dateStr).forEach(l => {
        const s = studyData.find(x => x.id === l.subjectId);
        const label = s ? s.shortName : (l.subjectShortName || "");
        if (label && !names.includes(label)) names.push(label);
    });
    const hRec = studyHistory.find(h => h.date === dateStr);
    if (hRec && Array.isArray(hRec.subjects)) {
        hRec.subjects.forEach(n => { if (n && !names.includes(n)) names.push(n); });
    }
    return names;
}

function setChartDays(days, btnEl) {
    currentChartDays = days;
    if (btnEl) {
        document.querySelectorAll("#chartDayButtons .pill-tab").forEach(b => b.classList.remove("active"));
        btnEl.classList.add("active");
    }
    renderBarChart();
}

const barSubjectLabelsPlugin = {
    id: "barSubjectLabelsPlugin",
    afterDatasetsDraw(chart) {
        const { ctx } = chart;
        const meta = chart.getDatasetMeta(0);
        const subjectsPerBar = chart.config.data.subjectsPerBar || [];
        ctx.save();
        meta.data.forEach((bar, index) => {
            const val = chart.data.datasets[0].data[index];
            if (!val || val <= 0) return;
            const subjList = subjectsPerBar[index] || [];
            const subjText = subjList.length > 0 ? subjList.join(" + ") : "Estudo";
            const x = bar.x;
            const yTop = bar.y;

            ctx.font = "bold 11px 'Helvetica Neue', Helvetica, Arial, sans-serif";
            ctx.textAlign = "center";
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--text-main").trim() || "#2c2e3e";
            ctx.fillText(`${val % 1 === 0 ? val : val.toFixed(1)}h`, x, yTop - 18);

            ctx.font = "bold 10px 'Helvetica Neue', Helvetica, Arial, sans-serif";
            ctx.fillStyle = "#7c5cc4";
            const maxChars = currentChartDays > 15 ? 8 : 16;
            const clipped = subjText.length > maxChars ? subjText.substring(0, maxChars - 1) + "…" : subjText;
            ctx.fillText(clipped, x, yTop - 5);
        });
        ctx.restore();
    }
};

function renderBarChart() {
    const canvas = document.getElementById("studyChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (window.myStudyBarChart) window.myStudyBarChart.destroy();

    const labels = [], dataHours = [], subjectsPerBar = [], bgColors = [];
    const daysNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    for (let i = currentChartDays - 1; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        labels.push(`${daysNames[d.getDay()]} ${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`);

        const rec = studyHistory.find(h => h.date === dateStr);
        dataHours.push(rec ? parseFloat(rec.hours) || 0 : 0);
        subjectsPerBar.push(getSubjectsForDate(dateStr));
        bgColors.push(i % 2 === 0 ? "#7c5cc4" : "#17bebb");
    }

    const maxVal = Math.max(...dataHours, 4);

    window.myStudyBarChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels,
            subjectsPerBar,
            datasets: [{
                label: "Horas Estudadas",
                data: dataHours,
                backgroundColor: bgColors,
                borderRadius: 999,
                borderSkipped: false,
                barPercentage: 0.56
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { top: 32 } },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        afterLabel: (context) => {
                            const sList = subjectsPerBar[context.dataIndex] || [];
                            return sList.length ? `Matérias do dia: ${sList.join(", ")}` : "Sem matéria especificada";
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, suggestedMax: maxVal + 1.5, grid: { color: "rgba(140, 144, 164, 0.12)" } },
                x: { grid: { display: false } }
            }
        },
        plugins: [barSubjectLabelsPlugin]
    });
}

function renderDonutChart() {
    const canvas = document.getElementById("hoursDonutChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (window.myHoursDonut) window.myHoursDonut.destroy();

    const active = studyData.filter(s => (parseFloat(s.hours) || 0) > 0);
    const totalH = studyData.reduce((acc, s) => acc + (parseFloat(s.hours) || 0), 0);
    document.getElementById("donutCenterHours").innerText = `${totalH % 1 === 0 ? totalH : totalH.toFixed(1)}h`;

    const labels = active.length ? active.map(s => s.shortName) : ["Sem horas"];
    const values = active.length ? active.map(s => parseFloat(s.hours) || 0) : [1];
    const colors = active.length ? active.map(s => s.color) : ["#e5e7eb"];

    window.myHoursDonut = new Chart(ctx, {
        type: "doughnut",
        data: { labels, datasets: [{ data: values, backgroundColor: colors, borderWidth: 2, cutout: "70%" }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });

    const mini = document.getElementById("subjectHoursMiniList");
    if (mini) {
        mini.innerHTML = studyData.map(s => {
            const h = parseFloat(s.hours) || 0;
            return `
                <div style="display:flex; justify-content:space-between; align-items:center; padding:5px 0; border-bottom:1px dashed var(--border-color); font-size:0.8rem;">
                    <span style="display:flex; align-items:center; gap:7px; font-weight:700;">
                        <span style="width:10px; height:10px; border-radius:3px; background:${s.color}; display:inline-block;"></span>
                        ${escapeHtml(s.shortName)}
                    </span>
                    <strong>${h % 1 === 0 ? h : h.toFixed(1)}h</strong>
                </div>
            `;
        }).join("");
    }
}

// =========================================================
// REGISTRO DE HORAS E CALENDÁRIO
// =========================================================
function renderSelects() {
    const opts = studyData.map(s => `<option value="${s.id}">${escapeHtml(s.name)}</option>`).join("");
    const selReg = document.getElementById("selectSubject");
    if (selReg) {
        const cur = selReg.value;
        selReg.innerHTML = opts;
        if (cur && studyData.some(s => s.id === cur)) selReg.value = cur;
        updateTopicSelect();
    }
    const selQuick = document.getElementById("qQuickSubject");
    if (selQuick) {
        const curQ = selQuick.value;
        selQuick.innerHTML = opts;
        if (curQ && studyData.some(s => s.id === curQ)) selQuick.value = curQ;
        updateQuickQuestionTopics();
    }
}

function updateTopicSelect() {
    const sId = document.getElementById("selectSubject")?.value;
    const tSel = document.getElementById("selectTopic");
    if (!tSel) return;
    const subj = studyData.find(s => s.id === sId) || studyData[0];
    if (!subj) return;
    tSel.innerHTML = `<option value="geral">Geral da Matéria</option>` +
        subj.topics.map(t => `<option value="${t.id}">${escapeHtml(t.name)}</option>`).join("");
}

function registerStudySession() {
    const dateInput = document.getElementById("studyDate").value;
    const hours = parseFloat(document.getElementById("studyHours").value) || 0;
    const sId = document.getElementById("selectSubject").value;
    const tId = document.getElementById("selectTopic").value;
    const obs = document.getElementById("sessionProgress").value.trim();
    const markDone = document.getElementById("sessionMarkCompleted").value === "yes";

    if (!dateInput) return alert("Escolha a data do estudo!");
    if (!sId) return alert("Escolha a matéria!");
    if (hours <= 0 && !markDone && !obs) return alert("Informe as horas estudadas!");

    const subj = studyData.find(s => s.id === sId);
    if (!subj) return;

    subj.hours = (parseFloat(subj.hours) || 0) + hours;

    if (tId !== "geral") {
        const top = subj.topics.find(t => t.id === tId);
        if (top) {
            if (markDone) { top.completed = true; top.lastProgress = "Concluído"; }
            else if (obs) top.lastProgress = obs;
        }
    }

    if (hours > 0) {
        let dayRec = studyHistory.find(h => h.date === dateInput);
        if (dayRec) {
            dayRec.hours = (parseFloat(dayRec.hours) || 0) + hours;
            if (!Array.isArray(dayRec.subjects)) dayRec.subjects = [];
            if (!dayRec.subjects.includes(subj.shortName)) dayRec.subjects.push(subj.shortName);
        } else {
            studyHistory.push({ date: dateInput, hours, subjects: [subj.shortName] });
        }
    }

    studyLog.push({
        id: "log_" + Date.now(),
        date: dateInput,
        subjectId: sId,
        subjectShortName: subj.shortName,
        topicId: tId,
        hours,
        progressStr: markDone ? "✅ Concluído" : obs
    });

    document.getElementById("studyHours").value = "";
    document.getElementById("sessionProgress").value = "";
    document.getElementById("sessionMarkCompleted").value = "no";
    saveData();
}

function updateSubjectHoursDirect(sId, val) {
    const subj = studyData.find(s => s.id === sId);
    if (!subj) return;
    subj.hours = Math.max(0, parseFloat(val) || 0);
    saveData();
}

function renderDirectSubjectHours() {
    const div = document.getElementById("directSubjectHoursList");
    if (!div) return;
    div.innerHTML = studyData.map(s => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:9px 0; border-bottom:1px solid var(--border-color);">
            <span style="font-weight:700; font-size:0.86rem;">
                <span style="display:inline-block; width:10px; height:10px; border-radius:3px; background:${s.color}; margin-right:7px;"></span>
                ${escapeHtml(s.name)}
            </span>
            <div style="display:flex; align-items:center; gap:6px;">
                <input type="number" step="0.5" min="0" class="inline-hours-input" value="${parseFloat(s.hours) || 0}"
                    onchange="updateSubjectHoursDirect('${s.id}', this.value)">
                <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">horas</span>
            </div>
        </div>
    `).join("");
}

function renderLogs() {
    const tbody = document.getElementById("registrarLogBody");
    if (!tbody) return;
    if (studyLog.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:20px; color:var(--text-muted);">Nenhuma sessão registrada ainda.</td></tr>`;
        return;
    }
    tbody.innerHTML = [...studyLog].sort((a, b) => b.date.localeCompare(a.date)).map(l => {
        const subj = studyData.find(s => s.id === l.subjectId);
        const top = subj?.topics.find(t => t.id === l.topicId);
        const [, m, d] = l.date.split("-");
        return `
            <tr>
                <td><strong>${d}/${m}</strong></td>
                <td><strong style="color:var(--primary);">${escapeHtml(subj ? subj.shortName : (l.subjectShortName || 'Matéria'))}</strong></td>
                <td>${escapeHtml(top ? top.name : 'Geral')}</td>
                <td>${l.hours > 0 ? l.hours + 'h' : '—'}</td>
                <td>${escapeHtml(l.progressStr || '—')}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deleteLog('${l.id}')"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        `;
    }).join("");
}

function deleteLog(logId) {
    const idx = studyLog.findIndex(l => l.id === logId);
    if (idx === -1) return;
    const log = studyLog[idx];
    const subj = studyData.find(s => s.id === log.subjectId);
    if (subj && log.hours > 0) subj.hours = Math.max(0, (parseFloat(subj.hours) || 0) - log.hours);
    const dayRec = studyHistory.find(h => h.date === log.date);
    if (dayRec && log.hours > 0) dayRec.hours = Math.max(0, dayRec.hours - log.hours);
    studyLog.splice(idx, 1);
    saveData();
}

function changeMonth(step) {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + step);
    renderCalendar();
}

function renderCalendar() {
    const grid = document.getElementById("calendarGrid");
    const title = document.getElementById("calendarMonthYear");
    if (!grid || !title) return;

    const y = currentCalendarDate.getFullYear();
    const m = currentCalendarDate.getMonth();
    const mNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    title.innerText = `${mNames[m]} ${y}`;

    let html = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(d => `<div class="calendar-day-header">${d}</div>`).join("");
    const firstDay = new Date(y, m, 1).getDay();
    const totalDays = new Date(y, m + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) html += `<div class="calendar-day empty"></div>`;
    for (let day = 1; day <= totalDays; day++) {
        const dStr = `${y}-${String(m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const rec = studyHistory.find(h => h.date === dStr);
        const h = rec ? parseFloat(rec.hours) || 0 : 0;
        const subjs = getSubjectsForDate(dStr);
        let heat = "";
        if (h >= 6) heat = "heat-4";
        else if (h >= 4) heat = "heat-3";
        else if (h >= 2) heat = "heat-2";
        else if (h > 0) heat = "heat-1";

        html += `
            <div class="calendar-day ${heat}">
                <div style="display:flex; justify-content:space-between;">
                    <strong>${day}</strong>
                    ${h > 0 ? `<strong>${h % 1 === 0 ? h : h.toFixed(1)}h</strong>` : ''}
                </div>
                <div style="font-size:0.65rem; font-weight:700; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                    ${subjs.join(", ")}
                </div>
            </div>
        `;
    }
    grid.innerHTML = html;
}

// =========================================================
// EDITAL VERTICALIZADO (COM BOTÃO EXPANDIR/RECOLHER)
// =========================================================
function toggleEditalSubjectCollapse(sId) {
    editalCollapsedMap[sId] = !editalCollapsedMap[sId];
    renderEdital();
}

function toggleAllEditalSubjects(expand) {
    studyData.forEach(s => { editalCollapsedMap[s.id] = !expand; });
    renderEdital();
}

function renderEdital() {
    const banner = document.getElementById("editalProgressBanner");
    const container = document.getElementById("editalStructure");
    if (!container) return;

    let totalT = 0, compT = 0;
    studyData.forEach(s => s.topics.forEach(t => {
        totalT++;
        if (t.completed) compT++;
    }));
    const perc = totalT > 0 ? Math.round((compT / totalT) * 100) : 0;

    if (banner) {
        banner.innerHTML = `
            <div style="background:var(--input-bg); padding:16px 20px; border-radius:14px; border:1px solid var(--border-color);">
                <div style="display:flex; justify-content:space-between; font-weight:700; margin-bottom:8px;">
                    <span><i class="fa-solid fa-graduation-cap" style="color:var(--primary);"></i> Progresso Teórico do Edital (${compT} de ${totalT} tópicos concluídos)</span>
                    <span style="color:var(--primary);">${perc}%</span>
                </div>
                <div style="height:10px; background:var(--border-color); border-radius:999px; overflow:hidden;">
                    <div style="width:${perc}%; height:100%; background:linear-gradient(90deg, var(--primary), var(--secondary));"></div>
                </div>
            </div>
        `;
    }

    container.innerHTML = studyData.map(s => {
        const st = getSubjectStats(s);
        const isCollapsed = !!editalCollapsedMap[s.id];

        const topicsHtml = s.topics.map(t => {
            const notesLen = t.notes ? t.notes.length : 0;
            return `
                <div class="level3-topic-row">
                    <div class="level3-topic-name ${t.completed ? 'done' : ''}">
                        <input type="checkbox" ${t.completed ? 'checked' : ''} onchange="toggleTopicCompleted('${s.id}', '${t.id}')" style="width:17px; height:17px; accent-color:var(--primary); cursor:pointer;">
                        <div>
                            <span>${escapeHtml(t.name)}</span>
                            <div style="margin-top:3px; display:flex; gap:6px; flex-wrap:wrap;">
                                <span style="font-size:0.7rem; background:var(--input-bg); border:1px solid var(--border-color); padding:2px 8px; border-radius:999px; color:var(--text-muted);">
                                    <i class="fa-solid fa-folder"></i> ${notesLen} anotações
                                </span>
                                ${t.qTotal > 0 ? `<span style="font-size:0.7rem; background:var(--primary-soft); color:var(--primary); padding:2px 8px; border-radius:999px; font-weight:700;">${t.qCorrect}/${t.qTotal} (${calcAcc(t.qCorrect, t.qTotal)}%)</span>` : ''}
                            </div>
                        </div>
                    </div>
                    <div style="display:flex; gap:6px;">
                        <button class="btn btn-outline btn-sm" onclick="openTopicNotesFolder('${s.id}', '${t.id}')" title="Abrir pasta de anotações">
                            <i class="fa-solid fa-folder-plus"></i> Notas
                        </button>
                        <button class="btn btn-warn btn-sm" onclick="renameTopic('${s.id}', '${t.id}')"><i class="fa-solid fa-pen"></i></button>
                        <button class="btn btn-danger btn-sm" onclick="deleteTopic('${s.id}', '${t.id}')"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            `;
        }).join("");

        return `
            <div class="panel-card" style="border-left: 5px solid ${s.color}; margin-bottom:16px; padding: 18px 22px;">
                <div class="panel-header" style="margin-bottom:${isCollapsed ? '0' : '12px'}; cursor:pointer;" onclick="if(event.target.tagName !== 'BUTTON' && event.target.tagName !== 'I') toggleEditalSubjectCollapse('${s.id}')">
                    <div>
                        <h3 style="font-size:1rem;">${escapeHtml(s.name)}</h3>
                        <span style="font-size:0.76rem; color:var(--text-muted);">
                            Peso ${s.weight || 1} • ${s.examQuestions || 5} questões na prova • ${s.hours || 0}h estudadas • ${st.qTotal} questões resolvidas (${st.completedTopics}/${st.totalTopics} tópicos)
                        </span>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <button class="btn btn-outline btn-sm" onclick="toggleEditalSubjectCollapse('${s.id}')" title="${isCollapsed ? 'Expandir Tópicos' : 'Recolher Tópicos'}">
                            <i class="fa-solid ${isCollapsed ? 'fa-chevron-down' : 'fa-chevron-up'}"></i>
                            ${isCollapsed ? `Expandir (${s.topics.length})` : 'Recolher'}
                        </button>
                        <button class="btn btn-warn btn-sm" onclick="renameSubject('${s.id}')" title="Renomear Matéria"><i class="fa-solid fa-pen"></i></button>
                        <button class="btn btn-danger btn-sm" onclick="deleteSubject('${s.id}')" title="Excluir Matéria"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
                <div style="display:${isCollapsed ? 'none' : 'block'};">
                    <div style="display:flex; gap:8px; margin-bottom:12px;">
                        <input type="text" id="newTopic_${s.id}" placeholder="Adicionar tópico extra..." onkeypress="if(event.key==='Enter') addTopic('${s.id}')">
                        <button class="btn btn-outline btn-sm" onclick="addTopic('${s.id}')"><i class="fa-solid fa-plus"></i> Tópico</button>
                    </div>
                    <div>${topicsHtml}</div>
                </div>
            </div>
        `;
    }).join("");
}

function toggleTopicCompleted(sId, tId) {
    const subj = studyData.find(s => s.id === sId);
    const top = subj?.topics.find(t => t.id === tId);
    if (top) { top.completed = !top.completed; saveData(); }
}

function addSubject() {
    const inp = document.getElementById("newSubjectName");
    const name = inp.value.trim();
    if (!name) return alert("Digite o nome da matéria!");
    studyData.push({
        id: "subj_" + Date.now(), name, shortName: name.split(" ")[0].substring(0, 12),
        block: "Extra", weight: 1, examQuestions: 5, hours: 0, color: "#7c5cc4", topics: []
    });
    inp.value = "";
    saveData();
}

function renameSubject(sId) {
    const s = studyData.find(x => x.id === sId);
    if (!s) return;
    const nv = prompt("Novo nome da matéria:", s.name);
    if (nv && nv.trim()) { s.name = nv.trim(); saveData(); }
}

function deleteSubject(sId) {
    if (!confirm("Deseja excluir esta matéria?")) return;
    studyData = studyData.filter(s => s.id !== sId);
    saveData();
}

function addTopic(sId) {
    const inp = document.getElementById(`newTopic_${sId}`);
    const name = inp.value.trim();
    if (!name) return;
    const subj = studyData.find(s => s.id === sId);
    if (subj) {
        subj.topics.push({
            id: `${sId}_top_${Date.now()}`, name, completed: false, qTotal: 0, qCorrect: 0, lastProgress: "", notes: []
        });
        inp.value = "";
        saveData();
    }
}

function renameTopic(sId, tId) {
    const s = studyData.find(x => x.id === sId);
    const t = s?.topics.find(x => x.id === tId);
    if (!t) return;
    const nv = prompt("Novo nome do tópico:", t.name);
    if (nv && nv.trim()) { t.name = nv.trim(); saveData(); }
}

function deleteTopic(sId, tId) {
    if (!confirm("Excluir este tópico?")) return;
    const s = studyData.find(x => x.id === sId);
    if (s) { s.topics = s.topics.filter(t => t.id !== tId); saveData(); }
}

// =========================================================
// TEMA, PERFIL E UTILITÁRIOS
// =========================================================
function alternarTema() {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("banestes_theme", next);
    document.getElementById("themeToggleBtn").innerHTML = next === "dark" ? `<i class="fa-solid fa-sun"></i>` : `<i class="fa-solid fa-moon"></i>`;
    renderBarChart();
}

function updateThemeColor(cssVar, val) {
    document.documentElement.style.setProperty(cssVar, val);
}

function changeRootFontSize(px) {
    document.documentElement.style.setProperty("--base-font-size", px + "px");
}

function resetThemeColors() {
    document.documentElement.style.setProperty("--primary", "#7c5cc4");
    document.documentElement.style.setProperty("--secondary", "#17bebb");
}

function editarNomeUsuario() {
    const nv = prompt("Como deseja exibir seu nome no painel?", userName);
    if (nv && nv.trim()) {
        userName = nv.trim();
        document.getElementById("userNameDisplay").innerText = userName;
        saveData();
    }
}

function handlePhotoUpload(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 250; canvas.height = 250;
            canvas.getContext("2d").drawImage(img, 0, 0, 250, 250);
            profilePhoto = canvas.toDataURL("image/jpeg", 0.85);
            document.getElementById("sidebarAvatarImg").src = profilePhoto;
            saveData();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function exportBackup() {
    const blob = new Blob([JSON.stringify({ studyData, studyHistory, studyLog }, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "backup_estudos_banestes.json";
    a.click();
}

function resetToDefaultBanestes() {
    if (!confirm("Zerar todas as estatísticas e restaurar o edital limpo do Banestes?")) return;
    studyData = buildFreshBanestesData();
    studyHistory = [];
    studyLog = [];
    saveData();
}

function escapeHtml(str) {
    const d = document.createElement("div");
    d.innerText = str || "";
    return d.innerHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("banestes_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    const btn = document.getElementById("themeToggleBtn");
    if (btn) btn.innerHTML = savedTheme === "dark" ? `<i class="fa-solid fa-sun"></i>` : `<i class="fa-solid fa-moon"></i>`;

    const d = new Date();
    const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const dateInp = document.getElementById("studyDate");
    if (dateInp) dateInp.value = today;
});