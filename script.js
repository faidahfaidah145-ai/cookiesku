/* =========================================================
   COOKIEKU 2.0
   QUIZ ENGINE + BANK SOAL + SOUND
========================================================= */


/* =========================================================
   BANK SOAL
========================================================= */

const questions = [

    /* =====================================================
       KELAS X — MATEMATIKA
    ===================================================== */

    {
        id: 1,
        kelas: "10",
        mapel: "Matematika",
        kategori: "Sains",
        question: "Jika 2³ × 2² = ...",
        answers: ["16", "32", "64", "128"],
        correct: 1
    },

    {
        id: 2,
        kelas: "10",
        mapel: "Matematika",
        kategori: "Sains",
        question: "Hasil dari √49 adalah...",
        answers: ["6", "7", "8", "9"],
        correct: 1
    },

    {
        id: 3,
        kelas: "10",
        mapel: "Matematika",
        kategori: "Sains",
        question: "Jika x + 5 = 12, nilai x adalah...",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },

    {
        id: 4,
        kelas: "10",
        mapel: "Matematika",
        kategori: "Sains",
        question: "Bentuk sederhana dari 3² adalah...",
        answers: ["6", "9", "12", "18"],
        correct: 1
    },

    {
        id: 5,
        kelas: "10",
        mapel: "Matematika",
        kategori: "Sains",
        question: "Nilai dari 5 × 4 + 10 adalah...",
        answers: ["20", "25", "30", "35"],
        correct: 2
    },


    /* =====================================================
       KELAS X — BIOLOGI
    ===================================================== */

    {
        id: 6,
        kelas: "10",
        mapel: "Biologi",
        kategori: "Sains",
        question: "Unit struktural dan fungsional terkecil makhluk hidup adalah...",
        answers: [
            "Jaringan",
            "Organ",
            "Sel",
            "Sistem organ"
        ],
        correct: 2
    },

    {
        id: 7,
        kelas: "10",
        mapel: "Biologi",
        kategori: "Sains",
        question: "Organ yang berfungsi melakukan fotosintesis pada tumbuhan adalah...",
        answers: [
            "Akar",
            "Batang",
            "Kloroplas",
            "Bunga"
        ],
        correct: 2
    },

    {
        id: 8,
        kelas: "10",
        mapel: "Biologi",
        kategori: "Sains",
        question: "Makhluk hidup yang tidak memiliki membran inti disebut...",
        answers: [
            "Eukariotik",
            "Prokariotik",
            "Multiseluler",
            "Autotrof"
        ],
        correct: 1
    },

    {
        id: 9,
        kelas: "10",
        mapel: "Biologi",
        kategori: "Sains",
        question: "Proses tumbuhan membuat makanan menggunakan cahaya disebut...",
        answers: [
            "Respirasi",
            "Transpirasi",
            "Fotosintesis",
            "Ekskresi"
        ],
        correct: 2
    },

    {
        id: 10,
        kelas: "10",
        mapel: "Biologi",
        kategori: "Sains",
        question: "Organel yang dikenal sebagai tempat respirasi sel adalah...",
        answers: [
            "Ribosom",
            "Mitokondria",
            "Nukleus",
            "Vakuola"
        ],
        correct: 1
    },


    /* =====================================================
       KELAS X — FISIKA
    ===================================================== */

    {
        id: 11,
        kelas: "10",
        mapel: "Fisika",
        kategori: "Sains",
        question: "Satuan SI untuk panjang adalah...",
        answers: [
            "Kilogram",
            "Sekon",
            "Meter",
            "Newton"
        ],
        correct: 2
    },

    {
        id: 12,
        kelas: "10",
        mapel: "Fisika",
        kategori: "Sains",
        question: "Besaran yang memiliki nilai dan arah disebut...",
        answers: [
            "Skalar",
            "Vektor",
            "Pokok",
            "Turunan"
        ],
        correct: 1
    },

    {
        id: 13,
        kelas: "10",
        mapel: "Fisika",
        kategori: "Sains",
        question: "Satuan SI untuk waktu adalah...",
        answers: [
            "Menit",
            "Jam",
            "Sekon",
            "Hari"
        ],
        correct: 2
    },

    {
        id: 14,
        kelas: "10",
        mapel: "Fisika",
        kategori: "Sains",
        question: "Alat untuk mengukur suhu disebut...",
        answers: [
            "Barometer",
            "Termometer",
            "Higrometer",
            "Amperemeter"
        ],
        correct: 1
    },

    {
        id: 15,
        kelas: "10",
        mapel: "Fisika",
        kategori: "Sains",
        question: "Satuan SI untuk massa adalah...",
        answers: [
            "Gram",
            "Kilogram",
            "Newton",
            "Joule"
        ],
        correct: 1
    },


    /* =====================================================
       KELAS X — KIMIA
    ===================================================== */

    {
        id: 16,
        kelas: "10",
        mapel: "Kimia",
        kategori: "Sains",
        question: "Lambang kimia untuk oksigen adalah...",
        answers: ["O", "Ox", "C", "Og"],
        correct: 0
    },

    {
        id: 17,
        kelas: "10",
        mapel: "Kimia",
        kategori: "Sains",
        question: "Rumus kimia air adalah...",
        answers: ["CO₂", "O₂", "H₂O", "NaCl"],
        correct: 2
    },

    {
        id: 18,
        kelas: "10",
        mapel: "Kimia",
        kategori: "Sains",
        question: "Partikel penyusun atom yang bermuatan negatif adalah...",
        answers: [
            "Proton",
            "Neutron",
            "Elektron",
            "Nukleon"
        ],
        correct: 2
    },

    {
        id: 19,
        kelas: "10",
        mapel: "Kimia",
        kategori: "Sains",
        question: "Nomor atom menunjukkan jumlah...",
        answers: [
            "Neutron",
            "Proton",
            "Kulit",
            "Massa"
        ],
        correct: 1
    },

    {
        id: 20,
        kelas: "10",
        mapel: "Kimia",
        kategori: "Sains",
        question: "Zat yang memiliki pH kurang dari 7 bersifat...",
        answers: [
            "Basa",
            "Netral",
            "Asam",
            "Garam"
        ],
        correct: 2
    },


    /* =====================================================
       KELAS XI — FISIKA
    ===================================================== */

    {
        id: 21,
        kelas: "11",
        mapel: "Fisika",
        kategori: "Sains",
        question: "Satuan SI untuk gaya adalah...",
        answers: [
            "Joule",
            "Newton",
            "Watt",
            "Pascal"
        ],
        correct: 1
    },

    {
        id: 22,
        kelas: "11",
        mapel: "Fisika",
        kategori: "Sains",
        question: "Energi yang dimiliki benda karena geraknya disebut energi...",
        answers: [
            "Potensial",
            "Kinetik",
            "Kimia",
            "Nuklir"
        ],
        correct: 1
    },

    {
        id: 23,
        kelas: "11",
        mapel: "Fisika",
        kategori: "Sains",
        question: "Rumus umum energi kinetik adalah...",
        answers: [
            "mgh",
            "½mv²",
            "F/s",
            "m/v"
        ],
        correct: 1
    },

    {
        id: 24,
        kelas: "11",
        mapel: "Fisika",
        kategori: "Sains",
        question: "Perubahan energi dari listrik menjadi cahaya terjadi pada...",
        answers: [
            "Lampu",
            "Kipas",
            "Setrika",
            "Kulkas"
        ],
        correct: 0
    },

    {
        id: 25,
        kelas: "11",
        mapel: "Fisika",
        kategori: "Sains",
        question: "Satuan SI untuk energi adalah...",
        answers: [
            "Newton",
            "Watt",
            "Joule",
            "Volt"
        ],
        correct: 2
    },


    /* =====================================================
       KELAS XI — BIOLOGI
    ===================================================== */

    {
        id: 26,
        kelas: "11",
        mapel: "Biologi",
        kategori: "Sains",
        question: "Organ yang berfungsi memompa darah adalah...",
        answers: [
            "Paru-paru",
            "Ginjal",
            "Jantung",
            "Hati"
        ],
        correct: 2
    },

    {
        id: 27,
        kelas: "11",
        mapel: "Biologi",
        kategori: "Sains",
        question: "Tempat pertukaran gas pada paru-paru adalah...",
        answers: [
            "Bronkus",
            "Trakea",
            "Alveolus",
            "Laring"
        ],
        correct: 2
    },

    {
        id: 28,
        kelas: "11",
        mapel: "Biologi",
        kategori: "Sains",
        question: "Sel darah merah disebut...",
        answers: [
            "Leukosit",
            "Eritrosit",
            "Trombosit",
            "Limfosit"
        ],
        correct: 1
    },

    {
        id: 29,
        kelas: "11",
        mapel: "Biologi",
        kategori: "Sains",
        question: "Bagian sel yang mengatur aktivitas sel adalah...",
        answers: [
            "Ribosom",
            "Nukleus",
            "Vakuola",
            "Dinding sel"
        ],
        correct: 1
    },

    {
        id: 30,
        kelas: "11",
        mapel: "Biologi",
        kategori: "Sains",
        question: "Protein dalam darah yang membantu mengangkut oksigen adalah...",
        answers: [
            "Hemoglobin",
            "Insulin",
            "Keratin",
            "Kolagen"
        ],
        correct: 0
    },


    /* =====================================================
       KELAS XI — KIMIA
    ===================================================== */

    {
        id: 31,
        kelas: "11",
        mapel: "Kimia",
        kategori: "Sains",
        question: "Ikatan yang terbentuk karena serah terima elektron disebut...",
        answers: [
            "Ikatan ion",
            "Ikatan kovalen",
            "Ikatan logam",
            "Ikatan hidrogen"
        ],
        correct: 0
    },

    {
        id: 32,
        kelas: "11",
        mapel: "Kimia",
        kategori: "Sains",
        question: "Gas yang paling banyak menyusun atmosfer Bumi adalah...",
        answers: [
            "Oksigen",
            "Nitrogen",
            "Karbon dioksida",
            "Hidrogen"
        ],
        correct: 1
    },

    {
        id: 33,
        kelas: "11",
        mapel: "Kimia",
        kategori: "Sains",
        question: "Proses pelepasan panas ke lingkungan disebut...",
        answers: [
            "Endoterm",
            "Eksoterm",
            "Netralisasi",
            "Ionisasi"
        ],
        correct: 1
    },

    {
        id: 34,
        kelas: "11",
        mapel: "Kimia",
        kategori: "Sains",
        question: "Larutan dengan pH = 7 bersifat...",
        answers: [
            "Asam",
            "Basa",
            "Netral",
            "Korosif"
        ],
        correct: 2
    },

    {
        id: 35,
        kelas: "11",
        mapel: "Kimia",
        kategori: "Sains",
        question: "Hukum kekekalan massa dikemukakan oleh...",
        answers: [
            "Dalton",
            "Lavoisier",
            "Proust",
            "Avogadro"
        ],
        correct: 1
    },


    /* =====================================================
       KELAS XII — SAINS
    ===================================================== */

    {
        id: 36,
        kelas: "12",
        mapel: "Fisika",
        kategori: "Sains",
        question: "Gelombang yang membutuhkan medium untuk merambat disebut...",
        answers: [
            "Gelombang mekanik",
            "Gelombang elektromagnetik",
            "Gelombang cahaya",
            "Gelombang radio"
        ],
        correct: 0
    },

    {
        id: 37,
        kelas: "12",
        mapel: "Fisika",
        kategori: "Sains",
        question: "Gelombang elektromagnetik dapat merambat melalui...",
        answers: [
            "Hanya air",
            "Hanya udara",
            "Ruang hampa",
            "Hanya benda padat"
        ],
        correct: 2
    },

    {
        id: 38,
        kelas: "12",
        mapel: "Biologi",
        kategori: "Sains",
        question: "Molekul yang membawa informasi genetik adalah...",
        answers: [
            "ATP",
            "DNA",
            "Glukosa",
            "Lipid"
        ],
        correct: 1
    },

    {
        id: 39,
        kelas: "12",
        mapel: "Biologi",
        kategori: "Sains",
        question: "Unit dasar pewarisan sifat disebut...",
        answers: [
            "Gen",
            "Sel",
            "Jaringan",
            "Organ"
        ],
        correct: 0
    },

    {
        id: 40,
        kelas: "12",
        mapel: "Kimia",
        kategori: "Sains",
        question: "Reaksi yang menghasilkan zat baru dengan sifat berbeda disebut...",
        answers: [
            "Perubahan fisika",
            "Perubahan kimia",
            "Perubahan wujud",
            "Pelarutan"
        ],
        correct: 1
    },


    /* =====================================================
       PENGETAHUAN UMUM
    ===================================================== */

    {
        id: 41,
        kelas: "10",
        mapel: "Pengetahuan Umum",
        kategori: "Pengetahuan Umum",
        question: "Benua terbesar di dunia adalah...",
        answers: [
            "Afrika",
            "Eropa",
            "Asia",
            "Australia"
        ],
        correct: 2
    },

    {
        id: 42,
        kelas: "10",
        mapel: "Pengetahuan Umum",
        kategori: "Pengetahuan Umum",
        question: "Planet yang dikenal sebagai Planet Merah adalah...",
        answers: [
            "Venus",
            "Mars",
            "Jupiter",
            "Saturnus"
        ],
        correct: 1
    },

    {
        id: 43,
        kelas: "11",
        mapel: "Pengetahuan Umum",
        kategori: "Pengetahuan Umum",
        question: "Lambang negara Indonesia adalah...",
        answers: [
            "Garuda Pancasila",
            "Rajawali",
            "Cendrawasih",
            "Elang Jawa"
        ],
        correct: 0
    },

    {
        id: 44,
        kelas: "11",
        mapel: "Pengetahuan Umum",
        kategori: "Pengetahuan Umum",
        question: "Proklamasi Kemerdekaan Indonesia dibacakan pada tahun...",
        answers: [
            "1942",
            "1945",
            "1948",
            "1950"
        ],
        correct: 1
    },

    {
        id: 45,
        kelas: "12",
        mapel: "Pengetahuan Umum",
        kategori: "Pengetahuan Umum",
        question: "Planet terbesar dalam tata surya adalah...",
        answers: [
            "Bumi",
            "Saturnus",
            "Jupiter",
            "Neptunus"
        ],
        correct: 2
    }

];


