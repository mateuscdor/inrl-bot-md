require('./config')
const { default: inrlConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

global.authFile =('./session.json')
var _0x266542=_0x5f4d;function _0x5f4d(_0x1211ea,_0x43fa25){var _0x13401b=_0x1340();return _0x5f4d=function(_0x5f4de2,_0x5ddea4){_0x5f4de2=_0x5f4de2-0xe6;var _0x1942bb=_0x13401b[_0x5f4de2];return _0x1942bb;},_0x5f4d(_0x1211ea,_0x43fa25);}(function(_0x2dda8c,_0x5cdf59){var _0x3a48af=_0x5f4d,_0x2b800f=_0x2dda8c();while(!![]){try{var _0x50faa4=parseInt(_0x3a48af(0xe9))/0x1*(parseInt(_0x3a48af(0xf4))/0x2)+parseInt(_0x3a48af(0xe6))/0x3+-parseInt(_0x3a48af(0xeb))/0x4*(-parseInt(_0x3a48af(0xf7))/0x5)+parseInt(_0x3a48af(0xee))/0x6+-parseInt(_0x3a48af(0xf2))/0x7+-parseInt(_0x3a48af(0xf3))/0x8+-parseInt(_0x3a48af(0xf1))/0x9;if(_0x50faa4===_0x5cdf59)break;else _0x2b800f['push'](_0x2b800f['shift']());}catch(_0x4622fd){_0x2b800f['push'](_0x2b800f['shift']());}}}(_0x1340,0x821b7));var aes256=require('aes256'),PastebinAPI=require(_0x266542(0xf8)),pastebin=new PastebinAPI({'api_dev_key':_0x266542(0xf5)});function _0x1340(){var _0x33820f=['decrypt','3895ylWbxN','pastebin-js','2486970LQYKgM','inrl~YsGtsdQKLIO8KWyvSSYTmkn7E2RV6zAX3hjeMQ','replaceAll','674701rkTZTz','./session.json','556bAaONK','inrl~','writeFileSync','82248lqmoow','then','my\x20passphrase','1876491ixLLQg','1378867KaguGq','5498248BssIUX','2JwMcxm','u_53edsqmFGKd02RMyQPwONVG0bIPi-R'];_0x1340=function(){return _0x33820f;};return _0x1340();}const mddc=_0x266542(0xe7);function inrl_c(){var _0x30b517=_0x266542,_0x147c6a=mddc;let _0x3707fc=_0x147c6a[_0x30b517(0xe8)](_0x30b517(0xec),'');var _0x59f445=_0x30b517(0xf0),_0x4c3219=_0x3707fc,_0x21914e=aes256[_0x30b517(0xf6)](_0x59f445,_0x4c3219),_0xd7c18=_0x21914e,_0x39ca01=atob(_0xd7c18);pastebin['getPaste'](_0x39ca01)[_0x30b517(0xef)](function(_0x3c40d1){var _0x3ece71=_0x30b517;fs[_0x3ece71(0xed)](_0x3ece71(0xea),_0x3c40d1);});}
 setTimeout(() => {    
const { state, saveState } = useSingleFileAuthState('./session.json')
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')



const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

async function inrlmd() {
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const multidivice = inrlConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['inrl-MD','Safari','1.0.0'],
        auth: state,
        version
    })

    store.bind(multidivice.ev)

    multidivice.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await multidivice.sendContact(callerId, global.owner)
    multidivice.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`}, { quoted : pa7rick })
    await sleep(8000)
    await multidivice.updateBlockStatus(callerId, "block")
    }
    })

    multidivice.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!multidivice.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(multidivice, mek, store)
        require("./plugins")(multidivice, m, chatUpdate, store)
        } catch (err) {
            //console.log(err)
        }
    })

    multidivice.ev.on('group-participants.update', async (anu) => {
        //console.log(anu)
        try {
            let metadata = await multidivice.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await multidivice.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await multidivice.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                

                if (anu.action == 'add') {
               hehe = `???????????????????????????? ???????? ${metadata.subject} @${user.jid.split("@")[0]}`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: hehe,
                               locationMessage: {
                           jpegThumbnail: fs.readFileSync('./media/image.jpg')},
      
                       //    jpegThumbnail: ppuser,
                            hydratedFooterText: `INRL-MD`,
                            hydratedButtons: [{
                                
                                urlButton: {
                                    displayText: '????????????????????????????????????',
                                    url: 'https://instagram.com/mhd_fasweeh'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                multidivice.relayMessage(m.chat, template.message, { messageId: template.key.id })
            
                } else if (anu.action == 'remove') {
                    multidivice.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `@${num.split("@")[0]} Leaving To ${metadata.subject}` })
                }
            }
        } catch (err) {
            //console.log(err)
        }
    })
	
    // Setting
    multidivice.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    multidivice.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = multidivice.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    multidivice.getName = (jid, withoutContact  = false) => {
        id = multidivice.decodeJid(jid)
        withoutContact = multidivice.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = multidivice.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === multidivice.decodeJid(multidivice.user.id) ?
            multidivice.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    multidivice.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await multidivice.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await multidivice.getName(i + '@s.whatsapp.net')}\nFN:${await multidivice.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET: inrlnpm@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/__light__seeker__3\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;India;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	multidivice.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    multidivice.setStatus = (status) => {
        multidivice.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    multidivice.public = true

    multidivice.serializeM = (m) => smsg(multidivice, m, store)

    multidivice.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); multidivice.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); inrlmd(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); inrlmd(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); multidivice.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); multidivice.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); inrlmd(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); inrlmd(); }
            else multidivice.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
    })

    multidivice.ev.on('creds.update', saveState)

    // Add Other
    ///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
multidivice.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
    /**
     * send Button
     * @param {String} jid 
     * @param {String} contentText 
     * @param {String} footer
     * @param {Buffer|String} buffer? 
     * @param {String[]} buttons 
     * @param {Object} quoted 
     * @param {Object} options 
     */
    multidivice.sendButton = async (jid, contentText, footer, buffer, buttons, quoted, options) => {
        if (buffer) try { buffer = (await conn.getFile(buffer)).data } catch { buffer = null }
        let message = {
            ...options,
            ...(buffer ? { caption: contentText || '' } : { text: contentText || '' }),
            footer,
            buttons: buttons.map(btn => {
                return {
                    buttonId: btn[1] || btn[0] || '',
                    buttonText: {
                        displayText: btn[0] || btn[1] || ''
                    }
                }
            }),
            ...(buffer ? { image: buffer } : {})
        }
        return await multidivice.sendMessage(jid, message, { quoted, upload: conn.waUploadToServer, ...options })
    }

    multidivice.sendL = async (jid, latitude, longitude, name, address, url, location, quoted, options) => {
        let message = {
            ...options,
            location: {
                jpegThumbnail: await (await fetch(location)).buffer(),
                degreesLatitude: latitude,
                degreesLongitude: longitude,
                name: name,
                url: url,
                address: address
            }
        }
        return await multidivice.sendMessage(jid, message, { quoted, upload: conn.waUploadToServer, ...options })
    }

    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    multidivice.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: multidivice.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            multidivice.relayMessage(jid, template.message, { messageId: template.key.id })
    }
 
    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    multidivice.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        multidivice.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    multidivice.sendText = (jid, text, quoted = '', options) => multidivice.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    multidivice.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await multidivice.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    multidivice.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await multidivice.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }
 /**
     * Reply to this message
     * @param {String|Object} text
     * @param {String|false} chatId
     * @param {Object} options
     */
      
    reply = async (text, chatId, options) => {
    	let ppuser = await multidivice.profilePictureUrl(m.sender).catch(_ => 'https://telegra.ph/file/e2cdf013cdb06384c0947.jpg')
        let { data } = await multidivice.getFile(ppuser)
        multidivice.reply(chatId ? chatId : m.chat, text, m, { contextInfo: { mentionedJid: m.quoted, externalAdReply: { title: '????????-?????? ???????????s????????? ????????', body: '?? INRL', sourceUrl: 'https://wa.me/917025099154', thumbnail: data }}, options })
    }
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    multidivice.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await multidivice.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    multidivice.sendTextWithMentions = async (jid, text, quoted, options = {}) => multidivice.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    multidivice.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await multidivice.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    multidivice.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await multidivice.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
   /**
    *Message
    */
    multidivice.relayWAMessage = async (pesanfull) => {
        if (pesanfull.message.audioMessage) {
            await multidivice.sendPresenceUpdate('recording', pesanfull.key.remoteJid)
        } else {
            await multidivice.sendPresenceUpdate('composing', pesanfull.key.remoteJid)
        }
        var mekirim = await multidivice.relayMessage(pesanfull.key.remoteJid, pesanfull.message, { messageId: pesanfull.key.id })
        multidivice.ev.emit('messages.upsert', { messages: [pesanfull], type: 'append' });
        return mekirim
    }

  
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    multidivice.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    multidivice.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    multidivice.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await multidivice.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await multidivice.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    multidivice.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await multidivice.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    multidivice.cMod = (jid, copy, text = '', sender = multidivice.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === multidivice.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    multidivice.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return multidivice
}

inrlmd()
}, 5000);

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
