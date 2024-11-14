export type SOSType = 'toon-up' | 'trap' | 'lure' | 'sound' | 'drop' | 'restock' | 'accuracy';

export interface SOSCard {
  id: number;
  name: string;
  type: SOSType;
  stars: number;
  description: string;
  imageUrl: string;
  statistics: string[];
}

export const sosCards: SOSCard[] = [
  {
    id: 1,
    name: "Flippy",
    type: "toon-up",
    stars: 5,
    description: "Heal - Toon-Up - Juggling Cubes",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Flippy_Doggenbottom.webp",
    statistics: [
      "+180 laff points to 1 Toon",
      "+90 laff points to 2 Toons",
      "+60 laff points to 3 Toons",
      "+45 laff points to 4 Toons"
    ]
  },
  {
    id: 2,
    name: "Madam Chuckle",
    type: "toon-up",
    stars: 3,
    description: "Heal - Toon-Up - Megaphone",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Madam_Chuckle.webp",
    statistics: [
      "+60 laff points to 1 Toon",
      "+30 laff points to 2 Toons",
      "+20 laff points to 3 Toons",
      "+15 laff points to 4 Toons"
    ]
  },
  {
    id: 3,
    name: "Daffy Don",
    type: "toon-up",
    stars: 4,
    description: "Heal - Toon-Up - Bamboo Cane",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Daffy_Don.webp",
    statistics: [
      "+120 laff points to 1 Toon",
      "+60 laff points to 2 Toons",
      "+40 laff points to 3 Toons",
      "+30 laff points to 4 Toons"
    ]
  },
  {
    id: 4,
    name: "Clerk Will",
    type: "trap",
    stars: 3,
    description: "Attack - Trap - Quicksand",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Clerk_Will.webp",
    statistics: [
      "Deals 60 damage to all lured Cogs"
    ]
  },
  {
    id: 5,
    name: "Clerk Penny",
    type: "trap",
    stars: 4,
    description: "Attack - Trap - Trapdoor",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Clerk_Penny.webp",
    statistics: [
      "Deals 120 damage to all lured Cogs"
    ]
  },
  {
    id: 6,
    name: "Clerk Clara",
    type: "trap",
    stars: 5,
    description: "Attack - Trap - TNT",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Clerk_Clara.webp",
    statistics: [
      "Deals 180 damage to all lured Cogs"
    ]
  },
  {
    id: 7,
    name: "Stinky Ned",
    type: "lure",
    stars: 3,
    description: "Lure - Small Magnet",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Stinky_Ned.webp",
    statistics: [
      "Lures all Cogs for 4 rounds"
    ]
  },
  {
    id: 8,
    name: "Nancy Gas",
    type: "lure",
    stars: 4,
    description: "Lure - Big Magnet",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Nancy_Gas.webp",
    statistics: [
      "Lures all Cogs for 5 rounds"
    ]
  },
  {
    id: 9,
    name: "Lil Oldman",
    type: "lure",
    stars: 5,
    description: "Lure - Hypno-goggles",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Lil_Oldman.webp",
    statistics: [
      "Lures all Cogs for 6 rounds"
    ]
  },
  {
    id: 10,
    name: "Barbara Seville",
    type: "sound",
    stars: 3,
    description: "Attack - Sound - Aoogah",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Barbara_Seville.webp",
    statistics: [
      "Deals 35 damage to all Cogs"
    ]
  },
  {
    id: 11,
    name: "Sid Sonata",
    type: "sound",
    stars: 4,
    description: "Attack - Sound - Elephant Trunk",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Sid_Sonata.webp",
    statistics: [
      "Deals 55 damage to all Cogs"
    ]
  },
  {
    id: 12,
    name: "Moe Zart",
    type: "sound",
    stars: 5,
    description: "Attack - Sound - Foghorn",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Moe_Zart.webp",
    statistics: [
      "Deals 75 damage to all Cogs"
    ]
  },
  {
    id: 13,
    name: "Clumsy Ned",
    type: "drop",
    stars: 3,
    description: "Attack - Drop - Big Weight",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Clumsy_Ned.webp",
    statistics: [
      "Deals 60 damage to all unlured Cogs"
    ]
  },
  {
    id: 14,
    name: "Franz Neckvein",
    type: "drop",
    stars: 4,
    description: "Attack - Drop - Safe",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Franz_Neckvein.webp",
    statistics: [
      "Deals 100 damage to all unlured Cogs"
    ]
  },
  {
    id: 15,
    name: "Barnacle Bessie",
    type: "drop",
    stars: 5,
    description: "Attack - Drop - Grand Piano",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Barnacle_Bessie.webp",
    statistics: [
      "Deals 170 damage to all unlured Cogs"
    ]
  },
  {
    id: 16,
    name: "Professor Guffaw",
    type: "restock",
    stars: 3,
    description: "Restock - Toon-Up - Lipstick",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Professor_Guffaw.webp",
    statistics: [
      "Restocks 12 Toon-Up gags of the highest levels available for all Toons"
    ]
  },
  {
    id: 17,
    name: "Clerk Ray",
    type: "restock",
    stars: 3,
    description: "Restock - Trap - Lipstick",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Clerk_Ray.webp",
    statistics: [
      "Restocks 12 Trap gags of the highest levels available for all Toons"
    ]
  },
  {
    id: 18,
    name: "Doctor Drift",
    type: "restock",
    stars: 3,
    description: "Restock - Lure - Lipstick",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Doctor_Drift.webp",
    statistics: [
      "Restocks 12 Lure gags of the highest levels available for all Toons"
    ]
  },
  {
    id: 19,
    name: "Melody Wavers",
    type: "restock",
    stars: 3,
    description: "Restock - Sound - Lipstick",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Melody_Wavers.webp",
    statistics: [
      "Restocks 12 Sound gags of the highest levels available for all Toons"
    ]
  },
  {
    id: 20,
    name: "Baker Bridget",
    type: "restock",
    stars: 3,
    description: "Restock - Throw - Lipstick",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Baker_Bridget.webp",
    statistics: [
      "Restocks 12 Throw gags of the highest levels available for all Toons"
    ]
  },
  {
    id: 21,
    name: "Sofie Squirt",
    type: "restock",
    stars: 3,
    description: "Restock - Squirt - Lipstick",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Sofie_Squirt.webp",
    statistics: [
      "Restocks 12 Squirt gags of the highest levels available for all Toons"
    ]
  },
  {
    id: 22,
    name: "Shelly Seaweed",
    type: "restock",
    stars: 3,
    description: "Restock - Drop - Lipstick",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Shelly_Seaweed.webp",
    statistics: [
      "Restocks 12 Drop gags of the highest levels available for all Toons"
    ]
  },
  {
    id: 23,
    name: "Professor Pete",
    type: "restock",
    stars: 5,
    description: "Restock - All - Lipstick",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Professor_Pete.webp",
    statistics: [
      "Restocks 45 gags of the highest levels available for all Toons"
    ]
  },
  {
    id: 24,
    name: "Soggy Bottom",
    type: "accuracy",
    stars: 3,
    description: "Toons Hit - Pixie Dust",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Soggy_Bottom.webp",
    statistics: [
      "Increases accuracy of gags by 75% for 3 rounds"
    ]
  },
  {
    id: 25,
    name: "Soggy Nell",
    type: "accuracy",
    stars: 4,
    description: "Toons Hit - Pixie Dust",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Soggy_Nell.webp",
    statistics: [
      "Increases accuracy of gags by 75% for 4 rounds"
    ]
  },
  {
    id: 26,
    name: "Sticky Lou",
    type: "accuracy",
    stars: 5,
    description: "Toons Hit - Pixie Dust",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Sticky_Lou.webp",
    statistics: [
      "Increases accuracy of gags by 75% for 5 rounds"
    ]
  },
  {
    id: 27,
    name: "Flim Flam",
    type: "accuracy",
    stars: 3,
    description: "Cogs Miss - Pixie Dust",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Flim_Flam.webp",
    statistics: [
      "Reduces accuracy of Cog attacks by 75% for 3 rounds"
    ]
  },
  {
    id: 28,
    name: "Mr. Freeze",
    type: "accuracy",
    stars: 4,
    description: "Cogs Miss - Pixie Dust",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Mr._Freeze.webp",
    statistics: [
      "Reduces accuracy of Cog attacks by 75% for 4 rounds"
    ]
  },
  {
    id: 29,
    name: "Julius Wheezer",
    type: "accuracy",
    stars: 5,
    description: "Cogs Miss - Pixie Dust",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/Julius_Wheezer.webp",
    statistics: [
      "Reduces accuracy of Cog attacks by 75% for 5 rounds"
    ]
  }
];