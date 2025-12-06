document.addEventListener('DOMContentLoaded', () => {
    // Hanya tambahkan event listener jika kita berada di halaman otentikasi (index.html)
    if (document.getElementById('auth-container')) {
        setupAuthEventListeners();
        checkAuthStatus(); // Cek status di index.html untuk redirect jika sudah login
    }
});

const IS_LOGGED_IN_KEY = 'isLoggedIn';
const USER_DATA_KEY = 'users'; 

/**
 * Mendapatkan daftar pengguna yang tersimpan di Local Storage.
 * @returns {Array} Daftar objek pengguna.
 */
function getStoredUsers() {
    const usersJson = localStorage.getItem(USER_DATA_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
}

/**
 * Menyiapkan semua event listener untuk formulir Sign Up dan Log In.
 */
function setupAuthEventListeners() {
    // Tombol switch Sign Up/Log In
    document.getElementById('show-login')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('sign-up-view').classList.add('hidden');
        document.getElementById('log-in-view').classList.remove('hidden');
    });

    document.getElementById('show-signup')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('log-in-view').classList.add('hidden');
        document.getElementById('sign-up-view').classList.remove('hidden');
    });

    // Handle Formulir Sign Up - Menyimpan data pengguna
    document.getElementById('signup-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value; 

        const existingUsers = getStoredUsers();

        // Cek duplikasi
        if (existingUsers.some(user => user.username === username || user.email === email)) {
            alert('Gagal daftar. Nama pengguna atau email sudah terdaftar!');
            return;
        }

        const newUser = { username, email, password };
        existingUsers.push(newUser);
        
        // Simpan daftar pengguna yang diperbarui ke Local Storage
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(existingUsers));

        alert('Pendaftaran berhasil! Silakan masuk.');
        // Pindah ke layar Log In
        document.getElementById('sign-up-view').classList.add('hidden');
        document.getElementById('log-in-view').classList.remove('hidden');
    });

    // Handle Formulir Log In - Memvalidasi data terhadap data Sign Up
    document.getElementById('login-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const identifier = document.getElementById('login-username').value; 
        const password = document.getElementById('login-password').value;

        const storedUsers = getStoredUsers();
        
        // Cari pengguna yang cocok (harus sudah Sign Up)
        const userFound = storedUsers.find(user => 
            (user.username === identifier || user.email === identifier) && user.password === password
        );

        if (userFound) {
            // Log In Berhasil
            localStorage.setItem(IS_LOGGED_IN_KEY, 'true');
            alert('Login berhasil! Selamat datang kembali.');
            window.location.href = 'home.html'; 
        } else {
            // Log In Gagal
            alert('Login gagal. Nama pengguna/Email atau Kata Sandi salah, atau Anda belum mendaftar.');
            document.getElementById('login-password').value = ''; 
        }
    });
}

/**
 * Memeriksa status login dan mengarahkan pengguna.
 */
function checkAuthStatus() {
    const isLoggedIn = localStorage.getItem(IS_LOGGED_IN_KEY) === 'true';
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (isLoggedIn) {
        // Jika sudah login, dan berada di halaman otentikasi, redirect ke home
        if (currentPage === 'index.html') {
            window.location.href = 'home.html';
        }
    } else {
        // Jika belum login, dan TIDAK di halaman otentikasi, redirect ke index.html
        if (currentPage !== 'index.html') {
            alert('Anda harus Masuk untuk mengakses halaman ini.');
            window.location.href = 'index.html';
        }
    }
}

/**
 * Menangani proses Log Out.
 */
function logout() {
    localStorage.removeItem(IS_LOGGED_IN_KEY);
    localStorage.removeItem('currentModuleId'); 
    alert('Anda berhasil Keluar (Log out).');
    window.location.href = 'index.html';
}

/**
 * Menampilkan semua modul ke modules.html
 */
function renderModuleList() {
    if (typeof modules === 'undefined') return; 

    const moduleListElement = document.getElementById('module-list');
    if (!moduleListElement) return;

    moduleListElement.innerHTML = ''; 

    modules.forEach(module => {
        const card = document.createElement('div');
        card.className = 'module-card';
        card.innerHTML = `
            <h3>${module.title}</h3>
            <p>${module.description}</p>
        `;
        // Gunakan fungsi showModuleDetail yang ada di modules.html untuk navigasi
        card.addEventListener('click', () => showModuleDetail(module.id)); 
        moduleListElement.appendChild(card);
    });
}