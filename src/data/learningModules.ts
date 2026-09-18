import { LearningModule } from "../types";

export const LEARNING_MODULES: LearningModule[] = [
  {
    id: "zakat-profesi",
    category: "profesi",
    title: "Fiqih Zakat Profesi & Penghasilan Kontemporer",
    arabicTitle: "فقه زكاة كسب العمل والمهن الحرة",
    badge: "Fatwa MUI No. 3/2003 & Ijtima 2018",
    summary:
      "Kajian komprehensif mengenai kewajiban zakat atas gaji, upah, honorarium, dan jasa profesional. Mengurai metodologi Qiyas Syibh, konsep Hajah Ashliyyah, serta implementasi standar Kebutuhan Hidup Minimum (KHM) sebagai PTKZ di Indonesia.",
    pillars: {
      fiqhAzZakah: {
        bab: "الباب الثالث: الفصل التاسع - زكاة كسب العمل والمهن الحرة (فقه الزكاة، ج1، ص 487-520)",
        arabicText: `وَالَّذِي أَرَاهُ أَنَّ كَسْبَ الْعَمَلِ - كَرَاتِبِ الْمُوَظَّفِ وَأَجْرِ الْعَامِلِ وَدَخْلِ الطَّبِيبِ وَالْمُهَنْدِسِ وَالْمُحَامِي وَغَيْرِهِمْ مِنْ ذَوِي الْمِهَنِ الْحُرَّةِ - لَا يُشْتَرَطُ لِوُجُوبِ الزَّكَاةِ فِيهِ مُرُورُ حَوْلٍ، بَلْ يُزَكِّيهِ حِينَ يَقْبِضُهُ، عَمَلًا بِعُمُومِ النُّصُوصِ: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا أَنفِقُوا مِن طَيِّبَاتِ مَا كَسَبْتُمْ﴾، وَقِيَاسًا عَلَى الزَّرْعِ وَالثَّمَرِ فِي وُجُوبِ الْإِخْرَاجِ يَوْمَ الْحَصَادِ، مَعَ اشْتِرَاطِ أَنْ يَبْلُغَ النِّصَابَ النَّقْدِيَّ بِنَفْسِهِ أَوْ بِمَا عِنْدَهُ، وَأَنْ يَكُونَ فَاضِلًا عَنِ الْحَاجَاتِ الْأَصْلِيَّةِ لَهُ وَلِعِيَالِهِ.`,
        translation:
          "Dan yang kami pilih adalah bahwa hasil kerja—seperti gaji pegawai, upah buruh, dan penghasilan dokter, insinyur, pengacara, dan profesi bebas lainnya—tidak disyaratkan berlalunya haul satu tahun untuk kewajiban zakatnya, melainkan dizakati seketika saat ia menerimanya. Hal ini berpijak pada keumuman nash: 'Wahai orang-orang yang beriman, infakkanlah sebagian dari hasil usahamu yang baik-baik' (QS. Al-Baqarah: 267), dan menganalogikannya (qiyas) dengan hasil tanaman dan buah-buahan dalam kewajiban mengeluarkannya pada hari panen (QS. Al-An'am: 141), dengan syarat mencapai nisab moneter (setara 85 gram emas) baik sendiri maupun digabung dengan harta lain, serta melebihi kebutuhan pokok bagi dirinya dan tanggungannya.",
        istinbathAnalysis:
          "Dr. Yusuf Al-Qardhawi menggunakan metodologi Qiyas Syibh (analogi kemiripan ganda): dalam segi waktu kewajiban (waqtul wujub) diserupakan dengan zakat pertanian karena diperoleh secara berkala saat menerima hasil (al-istifadah 'ala al-faur) tanpa menunggu haul, sedangkan dalam segi nisab dan kadar (2,5%) diserupakan dengan zakat emas/perak (an-naqdain) karena wujud harta yang diterima berupa uang tunai.",
      },
      fatwaMui: {
        numberAndTitle:
          "Fatwa MUI No. 3 Tahun 2003 jo. Keputusan Ijtima Ulama Komisi Fatwa se-Indonesia VI Tahun 2018",
        diktum:
          "1. Semua bentuk penghasilan halal wajib dikeluarkan zakatnya dengan syarat telah mencapai nishab dalam satu tahun, yakni senilai emas 85 gram.\n2. Zakat penghasilan dapat dikeluarkan pada saat menerima jika sudah cukup nishab (bulanan setara 1/12 x 85 gr emas).\n3. Kadar zakat penghasilan adalah 2,5%.\n4. Ijtima Ulama 2018 menetapkan: Penghasilan yang wajib dizakati adalah penghasilan bersih setelah dikeluarkan kebutuhan pokok (al-haajah al-ashliyah) yang didasarkan pada standar Kebutuhan Hidup Minimum (KHM) sebagai Penghasilan Tidak Kena Zakat (PTKZ).",
        implementationNotes:
          "MUI menyepakati dua metode penunaian: (a) Metode Bruto (pendapatan kotor x 2,5%) bagi muzakki yang memiliki keleluasaan finansial dan ingin bersikap wara', (b) Metode Neto (Pendapatan - KHM Kebutuhan Pokok Sandang/Pangan/Papan/Pendidikan/Kesehatan - Utang Jatuh Tempo x 2,5%) yang dinilai paling adil bagi pekerja berkeluarga dengan tanggungan banyak.",
      },
      regulasi: {
        legalBasis:
          "PMA No. 52 Tahun 2014 Pasal 10 - 15 jo. PMA No. 31 Tahun 2019 & UU No. 23 Tahun 2011",
        statutoryText:
          "Pasal 10 ayat (1): 'Zakat pendapatan dan jasa adalah zakat yang dikeluarkan dari penghasilan yang diperoleh dari profesi tertentu yang halal baik rutin maupun tidak rutin.' Ayat (2): 'Nishab zakat pendapatan senilai 85 gram emas.' Ayat (3): 'Kadar zakat pendapatan sebesar 2,5%.' Penunaian zakat pendapatan dapat dilakukan setiap bulan dengan nilai nishab per bulan setara 1/12 dari 85 gram emas.",
      },
    },
    caseStudy: {
      title: "Simulasi Zakat Gaji & Tunjangan Profesional dengan Tanggungan Keluarga",
      scenario:
        "Bapak Ahmad bekerja sebagai Senior IT Engineer dengan gaji pokok Rp 15.000.000/bulan dan tunjangan kinerja Rp 3.000.000/bulan (Total Bruto Rp 18.000.000). Beliau memiliki seorang istri dan 2 orang anak. Biaya kebutuhan pokok bulanan (KHM: pangan, kontrakan rumah, SPP anak, listrik, cicilan motor operasional) sebesar Rp 7.500.000/bulan. Asumsi harga emas Rp 1.400.000/gram.",
      calculationSteps:
        "1. Nisab Emas Tahunan: 85 gram x Rp 1.400.000 = Rp 119.000.000 / tahun.\n2. Nisab Emas Bulanan: Rp 119.000.000 / 12 = Rp 9.916.666 / bulan.\n3. Penghasilan Bersih (Neto KHM): Rp 18.000.000 - Rp 7.500.000 = Rp 10.500.000 / bulan.\n4. Uji Nisab: Rp 10.500.000 > Rp 9.916.666 (Melebihi Nisab -> WAJIB ZAKAT).\n5. Besaran Zakat per Bulan: Rp 10.500.000 x 2,5% = Rp 262.500 / bulan.",
      conclusion:
        "Bapak Ahmad wajib menunaikan zakat profesi sebesar Rp 262.500 per bulan (atau Rp 3.150.000 per tahun) melalui BAZNAS atau amil resmi terpercaya.",
    },
  },
  {
    id: "zakat-saham",
    category: "saham",
    title: "Zakat Saham, Reksadana & Portofolio Investasi",
    arabicTitle: "فقه زكاة الأسهم والشركات الاستثمارية",
    badge: "Ijtima Ulama VII 2021",
    summary:
      "Ketentuan syariah terkait kepemilikan saham di pasar modal, pembedaan perlakuan antara investor jangka pendek (trading) dan investor dividen jangka panjang (mustaghallat), serta kewajiban pembersihan (cleansing) unsur pendapatan non-halal.",
    pillars: {
      fiqhAzZakah: {
        bab: "الباب الثالث: الفصل العاشر - زكاة الأسهم والسندات (فقه الزكاة، ج1)",
        arabicText: `الْأَسْهُمُ حُقُوقُ مِلْكِيَّةٍ شَائِعَةٍ فِي رَأْسِ مَالِ الشَّرِكَاتِ... فَإِنْ كَانَتْ لِلْمُتَاجَرَةِ وَالْمُضَارَبَةِ السَّرِيعَةِ فِي الْبُورْصَةِ، فَهِيَ عُرُوضُ تِجَارَةٍ تُقَوَّمُ بِقِيمَتِهَا السُّوقِيَّةِ فِي نِهَايَةِ الْحَوْلِ مَعَ أَرْبَاحِهَا وَيُخْرَجُ مِنْهَا رُبُعُ الْعُشْرِ (٢٫٥٪). وَإِنْ كَانَتْ لِلِاسْتِثْمَارِ طَوِيلِ الْأَجَلِ، فَتُزَكَّى زَكَاةَ الْمُسْتَغَلَّاتِ مِنَ الْأَرْبَاحِ الصَّافِيَةِ.`,
        translation:
          "Saham merupakan bukti kepemilikan proporsional dalam modal perseroan. Jika saham dimiliki untuk diperjualbelikan (trading cepat/capital gain), maka statusnya adalah barang dagangan ('urudh at-tijarah) yang dinilai berdasarkan harga pasar pada akhir haul bersama keuntungannya, lalu dikeluarkan 2,5%. Dan jika ditujukan untuk investasi jangka panjang, maka dizakati seperti zakat al-mustaghallat dari keuntungan bersihnya.",
        istinbathAnalysis:
          "Saham trading digolongkan sebagai komoditas perniagaan karena niat pemiliknya adalah membeli untuk menjual kembali guna meraih capital gain. Sedangkan saham investor dividen diqiyaskan pada al-mustaghallat (properti sewa) di mana pokok aset tetap pabrik/mesin tidak dizakati, melainkan arus kas dividennya yang dizakati.",
      },
      fatwaMui: {
        numberAndTitle:
          "Keputusan Ijtima Ulama Komisi Fatwa se-Indonesia VII Tahun 2021 tentang Zakat Saham",
        diktum:
          "1. Saham termasuk harta yang wajib dizakati jika memenuhi: pemilik muslim, milik sempurna, cukup nishab 85 gr emas, dan haul 1 tahun.\n2. Kriteria Saham Syariah: Saham biasa (common shares), kegiatan usaha halal, utang ribawi < 45% total aset, pendapatan non-halal < 10% dan wajib cleansing.\n3. Cara Mengeluarkan: a) Trading (mutajarah): mengikuti zakat perdagangan (2,5% dari nilai pasar saat haul). b) Investasi jangka panjang: mengikuti zakat al-mustaghallat (2,5% dari keuntungan bersih saham).",
        implementationNotes:
          "Jika emiten atau perusahaan tempat berinvestasi sudah membayarkan zakat perusahaan secara menyeluruh, maka kewajiban zakat pemegang saham otomatis gugur untuk menghindari dwi-zakat.",
      },
      regulasi: {
        legalBasis:
          "PMA No. 52 Tahun 2014 Pasal 4 ayat (1) huruf b jo. POJK No. 35/POJK.04/2017",
        statutoryText:
          "Surat berharga berupa saham syariah diakui sebagai objek zakat mal resmi dengan nisab setara 85 gram emas dan kadar zakat 2,5% per tahun.",
      },
    },
    caseStudy: {
      title: "Simulasi Zakat Portofolio Saham Trading vs Saham Dividen",
      scenario:
        "Seorang investor memiliki portofolio saham syariah senilai Rp 150.000.000 pada akhir haul. Dari jumlah tersebut, Rp 100.000.000 adalah saham trading aktif dengan keuntungan terealisasi Rp 20.000.000, dan Rp 50.000.000 adalah saham jangka panjang yang membagikan dividen bersih Rp 4.000.000.",
      calculationSteps:
        "1. Portofolio Trading (Nilai Pasar Akhir Haul): Rp 100.000.000 + Rp 20.000.000 = Rp 120.000.000 -> Zakat: Rp 120.000.000 x 2,5% = Rp 3.000.000.\n2. Portofolio Dividen: Laba Dividen Bersih = Rp 4.000.000 (digabung ke saldo kas/haul) x 2,5% = Rp 100.000.\n3. Total Kewajiban Zakat Saham = Rp 3.100.000.",
      conclusion:
        "Investor menunaikan zakat saham sebesar Rp 3.100.000 pada akhir haul 1 tahun kalender hijriyah.",
    },
  },
  {
    id: "zakat-perusahaan",
    category: "perusahaan",
    title: "Zakat Badan Usaha & Perusahaan (Syakhshiyyah I'tibariyyah)",
    arabicTitle: "فقه زكاة الشركات والكيانات الاعتبارية",
    badge: "Ijtima Ulama VII 2021 & UU 23/2011",
    summary:
      "Kedudukan hukum perseroan terbatas, CV, koperasi, BUMN/BUMD sebagai subjek hukum zakat. Menjelaskan metode perhitungan Aktiva Lancar Bersih (Working Capital) dan peran prinsip Al-Khulthah dalam syariat.",
    pillars: {
      fiqhAzZakah: {
        bab: "الباب الثالث: الفصل العاشر - زكاة أموال الشركات (فقه الزكاة)",
        arabicText: `تُرْبَطُ الزَّكَاةُ عَلَى الشَّرِكَاتِ الْمُسَاهَمَةِ نَفْسِهَا لِكَوْنِهَا شَخْصًا اعْتِبَارِيًّا شَرْعِيًّا... وَمُسْتَنَدُ هَذَا الِاتِّجَاهِ الْآخِذُ بِمَبْدَأِ «الْخُلْطَةِ» الْوَارِدِ فِي السُّنَّةِ النَّبَوِيَّةِ: «لَا يُجْمَعُ بَيْنَ مُتَفَرِّقٍ وَلَا يُفَرَّقُ بَيْنَ مُجْتَمِعٍ خَشْيَةَ الصَّدَقَةِ، وَمَا كَانَ مِنْ خَلِيطَيْنِ فَإِنَّهُمَا يَتَرَاجَعَانِ بَيْنَهُمَا بِالسَّوِيَّةِ».`,
        translation:
          "Kewajiban zakat dikenakan langsung kepada perusahaan perseroan itu sendiri karena posisinya sebagai pribadi hukum (syakhshiyyah i'tibariyyah). Sandaran hukum ini mengambil prinsip 'Al-Khulthah' (percampuran kepemilikan) yang tertera dalam hadits shahih riwayat Bukhari: 'Tidak boleh dikumpulkan antara harta yang terpisah dan tidak boleh dipisahkan antara harta yang bercampur karena takut zakat, dan apa yang bercampur dari dua pihak yang berkongsi, maka keduanya saling memperhitungkan secara proporsional'.",
        istinbathAnalysis:
          "Prinsip Al-Khulthah yang awalnya berlaku pada ternak dianalogikan (qiyas jali) ke seluruh modal gabungan perseroan. Mengeluarkan zakat pada level institusi perusahaan jauh lebih efisien, transparan, dan menyelamatkan hak-hak kaum dhuafa dibandingkan menunggu laporan masing-masing pemegang saham individual.",
      },
      fatwaMui: {
        numberAndTitle:
          "Keputusan Ijtima Ulama Komisi Fatwa se-Indonesia VII Tahun 2021 tentang Zakat Perusahaan",
        diktum:
          "1. Kekayaan perusahaan yang memenuhi syarat zakat wajib dikeluarkan zakatnya.\n2. Kekayaan perusahaan yang dimaksud meliputi: aset lancar perusahaan, dana perusahaan yang diinvestasikan pada perusahaan lain, dan kekayaan fisik yang disewakan.\n3. Syarat: haul 1 tahun, terpenuhi nisab 85 gram emas, dan kadar zakat 2,5%.\n4. Penghitungan berdasarkan keuntungan bersih setelah dikurangi biaya operasional, sebelum pembayaran pajak dan pembagian dividen.",
        implementationNotes:
          "Diterapkan melalui dua formula akuntansi syariah standar: Metode Aset Lancar Bersih = (Aset Lancar - Kewajiban Jangka Pendek) x 2,5%, atau Metode Ekuitas Bersih disesuaikan.",
      },
      regulasi: {
        legalBasis:
          "UU No. 23 Tahun 2011 Pasal 3 ayat (3) & Pasal 4 ayat (1) huruf g",
        statutoryText:
          "Muzakki diakui meliputi orang pribadi dan badan usaha. Badan usaha yang berbadan hukum Indonesia wajib didorong menunaikan zakat mal melalui BAZNAS yang dapat diperhitungkan sebagai pengurang penghasilan bruto kena pajak (UU PPh Pasal 9 ayat 1g).",
      },
    },
    caseStudy: {
      title: "Perhitungan Zakat PT Logistik Syariah Nusantara",
      scenario:
        "PT Logistik Syariah memiliki posisi neraca akhir tahun buku: Kas/Bank Rp 500.000.000, Piutang Usaha Lancar Rp 300.000.000, Persediaan Suku Cadang Rp 200.000.000 (Total Aset Lancar Rp 1.000.000.000). Aset tetap (truk armada dan gudang) Rp 5.000.000.000. Utang dagang dan tagihan jangka pendek jatuh tempo Rp 250.000.000. Saham 100% dimiliki pemegang saham muslim.",
      calculationSteps:
        "1. Objek Zakat (Aset Lancar): Rp 1.000.000.000 (Aset tetap gudang dan truk Rp 5 Miliar TIDAK dihitung).\n2. Kewajiban Pengurang: Utang jatuh tempo Rp 250.000.000.\n3. Aset Bersih Wajib Zakat: Rp 1.000.000.000 - Rp 250.000.000 = Rp 750.000.000.\n4. Uji Nisab: Rp 750.000.000 > Rp 119.000.000 (Nisab 85 gr emas) -> Wajib.\n5. Besaran Zakat Perusahaan: Rp 750.000.000 x 2,5% = Rp 18.750.000.",
      conclusion:
        "PT Logistik Syariah menyalurkan zakat perusahaan sebesar Rp 18.750.000 ke BAZNAS, dan mendapatkan Bukti Setor Zakat (BSZ) resmi untuk pengurang pajak PPh Badan.",
    },
  },
  {
    id: "harta-haram",
    category: "muamalah_kontemporer",
    title: "Hukum Zakat atas Harta Haram & Cleansing Riba",
    arabicTitle: "حكم الزكاة في المال الحرام وتطهيره",
    badge: "Fatwa MUI No. 13 Tahun 2011",
    summary:
      "Penegasan bahwa harta non-halal (hasil korupsi, judi, bunga bank konvensional, penipuan) TIDAK BISA disucikan dengan zakat. Satu-satunya jalan syar'i adalah taubat nasuha dan pengembalian / pelepasan 100% untuk kemaslahatan umum.",
    pillars: {
      fiqhAzZakah: {
        bab: "الباب الثالث: الفصل الثالث - الزكاة لا تطهر المال الحرام (فقه الزكاة، ج1، ص 343-345)",
        arabicText: `إِنَّ الزَّكَاةَ إِنَّمَا تَجِبُ فِي الْمَالِ الْحَلَالِ الطَّيِّبِ، أَمَّا الْمَالُ الْخَبِيثُ الْمُحَرَّمُ الَّذِي جَاءَ عَنْ طَرِيقِ النَّهْبِ أَوْ الِاخْتِلَاسِ أَوْ الرِّشْوَةِ أَوِ الرِّبَا أَوِ الْقِمَارِ، فَإِنَّ الزَّكَاةَ لَا تُؤَثِّرُ فِيهِ وَلَا تُطَهِّرُهُ، لِقَوْلِهِ ﷺ: «إِنَّ اللهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا»، وَقَوْلِهِ: «مَنْ جَمَعَ مَالًا مِنْ حَرَامٍ ثُمَّ تَصَدَّقَ بِهِ لَمْ يَكُنْ لَهُ فِيهِ أَجْرٌ وَكَانَ إِصْرُهُ عَلَيْهِ». فَالْوَاجِبُ عَلَى حَائِزِ الْمَالِ الْحَرَامِ التَّوْبَةُ وَإِخْرَاجُ جَمِيعِ الْحَرَامِ (١٠٠٪) وَرَدُّهُ إِلَى أَرْبَابِهِ إِنْ عُرِفُوا، أَوْ صَرْفُهُ فِي مَصَالِحِ الْمُسْلِمِينَ الْعَامَّةِ دُونَ أَنْ يُحْسَبَ ذَلِكَ زَكَاةً.`,
        translation:
          "Sesungguhnya zakat hanya wajib pada harta yang halal lagi baik. Adapun harta yang kotor lagi haram yang diperoleh dari jalur perampasan, korupsi, suap, bunga riba, atau perjudian, maka zakat sama sekali tidak mempan padanya dan tidak dapat menyucikannya. Sabda Nabi SAW: 'Sesungguhnya Allah itu Maha Baik dan tidak menerima kecuali yang baik' dan 'Barang siapa mengumpulkan harta haram lalu mensedekahkannya, ia tidak memperoleh pahala dan dosanya tetap membebaninya'. Maka kewajiban atas pemegang harta haram adalah bertaubat dan melepaskan 100% harta haram tersebut kepada pemilik aslinya, atau disalurkan untuk kepentingan umum tanpa dihitung sebagai zakat.",
        istinbathAnalysis:
          "Kaidah Fiqhiyyah: 'الْمَالُ الْمَغْصُوبُ كَالْمَعْدُومِ فِي حَقِّ الْغَاصِبِ' (Harta yang bukan haknya statusnya seperti tidak ada bagi pemegangnya). Pemegang harta haram tidak memiliki kepemilikan sempurna (milk tamm), sedangkan milk tamm adalah rukun wajib zakat. Oleh karenanya, mengeluarkan 2,5% tidak menggugurkan dosa 97,5% sisanya.",
      },
      fatwaMui: {
        numberAndTitle:
          "Fatwa MUI No. 13 Tahun 2011 tentang Hukum Zakat atas Harta Haram",
        diktum:
          "1. Zakat wajib ditunaikan dari harta yang halal, baik bendanya maupun cara perolehannya.\n2. Harta haram tidak menjadi objek wajib zakat.\n3. Kewajiban bagi pemilik harta haram adalah bertaubat dan membebaskan tanggung jawab dirinya dari harta haram tersebut.\n4. Cara bertaubat: memohon ampunan Allah, menyesal, berniat tidak mengulangi. Harta hasil rampasan/korupsi/curian wajib dikembalikan 100% kepada pemiliknya/ahli warisnya. Jika tidak ditemukan, atau jika berupa hasil usaha riba bunga bank, maka seluruh hasil usaha tersebut (bukan pokok modal halal) harus diserahkan untuk kemaslahatan umum.",
        implementationNotes:
          "Bunga bank konvensional yang mengendap di rekening muslim wajib dipisahkan dalam pembukuan, kemudian disalurkan ke pos fasilitas umum (jalan, jembatan, MCK), bukan dimasukkan ke dalam amil zakat untuk fakir miskin.",
      },
      regulasi: {
        legalBasis:
          "PMA No. 52 Tahun 2014 Pasal 2 jo. Keputusan Dewan Pengawas Syariah BAZNAS RI",
        statutoryText:
          "Harta yang dikenai zakat harus memenuhi syarat kepemilikan yang sah secara syariat Islam. BAZNAS dan LAZ dilarang mencampuradukkan dana zakat dengan dana non-halal (fashlul amwal), dan dana non-halal wajib dibukukan terpisah dalam pos Dana Sosial Keagamaan Lainnya (DSKL).",
      },
    },
    caseStudy: {
      title: "Pemisahan Modal Halal dan Bunga Riba Deposito",
      scenario:
        "Ibu Salma mendepositokan uang warisan halal sebesar Rp 200.000.000 di bank konvensional sebelum memahami hukum riba. Setelah 1 tahun, saldo bertambah bunga bersih Rp 10.000.000 sehingga total saldo menjadi Rp 210.000.000.",
      calculationSteps:
        "1. Modal Pokok Halal: Rp 200.000.000 -> Melebihi nisab 85 gr emas -> Wajib dizakati 2,5% = Rp 5.000.000.\n2. Bunga Deposito Riba: Rp 10.000.000 -> Status HARAM (Bukan objek zakat).\n3. Tindakan terhadap bunga: Dikeluarkan 100% (Rp 10.000.000) untuk fasilitas umum dhuafa (dana sosial kebajikan), TIDAK boleh dianggap zakat dan tidak boleh dikonsumsi.",
      conclusion:
        "Ibu Salma mengeluarkan zakat mal Rp 5.000.000 dari modal pokoknya, dan melepaskan seluruh bunga Rp 10.000.000 untuk sarana umum kemaslahatan umat.",
    },
  },
  {
    id: "zakat-produktif",
    category: "muamalah_kontemporer",
    title: "Zakat Produktif & Skema Qardh Hasan Pemberdayaan",
    arabicTitle: "فقه استثمار الزكاة والقرض الحسن للمستحقين",
    badge: "Ijtima Ulama VII 2021 & Fatwa MUI 4/2003",
    summary:
      "Tinjauan hukum pendayagunaan dana zakat untuk modal usaha produktif dan skema dana bergulir tanpa bunga (Al-Qardh Al-Hasan). Mengkaji dalil istitsmar zakat dan ijtihad Abu Zahrah, Khallaf, dan Al-Qardhawi.",
    pillars: {
      fiqhAzZakah: {
        bab: "الباب الرابع: الفصل الخامس - القرض الحسن من الزكاة (فقه الزكاة، ج2، ص 634-635)",
        arabicText: `هَلْ يَجُوزُ إِقْرَاضُ الْمُحْتَاجِينَ مِنْ سَهْمِ الْغَارِمِينَ؟ أَمْ نَقِفُ عِنْدَ حَرْفِيَّةِ النَّصِّ؟ أَعْتَقِدُ أَنَّ الْقِيَاسَ الصَّحِيحَ وَالْمَقَاصِدَ الْعَامَّةَ لِلْإِسْلَامِ فِي بَابِ الزَّكَاةِ تُجِيزُ لَنَا الْقَوْلَ بِإِقْرَاضِ الْمُحْتَاجِينَ مِنْ سَهْمِ الْغَارِمِينَ عَلَى أَنْ يُنَظَّمَ ذَلِكَ وَيُنْشَأَ لَهُ صُنْدُوقٌ خَاصٌّ. وَبِذَلِكَ تُسَاهِمُ الزَّكَاةُ مُسَاهَمَةً عَمَلِيَّةً فِي مُحَارَبَةِ الرِّبَا وَالْقَضَاءِ عَلَى الْفَوَائِدِ الرِّبَوِيَّةِ، وَهُوَ مِنْ قِيَاسِ الْأَوْلَى؛ إِذْ إِذَا كَانَتِ الدُّيُونُ الْعَادِلَةُ تُؤَدَّى مِنْ مَالِ الزَّكَاةِ، فَأَوْلَى أَنْ تُعْطَى مِنْهُ الْقُرُوضُ الْحَسَنَةُ الْخَالِيَةُ مِنَ الرِّبَا.`,
        translation:
          "Apakah dibolehkan memberikan pinjaman kepada orang-orang yang membutuhkan dari bagian asnaf gharimin? Ataukah kita berhenti pada makna harfiah nash? Kami meyakini bahwa qiyas yang shahih dan maqashid umum syariat dalam bab zakat membolehkan kita menyalurkan pinjaman tanpa bunga kepada yang membutuhkan dari bagian gharimin, asalkan dikelola dalam dana khusus. Dengan demikian zakat berkontribusi praktis memerangi lintah darat/riba. Ini termasuk Qiyas al-Aula: jika melunasi utang orang yang sudah terjerat diperbolehkan dari zakat, maka mencegah mereka dari riba dengan qardh hasan tentu jauh lebih utama.",
        istinbathAnalysis:
          "Konstruksi Qiyas al-Aula (analogi prioritas): Jika melunasi utang orang yang sudah terjerat riba dibolehkan dari pos gharimin, maka memberikan pinjaman kebajikan tanpa bunga (qardh hasan) untuk mencegah mereka terjerumus ke rentenir tentu jauh lebih utama secara maqashid syariah.",
      },
      fatwaMui: {
        numberAndTitle:
          "Keputusan Ijtima Ulama Komisi Fatwa se-Indonesia VII Tahun 2021 tentang Al-Qardh Al-Hasan Dana Zakat",
        diktum:
          "1. Pada dasarnya dana zakat mal harus didistribusikan kepada mustahiq sesegera mungkin ('ala al-faur) untuk dimiliki dan dimanfaatkan.\n2. Penyaluran dana zakat dalam bentuk Al-Qardh Al-Hasan hukumnya boleh atas dasar kemaslahatan yang lebih luas, dengan ketentuan:\n   a. Penerima dana termasuk mustahiq zakat (fakir, miskin, gharimin usia produktif);\n   b. Dana yang diterima dimanfaatkan untuk modal usaha produktif;\n   c. Amil harus selektif dan melakukan pendampingan usaha;\n   d. Jika mustahiq belum mampu mengembalikan hingga jatuh tempo, wajib ditangguhkan atau diputihkan dari pos zakat konsumtif.",
        implementationNotes:
          "BAZNAS dan LAZ di Indonesia mengadopsi skema ini melalui program Microfinance Zakat, di mana pengembalian modal digulirkan kembali kepada kelompok dhuafa lain, dan mustahiq yang bangkrut karena musibah diputihkan kewajibannya.",
      },
      regulasi: {
        legalBasis:
          "UU No. 23 Tahun 2011 Pasal 27 ayat (1) & (2) tentang Pendayagunaan Zakat Produktif",
        statutoryText:
          "Pasal 27 ayat (1): 'Zakat dapat didayagunakan untuk usaha produktif dalam rangka penanganan fakir miskin dan peningkatan kualitas umat.' Ayat (2): 'Pendayagunaan zakat untuk usaha produktif dilakukan apabila kebutuhan dasar mustahiq telah terpenuhi.'",
      },
    },
    caseStudy: {
      title: "Skema Zakat Modal Kerja Bergulir BAZNAS Microfinance",
      scenario:
        "Kelompok usaha mikro 10 mustahiq penjual makanan keliling menerima pembiayaan modal kerja syariah qardh hasan Rp 3.000.000 per orang tanpa bunga dan tanpa agunan. Angsuran pengembalian Rp 250.000/bulan selama 12 bulan.",
      calculationSteps:
        "1. Alokasi Dana: Rp 30.000.000 dari pos zakat produktif asnaf fakir-miskin/gharimin.\n2. Monitoring: Dana cicilan pokok yang kembali ke amil digulirkan kepada 10 mustahiq baru berikutnya.\n3. Hasil: 8 dari 10 mustahiq berhasil meningkatkan omset hingga di atas KHM dan bertransformasi menjadi munfiq/muzakki.",
      conclusion:
        "Skema zakat produktif qardh hasan sah secara syariat dan efektif memutus rantai kemiskinan antargenerasi.",
    },
  },
  {
    id: "zakat-sanitasi",
    category: "muamalah_kontemporer",
    title: "Pendayagunaan Zakat untuk Sarana Air Bersih & Sanitasi",
    arabicTitle: "فقه استخدام أموال الزكاة في حفر الآبار والمرافق الصحية",
    badge: "Fatwa Munas IX MUI Tahun 2015",
    summary:
      "Kebolehan memperluas manfaat zakat dalam bentuk aset kelolaan umum (fasilitas air bersih dan sanitasi higienis) demi menjaga kelangsungan jiwa (hifzhan-nafs) masyarakat rawan bencana dan kekeringan.",
    pillars: {
      fiqhAzZakah: {
        bab: "الباب الرابع: الفصل السابع - في سبيل الله (فقه الزكاة، ج2، ص 648)",
        arabicText: `جَاءَ فِي تَفْسِيرِ الْمَنَارِ: «يَجُوزُ الصَّرْفُ مِنْ هَذَا السَّهْمِ (فِي سَبِيلِ اللهِ) عَلَى تَأْمِينِ طُرُقِ الْحَجِّ، وَتَوْفِيرِ الْمَاءِ وَالْغِذَاءِ وَأَسْبَابِ الصِّحَّةِ لِلْحُجَّاجِ وَالْمُسْلِمِينَ إِذَا لَمْ يُوجَدْ لِذَلِكَ مَصْرِفٌ آخَرُ... وَيَدْخُلُ فِي عُمُومِهِ إِنْشَاءُ الْمُسْتَشْفَيَاتِ وَإِشْرَاعُ الطُّرُقِ وَتَوْفِيرُ الْمِيَاهِ الْعَامَّةِ الَّتِي تَقُومُ بِهَا حَيَاةُ النَّاسِ».`,
        translation:
          "Disebutkan dalam Tafsir Al-Manar: 'Dibolehkan membelanjakan dana dari pos ini (fi sabilillah) untuk pengamanan jalur, penyediaan sarana air bersih, makanan, dan fasilitas kesehatan bagi kaum muslimin apabila tidak ditemukan sumber pendanaan lain... Termasuk dalam keumumannya pembangunan rumah sakit dan penyediaan mata air umum yang menopang hajat hidup masyarakat dhuafa'.",
        istinbathAnalysis:
          "Perluasan makna fi sabilillah mencakup maslahah ammah lil-muslimin (kemaslahatan umum) ketika sarana vital kesehatan dan air bersih tidak dapat dipenuhi oleh baitul mal negara dan mengancam maqashid hifzhun-nafs.",
      },
      fatwaMui: {
        numberAndTitle:
          "Fatwa MUI No. 001/MUNAS-IX/MUI/2015 tentang Pendayagunaan ZISWAF untuk Sanitasi & Air Bersih",
        diktum:
          "1. Penyediaan sanitasi dan sarana air bersih merupakan kewajiban untuk hifzhun-nafs (menjaga jiwa).\n2. Pendayagunaan dana zakat untuk pembangunan sarana air bersih dan sanitasi adalah boleh dengan ketentuan:\n   a. Tidak ada kebutuhan mendesak bagi para mustahiq yang bersifat pangan langsung;\n   b. Manfaat sarana air bersih dan sanitasi diperuntukkan bagi kepentingan kemaslahatan umum (maslahah 'ammah) masyarakat dhuafa melalui asnaf fi sabilillah dan fakir miskin.",
        implementationNotes:
          "Fasilitas air dan MCK komunal yang dibangun dengan dana zakat menjadi aset kelolaan wakaf/umum yang dikelola oleh komite warga dhuafa setempat.",
      },
      regulasi: {
        legalBasis: "UU No. 23 Tahun 2011 Pasal 26 jo. Instruksi Presiden No. 3 Tahun 2014",
        statutoryText:
          "Pendistribusian zakat dilakukan berdasarkan skala prioritas dengan memperhatikan prinsip pemerataan, keadilan, dan kemaslahatan di daerah tertinggal, terdepan, dan terluar (3T).",
      },
    },
    caseStudy: {
      title: "Pembangunan Sumur Bor Air Bersih di Daerah Rawan Kekeringan NTT",
      scenario:
        "Warga desa muslim pelosok mengalami krisis air minum akut yang memicu penyakit diare dan stunting. Amil mengalokasikan Rp 60.000.000 dari dana zakat asnaf fi sabilillah & aset kelolaan untuk sumur bor dan pipanisasi ke 80 KK dhuafa.",
      calculationSteps:
        "Biaya pengeboran, instalasi pompa surya, dan tandon air dibiayai utuh dari dana zakat aset kelolaan tanpa membebani warga miskin.",
      conclusion:
        "Pemanfaatan dana zakat tersebut sah sesuai Fatwa Munas MUI 2015 dan berdampak menyelamatkan jiwa ratusan warga.",
    },
  },
  {
    id: "zakat-bantuan-hukum",
    category: "muamalah_kontemporer",
    title: "Zakat Mal untuk Bantuan Hukum & Advokasi Dhuafa",
    arabicTitle: "فقه توجيه الزكاة لخدمات العون القانوني للمظلومين",
    badge: "Ijtima Ulama VI Tahun 2018",
    summary:
      "Kedudukan syariah pendanaan advokasi hukum bagi masyarakat miskin yang terdzalimi (madzlum) dan kriminalisasi kaum lemah melalui asnaf fakir miskin, gharimin, dan fi sabilillah.",
    pillars: {
      fiqhAzZakah: {
        bab: "الباب الرابع: الفصل السابع - في سبيل الله (فقه الزكاة، ج2)",
        arabicText: `إِنَّ جِهَادَ الظُّلْمِ وَنُصْرَةَ الْمَظْلُومِينَ وَرَدَّ كَيْدِ الْمُعْتَدِينَ عَنِ الضُّعَفَاءِ وَالْمُسْتَضْعَفِينَ هُوَ مِنْ أَعْظَمِ أَنْوَاعِ الْجِهَادِ فِي سَبِيلِ اللهِ؛ لِقَوْلِهِ ﷺ: «أَفْضَلُ الْجِهَادِ كَلِمَةُ حَقٍّ عِنْدَ سُلْطَانٍ جَائِرٍ»، وَقَوْلِهِ: «انْصُرْ أَخَاكَ ظَالِمًا أَوْ مَظْلُومًا». فَكُلُّ مَالٍ يُصْرَفُ لِإِحْقَاقِ الْحَقِّ وَفَكِّ قَيْدِ الْمَظْلُومِ الَّذِي لَا حِيلَةَ لَهُ فَهُوَ فِي سَبِيلِ اللهِ.`,
        translation:
          "Sesungguhnya memerangi kezaliman, menolong kaum yang terdzalimi, dan menepis tipu daya para penindas dari kaum lemah adalah salah satu bentuk jihad fi sabilillah yang paling agung. Sabda Nabi SAW: 'Jihad yang paling utama adalah kalimat kebenaran di hadapan penguasa yang zalim' dan 'Tolonglah saudaramu baik yang zalim maupun yang dizalimi'. Maka setiap dana yang dibelanjakan untuk menegakkan keadilan dan melepaskan jeratan hukum orang yang terdzalimi masuk dalam pos fi sabilillah.",
        istinbathAnalysis:
          "Perjuangan menegakkan keadilan sosial dan membela kaum mustadh'afin dari tirani hukum dimasukkan ke dalam asnaf fi sabilillah serta gharimin (orang yang menanggung beban utang biaya peradilan di luar kemampuannya).",
      },
      fatwaMui: {
        numberAndTitle:
          "Keputusan Ijtima Ulama Komisi Fatwa se-Indonesia VI Tahun 2018 tentang Zakat Mal untuk Bantuan Hukum",
        diktum:
          "1. Hukum penyaluran zakat mal untuk kepentingan layanan bantuan hukum adalah boleh, dengan ketentuan:\n   a. Penerima bantuan beragama Islam;\n   b. Penerima bantuan merupakan orang yang terdzalimi (madzlum);\n   c. Kasus yang dibela tidak bertentangan dengan ajaran agama Islam.\n2. Penyaluran zakat tersebut mencakup asnaf fakir, miskin, dan/atau terlilit utang/biaya peradilan (gharimin).\n3. Pembelaan kasus hukum terkait kemaslahatan Islam dan advokasi sistem hukum yang adil masuk ke dalam asnaf fi sabilillah.",
        implementationNotes:
          "Lembaga zakat bekerja sama dengan Lembaga Bantuan Hukum (LBH) syariah terakreditasi untuk memberikan jasa pembelaan cuma-cuma (pro bono) bagi mustahiq yang hak asasinya dilanggar.",
      },
      regulasi: {
        legalBasis: "UU No. 16 Tahun 2011 tentang Bantuan Hukum jo. UU No. 23 Tahun 2011",
        statutoryText:
          "Negara menjamin hak konstitusional warga negara miskin untuk memperoleh akses keadilan, dan lembaga zakat dapat berkolaborasi menyediakan advokasi bagi mustahiq yang berhadapan dengan hukum.",
      },
    },
    caseStudy: {
      title: "Advokasi Hukum Petani Dhuafa yang Dikriminalisasi",
      scenario:
        "Seorang buruh tani miskin dituntut secara hukum oleh korporasi atas sengketa lahan garapan warisan adat. Ia tidak memiliki uang untuk menyewa pengacara dan membayar saksi ahli peradilan.",
      calculationSteps:
        "Lembaga Amil Zakat menyalurkan biaya operasional advokasi hukum sebesar Rp 15.000.000 melalui pos asnaf gharimin/madzlum.",
      conclusion:
        "Petani berhasil diputus bebas murni di pengadilan, hak lahan terselamatkan, dan pembiayaan zakat tersebut sah menurut Ijtima Ulama 2018.",
    },
  },
  {
    id: "hak-amil",
    category: "umum",
    title: "Tugas, Kewenangan, & Batasan Hak Amil Zakat",
    arabicTitle: "فقه العاملين عليها وحقوقهم وضوابط أمانتهم",
    badge: "Fatwa MUI No. 8 Tahun 2011",
    summary:
      "Membedah kriteria syar'i amil zakat, batasan hak maksimal 1/8 (12,5%), larangan menerima gratifikasi/hadiah dari muzakki, dan prinsip yadul amanah dalam tata kelola perzakatan.",
    pillars: {
      fiqhAzZakah: {
        bab: "الباب الرابع: الفصل الثاني - العاملون عليها (فقه الزكاة، ج2، ص 570-580)",
        arabicText: `الْعَامِلُونَ عَلَيْهَا هُمُ الْجِهَازُ الْإِدَارِيُّ وَالْمَالِيُّ الَّذِي يُعَيِّنُهُ وَلِيُّ الْأَمْرِ لِجِبَايَةِ الزَّكَاةِ وَحِفْظِهَا وَتَوْزِيعِهَا. وَسَهْمُ الْعَامِلِ أُجْرَةٌ لَهُ عَلَى عَمَلِهِ وَلَيْسَ صَدَقَةً تَطَوُّعِيَّةً، وَلِذَلِكَ يَأْخُذُهُ وَلَوْ كَانَ غَنِيًّا، وَلَا يَجُوزُ لَهُ قَبُولُ الْهَدَايَا مِنَ الْمُزَكِّينَ؛ لِقَوْلِهِ ﷺ: «هَدَايَا الْعُمَّالِ غُلُولٌ»، وَقَوْلِهِ لِابْنِ اللَّتْبِيَّةِ: «أَفَلَا جَلَسَ فِي بَيْتِ أَبِيهِ وَأُمِّهِ فَيَنْظُرَ أَيُهْدَى إِلَيْهِ أَمْ لَا؟!».`,
        translation:
          "Amil zakat adalah aparatur administrasi dan keuangan yang diangkat oleh otoritas negara untuk mengumpulkan, mengelola, dan mendistribusikan zakat. Bagian amil adalah upah (ujrah) atas jerih payah kerjanya dan bukan sedekah belas kasihan, sehingga ia berhak menerimanya meskipun kaya. Amil diharamkan secara mutlak menerima hadiah/gratifikasi dari para muzakki, berdasarkan hadits: 'Hadiah bagi petugas (amil) adalah khianat/korupsi' dan teguran Nabi kepada Ibnu Al-Lutbiyyah: 'Mengapa ia tidak duduk saja di rumah ayahnya atau ibunya, lalu melihat apakah ada yang memberinya hadiah?!'.",
        istinbathAnalysis:
          "Kaidah Ujrah al-Mitsl: Hak amil bukan berstatus kepemilikan sedekah (tamlik shadaqah) melainkan kompensasi upah profesional (mu'awadhah 'ala al-'amal). Karenanya, amil dilarang keras menerima gratifikasi atau tip dari muzakki yang berpotensi memicu 'fraud' dan ketidakadilan taksiran harta.",
      },
      fatwaMui: {
        numberAndTitle:
          "Fatwa MUI No. 8 Tahun 2011 tentang Amil Zakat jo. Keputusan Ijtima Ulama III 2009",
        diktum:
          "1. Hak amil adalah menerima bagian dari harta zakat untuk melaksanakan seluruh tugasnya maksimal seperdelapan (12,5%) dari total penerimaan zakat.\n2. Amil zakat yang telah memperoleh gaji tetap dari APBN/APBD tidak berhak menerima bagian dari dana zakat yang menjadi bagian amil.\n3. Amil tidak boleh meminta ongkos di luar hak amil.\n4. Amil tidak boleh menerima hadiah dari muzakki dan tidak boleh memberikan hadiah kepada muzakki dari harta zakat.",
        implementationNotes:
          "Sistem akuntansi PSAK 109 mewajibkan pemisahan ketat antara dana zakat, infak/sedekah, dan bagian amil tidak boleh melebihi plafon 12,5% per tahun buku.",
      },
      regulasi: {
        legalBasis: "UU No. 23 Tahun 2011 Pasal 30 - 32 jo. Peraturan BAZNAS No. 1 Tahun 2018",
        statutoryText:
          "Pembiayaan operasional pengelolaan zakat dialokasikan dari hak amil paling banyak 1/8 (12,5%) dari dana zakat yang dihimpun, dan wajib diaudit secara berkala oleh Akuntan Publik independen serta audit syariah Kementerian Agama.",
      },
    },
    caseStudy: {
      title: "Audit Alokasi Operasional Hak Amil Lembaga Zakat",
      scenario:
        "Sebuah LAZ menghimpun dana zakat sebesar Rp 10.000.000.000 (10 Miliar) dalam satu tahun buku. Manajemen merencanakan anggaran gaji amil, sewa kantor, dan sosialisasi program sebesar Rp 1.500.000.000 (1,5 Miliar / 15%).",
      calculationSteps:
        "1. Batas Maksimal Syariat Hak Amil: 12,5% x Rp 10.000.000.000 = Rp 1.250.000.000.\n2. Kelebihan Anggaran: Rp 1.500.000.000 - Rp 1.250.000.000 = Rp 250.000.000.\n3. Solusi Syariah: Selisih Rp 250.000.000 TIDAK BOLEH diambil dari dana zakat, melainkan harus ditutupi dari alokasi hak infak/sedekah atau dana bagi hasil non-zakat.",
      conclusion:
        "Penggunaan dana zakat melebihi 12,5% melanggar Fatwa MUI No. 8/2011 dan regulasi BAZNAS.",
    },
  },
  {
    id: "tajil-zakat",
    category: "umum",
    title: "Ta'jil az-Zakah: Membayar Zakat Sebelum Haul untuk Darurat",
    arabicTitle: "فقه تعجيل الزكاة قبل الحول ودفع البلاء",
    badge: "Fatwa MUI No. 23 Tahun 2020 & Ijtima 2018",
    summary:
      "Landasan dalil menyegerakan pembayaran zakat sebelum genapnya haul 1 tahun ketika terjadi bencana nasional, krisis ekonomi, atau wabah pandemi guna menyelamatkan dhuafa.",
    pillars: {
      fiqhAzZakah: {
        bab: "الباب الخامس: الفصل الخامس - تعجيل الزكاة وتأخيرها (فقه الزكاة، ج2، ص 810-820)",
        arabicText: `يَجُوزُ تَعْجِيلُ الزَّكَاةِ قَبْلَ حُلُولِ الْحَوْلِ إِذَا تَمَّ النِّصَابُ لِعَامٍ أَوْ عَامَيْنِ عِنْدَ جُمْهُورِ الْفُقَهَاءِ (الْحَنَفِيَّةِ وَالشَّافِعِيَّةِ وَالْحَنَابِلَةِ)، لِمَا رَوَاهُ عَلِيٌّ أَنَّ الْعَبَّاسَ سَأَلَ النَّبِيَّ ﷺ فِي تَعْجِيلِ صَدَقَتِهِ قَبْلَ أَنْ تَحِلَّ فَرَخَّصَ لَهُ فِي ذَلِكَ، وَقَوْلِهِ ﷺ: «إِنَّا قَدْ أَخَذْنَا زَكَاةَ الْعَبَّاسِ عَامَ الْأَوَّلِ لِلْعَامِ». وَفِيهِ مَصْلَحَةٌ عَظِيمَةٌ عِنْدَ حُلُولِ الْفَاقَةِ وَالْجَوَائِحِ بِالْمُسْلِمِينَ.`,
        translation:
          "Dibolehkan menyegerakan pembayaran zakat (ta'jil az-zakah) sebelum jatuh tempo haul apabila nisab telah terpenuhi untuk jangka waktu satu tahun atau dua tahun menurut jumhur fuqaha (Hanafiyyah, Syafi'iyyah, dan Hanabilah). Hal ini berdasarkan riwayat Ali bahwa Al-'Abbas meminta izin kepada Nabi SAW untuk menyegerakan pembayaran zakatnya sebelum jatuh tempo, dan beliau memberikan keringanan baginya. Sabda Nabi SAW: 'Sesungguhnya kami telah mengambil zakat Al-'Abbas tahun kemarin untuk tahun ini'. Di dalamnya terdapat kemaslahatan besar saat terjadi paceklik dan bencana yang menimpa kaum muslimin.",
        istinbathAnalysis:
          "Syarat sah ta'jil az-zakah: nisab sudah tercapai pada saat penunaian dipercepat. Haul hanyalah syarat penagihan wajib (wujubul ada'), bukan syarat kelayakan wajib (wujubul haq). Menyegerakan zakat mendatangkan mashlahah daruriyyah bagi dhuafa saat tertimpa bencana.",
      },
      fatwaMui: {
        numberAndTitle:
          "Fatwa MUI No. 23 Tahun 2020 tentang Pemanfaatan Harta ZIS untuk Penanggulangan Wabah & Dampaknya",
        diktum:
          "1. Zakat mal boleh ditunaikan dan disalurkan lebih cepat (ta'jil al-zakah) tanpa harus menunggu satu tahun penuh (hawalan al-haul), apabila telah mencapai nishab.\n2. Zakat fitrah boleh ditunaikan dan disalurkan sejak awal Ramadhan tanpa harus menunggu malam Idul Fitri.\n3. Kebutuhan penanggulangan bencana dan kemiskinan darurat yang tidak dapat dipenuhi melalui zakat dapat ditambah melalui infaq dan shadaqah.",
        implementationNotes:
          "Muzakki dapat menyalurkan zakat maal lebih cepat saat ada gempa bumi, banjir bandang, atau pandemi, dan amil menerbitkan bukti setor zakat resmi yang sah mengurangi pajak pada tahun pajak berjalan.",
      },
      regulasi: {
        legalBasis:
          "Instruksi Menteri Agama RI & Keputusan BAZNAS RI tentang Pengentasan Kemiskinan Ekstrem",
        statutoryText:
          "Pemerintah dan BAZNAS mengizinkan percepatan penarikan dan penyaluran zakat mal ASN/BUMN sebelum haul kalender bagi para muzakki yang telah mencapai nisab.",
      },
    },
    caseStudy: {
      title: "Percepatan Zakat Mal Tabungan Saat Terjadi Gempa Bumi",
      scenario:
        "Seorang pengusaha memiliki saldo tabungan mengendap Rp 500.000.000 yang baru berjalan 7 bulan haul. Ketika terjadi gempa bumi dahsyat di provinsinya, ia ingin menyegerakan zakatnya sebesar 2,5% untuk logistik korban bencana.",
      calculationSteps:
        "1. Saldo Tabungan: Rp 500.000.000 (Jauh melampaui nisab 85 gr emas = Rp 119 Juta).\n2. Ta'jil Zakat: Dipercepat pembayarannya pada bulan ke-7 tanpa menunggu bulan ke-12.\n3. Besaran Zakat: Rp 500.000.000 x 2,5% = Rp 12.500.000 langsung disalurkan ke korban bencana (asnaf fakir/miskin/gharimin).",
      conclusion:
        "Ta'jil zakat sah dan berpahala ganda: menunaikan rukun Islam dan menyelamatkan ribuan nyawa di masa darurat.",
    },
  },
];
