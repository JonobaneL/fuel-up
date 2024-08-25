import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const speedTypesSeed: Prisma.SpeedTypeCreateInput[] = [
  { name: "Комплексний протеїн", slug: "kompleksnij-proteyin" },
  { name: "Повільний протеїн", slug: "povilnij-proteyin" },
  { name: "Швидкий протеїн", slug: "shvidkij-proteyin" },
];
const flavourSeed: Prisma.FlavourCreateInput[] = [
  { name: "Шоколад", slug: "shokolad" },
  { name: "Білий шоколад/Журавлина", slug: "bilij-shokolad-zhuravlina" },
  { name: "Фундук", slug: "funduk" },
  { name: "Банан", slug: "banana" },
  { name: "Полуниця", slug: "strawberry" },
  { name: "Вишня", slug: "cherry" },
  { name: "Лісові ягоди", slug: "lisovi-yagodi" },
  { name: "Чорниця", slug: "blueberry" },
  { name: "Кава", slug: "coffe" },
  { name: "Кокос", slug: "coco-nut" },
  { name: "Молочний шоколад", slug: "milk-chocolate" },
  { name: "Персик", slug: "peach" },
  { name: "Печиво з вершками", slug: "cookie-milk" },
];
const purposeSeed: Prisma.PurposeCreateInput[] = [
  {
    slug: "nabir-masi",
    description:
      "Для того, щоб м'язи стали рельєфними, а тіло – струнким і підтягнутим, потрібно правильно набирати м'язову масу. Одних занять фітнесом в даному випадку недостатньо, адже треба строго дотримуватися графіка тренувань і дотримуватися певного режиму харчування. Звичайного раціону занадто мало для того, щоб заповнити потреби організму. Для нормального росту м'язів він потребує додаткової порції поживних речовин. Щоб домогтися бажаного результату, потрібно підібрати спеціальне спортивне харчування для набору м'язової маси . Крім того, спортивні добавки для росту м'язів прискорюють їх відновлення, а також оберігають від руйнування в період регулярних інтенсивних тренувань.",
    imageUrl:
      "https://res.cloudinary.com/fuel-up/image/upload/v1724527707/purposes/sygplxeocc5mjr1ogs2m.jpg",
    title: "Набір маси",
  },
  {
    description:
      "Боротьба з надмірною вагою вимагає цілого комплексу зусиль, серед яких правильна низькокалорійна дієта, регулярні заняття спортом, а часом навіть спеціальні косметологічні процедури. У більшості випадків такі дії дають відчутний результат. Але існує можливість позбутися від зайвих кілограмів в кілька разів швидше – для цього досить підібрати правильне спортивне харчування для схуднення . Воно має різний склад і, відповідно, спосіб дії. Розрізняють термогеники, ліполітики, блокатори калорій, засоби для поліпшення обміну речовин. Купувати все підряд в надії скоріше побачити на вагах заповітні цифри – неправильно, адже безконтрольне вживання добавок може нашкодити вашому здоров'ю. Спортивне харчування для спалювання жиру   треба приймати строго дотримуючись інструкції. Здійснити правильний вибір вам допоможуть рекомендації, наведені нижче.",
    imageUrl:
      "https://res.cloudinary.com/fuel-up/image/upload/v1724527707/purposes/ppyqinhhulh7yb0xwrva.jpg",
    title: "Схуднення",
    slug: "shudnennya",
  },
  {
    description:
      "Без сили і витривалості неможливо провести жодне ефективне тренування. Не має значення, чи працюєте ви з залізом або маєте значні аеробні навантаження – енергія неодмінно знадобиться вашому організму. Однак заповнити її за допомогою одного харчового раціону не вийде. Щоб поліпшити показники, знадобляться спеціальні добавки. Спортивне харчування для збільшення сили допоможе підвищити працездатність і досягти бажаних показників. Крім того, СпортХарч для сили притуплює відчуття втоми, скорочує відновний період між інтервальними тренінгами і прискорює процес відновлення м'язової тканини.",
    imageUrl:
      "https://res.cloudinary.com/fuel-up/image/upload/v1724527707/purposes/djgm24tei0gk2ujwyqkd.jpg",
    title: "Збільшення сили",
    slug: "zbilshennya-sili",
  },
  {
    description:
      "Витривалість, або здатність людини ефективно виконувати будь-яку роботу на протязі певного часу, не відчуваючи втоми, є важливою здатністю спортсмена. Вона служить показником того, що системи та органи функціонують чітко і злагоджено. Чим більше ваш запас стійкості, тим ефективніше будуть заняття спортом – адже витривалий атлет або бігун здатний досягти великих результатів. Розвивати стійкість треба поступово – для цього потрібно дотримуватися тренувального режиму, правильно харчуватися і вести здоровий спосіб життя. За допомогою звичайного раціону домогтися результату практично неможливо – щоб досягти ефекту, рекомендується вживати спортивне харчування для підвищення витривалості",
    imageUrl:
      "https://res.cloudinary.com/fuel-up/image/upload/v1724527707/purposes/pdelsjmnaskrqofaq815.jpg",
    title: "Витривалість",
    slug: "vitrivalist",
  },
  {
    description:
      "Правильне харчування і регулярні заняття спортом – запорука привабливої, жіночної фігури. Щоб наблизитися до ідеальних параметрів, представниці чарівного статі готові харчуватися однією капустою і не виходити зі спортзалу. Але часом навіть таких радикальних заходів недостатньо. Особливість жіночого організму в тому, що він досить швидко накопичує жирову тканину, і неохоче від неї позбувається. Недолік сну і щільний робочий графік в поєднанні з жорсткими дієтами призводить до негативних наслідків для здоров'я. Щоб цього не допустити, потрібні спеціальні препарати. Схуднути, набрати м'язову масу або сформувати гарний рельєф допоможе спортивне харчування для дівчат",
    imageUrl:
      "https://res.cloudinary.com/fuel-up/image/upload/v1724527708/purposes/hqfejhpjn917zqzopzjv.jpg",
    title: "Спортивне харучування для жінок",
    slug: "sportivne-haruchuvannya-dlya-zhinok",
  },
  {
    description:
      "Представники сильної статі, які ведуть активний спосіб життя і регулярно займаються спортом, мають потребу в додатковому харчуванні. Для того, щоб організм ефективно відновлювався після тренувань, м'язи збільшувалися в обсязі, а тіло отримало красивий рельєф, однієї дієти недостатньо – з її допомогою просто неможливо отримати потрібну дозу вітамінів, мінералів та інших корисних речовин. У таких випадках рекомендується приймати спортивне харчування для чоловіків . Комплекс спортхапча спрямований на досягнення кожної конкретної мети – спалювання жиру, формування рельєфу, набір м'язової маси і підтримання організму перед важливими змаганнями або виступом. Вживати добавки треба регулярно, не перевищуючи рекомендовану дозу – в такому випадку ви досягнете потрібного ефекту без будь-якої шкоди для свого здоров'я.",
    imageUrl:
      "https://res.cloudinary.com/fuel-up/image/upload/v1724527708/purposes/rfnjjdcr7eectwgvmf86.jpg",
    title: "Спортивне харучування для чоловіків",
    slug: "sportivne-haruchuvannya-dlya-cholovikiv",
  },
];

