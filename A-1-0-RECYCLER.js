const { Client, MessageEmbed } = require('discord.js');
const bot = new Client();//cuando instanciamos un objeto nos devuelve un objeto

bot.on('message', async message =>{
    //receiving the message
    
   
    
    const mc = message.content;
    const mcs = (s)=>message.channel.send(s);
    const messageDelete = message.delete({timeout: 60000})

    // if(message.content === 'que son las kyu?'){
    //     const embed = new MessageEmbed()
    //         .addField('')
    // }
    
    switch (mc){
        case 'A-1 que son las kyu?':
            messageDelete
            const embed = new MessageEmbed()
            .setTitle(`๐ผ๐๐ ๐๐๐๐๐ ๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐๐ ๐๐๐ ๐๐๐๐ ๐ฌ..`)
            .setColor(0xff0000)
            .addField('kyลซ (็ด )๐ es un vocablo japonรฉs utilizado tanto en las artes marciales japonesas como en otras prรกcticas tradicionales japonesas๐ como son el ikebana,')
            .addField(' el juego del go o la ceremonia del tรฉ para designar las diferentes etapas en la progresiรณn de un debutante antes de la obtenciรณn del nivel de dan.โฉ , ')
            .addField('hacer los kates de tu lenguaje para obtener los kyu de bajo dejo una lista de los lenguajes que acepta la pagina codewars.[Loading...]')
            mcs(embed)
            // mcs(`kyลซ (็ด ) es un vocablo japonรฉs utilizado tanto en las artes marciales japonesas como en otras prรกcticas tradicionales japonesas como son el ikebana, el juego del go o la ceremonia del tรฉ para designar las diferentes etapas en la progresiรณn de un debutante antes de la obtenciรณn del nivel de dan. , hacer los kates de tu lenguaje para obtener los kyu de bajo dejo una lista de los lenguajes que acepta la pagina codewars.[Loading...]`)
            break
        case 'A-1 como obtengo rol kiu?':
            messageDelete
            mcs(`en lo que te logueas a la pagina el rango por defecto es 8 kyu, entonces escribes en algun canal papelera ๐ [obtener kyu] y algun admin se contactara contigo`)
            break
        case 'A-1 que es codewars?':
            messageDelete
            mcs('https://www.codewars.com ve a la url y descubrelo tu mismo')
            break
        case 'A-1':
            messageDelete
            mcs('eh comido ...')
            break
        case 'A-1 info':
            messageDelete
            const embed2 = new MessageEmbed()
            .setTitle(`๐ฌ๐จ๐ฅ๐จ ๐ฉ๐ฎ๐๐๐๐ง ๐ฏ๐๐ซ ๐ฆ๐ข ๐ข๐ง๐๐จ ๐ฅ๐จ๐ฌ ๐ซ๐จ๐ฅ๐๐ฌ ๐๐ ๐๐ค๐ข๐ฎ ๐ฌ๐ข ๐๐๐ญ๐ข๐ฏ๐๐ฌ๐ญ๐ ๐๐ฌ๐ญ๐ ๐๐จ๐ฆ๐๐ง๐๐จ ๐๐๐ฅ๐ข๐๐ข๐ญ๐๐๐ข๐จ๐ง๐๐ฌ ๐๐ก๐จ๐ซ๐ ๐ญ๐ข๐๐ง๐๐ฌ ๐ซ๐๐ฌ๐ฉ๐จ๐ง๐ฌ๐๐๐ข๐ฅ๐ข๐๐๐ ๐๐ค๐ฎ ๐ข๐ซ๐ข`)
            .setColor(0xff0000)
            .addField('const { Client, MessageEmbed } = require(discord.js);')
            .addField('const bot = new Client();')
            .addField('bot.on(message, async message =>{')
            .addField('const mc = message.content;')
            .addField('const mcs = (s)=>message.channel.send(s);')
            .addField('switch (mc){')
            .addField('case A-1 que son las kyu?:')
            .addField('const embed2 = new MessageEmbed()')
            .addField('.setTitle()')
            .addField('.setColor(WHITE)')
            .addField('.addField(tu texto)')
            .addField('mcs(embed)')
            .addField('break')
            .addField('default:')
            .addField('message.delete({timeout: 10000})')
            .addField('}')
            .addField('})')
            .addField('bot.login(token)')
            mcs(embed2)
            break


        default:
            messageDelete
            
            
    }
    
})


bot.login('');