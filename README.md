# eshop
**ASSIGNMENT 13**

 saya membuat ecommerce web untuk tugas akhir
 sejauh ini saya menggunakan:
 - Frontend HTML
 - Backend Node.js
 - BaaS Firebase

layanan cloud yang sudah saya gunakan di App ini:
- realtime database
- firebase authentication

**ASSIGNMENT 14**

proyek ini merupakan aplikasi e-commerce yang sedang saya kembangkan sebagai tugas akhir. Fungsi yang digunakan meliputi HTML untuk frontend, Node.js untuk backend, dan layanan Firebase sebagai Backend-as-a-Service (BaaS).​

Dalam pengembangan aplikasi ini, layanan Firebase yang telah diimplementasikan mencakup:​
- Firebase Realtime Database: Digunakan untuk menyimpan dan menyinkronkan data pengguna secara real-time.​
- Firebase Authentication: Digunakan untuk mengelola proses autentikasi pengguna, memungkinkan fitur login dan pendaftaran akun.​

Berikut beberapa struktur proyek :​
firebase-config.js:​
- berisi konfigurasi untuk menghubungkan aplikasi dengan layanan Firebase, seperti API key dan informasi proyek.​
- package.json dan package-lock.json:​ menggunakan Node.js dan berisi daftar dependensi yang diperlukan untuk menjalankan aplikasi.​
Direktori public:​
- Biasanya berisi file-file statis seperti HTML, CSS, dan JavaScript.​
Direktori node_modules:​
- paket Node.js yang diinstal melalui npm, sesuai dengan daftar dependensi di package.json.​

untuk spesifik lanjut mengenai fitur yang lain masih saya kembangkan dan on progress, struktur dan file yang ada, saya implement integrasi dasar dengan Firebase untuk autentikasi dan database real-time. Untuk detail lebih lanjut mengenai fitur e-commerce lainnya, seperti manajemen produk, keranjang belanja, atau pemrosesan pembayaran masih saya kembangkan.


di bagian contact ini saya gunakan untuk mengirim email melalui backend menggunakan fetch API. masih progress jadi jika tidak bisa direct send ke email langsung kemungkinan akan menggunakan third party tambahan
![contact](https://github.com/user-attachments/assets/6fa42254-ca2f-4144-9bcb-084300eed06c)

disini saya gunakan registrasi akun (sign-up) menggunakan Firebase Authentication. user yang mendaftar akun baru akan masuk ke firebase, tambahannya Jika berhasil, pengguna akan diarahkan ke halaman login. Jika gagal, akan muncul pesan kesalahan.
![signup](https://github.com/user-attachments/assets/413ea8eb-201e-4bc3-9b91-5e93d4a34814)

di cart ini saya menambhakan CRUD yang terconnect langsung ke real-time database
![cart](https://github.com/user-attachments/assets/29f666c2-23d4-48ab-ab94-41518b6c1dd2)

di index saya menambhakan search yang nantinya akan saya gunakan sebagai CRUD 
![index](https://github.com/user-attachments/assets/10594932-1230-42bf-b5a0-4a007d0b46ee)

wishlist saya juga menambahkan CRUD
![wishlist](https://github.com/user-attachments/assets/1b66d88b-d4c9-4f10-93d3-82571f95efa6)
