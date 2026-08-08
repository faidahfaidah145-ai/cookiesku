/* =========================================
   COOKIEKU - SCRIPT & AUDIO SYNTHESIZER
========================================= */

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
    } 
    else if (type === 'correct') {
        const notes = [587.33, 659.25, 880];
        notes.forEach((freq, i) => {
            const noteOsc = audioCtx.createOscillator();
            const noteGain = audioCtx.createGain();
            noteOsc.type = 'triangle';
            noteOsc.frequency.setValueAtTime(freq, now + i * 0.1);
            noteGain.gain.setValueAtTime(0.25, now + i * 0.1);
            noteGain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.2);
            noteOsc.connect(noteGain);
            noteGain.connect(audioCtx.destination);
            noteOsc.start(now + i * 0.1);
            noteOsc.stop(now + i * 0.1 + 0.2);
        });
    } 
    else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(140, now + 0.3);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } 
    else if (type === 'tick') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(900, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
    } 
    else if (type === 'finish') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
            const noteOsc = audioCtx.createOscillator();
            const noteGain = audioCtx.createGain();
            noteOsc.type = 'sine';
            noteOsc.frequency.setValueAtTime(freq, now + i * 0.12);
            noteGain.gain.setValueAtTime(0.3, now + i * 0.12);
            noteGain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.12 + 0.3);
            noteOsc.connect(noteGain);
            noteGain.connect(audioCtx.destination);
            noteOsc.start(now + i * 0.12);
            noteOsc.stop(now + i * 0.12 + 0.3);
        });
    }
}

/* ================= DATABASE SOAL ================= */
const questions = [
    // KELAS 10
    { id: 1, kelas: "10", kategori: "Pengetahuan Umum", question: "Planet manakah yang dikenal sebagai Planet Merah?", answers: ["Venus", "Mars", "Jupiter", "Saturnus"], correct: 1 },
    { id: 2, kelas: "10", kategori: "Sains", question: "Organ tubuh manusia yang berfungsi memompa darah adalah...", answers: ["Paru-paru", "Ginjal", "Jantung", "Hati"], correct: 2 },
    { id: 3, kelas: "10", kategori: "Pengetahuan Umum", question: "Benua terbesar di dunia adalah...", answers: ["Afrika", "Eropa", "Asia", "Amerika"], correct: 2 },
    { id: 4, kelas: "10", kategori: "Sains", question: "Simbol kimia untuk oksigen adalah...", answers: ["O", "Ox", "C", "H"], correct: 0 },
    { id: 5, kelas: "10", kategori: "Pengetahuan Umum", question: "Ibukota Indonesia adalah...", answers: ["Bandung", "Jakarta", "Surabaya", "Medan"], correct: 1 },
    { id: 6, kelas: "10", kategori: "Sains", question: "Penyebab utama terjadinya perubahan musim di Bumi adalah...", answers: ["Rotasi bumi", "Revolusi bumi dan kemiringan poros", "Gerhana matahari", "Aktivitas angin"], correct: 1 },
    
    // KELAS 11
    { id: 7, kelas: "11", kategori: "Sains", question: "Satuan SI untuk gaya adalah...", answers: ["Joule", "Newton", "Watt", "Pascal"], correct: 1 },
    { id: 8, kelas: "11", kategori: "Sains", question: "Proses perubahan zat dari cair menjadi gas disebut...", answers: ["Mencair", "Membeku", "Menguap", "Mengembun"], correct: 2 },
    { id: 9, kelas: "11", kategori: "Pengetahuan Umum", question: "Bahasa resmi negara Jepang adalah...", answers: ["Korea", "Mandarin", "Jepang", "Thai"], correct: 2 },
    { id: 10, kelas: "11", kategori: "Sains", question: "Gas yang paling banyak terdapat di atmosfer Bumi adalah...", answers: ["Oksigen", "Nitrogen", "Karbon dioksida", "Hidrogen"], correct: 1 },
    { id: 11, kelas: "11", kategori: "Pengetahuan Umum", question: "Lambang negara Indonesia adalah...", answers: ["Garuda Pancasila", "Burung Elang", "Rajawali", "Cendrawasih"], correct: 0 },
    { id: 12, kelas: "11", kategori: "Sains", question: "Hormon yang mengatur kadar gula dalam darah manusia adalah...", answers: ["Adrenalin", "Insulin", "Estrogen", "Testosteron"], correct: 1 },

    // KELAS 12
    { id: 13, kelas: "12", kategori: "Sains", question: "Rumus kimia air adalah...", answers: ["CO₂", "O₂", "H₂O", "NaCl"], correct: 2 },
    { id: 14, kelas: "12", kategori: "Sains", question: "Bagian sel yang mengatur seluruh aktivitas sel adalah...", answers: ["Ribosom", "Nukleus", "Membran sel", "Mitokondria"], correct: 1 },
    { id: 15, kelas: "12", kategori: "Pengetahuan Umum", question: "Planet terbesar dalam tata surya adalah...", answers: ["Bumi", "Saturnus", "Jupiter", "Neptunus"], correct: 2 },
    { id: 16, kelas: "12", kategori: "Sains", question: "Energi yang dimiliki benda karena gerakannya disebut energi...", answers: ["Potensial", "Kinetik", "Kimia", "Nuklir"], correct: 1 },
    { id: 17, kelas: "12", kategori: "Pengetahuan Umum", question: "Proklamasi Kemerdekaan Indonesia dibacakan pada tahun...", answers: ["1942", "1945", "1949", "1950"], correct: 1 },
    { id: 18, kelas: "12", kategori: "Sains", question: "Hukum Newton II menyatakan hubungan antara gaya, massa, dan...", answers: ["Kecepatan", "Percepatan", "Jarak", "Waktu"], correct: 1 }
];

