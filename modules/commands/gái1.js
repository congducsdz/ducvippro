module.exports.config = {
	name: "gái",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "trunguwu",//Thay cre thì m chết mẹ m đi con chó nào đó ạ:3
	description: "video gái",
	commandCategory: "no prefix",
	usages: "",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
		
  }
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("gáii"‚"girl"‚"Gái")==0 ||
event.body.indexOf("")==0 ) 
//Thay (tên gọi)theo sở thích
//[ Lưu ý !! Không được để trống ( Tên gọi ) 
//Hoặc có thể xoá bớt [event.body.indexOf(")==0 ]
{
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/edc6piy.mp4"'‚
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
"https://i.imgur.com/w7OOpEV.mp4"‚
           ];
     var callback = () => api.sendMessage({body:`🍁Gái siuuu cute Nè \n Xem Đừng Bắn 🐻`
,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };
//có gì thắc mắc ko hiểu lên hệ https://www.facebook.com/cong.duc.110108?mibextid=ZbWKwL
