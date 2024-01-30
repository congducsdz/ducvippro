module.exports.config = { name: "gái", version: "1.0.0", hasPermssion: 0, credit: "CallmeSun", description: "video gái", commandCategory: "Gái", cách sử dụng: "girlnude", thời gian hồi chiêu: 5, phụ thuộc: { "request:"", "fs-extra:"", "axios:" } }; module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currency}) => { const axios = Global.nodemodule["axios"]; const request = Global.nodemodule["request"]; const fs = Global.nodemodule["fs-extra"]; liên kết var = [ " https://i.imgur.com/edc6piy.mp4"'‚
" https://i.imgur.com/i4PQJMZ.mp4"‚
" https://i.imgur.com/8QyAwCb.mp4"‚
" https://i.imgur.com/jqOywjC.mp4"‚
" https://i.imgur.com/qxY1KhZ.mp4"‚
" https://i.imgur.com/CVfWVjR.mp4"‚
" https://i.imgur.com/HNiYwUw.mp4"‚
"https://i.imgur.com/mwDY8dO.mp4"‚
" https://i.imgur.com/H7E0D6p.mp4"‚
" https://i.imgur.com/Ju7q2qY.mp4"‚
"https://i.imgur.com/818KemD.mp4"‚
" https://i.imgur.com/jJkRPxg.mp4"‚
"https://i.imgur.com/sAj5Bxg.mp4"‚
" https://i.imgur.com/wTfOpwy.mp4"‚
" https://i.imgur.com/ALwvAHj.mp4"‚
" https://i.imgur.com/wRsmMYg.mp4"‚
" https://i.imgur.com/yl0AbTq.mp4"‚
"https://i.imgur.com/aRISyiH.mp4"‚
" https://i.imgur.com/1sUaHWM.mp4"‚
" https://i.imgur.com/UbML8ic.mp4"‚
" https://i.imgur.com/VFv4kmL.mp4"‚
" https://i.imgur.com/3dywjWj.mp4"‚
" https://i.imgur.com/MS4lm5l.mp4"‚
" https://i.imgur.com/4aGVY08.mp4"‚
"https://i.imgur.com/nLaO0Ey.mp4"‚
"https://i.imgur.com/LCkcwNv.mp4"‚
"https://i.imgur.com/GW1uJnT.mp4"‚
"https://i.imgur.com/srtxC5V.mp4"‚
"https://i.imgur.com/PnIv7Az.mp4"‚
"https://i.imgur.com/HkJyUv4.mp4"‚
"https://i.imgur.com/w7OOpEV.mp4"‚ ]; var max = Math.floor(Math.random() * 6); var min = Math.floor(Math.random() * 2); var data = đang chờ Currency.getData(event.senderID); var exp = data.exp; var money = data.money if(money < 0) api.sendMessage("Bạn cần 0 đô la để xem video:V",event.threadID,event.messageID) else { Currency.setData(event.senderID, options = {money : money - 0}) var callback = () => api.sendMessage({body:`==Gái💝Cutee🤧ll==\n==Xem Đừng Bắn 😚==\n━━━━━━━━ ━━━━━━━━\n 「 Gái Nè ${name} 」\n\n Chúc ${name} Xem Vui Vẻ Đừng Bắn Nha !😐 `,file đính kèm: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); let name = đang chờ Users.getNameUser(event.senderID); hãy đề cập đến = []; đề cập đến.push({ tag: name, id: event.senderID }) yêu cầu trả về(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/ cache/5.mp4")).on("close",() => callback()); }