const typesSeed: Prisma.TypeCreateInput[] = [
  {
    name: "Cироватковий ізолят протеїну",
    slug: "cirovatkovij-izolyat-proteyinu",
    parent: {
      connectOrCreate: {
        create: {
          name: "Протеїн",
          slug: "protein",
        },
        where: {
          slug: "protein",
        },
      },
    },
  },
  {
    name: "Гідролізат протеїну",
    slug: "gidrolizat-proteyinu",
    parent: {
      connectOrCreate: {
        create: {
          name: "Протеїн",
          slug: "protein",
        },
        where: {
          slug: "protein",
        },
      },
    },
  },
  {
    name: "Гороховий протеїн",
    slug: "gorohovij-proteyin",
    parent: {
      connectOrCreate: {
        create: {
          name: "Протеїн",
          slug: "protein",
        },
        where: {
          slug: "protein",
        },
      },
    },
  },
  {
    name: "Казеїн",
    slug: "kazeyin",
    parent: {
      connectOrCreate: {
        create: {
          name: "Протеїн",
          slug: "protein",
        },
        where: {
          slug: "protein",
        },
      },
    },
  },
  {
    name: "Комплексний протеїн",
    slug: "kompleksnij-proteyin",
    parent: {
      connectOrCreate: {
        create: {
          name: "Протеїн",
          slug: "protein",
        },
        where: {
          slug: "protein",
        },
      },
    },
  },
  {
    name: "Конопляний протеїн",
    slug: "konoplyanij-proteyin",
    parent: {
      connectOrCreate: {
        create: {
          name: "Протеїн",
          slug: "protein",
        },
        where: {
          slug: "protein",
        },
      },
    },
  },
  {
    name: "Концентрат протеїну",
    slug: "koncentrat-proteyinu",
    parent: {
      connectOrCreate: {
        create: {
          name: "Протеїн",
          slug: "protein",
        },
        where: {
          slug: "protein",
        },
      },
    },
  },
  {
    name: "Міцелярний казеїн",
    slug: "micelyarnij-kazeyin",
    parent: {
      connectOrCreate: {
        create: {
          name: "Протеїн",
          slug: "protein",
        },
        where: {
          slug: "protein",
        },
      },
    },
  },
  {
    name: "Рисовий протеїн",
    slug: "risovij-proteyin",
    parent: {
      connectOrCreate: {
        create: {
          name: "Протеїн",
          slug: "protein",
        },
        where: {
          slug: "protein",
        },
      },
    },
  },
  {
    name: "Рослинний протеїн",
    slug: "roslinnij-proteyin",
    parent: {
      connectOrCreate: {
        create: {
          name: "Протеїн",
          slug: "protein",
        },
        where: {
          slug: "protein",
        },
      },
    },
  },
  {
    name: "Сироватковий протеїн",
    slug: "sirovatkovij-proteyin",
    parent: {
      connectOrCreate: {
        create: {
          name: "Протеїн",
          slug: "protein",
        },
        where: {
          slug: "protein",
        },
      },
    },
  },
  {
    name: "Соєвий протеїн",
    slug: "soyevij-proteyin",
    parent: {
      connectOrCreate: {
        create: {
          name: "Протеїн",
          slug: "protein",
        },
        where: {
          slug: "protein",
        },
      },
    },
  },
  {
    name: "Вітамін A",
    slug: "vitamin-a",
    parent: {
      connectOrCreate: {
        create: {
          name: "Вітаміни та добавки",
          slug: "vitamini-ta-dobavki",
        },
        where: {
          slug: "vitamini-ta-dobavki",
        },
      },
    },
  },
  {
    name: "Вітамін B ",
    slug: "vitamin-b",
    parent: {
      connectOrCreate: {
        create: {
          name: "Вітаміни та добавки",
          slug: "vitamini-ta-dobavki",
        },
        where: {
          slug: "vitamini-ta-dobavki",
        },
      },
    },
  },
  {
    name: "Вітамін B-12",
    slug: "vitamin-b-12",
    parent: {
      connectOrCreate: {
        create: {
          name: "Вітаміни та добавки",
          slug: "vitamini-ta-dobavki",
        },
        where: {
          slug: "vitamini-ta-dobavki",
        },
      },
    },
  },
  {
    name: "Вітамін C",
    slug: "vitamin-c",
    parent: {
      connectOrCreate: {
        create: {
          name: "Вітаміни та добавки",
          slug: "vitamini-ta-dobavki",
        },
        where: {
          slug: "vitamini-ta-dobavki",
        },
      },
    },
  },
  {
    name: "Вітамін D",
    slug: "vitamin-d",
    parent: {
      connectOrCreate: {
        create: {
          name: "Вітаміни та добавки",
          slug: "vitamini-ta-dobavki",
        },
        where: {
          slug: "vitamini-ta-dobavki",
        },
      },
    },
  },
  {
    name: "Вітамін E",
    slug: "vitamin-e",
    parent: {
      connectOrCreate: {
        create: {
          name: "Вітаміни та добавки",
          slug: "vitamini-ta-dobavki",
        },
        where: {
          slug: "vitamini-ta-dobavki",
        },
      },
    },
  },
  {
    name: "Вітамін К",
    slug: "vitamin-k",
    parent: {
      connectOrCreate: {
        create: {
          name: "Вітаміни та добавки",
          slug: "vitamini-ta-dobavki",
        },
        where: {
          slug: "vitamini-ta-dobavki",
        },
      },
    },
  },
  {
    name: "Високо білкові",
    slug: "visoko-bilkovi-gejneri",
    parent: {
      connectOrCreate: {
        create: {
          name: "Гейнери",
          slug: "gejneri",
        },
        where: {
          slug: "gejneri",
        },
      },
    },
  },
  {
    name: "Високо вуглеводні",
    slug: "visoko-vuglevodni-gejneri",
    parent: {
      connectOrCreate: {
        create: {
          name: "Гейнери",
          slug: "gejneri",
        },
        where: {
          slug: "gejneri",
        },
      },
    },
  },
  {
    name: "Амінокислотні комплекси",
    slug: "aminokislotni-kompleksi",
    parent: {
      connectOrCreate: {
        create: {
          name: "Амінокислоти",
          slug: "aminokisloti",
        },
        where: {
          slug: "aminokisloti",
        },
      },
    },
  },
  {
    name: "Аргінін",
    slug: "arginin",
    parent: {
      connectOrCreate: {
        create: {
          name: "Амінокислоти",
          slug: "aminokisloti",
        },
        where: {
          slug: "aminokisloti",
        },
      },
    },
  },
  {
    name: "Бета Аланін",
    slug: "beta-alanin",
    parent: {
      connectOrCreate: {
        create: {
          name: "Амінокислоти",
          slug: "aminokisloti",
        },
        where: {
          slug: "aminokisloti",
        },
      },
    },
  },
  {
    name: "Глицин",
    slug: "glicin",
    parent: {
      connectOrCreate: {
        create: {
          name: "Амінокислоти",
          slug: "aminokisloti",
        },
        where: {
          slug: "aminokisloti",
        },
      },
    },
  },
  {
    name: "Глютамін",
    slug: "glyutamin",
    parent: {
      connectOrCreate: {
        create: {
          name: "Амінокислоти",
          slug: "aminokisloti",
        },
        where: {
          slug: "aminokisloti",
        },
      },
    },
  },
  {
    name: "Креатин",
    slug: "kreatin",
  },
  {
    name: "Жироспалювачі",
    slug: "zhirospalyuvachi",
  },
  {
    name: "Для звязок і суглобів",
    slug: "dlya-zvyazok-i-suglobiv",
  },
  {
    name: "Шейкери",
    slug: "shejkeri",
  },
];

