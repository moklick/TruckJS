var music = [
  {
    image: "rtl-images/arabic/Diana_Haddad_Bent_Osol.jpg",
    title: 'ديانا حداد',
    album: 'بنت أصول',
    description: 'يانا هي أسطورة. موسيقاها يحرك الروح. ونحن لا يمكن أبدا أن نسمع ما يكفي من صوتها.'
  },
  {
    image: "rtl-images/arabic/jaber_alkaser_Rasheed.jpg",
    title: 'راشد الماجد‎',
    album: 'جبار حبك',
    description: 'راشد الماجد هو الموسيقى العربية الكلاسيكية. وهو من أبرز المطربين.'
  },
  {
    image: "rtl-images/arabic/Aamel_Aaqlah.jpg",
    title: 'نانسي عجرم',
    album: 'أعمل عاقلة',
    description: 'هي واحدة من الأغاني المفضلة لدينا من قبل نانسي.'
  },
  {
    image: "rtl-images/arabic/Amr_Diab-El_Leila.jpg",
    title: 'عمرو دياب',
    album: 'الليلة',
    description: 'ال انه لا يوجد لديه الخوف في خلط أحدث الأساليب العالم مع نظيره الغناء عاطفي.'
  },
  {
    image: "rtl-images/arabic/Ykhallili_Albak_Najwa.jpg",
    title: 'نجوى كرم',
    album: 'يخليلي قلبك',
    description: 'نجوى لديها وسيلة فريدة من نوعها في الغناء.'
  }
];

var imageCollection = [
  '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'
].map(function(file) {
  return 'images/pics/pic-' + file + '.jpg';
}); 

var docs = [
  {
    title: 'المبالغ المستلمة',
    subtitle: 'غداء',
    amount: 24
  },
  {
    title: 'المبالغ المستلمة',
    subtitle: 'الغازولين',
    amount: 12
  },
  {
    title: 'المبالغ المستلمة',
    subtitle: 'البقالة',
    amount: 6
  },
  {
    title: 'خدمات',
    subtitle: 'كهرباء',
    amount: 1
  },
  {
    title: 'إيجار',
    subtitle: 'استلام',
    amount: 10
  },
  {
    title: 'قانوني',
    subtitle: 'سيارة',
    amount: 5
  },
  {
    title: 'عائلة',
    subtitle: 'قانوني',
    amount: 3
  },
  {
    title: 'الشخصية',
    subtitle: 'إرادة',
    amount: 1
  },
  {
    title: 'الشخصية',
    subtitle: 'الرعاية الصحية',
    amount: 16
  }
]; 

var dictionary = [
  {
    term: '[ ر ف ف ]. ( مصدر رَفَّ ، يَرِفُّ ).',
    meaning: [
      '" رَفيفُ الثَّغْرِ " : بَريقٌ .',
      'ثَوْبٌ رَفيفٌ " : رَقيقٌ .',
      '" شَجَرَةٌ رَفيفَةٌ " : مُنْتَدِيَةٌ . " شَجَرٌ رَفيفٌ ".',
      '" شَجَرَةٌ رَفيفَةٌ " : مُنْتَدِيَةٌ . " شَجَرٌ رَفيفٌ ".',
      '" أَرْضٌ ذاتُ رَفيفٍ " : خِصْبَةٌ .',
      '" هُوَ رَفِيفُ الأَخْلاَقِ " : حَسَنُهَا .',
      '" ذاتُ الرَّفيفِ " : البَساتِينُ يَرُفُّ نَباتُها وَشَجَرُها مِنَ الرَّيِّ والنَّضارَةِ .',
      '"ذاتُ الرَّفيفِ " : سُفُنٌ تُنْضَدُ في النَّهْرِ لِلْعُبُورِ عَلَيْها .',
      'المعجم: الغني'
    ]
  },
  {
    term: 'رَفيف',
    meaning: [
      'مصدر رفَّ / رفَّ إلى / رفَّ بـ / رفَّ على / رفَّ لـ .',
      'المعجم: اللغة العربية المعاصر'
    ]
  },
  {
    term: 'رَفيف', 
    meaning:[
        'اسم علم مؤنث عربي ، ',
        'معناه : الخصب حسنُ الأخلاق ، المحبة للطعام والشراب ، الساعية لخدمة الآخرين ، الكريمة ، العطوفة ، المرتاحة ، ',
        'سقف البيت . وإذا سمي بها المذكر كانت المعاني نفسها في حال التذكير .'
    ]
  }
];

var favorites = [
  'بيتزا',
  'بوظة',
  'تطوير البرمجيات',
  'البيسبول',
  'أفلام',
  'العاب الكمبيوتر',
  'موسيقى',
  'التصحيح قانون برامج',
  'التنزه',
  'الألغاز'
];