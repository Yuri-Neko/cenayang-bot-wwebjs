const MENUS = [
  {
    category: 'Informasi Bot',
    menu: [
      {
        cmd: '!ping',
        desc: 'Melakukan ping ke bot',
      },
      {
        cmd: '!info',
        desc: 'Mengetahui info bot',
      },
      {
        cmd: '!donasi',
        desc: 'Mengetahui info donasi',
      },
      {
        cmd: '!owner',
        desc: 'Mengetahui info owner',
      },
    ],
  },
  {
    category: 'Media dan Sticker',
    menu: [
      {
        cmd: '!sticker',
        desc: 'Membuat sticker dari gambar',
      },
      {
        cmd: '!faceswap',
        desc: 'Mengganti wajah dengan tokoh random',
      },
      {
        cmd: '!facetoon',
        desc: 'Mengubah wajah menjadi kartun',
      },
      {
        cmd: '!jadianime',
        desc: 'Mengubah foto jadi anime',
      },
    ],
  },
  {
    category: 'Automation dan Kegunaan',
    menu: [
      {
        cmd: '!ingetin',
        desc: 'Membuat reminder atau pengingat',
      },
      {
        cmd: '!antikasar',
        desc: 'Filter kata kata kasar',
      },
    ],
  },
  {
    category: 'Download dari Sosmed',
    menu: [
      {
        cmd: '!fb',
        desc: 'Download video dari facebook',
      },
      {
        cmd: '!tt',
        desc: 'Download video dari tiktok',
      },
      {
        cmd: '!ig',
        desc: 'Download post/reels/story dari Instagram',
      },
      {
        cmd: '!ytmp4',
        desc: 'Download video dari youtube',
      },
      {
        cmd: '!ytmp3',
        desc: 'Download audio dari youtube',
      },
    ],
  },
  {
    category: 'Teks dan Tulisan',
    menu: [
      {
        cmd: '!nulis',
        desc: 'Ubah teks jadi nulis di kertas',
      },
      {
        cmd: '!logo',
        desc: 'Ubah teks jadi logo esports',
      },
      {
        cmd: '!hartatahta',
        desc: 'Buat teks harta tahta doinya',
      },
    ],
  },
  {
    category: 'Fitur Lainnya',
    menu: [
      {
        cmd: '!ssweb',
        desc: 'Screenshoot website',
      },
      {
        cmd: '!buatqr',
        desc: 'Buat QRCode dari teks',
      },
      {
        cmd: '!gempa',
        desc: 'Data gempa BMKG',
      },
    ],
  },
  {
    category: 'Fitur Grup dan Admin',
    menu: [
      {
        cmd: '!bye',
        desc: 'Mengeluarkan BOT dari grup',
      },
    ],
  },
];

const listMenu = () => {
  const prefix = '*LIST PERINTAH CENAYANG BOT V1.0*\n';
  const endfix =
    '\nNote:\nKalo dirasa bot ini keren / membantu kalian bisa berdonasi yaa, kasihan ownernya sobat misqueen hihi.. \n\nLove you...';
  let temp = '';

  function _splitMenu(arr = []) {
    let temp = '';

    for (let i = 0; i < arr.length; i++) {
      temp = temp + `_*${arr[i].cmd}*_\n    --> ${arr[i].desc}\n`;
    }

    return temp;
  }

  for (let i = 0; i < MENUS.length; i++) {
    // menu\n
    temp =
      temp + `\n🔰 *${MENUS[i].category}* 🔰\n\n${_splitMenu(MENUS[i].menu)}`;
  }

  return prefix + temp + endfix;
};

module.exports = {
  listMenu,
};
