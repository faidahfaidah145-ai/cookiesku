/* =========================================================
   COOKIEKU 2.0
   GAME ENGINE + SOUND + RANDOM QUIZ
========================================================= */


/* =========================================================
   DATABASE SOAL
========================================================= */

const questions = [

    /* =========================
       KELAS X
    ========================= */

    {
        id: 1,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        question: "Planet yang dikenal sebagai Planet Merah adalah...",
        answers: ["Venus", "Mars", "Jupiter", "Saturnus"],
        correct: 1
    },

    {
        id: 2,
        kelas: "10",
        kategori: "Sains",
        question: "Organ tubuh yang berfungsi memompa darah adalah...",
        answers: ["Paru-paru", "Ginjal", "Jantung", "Hati"],
        correct: 2
    },

    {
        id: 3,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        question: "Benua terbesar di dunia adalah...",
        answers: ["Afrika", "Eropa", "Asia", "Australia"],
        correct: 2
    },

    {
        id: 4,
        kelas: "10",
        kategori: "Sains",
        question: "Simbol kimia untuk oksigen adalah...",
        answers: ["O", "Ox", "C", "H"],
        correct: 0
    },

    {
        id: 5,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        question: "Indonesia terletak di antara dua benua, yaitu...",
        answers: [
            "Asia dan Australia",
            "Asia dan Eropa",
            "Afrika dan Australia",
            "Amerika dan Asia"
        ],
        correct: 0
    },

    {
        id: 6,
        kelas: "10",
        kategori: "Sains",
        question: "Satuan SI untuk panjang adalah...",
        answers: ["Liter", "Meter", "Kilogram", "Sekon"],
        correct: 1
    },

    {
        id: 7,
        kelas: "10",
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
        id: 8,
        kelas: "10",
        kategori: "Sains",
        question: "Zat yang memiliki pH kurang dari 7 bersifat...",
        answers: ["Basa", "Netral", "Asam", "Garam"],
        correct: 2
    },

    {
        id: 9,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        question: "Planet terbesar dalam tata surya adalah...",
        answers: ["Bumi", "Mars", "Jupiter", "Venus"],
        correct: 2
    },

    {
        id: 10,
        kelas: "10",
        kategori: "Sains",
        question: "Proses tumbuhan membuat makanan sendiri disebut...",
        answers: [
            "Respirasi",
            "Fotosintesis",
            "Transpirasi",
            "Ekskresi"
        ],
        correct: 1
    },

    {
        id: 11,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        question: "Bahasa nasional Indonesia adalah...",
        answers: [
            "Bahasa Jawa",
            "Bahasa Sunda",
            "Bahasa Indonesia",
            "Bahasa Melayu"
        ],
        correct: 2
    },

    {
        id: 12,
        kelas: "10",
        kategori: "Sains",
        question: "Gaya yang menyebabkan benda jatuh ke permukaan Bumi adalah...",
        answers: [
            "Gaya magnet",
            "Gaya gravitasi",
            "Gaya listrik",
            "Gaya gesek"
        ],
        correct: 1
    },

    {
        id: 13,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        question: "Proklamasi Kemerdekaan Indonesia dibacakan pada...",
        answers: [
            "17 Agustus 1945",
            "10 November 1945",
            "1 Juni 1945",
            "28 Oktober 1928"
        ],
        correct: 0
    },

    {
        id: 14,
        kelas: "10",
        kategori: "Sains",
        question: "Satuan SI untuk massa adalah...",
        answers: ["Gram", "Kilogram", "Pound", "Ton"],
        correct: 1
    },

    {
        id: 15,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        question: "Semboyan bangsa Indonesia adalah...",
        answers: [
            "Tut Wuri Handayani",
            "Bhinneka Tunggal Ika",
            "Ing Ngarsa Sung Tuladha",
            "Merdeka Belajar"
        ],
        correct: 1
    },


    /* =========================
       KELAS XI
    ========================= */

    {
        id: 16,
        kelas: "11",
        kategori: "Sains",
        question: "Satuan SI untuk gaya adalah...",
        answers: ["Joule", "Newton", "Watt", "Pascal"],
        correct: 1
    },

    {
        id: 17,
        kelas: "11",
        kategori: "Sains",
        question: "Perubahan zat dari cair menjadi gas disebut...",
        answers: ["Mencair", "Membeku", "Menguap", "Mengembun"],
        correct: 2
    },

    {
        id: 18,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        question: "Benua terluas di dunia adalah...",
        answers: ["Asia", "Afrika", "Eropa", "Australia"],
        correct: 0
    },

    {
        id: 19,
        kelas: "11",
        kategori: "Sains",
        question: "Gas yang paling banyak terdapat di atmosfer Bumi adalah...",
        answers: [
            "Oksigen",
            "Nitrogen",
            "Karbon dioksida",
            "Hidrogen"
        ],
        correct: 1
    },

    {
        id: 20,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        question: "Lambang negara Indonesia adalah...",
        answers: [
            "Garuda Pancasila",
            "Burung Elang",
            "Rajawali",
            "Cendrawasih"
        ],
        correct: 0
    },

    {
        id: 21,
        kelas: "11",
        kategori: "Sains",
        question: "Energi yang dimiliki benda karena gerakannya disebut...",
        answers: [
            "Energi potensial",
            "Energi kinetik",
            "Energi kimia",
            "Energi nuklir"
        ],
        correct: 1
    },

    {
        id: 22,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        question: "Planet yang memiliki cincin paling terkenal adalah...",
        answers: [
            "Mars",
            "Bumi",
            "Saturnus",
            "Merkurius"
        ],
        correct: 2
    },

    {
        id: 23,
        kelas: "11",
        kategori: "Sains",
        question: "Alat untuk mengukur suhu disebut...",
        answers: [
            "Barometer",
            "Termometer",
            "Higrometer",
            "Anemometer"
        ],
        correct: 1
    },

    {
        id: 24,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        question: "Pulau terbesar di Indonesia yang seluruh wilayahnya berada di Indonesia adalah...",
        answers: [
            "Jawa",
            "Sumatra",
            "Papua",
            "Kalimantan"
        ],
        correct: 1
    },

    {
        id: 25,
        kelas: "11",
        kategori: "Sains",
        question: "Bagian sel yang mengendalikan aktivitas sel adalah...",
        answers: [
            "Ribosom",
            "Nukleus",
            "Dinding sel",
            "Vakuola"
        ],
        correct: 1
    },

    {
        id: 26,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        question: "Sumpah Pemuda diperingati setiap...",
        answers: [
            "20 Mei",
            "17 Agustus",
            "28 Oktober",
            "10 November"
        ],
        correct: 2
    },

    {
        id: 27,
        kelas: "11",
        kategori: "Sains",
        question: "Perubahan wujud gas menjadi cair disebut...",
        answers: [
            "Menguap",
            "Menyublim",
            "Mengembun",
            "Membeku"
        ],
        correct: 2
    },

    {
        id: 28,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        question: "Samudra terluas di dunia adalah...",
        answers: [
            "Atlantik",
            "Pasifik",
            "Hindia",
            "Arktik"
        ],
        correct: 1
    },

    {
        id: 29,
        kelas: "11",
        kategori: "Sains",
        question: "Hukum Newton pertama berkaitan dengan...",
        answers: [
            "Kelembaman",
            "Aksi dan reaksi",
            "Percepatan",
            "Energi"
        ],
        correct: 0
    },

    {
        id: 30,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        question: "Pusat pemerintahan Indonesia saat ini berada di...",
        answers: [
            "Jakarta",
            "Bandung",
            "Ibu Kota Nusantara",
            "Surabaya"
        ],
        correct: 2
    },


    /* =========================
       KELAS XII
    ========================= */

    {
        id: 31,
        kelas: "12",
        kategori: "Sains",
        question: "Rumus kimia air adalah...",
        answers: ["CO₂", "O₂", "H₂O", "NaCl"],
        correct: 2
    },

    {
        id: 32,
        kelas: "12",
        kategori: "Sains",
        question: "Bagian sel yang mengatur seluruh aktivitas sel adalah...",
        answers: [
            "Ribosom",
            "Nukleus",
            "Membran sel",
            "Mitokondria"
        ],
        correct: 1
    },

    {
        id: 33,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        question: "Planet terbesar dalam tata surya adalah...",
        answers: [
            "Bumi",
            "Saturnus",
            "Jupiter",
            "Neptunus"
        ],
        correct: 2
    },

    {
        id: 34,
        kelas: "12",
        kategori: "Sains",
        question: "Energi yang dimiliki benda karena gerakannya disebut energi...",
        answers: [
            "Potensial",
            "Kinetik",
            "Kimia",
            "Nuklir"
        ],
        correct: 1
    },

    {
        id: 35,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        question: "Proklamasi Kemerdekaan Indonesia dibacakan pada tahun...",
        answers: ["1942", "1945", "1949", "1950"],
        correct: 1
    },

    {
        id: 36,
        kelas: "12",
        kategori: "Sains",
        question: "Molekul pembawa informasi genetik adalah...",
        answers: ["DNA", "ATP", "Glukosa", "Air"],
        correct: 0
    },

    {
        id: 37,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        question: "Tokoh yang membacakan Proklamasi Kemerdekaan Indonesia adalah...",
        answers: [
            "Soekarno",
            "Mohammad Hatta",
            "Sutan Sjahrir",
            "Ahmad Yani"
        ],
        correct: 0
    },

    {
        id: 38,
        kelas: "12",
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

    {
        id: 39,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        question: "Bhinneka Tunggal Ika memiliki arti...",
        answers: [
            "Bersatu kita teguh",
            "Berbeda-beda tetapi tetap satu",
            "Keadilan bagi seluruh rakyat",
            "Persatuan Indonesia"
        ],
        correct: 1
    },

    {
        id: 40,
        kelas: "12",
        kategori: "Sains",
        question: "Satuan SI untuk energi adalah...",
        answers: ["Newton", "Joule", "Watt", "Pascal"],
        correct: 1
    },

    {
        id: 41,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        question: "Hari Pendidikan Nasional diperingati setiap...",
        answers: [
            "2 Mei",
            "20 Mei",
            "28 Oktober",
            "10 November"
        ],
        correct: 0
    },

    {
        id: 42,
        kelas: "12",
        kategori: "Sains",
        question: "Hormon yang berfungsi mengatur kadar gula darah adalah...",
        answers: [
            "Insulin",
            "Adrenalin",
            "Tiroksin",
            "Estrogen"
        ],
        correct: 0
    },

    {
        id: 43,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        question: "Lagu kebangsaan Indonesia adalah...",
        answers: [
            "Indonesia Raya",
            "Bagimu Negeri",
            "Garuda Pancasila",
            "Hari Merdeka"
        ],
        correct: 0
    },

    {
        id: 44,
        kelas: "12",
        kategori: "Sains",
        question: "Proses pembelahan sel untuk pertumbuhan disebut...",
        answers: [
            "Mitosis",
            "Meiosis",
            "Fertilisasi",
            "Mutasi"
        ],
        correct: 0
    },

    {
        id: 45,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        question: "Dasar negara Indonesia adalah...",
        answers: [
            "UUD 1945",
            "Pancasila",
            "Bhinneka Tunggal Ika",
            "NKRI"
        ],
        correct: 1
    }

];


/* =========================================================
   ELEMENT HTML
========================================================= */

const homeScreen =
    document.getElementById("homeScreen");

const quizScreen =
    document.getElementById("quizScreen");

const resultScreen =
    document.getElementById("resultScreen");


const startBtn =
    document.getElementById("startBtn");

const nextBtn =
    document.getElementById("nextBtn");


const questionText =
    document.getElementById("questionText");

const answersContainer =
    document.getElementById("answers");


const questionNumber =
    document.getElementById("questionNumber");

const scoreDisplay =
    document.getElementById("scoreDisplay");

const progressFill =
    document.getElementById("progressFill");


const timerElement =
    document.getElementById("timer");

const feedback =
    document.getElementById("feedback");

const categoryBadge =
    document.getElementById("categoryBadge");


const finalScore =
    document.getElementById("finalScore");

const correctCount =
    document.getElementById("correctCount");

const wrongCount =
    document.getElementById("wrongCount");

const totalCount =
    document.getElementById("totalCount");


const resultTitle =
    document.getElementById("resultTitle");

const resultDescription =
    document.getElementById("resultDescription");


const restartBtn =
    document.getElementById("restartBtn");

const homeBtn =
    document.getElementById("homeBtn");

const quitBtn =
    document.getElementById("quitBtn");


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

let timer;

let timeLeft = 20;

let answered = false;


/* =========================================================
   SHUFFLE
========================================================= */

function shuffle(array) {

    const newArray = [...array];

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
   PILIH KELAS
========================================================= */

document
    .querySelectorAll(".class-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".class-btn")
                    .forEach(btn =>
                        btn.classList.remove("selected")
                    );

                button.classList.add("selected");

                selectedClass =
                    button.dataset.class;

            }
        );

    });