/* =========================================================
   ELEMENT HTML
========================================================= */

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
const classBadge = document.getElementById("classBadge");

const finalScore = document.getElementById("finalScore");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const totalCount = document.getElementById("totalCount");

const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");

const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn");
const quitBtn = document.getElementById("quitBtn");


/* =========================================================
   GAME VARIABLES
========================================================= */

let selectedClass = "10";
let selectedCategory = "Semua";

let quizQuestions = [];

let currentQuestion = 0;

let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

let timer = null;
let timeLeft = 20;

let answered = false;


/* =========================================================
   SOUND ENGINE
========================================================= */

let audioCtx = null;

let soundEnabled = true;

let musicEnabled = true;

let musicTimer = null;

let musicStep = 0;


/* =========================================================
   CREATE AUDIO
========================================================= */

function initAudio() {

    if (!audioCtx) {

        audioCtx =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

    if (audioCtx.state === "suspended") {

        audioCtx.resume();

    }

}


/* =========================================================
   BASIC SOUND
========================================================= */

function playTone(
    frequency,
    duration = 0.12,
    type = "sine",
    volume = 0.04
) {

    if (!soundEnabled) return;

    initAudio();

    const oscillator =
        audioCtx.createOscillator();

    const gain =
        audioCtx.createGain();

    oscillator.type = type;

    oscillator.frequency.value =
        frequency;

    gain.gain.setValueAtTime(
        volume,
        audioCtx.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioCtx.currentTime + duration
    );

    oscillator.connect(gain);

    gain.connect(audioCtx.destination);

    oscillator.start();

    oscillator.stop(
        audioCtx.currentTime + duration
    );

}


/* =========================================================
   SOUND: CLICK
========================================================= */

function soundClick() {

    playTone(
        600,
        0.07,
        "sine",
        0.035
    );

}


/* =========================================================
   SOUND: CORRECT
========================================================= */

function soundCorrect() {

    if (!soundEnabled) return;

    initAudio();

    playTone(
        523.25,
        0.12,
        "sine",
        0.05
    );

    setTimeout(() => {

        playTone(
            659.25,
            0.14,
            "sine",
            0.05
        );

    }, 100);

    setTimeout(() => {

        playTone(
            783.99,
            0.18,
            "sine",
            0.05
        );

    }, 200);

}


/* =========================================================
   SOUND: WRONG
========================================================= */

function soundWrong() {

    if (!soundEnabled) return;

    playTone(
        220,
        0.18,
        "triangle",
        0.05
    );

    setTimeout(() => {

        playTone(
            160,
            0.25,
            "triangle",
            0.04
        );

    }, 130);

}


/* =========================================================
   SOUND: TIME OUT
========================================================= */

function soundTimeOut() {

    if (!soundEnabled) return;

    playTone(
        350,
        0.15,
        "square",
        0.035
    );

    setTimeout(() => {

        playTone(
            250,
            0.25,
            "square",
            0.035
        );

    }, 160);

}


/* =========================================================
   SOUND: NEXT
========================================================= */

function soundNext() {

    playTone(
        500,
        0.07,
        "sine",
        0.025
    );

}


/* =========================================================
   SOUND: FINISH
========================================================= */

function soundFinish() {

    if (!soundEnabled) return;

    const notes = [
        523.25,
        659.25,
        783.99,
        1046.50
    ];

    notes.forEach((note, index) => {

        setTimeout(() => {

            playTone(
                note,
                0.22,
                "sine",
                0.05
            );

        }, index * 120);

    });

}


/* =========================================================
   BACKGROUND MUSIC
========================================================= */

function startMusic() {

    if (!musicEnabled) return;

    initAudio();

    stopMusic();

    const melody = [
        261.63,
        329.63,
        392.00,
        329.63,
        293.66,
        349.23,
        440.00,
        349.23
    ];

    musicStep = 0;

    musicTimer =
        setInterval(() => {

            if (!musicEnabled) return;

            playMusicNote(
                melody[musicStep]
            );

            musicStep++;

            if (
                musicStep >=
                melody.length
            ) {

                musicStep = 0;

            }

        }, 650);

}


/* =========================================================
   MUSIC NOTE
========================================================= */

function playMusicNote(frequency) {

    if (!audioCtx || !musicEnabled) return;

    const oscillator =
        audioCtx.createOscillator();

    const gain =
        audioCtx.createGain();

    oscillator.type = "sine";

    oscillator.frequency.value =
        frequency;

    gain.gain.setValueAtTime(
        0.008,
        audioCtx.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioCtx.currentTime + 0.35
    );

    oscillator.connect(gain);

    gain.connect(audioCtx.destination);

    oscillator.start();

    oscillator.stop(
        audioCtx.currentTime + 0.35
    );

}


/* =========================================================
   STOP MUSIC
========================================================= */

function stopMusic() {

    if (musicTimer) {

        clearInterval(musicTimer);

        musicTimer = null;

    }

}


/* =========================================================
   SOUND BUTTON
========================================================= */

function createSoundButton() {

    const button =
        document.createElement("button");

    button.id = "soundToggle";

    button.textContent =
        soundEnabled ? "🔊" : "🔇";

    button.title =
        "Nyalakan / matikan suara";

    button.style.position =
        "fixed";

    button.style.right =
        "18px";

    button.style.bottom =
        "18px";

    button.style.width =
        "45px";

    button.style.height =
        "45px";

    button.style.border =
        "none";

    button.style.borderRadius =
        "50%";

    button.style.background =
        "white";

    button.style.cursor =
        "pointer";

    button.style.fontSize =
        "20px";

    button.style.boxShadow =
        "0 8px 25px rgba(107,69,52,.15)";

    button.style.zIndex =
        "1000";

    button.addEventListener(
        "click",
        () => {

            soundEnabled =
                !soundEnabled;

            musicEnabled =
                soundEnabled;

            button.textContent =
                soundEnabled
                    ? "🔊"
                    : "🔇";

            if (soundEnabled) {

                initAudio();

                startMusic();

                soundClick();

            } else {

                stopMusic();

            }

        }
    );

    document.body.appendChild(button);

}


/* =========================================================
   SHUFFLE
========================================================= */

function shuffleArray(array) {

    const newArray =
        [...array];

    for (
        let i = newArray.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            newArray[i],
            newArray[j]
        ] =
        [
            newArray[j],
            newArray[i]
        ];

    }

    return newArray;
}


