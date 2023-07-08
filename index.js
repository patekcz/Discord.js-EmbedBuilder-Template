const { Client, EmbedBuilder, GatewayIntentBits } = require('discord.js');

// Permissions
const client = new Client({ 
  intents: [Object.keys(GatewayIntentBits)]
});

client.on('ready', () => {

  // Get the channel by ID
  const channel = client.channels.cache.get('1121526076959629412');  // Replace the channel ID with the ID of your target channel where you want to send the embedded message.


  // Create an embedded message
  const embed = new EmbedBuilder()

    // Set the author of the message
    .setAuthor({
      name: "Info",
      url: "https://example.com",  // Link that will open when clicking on the author's name
    })

    // Set the title of the message
    .setTitle("Example Title")

    // Set the URL for the title
    .setURL("https://example.com")  // Link that will open when clicking on the title

    // Set the description of the message
    .setDescription("This is an example description. Markdown works too!\n\nhttps://automatic.links\n> Block Quotes\n```\nCode Blocks\n```\n*Emphasis* or _emphasis_\n`Inline code` or ``inline code``\n[Links](https://example.com)\n<@123>, <@!123>, <#123>, <@&123>, @here, @everyone mentions\n||Spoilers||\n~~Strikethrough~~\n**Strong**\n__Underline__")

    // Add fields to the message
    .addFields(
      {
        name: "Field Name",  // Name of the field
        value: "This is the field value.",  // Value of the field
      },
      {
        name: "The first inline field.",
        value: "This field is inline.",
        inline: true  // The field will be displayed next to the previous field
      },
      {
        name: "The second inline field.",
        value: "Inline fields are stacked next to each other.",
        inline: true
      },
      {
        name: "The third inline field.",
        value: "You can have up to 3 inline fields in a row.",
        inline: true
      },
      {
        name: "Even if the next field is inline...",
        value: "It won't stack with the previous inline fields.",
        inline: true
      },
    )

    // Set the image of the message
    .setImage("https://cdn.discordapp.com/attachments/841228824427626526/876604762315968574/Discord_banner.png")

    // Set the thumbnail of the message
    .setThumbnail("https://dan.onl/images/emptysong.jpg")

    // Set the color of the message
    .setColor("#00b0f4")

    // Set the footer of the message
    .setFooter({
      text: "Example Footer",  // Text of the footer
      iconURL: "https://cdn.discordapp.com/attachments/841228824427626526/1073193247494656000/icon.png",  // URL of the footer icon
    })

    // Set the timestamp of the message
    .setTimestamp();

  // Send the message to the channel
  channel.send({ embeds: [embed] });
});

// Login the bot using the token
client.login('TOKEN'); // Replace 'TOKEN' with the actual token of your bot.
