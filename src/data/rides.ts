export interface RideInterface {
  id: number;
  name: string;
  video: string;
  location: string;
  description: string;
}

export const rides: RideInterface[] = [
  {
    id: 1,
    name: "recoil",
    video:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Recoil_480p_dd3c781929.mp4",
    location: "Bengaluru",
    description:
      "India’s first-ever action-packed reverse looping roller coaster ride!",
  },
  {
    id: 2,
    name: "Hyperverse",
    video:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Hyperverse_480p_c539001b46.mp4",
    location: "hyderabad",
    description:
      "Get transported to another world as you soar through a breathtaking 3D metaverse!",
  },
  {
    id: 3,
    name: "Space Gun",
    video:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Space_Gun_480p_a91b755b34.mp4",
    location: "Kochi",
    description:
      "See the world upside-down, dangling from high up above the ground!",
  },
  {
    id: 4,
    name: "wonderla bamba",
    video:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Wonderla_Bamba_480p_51837c9805.mp4",
    location: "bhubaneswar",
    description:
      "Perfect for first time thrill-seekers, this takes you on a spin with sudden drops and bursts of speed that will leave you wanting more!",
  },
  {
    id: 5,
    name: "G fall",
    video:
      "https://d22pimhl2qmbj7.cloudfront.net/public/G_Fall_480p_54a0131d48.mp4",
    location: "hyderabad",
    description:
      "Brace yourself for a heart-pounding, high-speed plunge into a dizzying freefall!",
  },
  {
    id: 6,
    name: "mission interstellar",
    video:
      "https://d22pimhl2qmbj7.cloudfront.net/public/MI_3s_V_5_MB_8572eacf1a.mp4",
    location: "Bengaluru",
    description:
      "Blast through cosmic chaos on a wild, out-of-this-world space ride!",
  },
];