/* =========================================================
   SELECT CLASS
========================================================= */

document
    .querySelectorAll(".class-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                soundClick();

                document
                    .querySelectorAll(".class-btn")
                    .forEach(btn => {

                        btn.classList.remove(
                            "selected"
                        );

                    });

                button.classList.add(
                    "selected"
                );

                selectedClass =
                    button.dataset.class;

            }
        );

    });


/* =========================================================
   SELECT CATEGORY
========================================================= */

document
    .querySelectorAll(".category-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                soundClick();

                document
                    .querySelectorAll(".category-btn")
                    .forEach(btn => {

                        btn.classList.remove(
                            "selected"
                        );

                    });

                button.classList.add(
                    "selected"
                );

                selectedCategory =
                    button.dataset.category;

            }
        );

    });


/* =========================================================
   START QUIZ
========================================================= */

startBtn.addEventListener(
    "click",
    startQuiz
);


function startQuiz() {

    initAudio();

    soundClick();

    const filtered =
        questions.filter(question => {

            const classMatch =
                question.kelas === selectedClass;

            const categoryMatch =
                selectedCategory === "Semua" ||
                question.kategori ===
                selectedCategory;

            return (
                classMatch &&
                categoryMatch
            );

        });


    if (filtered.length === 0) {

        alert(
            "Belum ada soal untuk pilihan tersebut 🍪"
        );

        return;

    }


    /*
       SOAL DIACAK
    */

    quizQuestions =
        shuffleArray(filtered);


    /*
       BATASI JUMLAH SOAL
       maksimal 15 per sesi
    */

    quizQuestions =
        quizQuestions.slice(
            0,
            Math.min(
                15,
                quizQuestions.length
            )
        );


    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;


    showScreen(
        quizScreen
    );

    showQuestion();

    startMusic();

}


