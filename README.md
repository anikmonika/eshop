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


1. di bagian contact ini saya gunakan untuk mengirim email melalui backend menggunakan fetch API. masih progress jadi jika tidak bisa direct send ke email langsung kemungkinan akan menggunakan third party tambahan
![contact](https://github.com/user-attachments/assets/6fa42254-ca2f-4144-9bcb-084300eed06c)

2. disini saya gunakan registrasi akun (sign-up) menggunakan Firebase Authentication. user yang mendaftar akun baru akan masuk ke firebase, tambahannya Jika berhasil, pengguna akan diarahkan ke halaman login. Jika gagal, akan muncul pesan kesalahan.
![signup](https://github.com/user-attachments/assets/413ea8eb-201e-4bc3-9b91-5e93d4a34814)

3. di cart ini saya menambhakan CRUD yang terconnect langsung ke real-time database
![cart](https://github.com/user-attachments/assets/29f666c2-23d4-48ab-ab94-41518b6c1dd2)

4. di index saya menambhakan search yang nantinya akan saya gunakan sebagai CRUD 
![index](https://github.com/user-attachments/assets/10594932-1230-42bf-b5a0-4a007d0b46ee)

5. wishlist saya juga menambahkan CRUD
![wishlist](https://github.com/user-attachments/assets/1b66d88b-d4c9-4f10-93d3-82571f95efa6)


**ASSIGNMENT 15**


Laporan lanjutan:
- webmailer menggunakan Firebase yaitu setelah user register akan dikirim email untuk verifikasi sudah saya tambahkan.
- fitur register dan login menggunakan Firebase Authentication sudah di tambahkan.
-  total 12 CRUD (misal 3 fungsi create, 3 fungsi read, 3 fungsi update, dan 3 fungsi delete) yang dikoneksikan ke Firebase Realtime Database, belum semua terpenuhi.
- penambahan CSS pada setiap halaman

  
**1. Fitur-Fitur yang Telah Diimplementasikan**
a. Halaman Cart (Keranjang)
   - Fitur Tambah Produk ke Cart: Pengguna dapat menambahkan produk dari halaman produk ke dalam keranjang belanja.
   - Fitur Hapus Produk dari Cart: Pengguna dapat menghapus produk yang tidak diinginkan dari daftar cart.
   - Fitur Modifikasi Jumlah Produk: Pengguna dapat menambah atau mengurangi jumlah item yang ingin dibeli langsung dari halaman cart.
   - Integrasi ke Firebase Database: Semua perubahan yang dilakukan pada cart langsung tersimpan di Firebase Realtime Database dan terhubung dengan akun pengguna masing-masing melalui Firebase Authentication.

b. Halaman Payment (Pembayaran)
- Proses Pembayaran: Terdapat halaman khusus untuk melakukan konfirmasi pembayaran. Pengguna akan diarahkan ke halaman ini setelah menyelesaikan belanja.
- Penambahan Alamat Pengiriman: Pengguna dapat menambahkan atau memilih alamat pengiriman saat proses checkout. Alamat ini disimpan dan bisa digunakan kembali.
- Metode Pembayaran: Pengguna bisa memilih metode pembayaran yang diinginkan, misalnya transfer bank atau metode lainnya (mocked untuk tahap awal).
- Data Pembayaran Tersimpan: Informasi pembayaran yang dikonfirmasi oleh pengguna disimpan ke Firebase Database agar bisa diakses kembali.

c. Desain dan Tampilan (CSS)
- Penggunaan CSS di Semua Halaman: Seluruh halaman pada aplikasi sudah menggunakan CSS yang seragam, baik untuk layout, warna, ukuran font, dan tombol navigasi.
- Responsif: Desain mendukung tampilan di berbagai ukuran layar (mobile-friendly).
- Tema Warna: Warna utama dan sekunder sudah diatur untuk menciptakan kesan profesional dan menarik.

**2. Implementasi CRUD**
Dalam aplikasi ini, konsep CRUD (Create, Read, Update, Delete) sudah saya terapkan. Namun, dari total 12 operasi CRUD yang direncanakan, baru 9 operasi yang telah berhasil diimplementasikan.

Operasi CRUD yang Sudah Diimplementasikan:
 1	Tambah Produk ke Cart	Create	Menyimpan produk baru ke keranjang di database
 2	Tampilkan Isi Cart	Read	Menampilkan isi cart dari Firebase
 3	Modifikasi Jumlah Produk	Update	Mengubah jumlah item di cart
 4	Hapus Produk dari Cart	Delete	Menghapus produk dari cart
 5	Tambah Alamat Pengiriman	Create	Menambahkan alamat baru ke database
 6	Tampilkan Alamat yang Tersimpan	Read	Membaca data alamat dari Firebase
 7	Pilih / Update Alamat	Update	Memilih dan mengedit alamat lama
 8	Simpan Informasi Pembayaran	Create	Menyimpan info pembayaran pengguna
 9	Tampilkan Riwayat Pembayaran	Read	Menampilkan histori pembayaran (sementara)

CRUD yang Belum Selesai:
 - Update Metode Pembayaran: Belum disediakan fitur untuk mengubah metode pembayaran yang tersimpan.
 - Delete Alamat Pengiriman: Fitur untuk menghapus alamat yang tersimpan belum diimplementasikan.
 - Update Informasi Pembayaran: Fitur untuk memperbarui data pembayaran jika terjadi perubahan masih dalam tahap pengembangan.

**3. Koneksi Firebase**
Seluruh fitur yang telah berjalan sudah terkoneksi dengan Firebase:
 - Firebase Authentication: Digunakan untuk login dan register pengguna.
 - Firebase Realtime Database: Menyimpan data cart, alamat pengiriman, dan histori pembayaran pengguna.
 - Struktur Data Firebase: Data tersimpan dalam struktur JSON yang mengikuti user ID, sehingga masing-masing pengguna memiliki data terpisah dan aman.

**4. Status dan Rencana Selanjutnya**
Proyek masih dalam tahap pengembangan. Berikut beberapa hal yang direncanakan dalam progres selanjutnya:
 - Menyelesaikan 3 fitur CRUD yang belum selesai.
 - Menambahkan halaman histori transaksi pengguna.
 - Menambahkan validasi data di frontend (misalnya validasi jumlah item, validasi form alamat).
 - Mengintegrasikan notifikasi sederhana (misalnya notifikasi pembayaran berhasil).

   *PAYMENT CRUD*
![payment CRUD](https://github.com/user-attachments/assets/949994d6-faf7-4f33-a654-ccfc9dd79eb6)

*CART CRUD*
![cart CRUD](https://github.com/user-attachments/assets/98915711-b15a-4093-9858-a98667b1a28b)

*WISHLIST CRUD*
![wishlist CRUD](https://github.com/user-attachments/assets/a013c16d-5b8a-4d11-9e20-0f35e5bbc0c3)

