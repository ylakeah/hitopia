## Analisis Kompleksitas

Fungsi `isBalanced` memiliki kompleksitas waktu sebesar O(n) dan kompleksitas ruang sebesar O(n), di mana n adalah panjang string input.

### Kompleksitas Waktu
Kompleksitas waktu adalah O(n) karena fungsi melakukan iterasi melalui setiap karakter dari string input tepat satu kali. Setiap karakter entah dimasukkan atau dikeluarkan dari tumpukan dalam waktu konstan O(1).

### Kompleksitas Ruang
Kompleksitas ruang adalah O(n) dalam kasus terburuk, yang terjadi saat semua karakter dalam string input adalah tanda kurung buka. Pada skenario ini, semua tanda kurung buka disimpan dalam tumpukan.

Pendekatan yang efisien ini memastikan bahwa fungsi dapat menangani string input yang besar dalam waktu dan penggunaan memori yang masuk akal.