const brandsSeed: Prisma.BrandCreateInput[] = [
  { name: "Activlab", slug: "activlab" },
  { name: "Allnutrition", slug: "allnutrition" },
  { name: "Biotech USA Nutrition", slug: "biotech-usa-nutrition" },
  { name: "BSN", slug: "bsn" },
  { name: "Dorian Yates Nutrition", slug: "dorian-yates-nutrition" },
  { name: "Dymatize Nutrition", slug: "dymatize-nutrition" },
  { name: "Fit Max", slug: "fit-max" },
  {
    name: "Mars Chocolate Drinks and Treats",
    slug: "mars-chocolate-drinks-and-treats",
  },
  { name: "Mex Nutrition", slug: "mex-nutrition" },
  { name: "Mutant", slug: "mutant" },
  { name: "MyProtein", slug: "myprotein" },
  { name: "NOW Foods", slug: "now-foods" },
  { name: "Nutrend", slug: "nutrend" },
  { name: "Olimp Labs", slug: "olimp-labs" },
  { name: "Optimum Nutrition", slug: "optimum-nutrition" },
  { name: "Ostrovit", slug: "ostrovit" },
  { name: "Rule One Proteins", slug: "rule-one-proteins" },
  { name: "Scitec Nutrition", slug: "scitec-nutrition" },
  { name: "Syntrax", slug: "syntrax" },
  { name: "Ultimate Nutrition", slug: "ultimate-nutrition" },
  { name: "VP Lab Nutrition", slug: "vp-lab-nutrition" },
  { name: "Weider", slug: "weider" },
  { name: "Xtend", slug: "xtend" },
  { name: "Biogenix Nutrition", slug: "biogenix-nutrition" },
  { name: "Blastex Nutrition", slug: "blastex-nutrition" },
  { name: "BPI Sports", slug: "bpi-sports" },
  { name: "Buchach", slug: "buchach" },
  { name: "Bulk Powders", slug: "bulk-powders" },
  { name: "Cellucor", slug: "cellucor" },
  { name: "Extrifit", slug: "extrifit" },
  { name: "Fitness Authority", slug: "sl" },
  { name: "Full Force", slug: "full-force" },
  { name: "Gaspari Nutrition", slug: "gaspari-nutrition" },
  {
    name: "Inner Armour Sports Nutrition",
    slug: "inner-armour-sports-nutrition",
  },
  { name: "INSANE LABZ", slug: "insane-labz" },
  { name: "IronMaxx", slug: "ironmaxx" },
  { name: "Jay Cutler", slug: "jay-cutler" },
  { name: "Kevin Levrone", slug: "kevin-levrone" },
  { name: "Labrada", slug: "labrada" },
  { name: "Mammut Nutrition", slug: "mammut-nutrition" },
  { name: "Mass Fitness", slug: "mass-fitness" },
  { name: "Maxler", slug: "maxler" },
  { name: "Multipower", slug: "multipower" },
  { name: "Muscle Gauge Nutrition", slug: "muscle-gauge-nutrition" },
  { name: "Muscle Pharm", slug: "muscle-pharm" },
  { name: "MuscleTech", slug: "muscletech" },
  { name: "Nex Pro Nutrition", slug: "nex-pro-nutrition" },
  { name: "NutraBolics", slug: "nutrabolics" },
  { name: "Nutrex Research", slug: "nutrex-research" },
  { name: "Nutricore", slug: "nutricore" },
  { name: "PharmaFreak", slug: "pharmafreak" },
  { name: "Prosupps", slug: "prosupps" },
  { name: "Protein Factory", slug: "protein-factory" },
  { name: "Pure Gold Protein", slug: "pure-gold-protein" },
  { name: "Puritan's Pride", slug: "puritans-pride" },
  { name: "Fit Foods", slug: "fit-foods" },
  { name: "UNS", slug: "uns" },
  { name: "USN", slug: "usn" },
  { name: "Warrior", slug: "warrior" },
];