/* ================= ELEMENT HTML ================= */
const homeScreen = document.getElementById("homeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");

const questionNumber = document.getElementById("questionNumber");
const scoreDisplay = document.getElementById("scoreDisplay");
const progressFill = document.getElementById("progressFill");

const timerElement = document.getElementById("timer");
const feedback = document.getElementById("feedback");
const categoryBadge = document.getElementById("categoryBadge");

const finalScore = document.getElementById("finalScore");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const totalCount = document.getElementById("totalCount");

const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");

const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn");
const quitBtn = document.getElementById("quitBtn");

/* ================= GAME VARIABLES ================= */
let selectedClass = "10";
let selectedCategory = "Semua";
let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timer;
let timeLeft = 20;
let answered = false;

/* ================= PILIH KELAS & KATEGORI ================= */
document.querySelectorAll(".class-btn").forEach(button => {
    button.addEventListener("click", () => {
        playSound('click');
        document.querySelectorAll(".class-btn").forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedClass = button.dataset.class;
    });
});

document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", () => {
        playSound('click');
        document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedCategory = button.dataset.category;
    });
});

/* ================= MULAI & SHOW QUIZ ================= */
startBtn.addEventListener("click", () => {
    playSound('click');
    startQuiz();
});

function startQuiz() {
    quizQuestions = questions.filter(question => {
        const classMatch = question.kelas === selectedClass;
        const categoryMatch = selectedCategory === "Semua" || question.kategori === selectedCategory;
        return classMatch && categoryMatch;
    });

    if (quizQuestions.length === 0) {
        alert("Belum ada soal untuk pilihan tersebut 😭");
        return;
    }

    quizQuestions.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    showScreen(quizScreen);
    showQuestion();
}

