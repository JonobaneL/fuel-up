import { Prisma } from "@prisma/client";

export const speedTypesSeed: Prisma.SpeedTypeCreateInput[] = [
  { name: "Комплексний протеїн" },
  { name: "Повільний протеїн" },
  { name: "Швидкий протеїн" },
];

export const typesSeed: Prisma.TypeCreateInput[] = [
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

export const brandsSeed: Prisma.BrandCreateInput[] = [
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
  { name: "Scitec Nutrition" },
];

export const countriesSeed: Prisma.CountryCreateInput[] = [
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
// export const productsSeed: Prisma.ProductCreateInput[] = [];
