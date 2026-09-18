import { ThreePillars, ZakatType } from "../types";

export const ZAKAT_PILLARS_DATA: Record<ZakatType, ThreePillars> = {
  profesi: {
    fiqhAzZakah: {
      bab: "الباب الثالث: زكاة كسب العمل والمهن الحرة (فقه الزكاة، الجزء الأول)",
      arabicText: `مِنَ الْمَعْلُومِ أَنَّ الْإِسْلَامَ لَمْ يُوجِبِ الزَّكَاةَ فِي كُلِّ مَالٍ قَلَّ أَوْ كَثُرَ، وَإِنَّمَا أَوْجَبَهَا فِيمَا بَلَغَ نِصَابًا فَارِغًا عَنِ الدَّيْنِ وَفَاضِلًا عَنِ الْحَاجَاتِ الْأَصْلِيَّةِ لِمَالِكِهِ، وَذَلِكَ لِيَتَحَقَّقَ مَعْنَى الْغِنَى الْمُوجِبِ لِلزَّكَاةِ؛ فَإِنَّهَا إِنَّمَا تُؤْخَذُ مِنَ الْأَغْنِيَاءِ... وَالَّذِي أَرَاهُ أَنَّ كَسْبَ الْعَمَلِ كَالرَّوَاتِبِ وَالْأُجُورِ وَإِيرَادِ الْمِهَنِ الْحُرَّةِ يُزَكَّى حِينَ يُقْبَضُ، قِيَاسًا عَلَى الزُّرُوعِ وَالثِّمَارِ فِي عَدَمِ اشْتِرَاطِ الْحَوْلِ، وَعَلَى النُّقُودِ فِي النِّصَابِ وَالْقَدْرِ (رُبُعِ الْعُشْرِ).`,
      translation:
        "Telah dimaklumi bahwa Islam tidak mewajibkan zakat pada setiap harta baik sedikit maupun banyak, melainkan mewajibkannya pada harta yang telah mencapai nishab, bersih dari utang, dan melebihi kebutuhan pokok (al-hajah al-ashliyyah) bagi pemiliknya, agar terwujud makna kecukupan (al-ghina) yang mewajibkan zakat. Menurut hemat kami, penghasilan kerja seperti gaji pegawai, upah buruh, dan honorarium profesi bebas dikeluarkan zakatnya saat diterima (qiyas pada zakat pertanian dalam hal tidak disyaratkannya haul) dengan kadar 2,5% dan nisab emas setara 85 gram (qiyas pada zakat uang/naqdain).",
      istinbathAnalysis:
        "Konstruksi qiyas yang digunakan Dr. Yusuf Al-Qardhawi adalah Qiyas Syibh (analogi kemiripan ganda): (1) Menyerupai zakat pertanian (al-zuru' wa al-tsimar) dalam waktu penunaiannya, yaitu wajib dikeluarkan seketika saat menerima hasil (wajib 'ala al-faur saat panen/gajian) tanpa menunggu haul setahun, berdasarkan QS. Al-An'am: 141 (وآتوا حقه يوم حصاده). (2) Menyerupai zakat emas/perak (an-naqdain) dalam nisab (85 gram emas) dan tarif kadarnya yaitu 2,5% (rub'ul 'usyr) karena objek yang diterima berwujud uang kartal.",
    },
    fatwaMui: {
      numberAndTitle:
        "Fatwa MUI No. 3 Tahun 2003 jo. Keputusan Ijtima Ulama Komisi Fatwa se-Indonesia VI Tahun 2018",
      diktum:
        "Fatwa MUI No. 3/2003 Ketetapan Kedua: 'Semua bentuk penghasilan halal wajib dikeluarkan zakatnya dengan syarat telah mencapai nishab dalam satu tahun, yakni senilai emas 85 gram.' Ketetapan Ketiga: 'Zakat penghasilan dapat dikeluarkan pada saat menerima jika sudah cukup nishab.' Ketetapan Keempat: 'Kadar zakat penghasilan adalah 2,5%.' Dipertegas dalam Ijtima Ulama 2018 bahwa penghasilan yang dizakati adalah penghasilan bersih setelah dikeluarkan kebutuhan pokok (al-haajah al-ashliyah) yang didasarkan pada standar Kebutuhan Hidup Minimum (KHM) sebagai Penghasilan Tidak Kena Zakat (PTKZ).",
      implementationNotes:
        "MUI mengakomodasi dua pendekatan perhitungan di Indonesia: (1) Metode Neto (disepakati Ijtima Ulama 2018): Total Penghasilan Bruto dikurangi Kebutuhan Pokok KHM (sandang, pangan, papan, kesehatan, pendidikan diri dan tanggungan) serta utang jatuh tempo. Jika sisa bersih mencapai nisab bulanan (1/12 dari 85 gram emas), wajib dikeluarkan 2,5%. (2) Metode Bruto: Menunaikan 2,5% langsung dari total gaji/honorarium kotor bagi yang berkehendak lebih hati-hati (wara') dan memiliki kelapangan finansial.",
    },
    regulasi: {
      legalBasis:
        "PMA No. 52 Tahun 2014 Pasal 10-15 jo. PMA No. 31 Tahun 2019 & Peraturan BAZNAS No. 1 Tahun 2024",
      statutoryText:
        "Pasal 10 ayat (1): 'Zakat pendapatan dan jasa adalah zakat yang dikeluarkan dari penghasilan yang diperoleh dari profesi tertentu yang halal baik rutin maupun tidak rutin.' Ayat (2): 'Nishab zakat pendapatan senilai 85 (delapan puluh lima) gram emas.' Ayat (3): 'Kadar zakat pendapatan sebagaimana dimaksud pada ayat (1) sebesar 2,5% (dua koma lima persen).' Penunaian zakat pendapatan dapat dilakukan setiap bulan dengan nilai nishab per bulan setara dengan 1/12 dari 85 gram emas.",
    },
  },
  maal: {
    fiqhAzZakah: {
      bab: "الباب الثالث: الفصل الثالث - زكاة الذهب والفضة (فقه الزكاة)",
      arabicText: `وَأَجْمَعَ عُلَمَاءُ الْإِسْلَامِ عَلَى أَنَّ الزَّكَاةَ تَجِبُ فِي الذَّهَبِ وَالْفِضَّةِ إِذَا بَلَغَتْ نِصَابًا وَحَالَ عَلَيْهَا الْحَوْلُ، وَقَدْرُ الْوَاجِبِ فِيهِمَا رُبُعُ الْعُشْرِ (٢٫٥٪)، وَنِصَابُ الذَّهَبِ عِشْرُونَ مِثْقَالًا وَهُوَ يُعَادِلُ خَمْسَةً وَثَمَانِينَ جِرَامًا (٨٥ جِرَامًا) مِنَ الذَّهَبِ الْخَالِصِ، وَنِصَابُ الْفِضَّةِ مِائَتَا دِرْهَمٍ وَهُوَ يُعَادِلُ ٥٩٥ جِرَامًا. وَيُقَاسُ عَلَيْهِمَا سَائِرُ الْأَمْوَالِ النَّقْدِيَّةِ وَالْمُدَّخَرَاتِ فِي الْبُنُوكِ لِأَنَّهَا مُتَمَخِّضَةٌ لِلثَّمَنِيَّةِ وَالنَّمَاءِ.`,
      translation:
        "Ulama Islam telah sepakat (ijma') bahwa zakat wajib pada emas dan perak apabila telah mencapai nisab dan telah berlalu satu tahun (haul). Kadar wajibnya adalah seperempat puluh (2,5%). Nisab emas adalah 20 mitsqal yang setara dengan 85 gram emas murni, dan nisab perak adalah 200 dirham yang setara dengan 595 gram perak. Seluruh mata uang kertas (nuqud waraqiyyah), simpanan tabungan, dan deposito bank dianalogikan pada keduanya karena memiliki fungsi tsamaniyyah (nilai tukar mutlak) dan potensi tumbuh berkembang (an-nama').",
      istinbathAnalysis:
        "Istinbath didasarkan pada dalil QS. At-Taubah: 34-35 dan hadits riwayat Abu Dawud: 'فإذا كان لك عشرون ديناراً وحال عليها الحول ففيها نصف دينار'. Uang kertas kontemporer (fiat money) memiliki 'illat yang sama dengan emas dan perak yaitu tsamaniyyah muthlaqah (daya beli dan nilai tukar), sehingga wajib zakat 2,5% apabila tabungan + deposito + emas simpanan yang dimiliki genap 1 haul (1 tahun hijriyah) dan nilainya minimal setara 85 gram emas.",
    },
    fatwaMui: {
      numberAndTitle:
        "Keputusan Komisi Fatwa MUI tentang Standar Nisab Zakat Maal & Fatwa No. 13 Tahun 2011",
      diktum:
        "Zakat maal (harta simpanan, emas, perak, dan tabungan) wajib ditunaikan sebesar 2,5% apabila telah memenuhi syarat: milik sempurna (al-milk at-tamm), berkembang, mencapai nishab 85 gram emas, bebas dari utang mendesak, dan telah melewati masa kepemilikan 1 tahun (haul). Harta yang dizakati wajib bersumber dari perolehan yang halal, adapun bunga bank konvensional adalah riba yang tidak boleh dizakati melainkan harus dibersihkan (cleansing) secara keseluruhan untuk kemaslahatan umum.",
      implementationNotes:
        "Jika seseorang memiliki tabungan dan emas batangan yang disimpan selama 1 tahun, seluruh saldo akhir yang mengendap setelah dikurangi utang jangka pendek dijumlahkan. Jika nilainya mencapai harga 85 gram emas murni, wajib dikeluarkan zakat 2,5%.",
    },
    regulasi: {
      legalBasis:
        "UU No. 23 Tahun 2011 Pasal 4 ayat (2) huruf a & b, jo. PMA No. 52 Tahun 2014 Pasal 4-7",
      statutoryText:
        "Pasal 4: '(1) Zakat mal meliputi emas, perak, dan logam mulia lainnya; uang dan surat berharga lainnya.' Pasal 5 ayat (1): 'Nishab zakat emas sebagaimana dimaksud dalam Pasal 4 ayat (1) huruf a sebesar 85 (delapan puluh lima) gram emas.' Ayat (2): 'Kadar zakat emas sebesar 2,5% (dua koma lima persen).' Pasal 6: Nishab perak sebesar 595 gram dengan kadar 2,5%. Uang simpanan dan tabungan disetarakan dengan nisab emas 85 gram.",
    },
  },
  perniagaan: {
    fiqhAzZakah: {
      bab: "الباب الثالث: الفصل الرابع - زكاة الثروة التجارية (فقه الزكاة)",
      arabicText: `عُرُوضُ التِّجَارَةِ هِيَ كُلُّ مَا يُعَدُّ لِلْبَيْعِ وَالشِّرَاءِ بِقَصْدِ الرِّبْحِ، وَقَدْ انْعَقَدَ إِجْمَاعُ أَهْلِ الْعِلْمِ كَمَا نَقَلَهُ ابْنُ الْمُنْذِرِ وَأَبُو عُبَيْدٍ عَلَى أَنَّ فِي الْعُرُوضِ الَّتِي يُرَادُ بِهَا التِّجَارَةُ الزَّكَاةَ إِذَا حَالَ عَلَيْهَا الْحَوْلُ. وَكَيْفِيَّةُ إِخْرَاجِهَا: أَنْ يُقَوِّمَ التَّاجِرُ عُرُوضَهُ فِي آخِرِ الْحَوْلِ بِسِعْرِ السُّوقِ الْحَالِيِّ (سِعْرِ الْجُمْلَةِ) وَيَضُمَّ إِلَيْهَا النُّقُودَ وَالدُّيُونَ الْمَرْجُوَّةَ، وَيَطْرَحَ مِنْهَا الدُّيُونَ الَّتِي عَلَيْهِ، ثُمَّ يُخْرِجَ رُبُعَ الْعُشْرِ (٢٫٥٪).`,
      translation:
        "Barang dagangan ('urudh at-tijarah) adalah setiap komoditas yang dipersiapkan untuk diperjualbelikan demi memperoleh laba. Telah terbentuk ijma' ulama sebagaimana dinukil oleh Ibn al-Mundzir dan Abu 'Ubaid bahwa komoditas yang dimaksudkan untuk perniagaan wajib dizakati apabila telah berlalu satu haul. Tata cara perhitungannya: pedagang menilai seluruh stok barang dagangannya pada akhir haul dengan harga pasar grosir saat itu, menambahkan uang kas/tabungan dan piutang lancar yang diharapkan tertagih, kemudian mengurangkan utang jatuh tempo, lalu mengeluarkan 2,5% dari sisa bersihnya.",
      istinbathAnalysis:
        "Dasar hukum berpijak pada QS. Al-Baqarah: 267 (أنفقوا من طيبات ما كسبتم) dan hadits Samurah bin Jundub riwayat Abu Dawud: 'أَمَرَنَا رَسُولُ اللهِ ﷺ أَنْ نُخْرِجَ الصَّدَقَةَ مِمَّا نُعِدُّهُ لِلْبَيْعِ'. Aset tetap operasional (toko, etalase, rak, kendaraan operasional, timbangan) tidak dimasukkan ke dalam objek zakat karena merupakan 'urudh al-qinyah (alat bantu kerja), objek zakat murni berada pada aset lancar likuid perniagaan.",
    },
    fatwaMui: {
      numberAndTitle:
        "Ketetapan Komisi Fatwa MUI & Keputusan Munas Ulama tentang Zakat Perniagaan",
      diktum:
        "Harta perniagaan yang telah mencapai nisab setara 85 gram emas dan telah genap 1 haul wajib dikeluarkan zakatnya sebesar 2,5%. Penghitungan zakat perniagaan menggunakan rumus: (Nilai Barang Dagangan / Persediaan Akhir + Uang Kas/Bank + Piutang Lancar yang dapat ditagih) dikurangi (Utang Jangka Pendek/Jatuh Tempo). Jika selisih aktiva lancar bersih tersebut melebihi nisab 85 gram emas, maka wajib dizakati 2,5%.",
      implementationNotes:
        "Aset tetap seperti bangunan toko, gudang, kendaraan operasional tidak dihitung. Apabila pedagang memiliki utang dagang yang harus dibayar dalam waktu dekat, utang tersebut sah menjadi pengurang aset lancar sebelum dikalikan 2,5%.",
    },
    regulasi: {
      legalBasis: "PMA No. 52 Tahun 2014 Pasal 16-19 jo. PMA No. 31 Tahun 2019",
      statutoryText:
        "Pasal 16: 'Zakat perniagaan adalah zakat yang dikeluarkan dari harta yang diperuntukkan untuk jual beli.' Pasal 17 ayat (1): 'Harta perniagaan sebagaimana dimaksud dalam Pasal 16 dihitung berdasarkan nilai barang dagangan, uang tunai, dan piutang yang dapat ditagih setelah dikurangi utang yang jatuh tempo pada saat satu tahun.' Pasal 18: 'Nishab zakat perniagaan senilai 85 gram emas.' Pasal 19: 'Kadar zakat perniagaan sebagaimana dimaksud sebesar 2,5%.'",
    },
  },
  saham: {
    fiqhAzZakah: {
      bab: "الباب الثالث: الفصل العاشر - زكاة الأسهم والسندات (فقه الزكاة)",
      arabicText: `الْأَسْهُمُ حُقُوقُ مِلْكِيَّةٍ شَائِعَةٍ فِي رَأْسِ مَالِ الشَّرِكَاتِ، وَيَخْتَلِفُ حُكْمُهَا بِحَسَبِ قَصْدِ الْمُسْتَثْمِرِ: فَإِنْ كَانَتْ لِلْمُتَاجَرَةِ وَالْمُضَارَبَةِ السَّرِيعَةِ فِي الْبُورْصَةِ، فَهِيَ عُرُوضُ تِجَارَةٍ تُقَوَّمُ بِقِيمَتِهَا السُّوقِيَّةِ فِي نِهَايَةِ الْحَوْلِ مَعَ أَرْبَاحِهَا وَيُخْرَجُ مِنْهَا رُبُعُ الْعُشْرِ (٢٫٥٪). وَإِنْ كَانَتْ لِلِاسْتِثْمَارِ طَوِيلِ الْأَجَلِ وَقَبْضِ الرَّيْعِ وَالتَّوْزِيعَاتِ، فَتُزَكَّى زَكَاةَ الْمُسْتَغَلَّاتِ: إِمَّا مِنَ الْأَرْبَاحِ الصَّافِيَةِ، أَوْ بِمِقْدَارِ حِصَّةِ السَّهْمِ مِنَ الْأُصُولِ الزَّكَوِيَّةِ اللَّيِّنَةِ لِلشَّرِكَةِ.`,
      translation:
        "Saham merupakan bukti kepemilikan proporsional atas modal perseroan. Hukum zakatnya dibedakan berdasarkan niat dan strategi investor: (1) Apabila diniatkan untuk diperjualbelikan (trading/capital gain) di bursa, maka diperlakukan sebagai barang dagangan ('urudh at-tijarah), dinilai berdasarkan harga pasar (market value) pada akhir haul ditambah laba yang diperoleh, lalu dizakati 2,5%. (2) Apabila ditujukan untuk investasi jangka panjang (dividend investor), maka diperlakukan seperti zakat al-mustaghallat: dizakati dari dividen/keuntungan bersihnya atau berdasarkan proporsi aset lancar perusahaan yang wajib dizakati.",
      istinbathAnalysis:
        "Konstruksi hukum membedakan antara 'illat tijarah (perdagangan berputar cepat) dan 'illat istitsmar mustaghall (penghasil dividen). Investor saham wajib memastikan portofolio berada pada saham syariah (DES/ISSI) dan wajib melakukan proses pembersihan (cleansing) terhadap dividen non-halal (maksimal 10% pendapatan non-halal) yang disalurkan ke pos dana kebajikan sosial, bukan dianggap zakat.",
    },
    fatwaMui: {
      numberAndTitle:
        "Keputusan Ijtima Ulama Komisi Fatwa se-Indonesia VII Tahun 2021 tentang Zakat Saham",
      diktum:
        "Ketentuan Hukum: (1) Saham termasuk harta benda yang wajib dizakati apabila pemiliknya muslim, kepemilikan sempurna, mencapai nisab 85 gram emas, dan genap haul (kecuali sektor pertanian). (2) Kriteria saham syariah: Saham Biasa, usaha halal, utang berbasis bunga maksimal 45% dari total aset, pendapatan non-halal maksimal 10% dan wajib cleansing. (3) Cara mengeluarkan zakat saham: a) Jika dimaksudkan untuk diperjualbelikan (trading/mutajarah), mengikuti aturan zakat perdagangan (2,5% dari nilai pasar saham saat haul). b) Jika dimaksudkan untuk investasi jangka panjang, zakat mengikuti ketentuan zakat al-mustaghallat (nisab emas, penghitungan dari keuntungan bersih saham).",
      implementationNotes:
        "Pemegang saham dapat mewakilkan perusahaan untuk membayarkan zakatnya. Jika perusahaan telah membayarkan zakat perusahaan secara menyeluruh, maka kewajiban zakat bagi pemegang saham telah gugur agar tidak terjadi dwi-zakat (la tsina fi ash-shadaqah).",
    },
    regulasi: {
      legalBasis:
        "PMA No. 52 Tahun 2014 Pasal 4 ayat (1) huruf b jo. POJK No. 35/POJK.04/2017 tentang Kriteria Efek Syariah",
      statutoryText:
        "Surat berharga (saham dan sukuk) merupakan objek zakat mal yang diakui dalam perundang-undangan nasional. Nisab zakat investasi surat berharga adalah setara dengan 85 gram emas dengan kadar zakat 2,5% dan masa kepemilikan 1 tahun.",
    },
  },
  perusahaan: {
    fiqhAzZakah: {
      bab: "الباب الثالث: الفصل العاشر - زكاة أموال الشركات (فقه الزكاة)",
      arabicText: `الشَّرِكَاتُ الْمُعَاصِرَةُ لَهَا شَخْصِيَّةٌ اعْتِبَارِيَّةٌ قَانُونِيَّةٌ (شَخْصِيَّةٌ مَعْنَوِيَّةٌ)، وَتُعَامَلُ فِي بَابِ الزَّكَاةِ كَالشَّخْصِ الطَّبِيعِيِّ الْوَاحِدِ عَمَلًا بِمَبْدَأِ الْخُلْطَةِ الَّذِي وَرَدَ فِي السُّنَّةِ النَّبَوِيَّةِ: «وَمَا كَانَ مِنْ خَلِيطَيْنِ فَإِنَّهُمَا يَتَرَاجَعَانِ بَيْنَهُمَا بِالسَّوِيَّةِ». فَتَحْسِبُ الشَّرِكَةُ أَوْعِيَتَهَا الزَّكَوِيَّةَ الصَّافِيَةَ (الْأُصُولَ الْمُتَدَاوَلَةَ مَطْرُوحًا مِنْهَا الْخُصُومُ قَصِيرَةُ الْأَجَلِ)، وَتُخْرِجُ الزَّكَاةَ عَنْ مَجْمُوعِ مَالِ الشُّرَكَاءِ بِنِسْبَةِ ٢٫٥٪.`,
      translation:
        "Perusahaan modern memiliki entitas hukum tersendiri (syakhshiyyah i'tibariyyah / legal entity), dan dalam bab zakat dapat diperlakukan sebagai satu kesatuan pribadi hukum berdasarkan prinsip al-khulthah (percampuran aset) yang disabdakan Nabi SAW: 'Dan harta yang bercampur dari dua orang kongsi, hendaknya keduanya saling memperhitungkan secara proporsional'. Perusahaan menghitung aset zakat bersihnya (aktiva lancar dikurangi kewajiban jangka pendek) dan mengeluarkan zakat sebesar 2,5% atas nama para pemegang saham muslim.",
      istinbathAnalysis:
        "Ulama kontemporer mengistinbath konsep badan hukum perusahaan sebagai subjek zakat dari hadits Bukhari tentang khulthah. Laba operasional dan aset lancar perputaran usaha dizakati sebelum pembagian dividen dan pembayaran pajak, sehingga langsung menyucikan seluruh saham para mitra usaha.",
    },
    fatwaMui: {
      numberAndTitle:
        "Keputusan Ijtima Ulama Komisi Fatwa se-Indonesia VII Tahun 2021 tentang Zakat Perusahaan",
      diktum:
        "Ketentuan Hukum: (1) Kekayaan perusahaan yang memenuhi ketentuan zakat wajib dikeluarkan zakatnya. (2) Kekayaan perusahaan yang dimaksud antara lain: aset lancar perusahaan, dana perusahaan yang diinvestasikan pada perusahaan lain, dan kekayaan fisik yang dikelola dalam usaha sewa atau usaha lainnya. (3) Syarat wajib: telah berlangsung satu tahun (haul), terpenuhi nishab 85 gram emas, kadar 2,5%. (4) Penghitungan zakat perusahaan adalah berdasarkan keuntungan bersih setelah dikurangi biaya operasional, sebelum pembayaran pajak dan pembagian dividen untuk penambahan investasi ke depan.",
      implementationNotes:
        "Perusahaan yang mayoritas sahamnya dimiliki oleh muslim atau BUMN/BUMD dengan regulasi syariah wajib menghitung aset zakatnya dengan metode Aktiva Lancar Bersih (Working Capital Method) atau Net Worth Method.",
    },
    regulasi: {
      legalBasis:
        "UU No. 23 Tahun 2011 Pasal 4 ayat (1) huruf g & Pasal 3 ayat (3), jo. PMA No. 52 Tahun 2014",
      statutoryText:
        "UU No. 23/2011 menegaskan bahwa muzakki adalah orang pribadi atau badan usaha yang berkewajiban menunaikan zakat. Badan usaha swasta, perseroan terbatas, BUMN, dan BUMD diakui secara sah sebagai subjek penunaian zakat yang dikelola oleh BAZNAS atau LAZ resmi.",
    },
  },
  pertanian: {
    fiqhAzZakah: {
      bab: "الباب الثالث: الفصل الخامس - زكاة الزروع والثمار (فقه الزكاة)",
      arabicText: `تَجِبُ الزَّكَاةُ فِي كُلِّ مَا أَخْرَجَتْهُ الْأَرْضُ مِنْ حَبٍّ وَثَمَرٍ يُقْصَدُ بِزِرَاعَتِهِ اسْتِغْلَالُ الْأَرْضِ، لِعُمُومِ قَوْلِهِ تَعَالَى: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا أَنفِقُوا مِن طَيِّبَاتِ مَا كَسَبْتُمْ وَمِمَّا أَخْرَجْنَا لَكُم مِّنَ الْأَرْضِ﴾، وَقَوْلِهِ: ﴿وَآتُوا حَقَّهُ يَوْمَ حَصَادِهِ﴾. وَنِصَابُهَا خَمْسَةُ أَوْسُقٍ وَهِيَ ثَلَاثُمِائَةِ صَاعٍ، وَتُعَادِلُ ٦٥٣ كِيلُوجِرَامًا مِنَ الْحَبِّ وَالْقَمْحِ (أَوْ ٥٢٠ كجم أَرُزٍّ مُصَفًّى). وَقَدْرُ الْوَاجِبِ فِيهَا: الْعُشْرُ (١٠٪) فِيمَا سُقِيَ بِمَاءِ السَّمَاءِ أَوْ سَيْحًا بِغَيْرِ كُلْفَةٍ، وَنِصْفُ الْعُشْرِ (٥٪) فِيمَا سُقِيَ بِالنَّضْحِ وَالْآلَاتِ وَالْمَضَخَّاتِ ذَاتِ الْكُلْفَةِ.`,
      translation:
        "Zakat wajib atas segala hasil bumi berupa biji-bijian dan buah-buahan yang diproduksi untuk pemanfaatan tanah, berdasarkan keumuman firman Allah: 'Wahai orang yang beriman infakkanlah sebagian hasil usahamu yang baik dan sebagian dari apa yang Kami keluarkan dari bumi untukmu' (QS. Al-Baqarah: 267) dan firman-Nya: 'Dan tunaikanlah haknya di hari memetik hasilnya' (QS. Al-An'am: 141). Nisabnya adalah 5 wasq (300 sha') yang setara dengan 653 kg gabah kering panen atau 520 kg beras putih bersih. Kadar wajibnya: 10% (al-'usyr) untuk yang dialiri air hujan/sungai alami tanpa biaya, dan 5% (nisf al-'usyr) untuk yang dialiri pompa/irigasi berbiaya operasional.",
      istinbathAnalysis:
        "Dr. Yusuf Al-Qardhawi mentarjih madzhab Abu Hanifah dalam luasnya objek tanaman (mencakup padi, palawija, sayur, buah bernilai ekonomi), namun membatasi dengan nisab 5 wasq sesuai sabda Nabi: 'ليس فيما دون خمسة أوسق صدقة'. Beliau juga menetapkan bahwa biaya pupuk, bibit, dan upah buruh tanam/panen dapat dikurangkan terlebih dahulu dari total hasil sebelum dizakati (pendapat 'Atha dan Ibn 'Umar).",
    },
    fatwaMui: {
      numberAndTitle:
        "Ketetapan Fatwa Komisi Fatwa MUI tentang Zakat Pertanian, Perkebunan, dan Kehutanan",
      diktum:
        "Zakat pertanian dan perkebunan wajib ditunaikan setiap kali panen apabila hasil bersihnya telah mencapai nishab 653 kg gabah kering (atau setara 520 kg beras). Kadar zakatnya adalah 10% jika tanpa biaya pengairan (tadah hujan / mata air alami) dan 5% jika menggunakan pengairan berbayar (pompa irigasi mesin). Biaya operasional produksi (pupuk, obat hama, bibit) dapat diperhitungkan sebagai pengurang hasil panen kotor sebelum perhitungan nisab.",
      implementationNotes:
        "Bagi petani di Indonesia yang panen 2 sampai 3 kali setahun, zakat dihitung setiap kali panen. Jika sistem irigasi kombinasi (sebagian berbayar dan sebagian tadah hujan), maka kadar zakatnya adalah 7,5% (tiga perempat puluh).",
    },
    regulasi: {
      legalBasis: "PMA No. 52 Tahun 2014 Pasal 20-22 jo. PMA No. 31 Tahun 2019",
      statutoryText:
        "Pasal 20: '(1) Zakat pertanian, perkebunan, dan kehutanan adalah zakat yang dikeluarkan dari hasil pertanian, perkebunan, dan kehutanan.' Pasal 21: '(1) Nishab zakat pertanian senilai 653 (enam ratus lima puluh tiga) kilogram gabah atau 520 (lima ratus dua puluh) kilogram beras.' Pasal 22: 'Kadar zakat pertanian sebesar: a. 10% (sepuluh persen) apabila tadah hujan; atau b. 5% (lima persen) apabila menggunakan irigasi dan perawatan.'",
    },
  },
  fitrah: {
    fiqhAzZakah: {
      bab: "الباب السابع: زكاة الفطر (فقه الزكاة، الجزء الثاني)",
      arabicText: `زَكَاةُ الْفِطْرِ فَرِيضَةٌ مُتَعَلِّقَةٌ بِالْأَبْدَانِ فُرِضَتْ فِي شَعْبَانَ مِنَ السَّنَةِ الثَّانِيَةِ لِلْهِجْرَةِ؛ طُهْرَةً لِلصَّائِمِ مِنَ اللَّغْوِ وَالرَّفَثِ، وَطُعْمَةً لِلْمَسَاكِينِ لِإِغْنَائِهِمْ عَنِ السُّؤَالِ فِي يَوْمِ الْعِيدِ. وَمِقْدَارُهَا صَاعٌ مِنْ غَالِبِ قُوتِ الْبَلَدِ (حَوَالَيْ ٢٫٥ كِيلُوجِرَامٍ إِلَى ٢٫٧ كجم مِنَ الْأَرُزِّ فِي إِنْدُونِيسْيَا). وَيَجُوزُ إِخْرَاجُ الْقِيمَةِ نَقْدًا عِنْدَ أَبِي حَنِيفَةَ وَعُمَرَ بْنِ عَبْدِ الْعَزِيزِ وَالْحَسَنِ الْبَصْرِيِّ، وَهُوَ الْأَرْفَقُ بِالْفُقَرَاءِ فِي عَصْرِنَا لِيَشْتَرُوا بِهَا مَا يَحْتَاجُونَهُ مِنْ لِبَاسٍ وَدَوَاءٍ وَطَعَامٍ.`,
      translation:
        "Zakat fitrah adalah kewajiban yang berkaitan dengan jiwa (abdan) yang disyariatkan pada bulan Sya'ban tahun ke-2 Hijriyah sebagai penyucian bagi orang yang berpuasa dari perbuatan sia-sia dan kata-kata kotor, serta sebagai santunan makanan bagi kaum miskin agar mereka tidak terhina dengan meminta-minta di hari raya. Ukurannya adalah 1 sha' dari makanan pokok setempat (sekitar 2,5 kg hingga 2,7 kg beras di Indonesia). Dibolehkan mengeluarkan nilainya dalam bentuk uang tunai (qimah) menurut madzhab Abu Hanifah, Khalifah 'Umar bin 'Abdul 'Aziz, dan Hasan Al-Bashri, dan ini merupakan opsi yang paling maslahat dan fleksibel bagi kaum miskin di era modern untuk memenuhi kebutuhan sandang, obat-obatan, maupun lauk pauk.",
      istinbathAnalysis:
        "Hadits riwayat Ibn 'Abbas: 'فَرَضَ رَسُولُ اللهِ ﷺ زَكَاةَ الْفِطْرِ طُهْرَةً لِلصَّائِمِ مِنَ اللَّغْوِ وَالرَّفَثِ وَطُعْمَةً لِلْمَسَاكِينِ'. Waktu wajib bermula sejak terbenam matahari malam takbiran Idul Fitri hingga sebelum khatib menaiki mimbar shalat Idul Fitri. Dibolehkan ta'jil sejak awal Ramadhan untuk mempermudah distribusi amil zakat.",
    },
    fatwaMui: {
      numberAndTitle:
        "Fatwa MUI tentang Penyaluran dan Pembayaran Zakat Fitrah dengan Uang & Beras",
      diktum:
        "Zakat fitrah wajib dikeluarkan oleh setiap muslim yang hidup pada sebagian bulan Ramadhan dan sebagian awal bulan Syawwal serta memiliki kelebihan makanan untuk dirinya dan keluarganya pada malam dan hari raya Idul Fitri. Ukuran zakat fitrah adalah 1 sha' beras (setara dengan 2,5 kg atau 3,5 liter beras kualitas yang biasa dikonsumsi sehari-hari). Mengeluarkan zakat fitrah dalam bentuk uang senilai harga beras tersebut hukumnya adalah boleh (sah) mengikuti madzhab Hanafi demi kemaslahatan mustahiq.",
      implementationNotes:
        "Di Indonesia, BAZNAS setiap tahunnya menetapkan SK besaran konversi uang zakat fitrah per jiwa berdasarkan fluktuasi harga beras premium/medium di masing-masing provinsi/daerah (berkisar antara Rp 45.000 - Rp 55.000 per jiwa).",
    },
    regulasi: {
      legalBasis:
        "PMA No. 52 Tahun 2014 Pasal 30-32 jo. SK Ketua BAZNAS RI tentang Nilai Zakat Fitrah Tahunan",
      statutoryText:
        "Pasal 30 ayat (1): 'Zakat fitrah ditunaikan dalam bentuk beras atau makanan pokok seberat 2,5 kg atau 3,5 liter per jiwa.' Ayat (2): 'Beras atau makanan pokok sebagaimana dimaksud pada ayat (1) dapat diganti dalam bentuk uang setara dengan harga 2,5 kg atau 3,5 liter beras.' Pasal 31: 'Zakat fitrah dibayarkan semenjak awal Ramadhan dan paling lambat sebelum pelaksanaan salat Idul Fitri.'",
    },
  },
};
