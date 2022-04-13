try{
    const Discord = require('discord.js')
    const client = new Discord.Client()
    const fs = require('fs')
    const today = new Date()

    console.clear()

    client.on('ready', () => {
        console.log('[ ok ] ready')
    })

    client.on('messageDelete', async message => 
    {
            if ( message.author.bot || message.author.id != client.user.id)
            {

            }
            else
            {
                message.channel.send(`" ${message.content} " was deleted by <@!${message.author.id}> @ ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} \n`)
                message.attachments.forEach(attachment => {
                    message.channel.send(attachment.proxyURL)
                }); 
            }
    })


    client.on('messageUpdate', async message => 
    {
        if (  message.author.bot || message.author.id != client.user.id)
        {

        }
        else
        {
            message.channel.send(`" ${message.content} " was edited by <@!${message.author.id}> @ ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} \n`)
            message.attachments.forEach(attachment => {
                message.channel.send(attachment.proxyURL)
            });
        }
    })

    client.login("no")
}
catch
{

}