/* =========================================================
   SHOW QUESTION
========================================================= */

function showQuestion() {

    clearInterval(timer);

    answered = false;

    feedback.textContent = "";

    nextBtn.style.display =
        "none";


    const question =
        quizQuestions[currentQuestion];


    questionNumber.textContent =
        `Soal ${currentQuestion + 1} / ${quizQuestions.length}`;


    scoreDisplay.textContent =
        `⭐ ${score}`;


    categoryBadge.textContent =
        question.mapel;


    if (classBadge) {

        classBadge.textContent =
            `Kelas ${question.kelas}`;

    }


    questionText.textContent =
        question.question;


    answersContainer.innerHTML =
        "";


    /*
       PILIHAN JAWABAN JUGA DIACAK
    */

    const answerObjects =
        question.answers.map(
            (answer, index) => ({
                text: answer,
                originalIndex: index
            })
        );


    const shuffledAnswers =
        shuffleArray(
            answerObjects
        );


    shuffledAnswers.forEach(
        answerObject => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "answer-btn";

            button.textContent =
                `${String.fromCharCode(
                    65 +
                    answersContainer.children.length
                )}. ${answerObject.text}`;


            button.addEventListener(
                "click",
                () => {

                    checkAnswer(
                        answerObject.originalIndex,
                        button
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );


    const progress =
        (
            currentQuestion /
            quizQuestions.length
        ) * 100;


    progressFill.style.width =
        `${progress}%`;


    startTimer();

}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    timeLeft = 20;

    timerElement.textContent =
        `⏱️ ${timeLeft}`;

    timerElement.classList.remove(
        "warning"
    );


    timer =
        setInterval(
            () => {

                timeLeft--;

                timerElement.textContent =
                    `⏱️ ${timeLeft}`;


                if (timeLeft <= 5) {

                    timerElement.classList.add(
                        "warning"
                    );

                }


                if (timeLeft <= 0) {

                    clearInterval(timer);

                    timeOut();

                }

            },
            1000
        );

}


/* =========================================================
   CHECK ANSWER
========================================================= */

function checkAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) return;

    answered = true;

    clearInterval(timer);

    timerElement.classList.remove(
        "warning"
    );


    const question =
        quizQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(
        button => {

            button.disabled = true;

        }
    );


    if (
        selectedIndex ===
        question.correct
    ) {

        selectedButton.classList.add(
            "correct"
        );

        feedback.textContent =
            "🎉 Benar! Cookie bangga sama kamu! 🍪";

        score += 10;

        correctAnswers++;

        soundCorrect();

    } else {

        selectedButton.classList.add(
            "wrong"
        );


        buttons.forEach(button => {

            const answerText =
                button.textContent
                    .replace(
                        /^[A-D]\.\s/,
                        ""
                    );

            if (
                answerText ===
                question.answers[
                    question.correct
                ]
            ) {

                button.classList.add(
                    "correct"
                );

            }

        });


        feedback.textContent =
            `💡 Belum tepat! Jawaban yang benar adalah ${question.answers[question.correct]}`;

        wrongAnswers++;

        soundWrong();

    }


    scoreDisplay.textContent =
        `⭐ ${score}`;


    nextBtn.style.display =
        "block";

}


