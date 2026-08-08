/* =========================================
   COOKIEKU - SCRIPT, AUDIO & BANK SOAL
   ========================================= */


/* =========================================
   AUDIO SYNTHESIZER
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
            noteGain.gain.exponentialRampToValueAtTime(
                0.01,
                now + i * 0.1 + 0.2
            );

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
            noteGain.gain.exponentialRampToValueAtTime(
                0.01,
                now + i * 0.12 + 0.3
            );

            noteOsc.connect(noteGain);
            noteGain.connect(audioCtx.destination);

            noteOsc.start(now + i * 0.12);
            noteOsc.stop(now + i * 0.12 + 0.3);
        });
    }
}


/* =========================================
   DATABASE SOAL COOKIEKU
   ========================================= */

const questions = [

    /* =====================================
       KELAS 10
    ===================================== */

    {
        id: 1,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Planet manakah yang dikenal sebagai Planet Merah?",
        answers: ["Venus", "Mars", "Jupiter", "Saturnus"],
        correct: 1,
        penjelasan: "Mars tampak kemerahan karena permukaannya banyak mengandung oksida besi."
    },

    {
        id: 2,
        kelas: "10",
        kategori: "Sains",
        tingkat: "Mudah",
        question: "Organ tubuh manusia yang berfungsi memompa darah adalah...",
        answers: ["Paru-paru", "Ginjal", "Jantung", "Hati"],
        correct: 2,
        penjelasan: "Jantung berfungsi memompa darah ke seluruh tubuh melalui sistem peredaran darah."
    },

    {
        id: 3,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Benua terbesar di dunia adalah...",
        answers: ["Afrika", "Eropa", "Asia", "Australia"],
        correct: 2,
        penjelasan: "Asia merupakan benua terbesar berdasarkan luas wilayah."
    },

    {
        id: 4,
        kelas: "10",
        kategori: "Sains",
        tingkat: "Mudah",
        question: "Simbol kimia untuk oksigen adalah...",
        answers: ["O", "Ox", "C", "H"],
        correct: 0,
        penjelasan: "O adalah simbol kimia untuk unsur oksigen."
    },

    {
        id: 5,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Ibukota Indonesia saat ini adalah...",
        answers: ["Bandung", "Jakarta", "Surabaya", "Medan"],
        correct: 1,
        penjelasan: "Jakarta merupakan pusat pemerintahan dan ibu kota Indonesia dalam konteks saat ini."
    },

    {
        id: 6,
        kelas: "10",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Pergantian musim di Bumi terutama dipengaruhi oleh...",
        answers: [
            "Rotasi Bumi",
            "Revolusi Bumi dan kemiringan poros Bumi",
            "Gerhana Matahari",
            "Perubahan bentuk Bulan"
        ],
        correct: 1,
        penjelasan: "Revolusi Bumi bersama kemiringan sumbu rotasi menyebabkan perbedaan penerimaan cahaya Matahari sepanjang tahun."
    },

    {
        id: 7,
        kelas: "10",
        kategori: "Sains",
        tingkat: "Mudah",
        question: "Satuan SI untuk panjang adalah...",
        answers: ["Kilogram", "Meter", "Sekon", "Newton"],
        correct: 1,
        penjelasan: "Meter (m) merupakan satuan dasar SI untuk panjang."
    },

    {
        id: 8,
        kelas: "10",
        kategori: "Sains",
        tingkat: "Mudah",
        question: "Proses tumbuhan membuat makanan sendiri disebut...",
        answers: ["Respirasi", "Fotosintesis", "Transpirasi", "Ekskresi"],
        correct: 1,
        penjelasan: "Fotosintesis adalah proses tumbuhan membuat makanan menggunakan cahaya Matahari."
    },

    {
        id: 9,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Lambang negara Indonesia adalah...",
        answers: ["Garuda Pancasila", "Rajawali", "Cendrawasih", "Elang Jawa"],
        correct: 0,
        penjelasan: "Garuda Pancasila merupakan lambang negara Republik Indonesia."
    },

    {
        id: 10,
        kelas: "10",
        kategori: "Sains",
        tingkat: "Mudah",
        question: "Air membeku pada suhu...",
        answers: ["0°C", "10°C", "50°C", "100°C"],
        correct: 0,
        penjelasan: "Pada tekanan atmosfer normal, air membeku pada suhu 0°C."
    },

    {
        id: 11,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        tingkat: "Sedang",
        question: "Planet terbesar dalam tata surya adalah...",
        answers: ["Bumi", "Saturnus", "Jupiter", "Neptunus"],
        correct: 2,
        penjelasan: "Jupiter merupakan planet terbesar dalam tata surya."
    },

    {
        id: 12,
        kelas: "10",
        kategori: "Sains",
        tingkat: "Mudah",
        question: "Gas yang dibutuhkan manusia untuk respirasi adalah...",
        answers: ["Nitrogen", "Oksigen", "Karbon dioksida", "Helium"],
        correct: 1,
        penjelasan: "Manusia membutuhkan oksigen untuk proses respirasi sel."
    },

    {
        id: 13,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Proklamasi Kemerdekaan Indonesia dibacakan pada tanggal...",
        answers: [
            "17 Agustus 1945",
            "10 November 1945",
            "1 Juni 1945",
            "28 Oktober 1928"
        ],
        correct: 0,
        penjelasan: "Proklamasi Kemerdekaan Indonesia dibacakan pada 17 Agustus 1945."
    },

    {
        id: 14,
        kelas: "10",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Bagian sel yang mengatur aktivitas sel adalah...",
        answers: ["Ribosom", "Nukleus", "Vakuola", "Dinding sel"],
        correct: 1,
        penjelasan: "Nukleus atau inti sel mengandung materi genetik dan mengatur berbagai aktivitas sel."
    },

    {
        id: 15,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Semboyan bangsa Indonesia adalah...",
        answers: [
            "Tut Wuri Handayani",
            "Bhinneka Tunggal Ika",
            "Ing Ngarsa Sung Tuladha",
            "Merdeka Belajar"
        ],
        correct: 1,
        penjelasan: "Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu."
    },

    {
        id: 16,
        kelas: "10",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Gaya yang menyebabkan benda jatuh ke permukaan Bumi disebut...",
        answers: ["Gaya gesek", "Gaya magnet", "Gaya gravitasi", "Gaya listrik"],
        correct: 2,
        penjelasan: "Gaya gravitasi Bumi menarik benda menuju pusat Bumi."
    },

    {
        id: 17,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Alat untuk mengukur suhu disebut...",
        answers: ["Barometer", "Termometer", "Higrometer", "Anemometer"],
        correct: 1,
        penjelasan: "Termometer digunakan untuk mengukur suhu."
    },

    {
        id: 18,
        kelas: "10",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Perubahan zat dari cair menjadi gas disebut...",
        answers: ["Membeku", "Menguap", "Mengembun", "Menyublim"],
        correct: 1,
        penjelasan: "Menguap adalah perubahan wujud dari cair menjadi gas."
    },

    {
        id: 19,
        kelas: "10",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Samudra terluas di dunia adalah...",
        answers: ["Atlantik", "Hindia", "Pasifik", "Arktik"],
        correct: 2,
        penjelasan: "Samudra Pasifik merupakan samudra terluas di Bumi."
    },

    {
        id: 20,
        kelas: "10",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Satuan SI untuk massa adalah...",
        answers: ["Gram", "Kilogram", "Ton", "Miligram"],
        correct: 1,
        penjelasan: "Kilogram (kg) merupakan satuan dasar SI untuk massa."


    /* =====================================
       KELAS 11
    ===================================== */

    },

    {
        id: 21,
        kelas: "11",
        kategori: "Sains",
        tingkat: "Mudah",
        question: "Satuan SI untuk gaya adalah...",
        answers: ["Joule", "Newton", "Watt", "Pascal"],
        correct: 1,
        penjelasan: "Newton (N) merupakan satuan SI untuk gaya."
    },

    {
        id: 22,
        kelas: "11",
        kategori: "Sains",
        tingkat: "Mudah",
        question: "Gas yang paling banyak terdapat di atmosfer Bumi adalah...",
        answers: ["Oksigen", "Nitrogen", "Karbon dioksida", "Hidrogen"],
        correct: 1,
        penjelasan: "Nitrogen menyusun sekitar 78% atmosfer Bumi."
    },

    {
        id: 23,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Bahasa utama yang digunakan di Jepang adalah...",
        answers: ["Korea", "Mandarin", "Jepang", "Thai"],
        correct: 2,
        penjelasan: "Bahasa Jepang merupakan bahasa utama yang digunakan di Jepang."
    },

    {
        id: 24,
        kelas: "11",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Hormon yang membantu mengatur kadar gula darah adalah...",
        answers: ["Adrenalin", "Insulin", "Melatonin", "Tiroksin"],
        correct: 1,
        penjelasan: "Insulin membantu menurunkan kadar glukosa darah dengan membantu sel mengambil glukosa."
    },

    {
        id: 25,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Organisasi negara-negara di kawasan Asia Tenggara disebut...",
        answers: ["OPEC", "ASEAN", "NATO", "APEC"],
        correct: 1,
        penjelasan: "ASEAN adalah organisasi kerja sama negara-negara Asia Tenggara."
    },

    {
        id: 26,
        kelas: "11",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Organel yang dikenal sebagai tempat respirasi sel adalah...",
        answers: ["Ribosom", "Mitokondria", "Nukleus", "Lisosom"],
        correct: 1,
        penjelasan: "Mitokondria menghasilkan sebagian besar ATP melalui respirasi sel."
    },

    {
        id: 27,
        kelas: "11",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Hukum Newton II berkaitan dengan hubungan gaya, massa, dan...",
        answers: ["Jarak", "Percepatan", "Waktu", "Suhu"],
        correct: 1,
        penjelasan: "Hukum Newton II dirumuskan F = m × a, sehingga gaya berkaitan dengan massa dan percepatan."
    },

    {
        id: 28,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Candi Borobudur merupakan peninggalan agama...",
        answers: ["Islam", "Hindu", "Buddha", "Konghucu"],
        correct: 2,
        penjelasan: "Candi Borobudur merupakan peninggalan bercorak Buddha."
    },

    {
        id: 29,
        kelas: "11",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Rumus kimia karbon dioksida adalah...",
        answers: ["CO", "CO₂", "C₂O", "CaCO₃"],
        correct: 1,
        penjelasan: "Karbon dioksida tersusun dari satu atom karbon dan dua atom oksigen, sehingga rumusnya CO₂."
    },

    {
        id: 30,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Benda langit yang mengorbit sebuah planet disebut...",
        answers: ["Bintang", "Satelit", "Asteroid", "Komet"],
        correct: 1,
        penjelasan: "Satelit adalah benda langit yang mengorbit planet atau benda langit lainnya."
    },

    {
        id: 31,
        kelas: "11",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Bagian darah yang berfungsi mengangkut oksigen adalah...",
        answers: ["Plasma", "Trombosit", "Eritrosit", "Leukosit"],
        correct: 2,
        penjelasan: "Eritrosit mengandung hemoglobin yang mengikat dan mengangkut oksigen."
    },

    {
        id: 32,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Gunung tertinggi di dunia di atas permukaan laut adalah...",
        answers: ["Kilimanjaro", "Everest", "Fuji", "Elbrus"],
        correct: 1,
        penjelasan: "Gunung Everest merupakan gunung tertinggi di dunia jika diukur dari permukaan laut."
    },

    {
        id: 33,
        kelas: "11",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Larutan dengan pH kurang dari 7 bersifat...",
        answers: ["Basa", "Asam", "Netral", "Garam"],
        correct: 1,
        penjelasan: "Larutan dengan pH kurang dari 7 dikategorikan sebagai larutan asam."
    },

    {
        id: 34,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Planet yang memiliki cincin paling terkenal adalah...",
        answers: ["Mars", "Venus", "Saturnus", "Merkurius"],
        correct: 2,
        penjelasan: "Saturnus terkenal dengan sistem cincinnya yang sangat jelas."
    },

    {
        id: 35,
        kelas: "11",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Alat untuk mengukur tekanan udara disebut...",
        answers: ["Termometer", "Barometer", "Anemometer", "Higrometer"],
        correct: 1,
        penjelasan: "Barometer digunakan untuk mengukur tekanan atmosfer."
    },

    {
        id: 36,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        tingkat: "Sedang",
        question: "Sungai terpanjang yang mengalir di Indonesia adalah...",
        answers: ["Mahakam", "Kapuas", "Musi", "Brantas"],
        correct: 1,
        penjelasan: "Sungai Kapuas di Kalimantan merupakan sungai terpanjang di Indonesia."
    },

    {
        id: 37,
        kelas: "11",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Proses pembelahan sel yang menghasilkan dua sel anak identik disebut...",
        answers: ["Meiosis", "Mitosis", "Fertilisasi", "Transkripsi"],
        correct: 1,
        penjelasan: "Mitosis menghasilkan dua sel anak dengan materi genetik yang pada dasarnya sama dengan sel induknya."
    },

    {
        id: 38,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Mata uang Jepang adalah...",
        answers: ["Won", "Yuan", "Yen", "Ringgit"],
        correct: 2,
        penjelasan: "Mata uang resmi Jepang adalah Yen."
    },

    {
        id: 39,
        kelas: "11",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Energi yang tersimpan dalam makanan termasuk energi...",
        answers: ["Kimia", "Bunyi", "Cahaya", "Nuklir"],
        correct: 0,
        penjelasan: "Makanan menyimpan energi dalam bentuk energi kimia."
    },

    {
        id: 40,
        kelas: "11",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Pulau terbesar di Indonesia adalah...",
        answers: ["Jawa", "Bali", "Kalimantan", "Madura"],
        correct: 2,
        penjelasan: "Kalimantan merupakan pulau terbesar di Indonesia jika wilayah Indonesia di pulau tersebut yang diperhitungkan."


    /* =====================================
       KELAS 12
    ===================================== */

    },

    {
        id: 41,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Mudah",
        question: "Rumus kimia air adalah...",
        answers: ["CO₂", "O₂", "H₂O", "NaCl"],
        correct: 2,
        penjelasan: "Satu molekul air tersusun atas dua atom hidrogen dan satu atom oksigen."
    },

    {
        id: 42,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Energi yang dimiliki benda karena gerakannya disebut energi...",
        answers: ["Potensial", "Kinetik", "Kimia", "Nuklir"],
        correct: 1,
        penjelasan: "Energi kinetik adalah energi yang dimiliki benda karena gerakannya."
    },

    {
        id: 43,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Proklamasi Kemerdekaan Indonesia dibacakan pada tahun...",
        answers: ["1942", "1945", "1949", "1950"],
        correct: 1,
        penjelasan: "Indonesia memproklamasikan kemerdekaannya pada 17 Agustus 1945."
    },

    {
        id: 44,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Hukum Newton II menyatakan hubungan antara gaya, massa, dan...",
        answers: ["Kecepatan", "Percepatan", "Jarak", "Waktu"],
        correct: 1,
        penjelasan: "Hukum Newton II menyatakan F = m × a."
    },

    {
        id: 45,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Molekul pembawa informasi genetik pada sebagian besar makhluk hidup adalah...",
        answers: ["Protein", "DNA", "Lemak", "Glukosa"],
        correct: 1,
        penjelasan: "DNA menyimpan informasi genetik yang diwariskan dari satu generasi ke generasi berikutnya."
    },

    {
        id: 46,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Badan dunia yang bergerak dalam bidang pendidikan, ilmu pengetahuan, dan kebudayaan adalah...",
        answers: ["WHO", "UNESCO", "UNICEF", "IMF"],
        correct: 1,
        penjelasan: "UNESCO merupakan badan PBB yang berkaitan dengan pendidikan, ilmu pengetahuan, dan kebudayaan."
    },

    {
        id: 47,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Satuan SI untuk energi adalah...",
        answers: ["Newton", "Joule", "Watt", "Pascal"],
        correct: 1,
        penjelasan: "Joule (J) merupakan satuan SI untuk energi."
    },

    {
        id: 48,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Benua yang dikenal sebagai Benua Hitam adalah...",
        answers: ["Asia", "Afrika", "Eropa", "Australia"],
        correct: 1,
        penjelasan: "Afrika secara historis sering disebut Benua Hitam, meskipun istilah tersebut kini dianggap kurang tepat dan jarang digunakan dalam konteks akademik."
    },

    {
        id: 49,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Reaksi antara asam dan basa menghasilkan...",
        answers: ["Asam saja", "Basa saja", "Garam dan air", "Oksigen"],
        correct: 2,
        penjelasan: "Reaksi netralisasi antara asam dan basa umumnya menghasilkan garam dan air."
    },

    {
        id: 50,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Alat untuk mengukur kuat arus listrik disebut...",
        answers: ["Voltmeter", "Amperemeter", "Ohmmeter", "Barometer"],
        correct: 1,
        penjelasan: "Amperemeter digunakan untuk mengukur kuat arus listrik."
    },

    {
        id: 51,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Sumber energi utama bagi kehidupan di Bumi adalah...",
        answers: ["Bulan", "Matahari", "Angin", "Batu bara"],
        correct: 1,
        penjelasan: "Matahari merupakan sumber energi utama bagi hampir seluruh kehidupan dan banyak proses alam di Bumi."
    },

    {
        id: 52,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Sistem pemerintahan Indonesia adalah...",
        answers: [
            "Presidensial",
            "Monarki absolut",
            "Parlementer murni",
            "Teokrasi"
        ],
        correct: 0,
        penjelasan: "Indonesia menggunakan sistem pemerintahan presidensial."
    },

    {
        id: 53,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Bagian mata yang mengatur banyaknya cahaya yang masuk adalah...",
        answers: ["Retina", "Iris", "Kornea", "Lensa"],
        correct: 1,
        penjelasan: "Iris mengatur ukuran pupil sehingga membantu mengatur jumlah cahaya yang masuk ke mata."
    },

    {
        id: 54,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Negara dengan julukan Negeri Sakura adalah...",
        answers: ["Korea Selatan", "Jepang", "Tiongkok", "Thailand"],
        correct: 1,
        penjelasan: "Jepang dikenal sebagai Negeri Sakura karena bunga sakura menjadi salah satu simbol budayanya."
    },

    {
        id: 55,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Kecepatan cahaya di ruang hampa kira-kira...",
        answers: [
            "3 × 10⁸ m/s",
            "3 × 10⁶ m/s",
            "3 × 10⁴ m/s",
            "3 × 10² m/s"
        ],
        correct: 0,
        penjelasan: "Kecepatan cahaya di ruang hampa sekitar 3 × 10⁸ meter per detik."
    },

    {
        id: 56,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Tokoh yang dikenal sebagai Bapak Pendidikan Nasional adalah...",
        answers: [
            "Ki Hajar Dewantara",
            "Soekarno",
            "Mohammad Hatta",
            "B.J. Habibie"
        ],
        correct: 0,
        penjelasan: "Ki Hajar Dewantara dikenal sebagai Bapak Pendidikan Nasional Indonesia."
    },

    {
        id: 57,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Alat yang mengubah energi mekanik menjadi energi listrik adalah...",
        answers: ["Motor listrik", "Generator", "Transformator", "Baterai"],
        correct: 1,
        penjelasan: "Generator mengubah energi mekanik menjadi energi listrik."
    },

    {
        id: 58,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Sedang",
        question: "Garis khatulistiwa melewati wilayah Indonesia, salah satunya adalah...",
        answers: ["Sumatra", "Jawa", "Bali", "Madura"],
        correct: 0,
        penjelasan: "Garis khatulistiwa melewati beberapa wilayah Indonesia, termasuk Pulau Sumatra dan Kalimantan."
    },

    {
        id: 59,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Zat yang mempercepat reaksi kimia tanpa habis bereaksi disebut...",
        answers: ["Reaktan", "Katalis", "Produk", "Pelarut"],
        correct: 1,
        penjelasan: "Katalis mempercepat laju reaksi tanpa dikonsumsi secara permanen dalam reaksi."
    },

    {
        id: 60,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Alat untuk melihat benda yang sangat kecil seperti sel disebut...",
        answers: ["Teleskop", "Mikroskop", "Periskop", "Stetoskop"],
        correct: 1,
        penjelasan: "Mikroskop digunakan untuk mengamati objek berukuran sangat kecil."
    },

    {
        id: 61,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Perubahan energi pada panel surya adalah...",
        answers: [
            "Energi listrik menjadi cahaya",
            "Energi cahaya menjadi listrik",
            "Energi kimia menjadi panas",
            "Energi gerak menjadi listrik"
        ],
        correct: 1,
        penjelasan: "Panel surya mengubah energi cahaya Matahari menjadi energi listrik."
    },

    {
        id: 62,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Bintang terdekat dengan Bumi adalah...",
        answers: ["Sirius", "Matahari", "Vega", "Polaris"],
        correct: 1,
        penjelasan: "Matahari adalah bintang yang paling dekat dengan Bumi."
    },

    {
        id: 63,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Sifat benda yang mampu kembali ke bentuk semula setelah gaya dihilangkan disebut...",
        answers: ["Elastisitas", "Plastisitas", "Kerapatan", "Konduktivitas"],
        correct: 0,
        penjelasan: "Elastisitas adalah kemampuan benda untuk kembali ke bentuk semula setelah gaya penyebab perubahan bentuk dihilangkan."
    },

    {
        id: 64,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Laut yang terletak di antara Pulau Jawa dan Pulau Kalimantan adalah...",
        answers: ["Laut Jawa", "Laut Banda", "Laut Arafura", "Laut Flores"],
        correct: 0,
        penjelasan: "Laut Jawa berada di antara Pulau Jawa dan Kalimantan."
    },

    {
        id: 65,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Partikel penyusun inti atom adalah...",
        answers: [
            "Elektron dan neutron",
            "Proton dan neutron",
            "Proton dan elektron",
            "Elektron saja"
        ],
        correct: 1,
        penjelasan: "Inti atom tersusun atas proton dan neutron, sedangkan elektron berada di sekitar inti."
    },

    {
        id: 66,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Bahasa yang digunakan sebagai bahasa persatuan Indonesia adalah...",
        answers: [
            "Bahasa Jawa",
            "Bahasa Sunda",
            "Bahasa Indonesia",
            "Bahasa Melayu Malaysia"
        ],
        correct: 2,
        penjelasan: "Bahasa Indonesia berkedudukan sebagai bahasa persatuan dan bahasa negara."
    },

    {
        id: 67,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Proses perubahan dari gas menjadi cair disebut...",
        answers: ["Menguap", "Menyublim", "Mengembun", "Membeku"],
        correct: 2,
        penjelasan: "Mengembun adalah perubahan wujud dari gas menjadi cair."
    },

    {
        id: 68,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Sedang",
        question: "Pulau yang dikenal sebagai Pulau Dewata adalah...",
        answers: ["Lombok", "Bali", "Jawa", "Sumatra"],
        correct: 1,
        penjelasan: "Bali dikenal dengan julukan Pulau Dewata."
    },

    {
        id: 69,
        kelas: "12",
        kategori: "Sains",
        tingkat: "Sedang",
        question: "Vitamin yang dapat dibentuk tubuh dengan bantuan sinar Matahari adalah...",
        answers: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        correct: 3,
        penjelasan: "Paparan sinar UVB membantu kulit membentuk vitamin D."
    },

    {
        id: 70,
        kelas: "12",
        kategori: "Pengetahuan Umum",
        tingkat: "Mudah",
        question: "Satuan waktu dalam SI adalah...",
        answers: ["Menit", "Jam", "Sekon", "Hari"],
        correct: 2,
        penjelasan: "Sekon atau detik (s) merupakan satuan dasar SI untuk waktu."
    }
];


