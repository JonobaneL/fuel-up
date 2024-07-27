import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const speedTypesSeed: Prisma.SpeedTypeCreateInput[] = [
  { name: "Комплексний протеїн" },
  { name: "Повільний протеїн" },
  { name: "Швидкий протеїн" },
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
];

const brandsSeed: Prisma.BrandCreateInput[] = [
  { name: "Activlab" },
  { name: "Allnutrition" },
  { name: "Biotech USA Nutrition" },
  { name: "BSN" },
  { name: "Dorian Yates Nutrition" },
  { name: "Dymatize Nutrition" },
  { name: "Fit Max" },
  { name: "Mars Chocolate Drinks and Treats" },
  { name: "Mex Nutrition" },
  { name: "Mutant" },
  { name: "MyProtein" },
  { name: "NOW Foods" },
  { name: "Nutrend" },
  { name: "Olimp Labs" },
  { name: "Optimum Nutrition" },
  { name: "Ostrovit" },
  { name: "Rule One Proteins" },
  { name: "Scitec Nutrition" },
  { name: "Syntrax" },
  { name: "Ultimate Nutrition" },
  { name: "VP Lab Nutrition" },
  { name: "Weider" },
  { name: "Xtend" },
  { name: "Biogenix Nutrition" },
  { name: "Blastex Nutrition" },
  { name: "BPI Sports" },
  { name: "Buchach" },
  { name: "Bulk Powders" },
  { name: "Cellucor" },
  { name: "Extrifit" },
  { name: "Fitness Authority" },
  { name: "Full Force" },
  { name: "Gaspari Nutrition" },
  { name: "Inner Armour Sports Nutrition" },
  { name: "INSANE LABZ" },
  { name: "IronMaxx" },
  { name: "Jay Cutler" },
  { name: "Kevin Levrone" },
  { name: "Labrada" },
  { name: "Mammut Nutrition" },
  { name: "Mass Fitness" },
  { name: "Maxler" },
  { name: "Multipower" },
  { name: "Muscle Gauge Nutrition" },
  { name: "Muscle Pharm" },
  { name: "MuscleTech" },
  { name: "Nex Pro Nutrition" },
  { name: "NutraBolics" },
  { name: "Nutrex Research" },
  { name: "Nutricore" },
  { name: "PharmaFreak" },
  { name: "Prosupps" },
  { name: "Protein Factory" },
  { name: "Pure Gold Protein" },
  { name: "Puritan's Pride" },
  { name: "Fit Foods" },
  { name: "UNS" },
  { name: "USN" },
  { name: "Warrior" },
];

const countriesSeed: Prisma.CountryCreateInput[] = [
  { name: "Ірландія" },
  { name: "Англія" },
  { name: "Бельгія" },
  { name: "Канада" },
  { name: "Німеччина" },
  { name: "Польща" },
  { name: "США" },
  { name: "Угорщина" },
  { name: "Україна" },
  { name: "Чехія" },
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
      connectOrCreate: {
        where: {
          id: "clz2j6i760001iw75pbyf1rrt",
        },
        create: {
          amount: 10,
          price: 2469,
          flavour: {
            connectOrCreate: {
              create: {
                name: "Ваніль",
              },
              where: {
                name: "Ваніль",
              },
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
      connectOrCreate: {
        where: {
          id: "clz2j6i760001iw75pbyf1rrtclz2j6i870004iw75e8lepgee",
        },
        create: {
          amount: 10,
          price: 1999,
          flavour: {
            connectOrCreate: {
              create: {
                name: "Фісташка",
              },
              where: {
                name: "Фісташка",
              },
            },
          },
        },
      },
    },
  },
];
const addTypes: Prisma.TypeCreateInput[] = [
  { name: "Вітамін A", slug: "vitamin-a" },
  { name: "Вітамін B ", slug: "vitamin-b" },
  { name: "Вітамін B-12", slug: "vitamin-b-12" },
  { name: "Вітамін C", slug: "vitamin-c" },
  { name: "Вітамін D", slug: "vitamin-d" },
  { name: "Вітамін E", slug: "vitamin-e" },
  { name: "Вітамін К", slug: "vitamin-k" },
];
async function main() {
  console.log("Start seeding...");
  //   for (let item of speedTypesSeed) {
  //     await prisma.speedType.create({
  //       data: item,
  //     });
  //   }
  //   for (let item of typesSeed) {
  //     await prisma.type.create({
  //       data: item,
  //     });
  //   }
  //   for (let item of brandsSeed) {
  //     await prisma.brand.create({
  //       data: item,
  //     });
  //   }
  // for (let item of countriesSeed) {
  //   await prisma.country.create({
  //     data: item,
  //   });
  // }
  for (let item of addTypes) {
    await prisma.type.create({
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
