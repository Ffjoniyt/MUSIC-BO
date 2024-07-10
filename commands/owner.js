/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "owner",
  description: "Get information about bot owner.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const youtubeLink = 'https://www.youtube.com/channel/UCzBnkB590uYsVHXafaeyPbg';
      const InstagramLink = 'https://www.instagram.com/only_bushi_uk?igsh=Y3BmNTZkanpxcWxl';
      const { EmbedBuilder } = require('discord.js')
        const embed = new EmbedBuilder()
            .setColor('#da2a41')
            .setAuthor({
          name: 'Owner',
          iconURL: 'https://cdn.discordapp.com/attachments/1027672923294679180/1260447602584064091/fd41f91f5edd2d595ae4431af1e4ebbf.jpg?ex=668f5ace&is=668e094e&hm=7fed5a90dfff40cafcd24cbc84e68c7bd7c03a673d03c16e9b06f82e8bb8b4e1&',
          url: 'https://discord.gg/ZguJjVkJbW'
        })
            .setDescription(`__**About me**__:\n\n ▶️ bush1uk. I am a discord bot developer and web developer.My social account!\n YouTube : ❤️ [YOUTUBE](${youtubeLink})\n Instagram : 💙 [INSTAGRAM](${InstagramLink})`)
            .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};
/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