/* =========================================================
   PILIH KATEGORI
========================================================= */

document
    .querySelectorAll(".category-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".category-btn")
                    .forEach(btn =>
                        btn.classList.remove("selected")
                    );

                button.classList.add("selected");

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

    const filtered =
        questions.filter(question => {

            const classMatch =
                question.kelas === selectedClass;

            const categoryMatch =
                selectedCategory === "Semua" ||
                question.kategori === selectedCategory;

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
       Soal diacak setiap permainan
    */

    quizQuestions =
        shuffle(filtered);


    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;


    showScreen(quizScreen);

    showQuestion();

}


/* =========================================================
   SHOW QUESTION
========================================================= */

function showQuestion() {

    clearInterval(timer);

    answered = false;

    feedback.textContent = "";

    nextBtn.style.display = "none";


    const question =
        quizQuestions[currentQuestion];


    questionNumber.textContent =
        `Soal ${currentQuestion + 1} / ${quizQuestions.length}`;


    scoreDisplay.textContent =
        `⭐ ${score}`;


    categoryBadge.textContent =
        question.kategori;


    questionText.textContent =
        question.question;


    answersContainer.innerHTML = "";


    /*
       Jawaban juga diacak
    */

    const answerData =
        question.answers.map(
            (answer, index) => ({
                text: answer,
                originalIndex: index
            })
        );


    const shuffledAnswers =
        shuffle(answerData);


    shuffledAnswers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer-btn";


            button.textContent =
                `${String.fromCharCode(65 + index)}. ${answer.text}`;


            button.addEventListener(
                "click",
                () =>
                    checkAnswer(
                        answer.originalIndex,
                        button
                    )
            );


            answersContainer.appendChild(button);

        }
    );


    const progress =
        (currentQuestion /
            quizQuestions.length) * 100;


    progressFill.style.width =
        `${progress}%`;


    startTimer();

}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    clearInterval(timer);

    timeLeft = 20;

    timerElement.textContent =
        `⏱️ ${timeLeft}`;

    timerElement.classList.remove(
        "warning"
    );


    timer =
        setInterval(() => {

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

        }, 1000);

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


    const question =
        quizQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


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


    } else {

        selectedButton.classList.add(
            "wrong"
        );


        /*
           Cari tombol yang berisi jawaban benar
        */

        buttons.forEach(button => {

            const answerText =
                button.textContent
                    .substring(3);

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


    buttons.forEach(button => {

        button.disabled = true;

    });


    buttons.forEach(button => {

        const answerText =
            button.textContent.substring(3);

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


    progressFill.style.width =
        "100%";


    const total =
        quizQuestions.length;


    const percentage =
        Math.round(
            (correctAnswers / total) * 100
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


    showScreen(resultScreen);

}


/* =========================================================
   RESTART
========================================================= */

restartBtn.addEventListener(
    "click",
    startQuiz
);


/* =========================================================
   HOME
========================================================= */

homeBtn.addEventListener(
    "click",
    () => {

        clearInterval(timer);

        showScreen(homeScreen);

    }
);


quitBtn.addEventListener(
    "click",
    () => {

        clearInterval(timer);

        showScreen(homeScreen);

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
   SOUND SYSTEM
========================================================= */

let audioContext = null;

let soundEnabled = true;


function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

    return audioContext;

}


function playSound(
    frequency = 600,
    duration = .12,
    type = "sine"
) {

    if (!soundEnabled) return;


    const ctx =
        getAudioContext();


    if (ctx.state === "suspended") {

        ctx.resume();

    }


    const oscillator =
        ctx.createOscillator();

    const gain =
        ctx.createGain();


    oscillator.type = type;

    oscillator.frequency.value =
        frequency;


    oscillator.connect(gain);

    gain.connect(
        ctx.destination
    );


    gain.gain.setValueAtTime(
        .0001,
        ctx.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        .15,
        ctx.currentTime + .01
    );


    gain.gain.exponentialRampToValueAtTime(
        .0001,
        ctx.currentTime + duration
    );


    oscillator.start();

    oscillator.stop(
        ctx.currentTime + duration
    );

}


/* =========================================================
   SOUND EVENTS
========================================================= */

const originalStartQuiz =
    startQuiz;

startBtn.addEventListener(
    "click",
    () => {

        playSound(
            650,
            .12,
            "sine"
        );

    }
);


nextBtn.addEventListener(
    "click",
    () => {

        playSound(
            550,
            .10,
            "sine"
        );

    }
);


restartBtn.addEventListener(
    "click",
    () => {

        playSound(
            650,
            .12,
            "sine"
        );

    }
);


/* =========================================================
   ANSWER SOUND
========================================================= */

const originalCheckAnswer =
    checkAnswer;


/*
   Suara diberikan berdasarkan
   class jawaban setelah diproses.
*/

document.addEventListener(
    "click",
    event => {

        if (
            event.target.classList.contains(
                "answer-btn"
            )
        ) {

            setTimeout(() => {

                if (
                    event.target.classList.contains(
                        "correct"
                    )
                ) {

                    playSound(
                        800,
                        .18,
                        "sine"
                    );

                }

                else if (
                    event.target.classList.contains(
                        "wrong"
                    )
                ) {

                    playSound(
                        220,
                        .20,
                        "sawtooth"
                    );

                }

            }, 30);

        }

    }
);


/* =========================================================
   SOUND TOGGLE
========================================================= */

const soundButton =
    document.querySelector(
        ".sound-toggle"
    );


if (soundButton) {

    soundButton.addEventListener(
        "click",
        () => {

            soundEnabled =
                !soundEnabled;


            soundButton.textContent =
                soundEnabled
                    ? "🔊"
                    : "🔇";


            if (soundEnabled) {

                playSound(
                    700,
                    .1,
                    "sine"
                );

            }

        }
    );

}


/* =========================================================
   INITIAL STATE
========================================================= */

showScreen(homeScreen);

console.log(
    "🍪 CookieKu 2.0 siap dimainkan!"
);

console.log(
    `📚 Total soal: ${questions.length}`
);