function showQuestion() {
    clearInterval(timer);
    answered = false;
    feedback.textContent = "";
    nextBtn.style.display = "none";

    const question = quizQuestions[currentQuestion];

    questionNumber.textContent = `Soal ${currentQuestion + 1} / ${quizQuestions.length}`;
    scoreDisplay.textContent = `⭐ ${score}`;
    categoryBadge.textContent = question.kategori;
    questionText.textContent = question.question;

    answersContainer.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "answer-btn";
        button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
        button.addEventListener("click", () => checkAnswer(index, button));
        answersContainer.appendChild(button);
    });

    const progress = (currentQuestion / quizQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;

    startTimer();
}

/* ================= TIMER ================= */
function startTimer() {
    timeLeft = 20;
    timerElement.textContent = `⏱️ ${timeLeft}`;

    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `⏱️ ${timeLeft}`;

        if (timeLeft <= 5 && timeLeft > 0) {
            playSound('tick');
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            timeOut();
        }
    }, 1000);
}

/* ================= CEK JAWABAN ================= */
function checkAnswer(selectedIndex, selectedButton) {
    if (answered) return;
    answered = true;
    clearInterval(timer);

    const question = quizQuestions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(button => button.disabled = true);

    if (selectedIndex === question.correct) {
        playSound('correct');
        selectedButton.classList.add("correct");
        feedback.textContent = "🎉 Benar! Cookie bangga sama kamu! 🍪";
        score += 10;
        correctAnswers++;
    } else {
        playSound('wrong');
        selectedButton.classList.add("wrong");
        buttons[question.correct].classList.add("correct");
        feedback.textContent = `💡 Belum tepat! Jawaban yang benar adalah ${question.answers[question.correct]}`;
        wrongAnswers++;
    }

    scoreDisplay.textContent = `⭐ ${score}`;
    nextBtn.style.display = "block";
}

function timeOut() {
    if (answered) return;
    answered = true;
    playSound('wrong');

    const question = quizQuestions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(button => button.disabled = true);
    buttons[question.correct].classList.add("correct");

    feedback.textContent = `⏰ Waktu habis! Jawabannya: ${question.answers[question.correct]}`;
    wrongAnswers++;
    nextBtn.style.display = "block";
}

/* ================= NAVIGASI & SELESAI ================= */
nextBtn.addEventListener("click", () => {
    playSound('click');
    currentQuestion++;
    if (currentQuestion >= quizQuestions.length) {
        finishQuiz();
    } else {
        showQuestion();
    }
});

function finishQuiz() {
    clearInterval(timer);
    playSound('finish');
    progressFill.style.width = "100%";

    const total = quizQuestions.length;
    const percentage = Math.round((correctAnswers / total) * 100);

    finalScore.textContent = percentage;
    correctCount.textContent = correctAnswers;
    wrongCount.textContent = wrongAnswers;
    totalCount.textContent = total;

    if (percentage >= 90) {
        resultTitle.textContent = "Gila, kamu jago banget! 🔥";
        resultDescription.textContent = "Cookie sampai bangga banget sama kamu! 🍪✨";
    } else if (percentage >= 70) {
        resultTitle.textContent = "Hebat! 🌟";
        resultDescription.textContent = "Pengetahuanmu sudah bagus. Tinggal sedikit lagi!";
    } else if (percentage >= 50) {
        resultTitle.textContent = "Lumayan! 💪";
        resultDescription.textContent = "Jangan menyerah. Yuk belajar dan coba lagi!";
    } else {
        resultTitle.textContent = "Semangat! 🍪";
        resultDescription.textContent = "Belum berhasil bukan berarti gagal. Coba lagi ya!";
    }

    showScreen(resultScreen);
}

restartBtn.addEventListener("click", () => {
    playSound('click');
    startQuiz();
});

homeBtn.addEventListener("click", () => {
    playSound('click');
    clearInterval(timer);
    showScreen(homeScreen);
});

quitBtn.addEventListener("click", () => {
    playSound('click');
    clearInterval(timer);
    showScreen(homeScreen);
});

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(item => item.classList.remove("active"));
    screen.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}