/* =========================================
   ELEMENT HTML
========================================= */

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


/* =========================================
   GAME VARIABLES
========================================= */

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


/* =========================================
   PILIH KELAS
========================================= */

document.querySelectorAll(".class-btn").forEach(button => {

    button.addEventListener("click", () => {

        playSound("click");

        document
            .querySelectorAll(".class-btn")
            .forEach(btn => btn.classList.remove("selected"));

        button.classList.add("selected");

        selectedClass = button.dataset.class;
    });

});


/* =========================================
   PILIH KATEGORI
========================================= */

document.querySelectorAll(".category-btn").forEach(button => {

    button.addEventListener("click", () => {

        playSound("click");

        document
            .querySelectorAll(".category-btn")
            .forEach(btn => btn.classList.remove("selected"));

        button.classList.add("selected");

        selectedCategory = button.dataset.category;
    });

});


/* =========================================
   MULAI QUIZ
========================================= */

startBtn.addEventListener("click", () => {

    playSound("click");

    startQuiz();

});


function startQuiz() {

    quizQuestions = questions.filter(question => {

        const classMatch =
            question.kelas === selectedClass;

        const categoryMatch =
            selectedCategory === "Semua" ||
            question.kategori === selectedCategory;

        return classMatch && categoryMatch;

    });


    if (quizQuestions.length === 0) {

        alert(
            "Belum ada soal untuk pilihan tersebut 😭🍪"
        );

        return;
    }


    /*
       SHUFFLE SOAL
    */

    quizQuestions.sort(() => Math.random() - 0.5);


    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;


    showScreen(quizScreen);

    showQuestion();

}


