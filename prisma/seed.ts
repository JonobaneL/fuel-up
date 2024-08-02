import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const speedTypesSeed: Prisma.SpeedTypeCreateInput[] = [
  { name: "Комплексний протеїн", slug: "kompleksnij-proteyin" },
  { name: "Повільний протеїн", slug: "povilnij-proteyin" },
  { name: "Швидкий протеїн", slug: "shvidkij-proteyin" },
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
  {
    slug: "100-elite-whey-dymatize-nutrition",
    name: "100% Elite Whey Dymatize Nutrition",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, similique laborum dolorem repellat omnis quaerat.",
    brand: {
      connect: {
        name: "Dymatize Nutrition",
      },
    },
    type: {
      connect: {
        slug: "protein",
      },
    },
    speedType: {
      connect: { name: "Комплексний протеїн" },
    },
    country: {
      connect: { name: "США" },
    },
    flavours: {
      create: {
        amount: 10,
        price: 2469,
        flavour: {
          connectOrCreate: {
            create: {
              name: "Ваніль",
              slug: "vanilla",
            },
            where: {
              name: "Ваніль",
            },
          },
        },
      },
    },
  },
  {
    slug: "shadowhey-2000-gram",
    name: "Shadowhey 2000 грам",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, similique laborum dolorem repellat omnis quaerat.",
    brand: {
      connect: {
        name: "Dorian Yates Nutrition",
      },
    },
    type: {
      connect: {
        slug: "sirovatkovij-proteyin",
      },
    },
    speedType: {
      connect: { name: "Швидкий протеїн" },
    },
    country: {
      connect: { name: "Угорщина" },
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
  // for (let item of brandsSeed) {
  //   await prisma.brand.create({
  //     data: item,
  //   });
  // }
  for (let item of productsSeed) {
    await prisma.product.create({
      data: item,
    });
  }

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
