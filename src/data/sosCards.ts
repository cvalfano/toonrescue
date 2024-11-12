import { SOSCard } from './types';

export type SOSType = 'toon-up' | 'trap' | 'lure' | 'sound' | 'drop' | 'restock' | 'accuracy';

export interface SOSCard {
  id: number;
  name: string;
  type: SOSType;
  stars: number;
  description: string;
  imageUrl: string;
  statistics?: string[];
}

export const sosCards: SOSCard[] = [
  // Toon-Up
  {
    id: 1,
    name: "Flippy",
    type: "toon-up",
    stars: 5,
    description: "Juggling Cubes - Group Toon-up",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Flippy_Doggenbottom.webp",
    statistics: [
      "180 laff points to one Toon",
      "90 to two Toons",
      "60 to three Toons",
      "45 to four Toons"
    ]
  },
  {
    id: 2,
    name: "Daffy Don",
    type: "toon-up",
    stars: 4,
    description: "Bamboo Cane - Group Toon-up",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Daffy_Don.webp",
    statistics: [
      "120 laff points to one Toon",
      "60 to two Toons",
      "40 to three Toons",
      "30 to four Toons"
    ]
  },
  {
    id: 3,
    name: "Madam Chuckle",
    type: "toon-up",
    stars: 3,
    description: "Megaphone - Group Toon-up",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Madam_Chuckle.webp",
    statistics: [
      "60 laff points to one Toon",
      "30 to two Toons",
      "20 to three Toons",
      "15 to four Toons"
    ]
  },

  // Trap
  {
    id: 4,
    name: "Clerk Clara",
    type: "trap",
    stars: 5,
    description: "TNT - Group Trap",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Clerk_Clara.webp",
    statistics: ["Deals 180 damage to all lured Cogs"]
  },
  {
    id: 5,
    name: "Clerk Penny",
    type: "trap",
    stars: 4,
    description: "Trapdoor - Group Trap",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Clerk_Penny.webp",
    statistics: ["Deals 120 damage to all lured Cogs"]
  },
  {
    id: 6,
    name: "Clerk Will",
    type: "trap",
    stars: 3,
    description: "Quicksand - Group Trap",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Clerk_Will.webp",
    statistics: ["Deals 60 damage to all lured Cogs"]
  },

  // Lure
  {
    id: 7,
    name: "Lil Oldman",
    type: "lure",
    stars: 5,
    description: "Hypno-goggles - Group Lure",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Lil_Oldman.webp",
    statistics: ["Lures all Cogs for 6 rounds"]
  },
  {
    id: 8,
    name: "Nancy Gas",
    type: "lure",
    stars: 4,
    description: "Big Magnet - Group Lure",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Nancy_Gas.webp",
    statistics: ["Lures all Cogs for 5 rounds"]
  },
  {
    id: 9,
    name: "Stinky Ned",
    type: "lure",
    stars: 3,
    description: "Small Magnet - Group Lure",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Stinky_Ned.webp",
    statistics: ["Lures all Cogs for 4 rounds"]
  },

  // Sound
  {
    id: 10,
    name: "Moe Zart",
    type: "sound",
    stars: 5,
    description: "Foghorn - Group Sound",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Moe_Zart.webp",
    statistics: ["Deals 75 damage to all Cogs"]
  },
  {
    id: 11,
    name: "Sid Sonata",
    type: "sound",
    stars: 4,
    description: "Elephant Trunk - Group Sound",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Sid_Sonata.webp",
    statistics: ["Deals 55 damage to all Cogs"]
  },
  {
    id: 12,
    name: "Barbara Seville",
    type: "sound",
    stars: 3,
    description: "Aoogah - Group Sound",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Barbara_Seville.webp",
    statistics: ["Deals 35 damage to all Cogs"]
  },

  // Drop
  {
    id: 13,
    name: "Barnacle Bessie",
    type: "drop",
    stars: 5,
    description: "Grand Piano - Group Drop",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Barnacle_Bessie.webp",
    statistics: ["Deals 170 damage to all unlured Cogs"]
  },
  {
    id: 14,
    name: "Franz Neckvein",
    type: "drop",
    stars: 4,
    description: "Safe - Group Drop",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Franz_Neckvein.webp",
    statistics: ["Deals 100 damage to all unlured Cogs"]
  },
  {
    id: 15,
    name: "Clumsy Ned",
    type: "drop",
    stars: 3,
    description: "Big Weight - Group Drop",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Clumsy_Ned.webp",
    statistics: ["Deals 60 damage to all unlured Cogs"]
  },

  // Restock
  {
    id: 16,
    name: "Professor Pete",
    type: "restock",
    stars: 5,
    description: "Restock All Gags",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Professor_Pete.webp",
    statistics: ["Restocks 45 gags of the highest levels available for all Toons"]
  },
  {
    id: 17,
    name: "Professor Guffaw",
    type: "restock",
    stars: 3,
    description: "Restock Toon-Up Gags",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Professor_Guffaw.webp",
    statistics: ["Restocks 12 Toon-Up gags of the highest levels"]
  },
  {
    id: 18,
    name: "Clerk Ray",
    type: "restock",
    stars: 3,
    description: "Restock Trap Gags",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Clerk_Ray.webp",
    statistics: ["Restocks 12 Trap gags of the highest levels"]
  },
  {
    id: 19,
    name: "Doctor Drift",
    type: "restock",
    stars: 3,
    description: "Restock Lure Gags",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Doctor_Drift.webp",
    statistics: ["Restocks 12 Lure gags of the highest levels"]
  },
  {
    id: 20,
    name: "Melody Wavers",
    type: "restock",
    stars: 3,
    description: "Restock Sound Gags",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Melody_Wavers.webp",
    statistics: ["Restocks 12 Sound gags of the highest levels"]
  },
  {
    id: 21,
    name: "Baker Bridget",
    type: "restock",
    stars: 3,
    description: "Restock Throw Gags",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Baker_Bridget.webp",
    statistics: ["Restocks 12 Throw gags of the highest levels"]
  },
  {
    id: 22,
    name: "Sofie Squirt",
    type: "restock",
    stars: 3,
    description: "Restock Squirt Gags",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Sofie_Squirt.webp",
    statistics: ["Restocks 12 Squirt gags of the highest levels"]
  },
  {
    id: 23,
    name: "Shelly Seaweed",
    type: "restock",
    stars: 3,
    description: "Restock Drop Gags",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Shelly_Seaweed.webp",
    statistics: ["Restocks 12 Drop gags of the highest levels"]
  },

  // Accuracy
  {
    id: 24,
    name: "Sticky Lou",
    type: "accuracy",
    stars: 5,
    description: "Toons Hit Boost",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Sticky_Lou.webp",
    statistics: ["Increases accuracy of gags by 75% for 5 rounds"]
  },
  {
    id: 25,
    name: "Soggy Nell",
    type: "accuracy",
    stars: 4,
    description: "Toons Hit Boost",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Soggy_Nell.webp",
    statistics: ["Increases accuracy of gags by 75% for 4 rounds"]
  },
  {
    id: 26,
    name: "Soggy Bottom",
    type: "accuracy",
    stars: 3,
    description: "Toons Hit Boost",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Soggy_Bottom.webp",
    statistics: ["Increases accuracy of gags by 75% for 3 rounds"]
  },
  {
    id: 27,
    name: "Julius Wheezer",
    type: "accuracy",
    stars: 5,
    description: "Cogs Miss",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Julius_Wheezer.webp",
    statistics: ["Reduces accuracy of Cog attacks by 75% for 5 rounds"]
  },
  {
    id: 28,
    name: "Mr. Freeze",
    type: "accuracy",
    stars: 4,
    description: "Cogs Miss",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Mr._Freeze.webp",
    statistics: ["Reduces accuracy of Cog attacks by 75% for 4 rounds"]
  },
  {
    id: 29,
    name: "Flim Flam",
    type: "accuracy",
    stars: 3,
    description: "Cogs Miss",
    imageUrl: "https://raw.githubusercontent.com/cvalfano/toonrescue/refs/heads/main/images/Flim_Flam.webp",
    statistics: ["Reduces accuracy of Cog attacks by 75% for 3 rounds"]
  }
];