/* =========================================
   TAMPILKAN SOAL
========================================= */

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
       BUAT PILIHAN JAWABAN
    */

    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer-btn";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${answer}`;


        button.addEventListener("click", () => {

            checkAnswer(index, button);

        });


        answersContainer.appendChild(button);

    });


    /*
       PROGRESS BAR
    */

    const progress =
        (currentQuestion / quizQuestions.length) * 100;

    progressFill.style.width =
        `${progress}%`;


    startTimer();

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    timeLeft = 20;

    timerElement.textContent =
        `⏱️ ${timeLeft}`;


    timer = setInterval(() => {

        timeLeft--;

        timerElement.textContent =
            `⏱️ ${timeLeft}`;


        if (timeLeft <= 5 && timeLeft > 0) {

            playSound("tick");

        }


        if (timeLeft <= 0) {

            clearInterval(timer);

            timeOut();

        }

    }, 1000);

}


/* =========================================
   CEK JAWABAN
========================================= */

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
        document.querySelectorAll(".answer-btn");


    buttons.forEach(button => {

        button.disabled = true;

    });


    /*
       JAWABAN BENAR
    */

    if (selectedIndex === question.correct) {

        playSound("correct");

        selectedButton.classList.add("correct");

        feedback.innerHTML =
            `🎉 <strong>Benar!</strong> Cookie bangga sama kamu! 🍪<br><br>
             💡 ${question.penjelasan}`;


        score += 10;

        correctAnswers++;

    }


    /*
       JAWABAN SALAH
    */

    else {

        playSound("wrong");

        selectedButton.classList.add("wrong");

        buttons[question.correct]
            .classList.add("correct");


        feedback.innerHTML =
            `💡 <strong>Belum tepat!</strong><br>
             Jawaban yang benar adalah <strong>${question.answers[question.correct]}</strong>.<br><br>
             📚 ${question.penjelasan}`;


        wrongAnswers++;

    }


    scoreDisplay.textContent =
        `⭐ ${score}`;


    nextBtn.style.display =
        "block";

}