/* =========================================================
   TIME OUT
========================================================= */

function timeOut() {

    if (answered) return;

    answered = true;


    const question =
        quizQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(
        button => {

            button.disabled = true;

        }
    );


    buttons.forEach(button => {

        const answerText =
            button.textContent
                .replace(
                    /^[A-D]\.\s/,
                    ""
                );

        if (
            answerText ===
            question.answers[
                question.correct
            ]
        ) {

            button.classList.add(
                "correct"
            );

        }

    });


    feedback.textContent =
        `⏰ Waktu habis! Jawabannya: ${question.answers[question.correct]}`;


    wrongAnswers++;

    soundTimeOut();


    nextBtn.style.display =
        "block";

}


/* =========================================================
   NEXT QUESTION
========================================================= */

nextBtn.addEventListener(
    "click",
    nextQuestion
);


function nextQuestion() {

    soundNext();

    currentQuestion++;


    if (
        currentQuestion >=
        quizQuestions.length
    ) {

        finishQuiz();

    } else {

        showQuestion();

    }

}


/* =========================================================
   FINISH QUIZ
========================================================= */

function finishQuiz() {

    clearInterval(timer);

    stopMusic();

    progressFill.style.width =
        "100%";


    const total =
        quizQuestions.length;


    const percentage =
        Math.round(
            (
                correctAnswers /
                total
            ) * 100
        );


    finalScore.textContent =
        percentage;


    correctCount.textContent =
        correctAnswers;


    wrongCount.textContent =
        wrongAnswers;


    totalCount.textContent =
        total;


    if (percentage >= 90) {

        resultTitle.textContent =
            "Gila, kamu jago banget! 🔥";

        resultDescription.textContent =
            "Cookie sampai bangga banget sama kamu! 🍪✨";

    }

    else if (percentage >= 70) {

        resultTitle.textContent =
            "Hebat! 🌟";

        resultDescription.textContent =
            "Pengetahuanmu sudah bagus. Tinggal sedikit lagi!";

    }

    else if (percentage >= 50) {

        resultTitle.textContent =
            "Lumayan! 💪";

        resultDescription.textContent =
            "Jangan menyerah. Yuk belajar dan coba lagi!";

    }

    else {

        resultTitle.textContent =
            "Semangat! 🍪";

        resultDescription.textContent =
            "Belum berhasil bukan berarti gagal. Coba lagi ya!";

    }


    /*
       SIMPAN HIGH SCORE
    */

    const oldHighScore =
        Number(
            localStorage.getItem(
                "cookiekuHighScore"
            )
        ) || 0;


    if (percentage > oldHighScore) {

        localStorage.setItem(
            "cookiekuHighScore",
            percentage
        );

    }


    showScreen(
        resultScreen
    );


    soundFinish();

}


/* =========================================================
   RESTART
========================================================= */

restartBtn.addEventListener(
    "click",
    () => {

        soundClick();

        startQuiz();

    }
);


/* =========================================================
   HOME
========================================================= */

homeBtn.addEventListener(
    "click",
    () => {

        soundClick();

        clearInterval(timer);

        stopMusic();

        showScreen(
            homeScreen
        );

    }
);


/* =========================================================
   QUIT
========================================================= */

quitBtn.addEventListener(
    "click",
    () => {

        soundClick();

        clearInterval(timer);

        stopMusic();

        showScreen(
            homeScreen
        );

    }
);


/* =========================================================
   SCREEN
========================================================= */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });


    screen.classList.add(
        "active"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   INITIALIZE
========================================================= */

createSoundButton();


/*
   Browser biasanya memblokir autoplay audio.
   Musik baru mulai setelah user menekan tombol.
*/

console.log(
    "🍪 CookieKu 2.0 siap dimainkan!"
);