const countriesSeed: Prisma.CountryCreateInput[] = [
  { name: "Ірландія", slug: "ireland" },
  { name: "Англія", slug: "england" },
  { name: "Бельгія", slug: "belgium" },
  { name: "Канада", slug: "canada" },
  { name: "Німеччина", slug: "germany" },
  { name: "Польща", slug: "poland" },
  { name: "США", slug: "usa" },
  { name: "Угорщина", slug: "hungary" },
  { name: "Україна", slug: "ukraine" },
  { name: "Чехія", slug: "czech-republic" },
];

const productsSeed: Prisma.ProductCreateInput[] = [
  // {
  //   slug: "100-elite-whey-dymatize-nutrition",
  //   name: "100% Elite Whey Dymatize Nutrition",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, similique laborum dolorem repellat omnis quaerat.",
  //   brand: {
  //     connect: {
  //       name: "Dymatize Nutrition",
  //     },
  //   },
  //   type: {
  //     connect: {
  //       slug: "protein",
  //     },
  //   },
  //   speedType: {
  //     connect: { name: "Комплексний протеїн" },
  //   },
  //   country: {
  //     connect: { name: "США" },
  //   },
  //   flavours: {
  //     create: {
  //       amount: 10,
  //       price: 2469,
  //       flavour: {
  //         connectOrCreate: {
  //           create: {
  //             name: "Ваніль",
  //             slug: "vanilla",
  //           },
  //           where: {
  //             name: "Ваніль",
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   slug: "shadowhey-2000-gram",
  //   name: "Shadowhey 2000 грам",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, similique laborum dolorem repellat omnis quaerat.",
  //   brand: {
  //     connect: {
  //       name: "Dorian Yates Nutrition",
  //     },
  //   },
  //   type: {
  //     connect: {
  //       slug: "sirovatkovij-proteyin",
  //     },
  //   },
  //   speedType: {
  //     connect: { name: "Швидкий протеїн" },
  //   },
  //   country: {
  //     connect: { name: "Угорщина" },
  //   },
  //   flavours: {
  //     create: {
  //       amount: 10,
  //       price: 1999,
  //       flavour: {
  //         connectOrCreate: {
  //           create: {
  //             name: "Фісташка",
  //             slug: "pistachio",
  //           },
  //           where: {
  //             name: "Фісташка",
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
  {
    slug: "syntha-6-4500-g",
    name: "Syntha-6, 4500 g",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, similique laborum dolorem repellat omnis quaerat.",
    brand: {
      connect: {
        name: "BSN",
      },
    },
    type: {
      connect: {
        slug: "protein",
      },
    },
    speedType: {
      connect: { name: "Повільний протеїн" },
    },
    country: {
      connect: { name: "США" },
    },
    flavours: {
      create: {
        amount: 10,
        price: 4770,
        flavour: {
          connectOrCreate: {
            create: {
              name: "Фісташка",
              slug: "pistachio",
            },
            where: {
              name: "Фісташка",
            },
          },
        },
      },
    },
  },
  {
    slug: "rule1-r1-casein-924-g",
    name: "Rule1, R1 Casein, 924 g",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, similique laborum dolorem repellat omnis quaerat.",
    brand: {
      connect: {
        name: "Rule One Proteins",
      },
    },
    type: {
      connect: {
        slug: "kazeyin",
      },
    },
    speedType: {
      connect: { name: "Повільний протеїн" },
    },
    country: {
      connect: { name: "США" },
    },
    flavours: {
      create: {
        amount: 10,
        price: 1259,
        flavour: {
          connectOrCreate: {
            create: {
              name: "Фісташка",
              slug: "pistachio",
            },
            where: {
              name: "Фісташка",
            },
          },
        },
      },
    },
  },
  {
    slug: "impact-whey-protein-2500g",
    name: "Impact Whey Protein, 2500g",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, similique laborum dolorem repellat omnis quaerat.",
    brand: {
      connect: {
        name: "Multipower",
      },
    },
    type: {
      connect: {
        slug: "protein",
      },
    },
    speedType: {
      connect: { name: "Швидкий протеїн" },
    },
    country: {
      connect: { name: "Англія" },
    },
    flavours: {
      create: {
        amount: 10,
        price: 1999,
        flavour: {
          connectOrCreate: {
            create: {
              name: "Фісташка",
              slug: "pistachio",
            },
            where: {
              name: "Фісташка",
            },
          },
        },
      },
    },
  },
];

async function main() {
  console.log("Start seeding...");
  // for (let item of speedTypesSeed) {
  //   await prisma.speedType.create({
  //     data: item,
  //   });
  // }
  // for (let item of typesSeed) {
  //   await prisma.type.create({
  //     data: item,
  //   });
  // }
  // for (let item of countriesSeed) {
  //   await prisma.country.create({
  //     data: item,
  //   });
  // }
  // for (let item of flavourSeed) {
  //   await prisma.flavour.create({
  //     data: item,
  //   });
  // }
  // for (let item of purposeSeed) {
  //   await prisma.purpose.create({
  //     data: item,
  //   });
  // }
  // for (let item of productsSeed) {
  //   await prisma.product.create({
  //     data: item,
  //   });
  // }

  console.log("Seeding finished");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