/* =========================================
   WAKTU HABIS
========================================= */

function timeOut() {

    if (answered) return;

    answered = true;

    playSound("wrong");


    const question =
        quizQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(".answer-btn");


    buttons.forEach(button => {

        button.disabled = true;

    });


    buttons[question.correct]
        .classList.add("correct");


    feedback.innerHTML =
        `⏰ <strong>Waktu habis!</strong><br>
         Jawabannya adalah <strong>${question.answers[question.correct]}</strong>.<br><br>
         📚 ${question.penjelasan}`;


    wrongAnswers++;

    nextBtn.style.display =
        "block";

}


/* =========================================
   TOMBOL NEXT
========================================= */

nextBtn.addEventListener("click", () => {

    playSound("click");

    currentQuestion++;


    if (currentQuestion >= quizQuestions.length) {

        finishQuiz();

    }

    else {

        showQuestion();

    }

});


/* =========================================
   SELESAI QUIZ
========================================= */

function finishQuiz() {

    clearInterval(timer);

    playSound("finish");

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


    /*
       HASIL BERDASARKAN NILAI
    */

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


/* =========================================
   RESTART
========================================= */

restartBtn.addEventListener("click", () => {

    playSound("click");

    startQuiz();

});


/* =========================================
   HOME
========================================= */

homeBtn.addEventListener("click", () => {

    playSound("click");

    clearInterval(timer);

    showScreen(homeScreen);

});


/* =========================================
   QUIT
========================================= */

quitBtn.addEventListener("click", () => {

    playSound("click");

    clearInterval(timer);

    showScreen(homeScreen);

});


/* =========================================
   GANTI SCREEN
========================================= */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(item => {

            item.classList.remove("active");

        });


    screen.classList.add("active");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
