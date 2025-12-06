const modules = [
    {
        id: 'fundamental-coding',
        title: 'Modul 1: Fundamental Coding',
        description: 'Pahami konsep dasar, logika, dan terminologi yang digunakan di semua bahasa pemrograman.',
        chapters: [
            {
                title: 'Bab 1: Apa itu Coding? (Pengantar)',
                content: `
                    <p><strong>Coding (Pemrograman)</strong> adalah proses memberikan serangkaian instruksi yang spesifik dan logis kepada komputer untuk menjalankan tugas tertentu. Instruksi ini ditulis dalam <strong>bahasa pemrograman</strong>.</p>
                    <ul>
                        <li><strong>Kode Sumber (Source Code):</strong> Kumpulan instruksi yang ditulis oleh *programmer*.</li>
                        <li><strong>Algoritma:</strong> Serangkaian langkah logis yang terdefinisi untuk memecahkan masalah. Coding adalah implementasi dari algoritma.</li>
                    </ul>
                `
            },
            {
                title: 'Bab 2: Variabel dan Tipe Data Primitif',
                content: `
                    <p><strong>Variabel</strong> adalah wadah penampung nilai data di memori. Setiap variabel memiliki <strong>Tipe Data</strong> yang menentukan jenis nilai yang disimpannya (String, Number, Boolean, dll.).</p>
                    <pre><code>let namaPengguna = "Rudi"; // String
const usia = 25; // Number
let isAktif = true; // Boolean</code></pre>
                `
            },
            {
                title: 'Bab 3: Logika Kontrol (Percabangan)',
                content: `
                    <p>Logika kontrol memungkinkan program membuat keputusan, menentukan blok kode mana yang akan dieksekusi berdasarkan kondisi tertentu. Yang paling umum adalah **Percabangan If/Else**.</p>
                    <pre><code>let nilai = 75;

if (nilai >= 80) {
    console.log("Nilai A");
} else {
    console.log("Nilai B atau C");
}</code></pre>
                `
            },
            {
                title: 'Bab 4: Pengulangan (Looping)',
                content: `
                    <p><strong>Looping</strong> digunakan untuk mengeksekusi blok kode yang sama berulang kali sampai kondisi tertentu tidak lagi terpenuhi. Contoh paling umum adalah **For Loop**.</p>
                    <pre><code>// Menghitung 1 sampai 5
for (let i = 1; i <= 5; i++) {
    console.log("Angka ke-" + i);
}</code></pre>
                `
            }
        ]
    },
    {
        id: 'web-dev-101',
        title: 'Modul 2: Pengembangan Web 101 (Frontend)',
        description: 'Pelajari dasar-dasar membuat tampilan visual website menggunakan HTML dan CSS.',
        chapters: [
            {
                title: 'Bab 1: Struktur Dasar HTML5',
                content: `
                    <p>HTML adalah bahasa *markup* untuk menciptakan dan menyusun konten di Web. Setiap elemen web dibungkus dalam **tag** HTML (misal: <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;img&gt;</code>).</p>
                    <p>Elemen-elemen penting: <code>&lt;head&gt;</code> (metadata) dan <code>&lt;body&gt;</code> (konten terlihat).</p>
                `
            },
            {
                title: 'Bab 2: Memahami Selector dan Cascading CSS',
                content: `
                    <p><strong>CSS</strong> mendefinisikan bagaimana elemen HTML ditampilkan. **Selector** (Tipe, ID, Class) adalah alat utama untuk menargetkan elemen.</p>
                    <p>Konsep <strong>Cascading</strong> menentukan aturan mana yang harus diterapkan jika ada konflik gaya.</p>
                    <pre><code>/* Class Selector */
.tombol-aksi {
    color: white;
    background-color: #007bff;
}</code></pre>
                    

[Image of HTML and CSS working together]

                `
            },
            {
                title: 'Bab 3: Model Kotak (The Box Model)',
                content: `
                    <p>Setiap elemen HTML diperlakukan oleh *browser* sebagai kotak persegi. Model Kotak terdiri dari empat lapisan: <strong>Content</strong>, <strong>Padding</strong>, <strong>Border</strong>, dan <strong>Margin</strong>.</p>
                    <p>Ini adalah kunci untuk tata letak yang akurat.</p>
                    <pre><code>.kotak {
    padding: 10px;    /* Ruang dalam */
    border: 1px solid black;
    margin: 20px;     /* Ruang luar */
}</code></pre>
                `
            },
            {
                title: 'Bab 4: Tata Letak Modern: Flexbox dan Grid',
                content: `
                    <p><strong>Flexbox</strong> adalah sistem tata letak satu dimensi (baris atau kolom). <strong>CSS Grid</strong> adalah sistem tata letak dua dimensi (baris dan kolom secara bersamaan). Keduanya esensial untuk *responsive design*.</p>
                `
            }
        ]
    },
    {
        id: 'javascript-fundamentals',
        title: 'Modul 3: Dasar-Dasar JavaScript',
        description: 'Kuasai bahasa pemrograman yang membuat website interaktif dan dinamis.',
        chapters: [
            {
                title: 'Bab 1: DOM Manipulation dan Event Listener',
                content: `
                    <p><strong>DOM (Document Object Model) Manipulation</strong> adalah bagaimana JavaScript dapat mengubah struktur, gaya, dan konten dokumen HTML secara dinamis.</p>
                    <p><strong>Event Listener</strong> digunakan untuk merespons interaksi pengguna, seperti klik tombol (<code>click</code>).</p>
                    <pre><code>document.getElementById('tombol').addEventListener('click', function() {
    alert('Tombol diklik!');
});</code></pre>
                `
            },
            {
                title: 'Bab 2: Fungsi, Scope, dan Hoisting',
                content: `
                    <p><strong>Fungsi</strong> adalah blok kode yang dapat digunakan kembali. <strong>Scope</strong> menentukan di mana variabel dapat diakses (Global vs. Local/Block). <strong>Hoisting</strong> adalah mekanisme di mana deklarasi variabel atau fungsi dipindahkan ke atas cakupan sebelum kode dieksekusi.</p>
                `
            },
            {
                title: 'Bab 3: Array dan Method-nya',
                content: `
                    <p><strong>Array</strong> digunakan untuk menyimpan daftar item dalam urutan. Method penting termasuk <code>.push()</code> (tambah), <code>.pop()</code> (hapus), <code>.map()</code>, dan <code>.filter()</code>.</p>
                    <pre><code>let angka = [1, 2, 3];
angka.push(4); // [1, 2, 3, 4]</code></pre>
                `
            },
            {
                title: 'Bab 4: Object dan JSON',
                content: `
                    <p><strong>Object</strong> digunakan untuk menyimpan data dalam format pasangan **kunci:nilai** (key:value). <strong>JSON (JavaScript Object Notation)</strong> adalah format data yang umum untuk transmisi data di web.</p>
                `
            }
        ]
    },
    {
        id: 'javascript-lanjutan',
        title: 'Modul 4: JavaScript Lanjutan (ES6+)',
        description: 'Pelajari fitur modern JavaScript seperti Arrow Functions, Promises, dan Asynchronous Programming.',
        chapters: [
            {
                title: 'Bab 1: Fitur Modern ES6 (Arrow & Destructuring)',
                content: `
                    <p><strong>ES6 (ECMAScript 2015)</strong> memperkenalkan sintaks yang lebih ringkas. Contoh: **Arrow Functions** dan **Destructuring Assignment** untuk mengekstrak nilai dari Array/Object dengan cepat.</p>
                `
            },
            {
                title: 'Bab 2: Asynchronous JavaScript (Promises)',
                content: `
                    <p>Kode **Asynchronous** (non-blocking) penting untuk tugas yang memakan waktu (misalnya, mengambil data dari server). <strong>Promise</strong> adalah objek yang merepresentasikan penyelesaian atau kegagalan operasi *asynchronous*.</p>
                `
            },
            {
                title: 'Bab 3: Async/Await',
                content: `
                    <p><strong>Async/Await</strong> adalah cara modern dan mudah dibaca untuk bekerja dengan Promises, memungkinkan kode *asynchronous* ditulis seolah-olah *synchronous*.</p>
                    <pre><code>async function getData() {
    const response = await fetch('url-api');
    // ...
}</code></pre>
                `
            },
            {
                title: 'Bab 4: Class dan OOP Dasar',
                content: `
                    <p>JavaScript mendukung **Object-Oriented Programming (OOP)**. **Class** adalah cetak biru untuk membuat objek baru, memudahkan dalam membuat struktur kode yang besar dan terorganisir.</p>
                `
            }
        ]
    },
    {
        id: 'git-version-control',
        title: 'Modul 5: Git dan Kontrol Versi',
        description: 'Pelajari Git dan GitHub, alat penting bagi setiap Developer untuk kolaborasi dan manajemen kode.',
        chapters: [
            {
                title: 'Bab 1: Apa itu Kontrol Versi dan Git?',
                content: `
                    <p><strong>Version Control System (VCS)</strong> seperti **Git** merekam perubahan pada file dari waktu ke waktu. Ini memungkinkan Anda kembali ke versi sebelumnya dan mengelola proyek.</p>
                `
            },
            {
                title: 'Bab 2: Konsep Dasar Git (Staging & Commit)',
                content: `
                    <p>Perubahan kode melalui tiga tahap: <strong>Working Directory</strong> → <strong>Staging Area</strong> (<code>git add</code>) → <strong>Repository</strong> (<code>git commit</code>).</p>
                    <pre><code>git commit -m "Fitur baru selesai"</code></pre>
                `
            },
            {
                title: 'Bab 3: Branching dan Merging',
                content: `
                    <p><strong>Branch (Cabang)</strong> adalah versi independen dari kode Anda, memungkinkan Anda bekerja pada fitur baru tanpa merusak kode utama. **Merging** adalah proses menggabungkan perubahan dari satu cabang ke cabang lain.</p>
                `
            },
            {
                title: 'Bab 4: GitHub dan Remote Repository',
                content: `
                    <p><strong>GitHub</strong> adalah layanan hosting untuk *repository* Git. Perintah <code>git push</code> mengunggah perubahan lokal ke GitHub, dan <code>git pull</code> mengunduh perubahan dari sana.</p>
                `
            }
        ]
    }
    // TAMBAHKAN MODUL BARU ANDA DI SINI
];