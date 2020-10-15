Link Hosting API : https://uts-aldogabrielys-20534.vercel.app/home
Link Github : https://github.com/AldoGabriel20/UTS_Mobile2_2020/tree/master/UTS_Mobile2_20534

Deskripsi Project :
Project dibuat menggunakan Angular, tanpa menggunakan library dari luar.

- Tampilan pertama saat user membuka aplikasi adalah page home. Page ini menjadi root page dari aplikasi.
  Page home menampilkan list produk yang ada di aplikasi. Page ini memiliki 2 tampilan, yaitu list dan grid.
  Saat user mengklik barang, maka akan redirect menuju halaman detail produk. 
  Halaman ini akan menampilkan detail dari setiap produk yang ada seperti gambar, harga, stok, serta spesifikasi sesuai
  tipe produk 
- Kemudian ada halaman admin, dimana terdapat 3 fitur utama dari halaman ini yaitu menambah, mengedit, dan menghapus produk.
  Saat ingin menambah produk, terdapat 4 tipe produk (RAM, CPU, GPU, Motherboard). Setiap tipe akan memunculkan inputan 
  yang berbeda. Jika ada inputan yang belum diisi, maka akan muncul warning pada item tersebut dan tombol submit 
  tidak bisa diklik 
  Lalu digunakan sliding item untuk edit dan delete. Saat edit diklik, maka user dapat mengganti setiap detail item tapi tidak 
  dengan tipenya. Apabila unser mengganti stok menjadi 0, maka item otomatis dihapus. Untuk project ini saya tidak
  menggunakan multi delete, sehingga delete yang dipakai seperti modul mingguan. 
  Untuk setiap fitur akan dimunculkan alert untuk mengkonfirmasi action serta toast apabila action berhasil.
  Untuk setiap item berhasil diedit atau ditambah maka akan langsung diupdate di page admin, home, serta detail produk.
- Page terakhir yaitu About App, page ini berisi identitas pembuat serta deskripsi dari project yang dikerjakan.