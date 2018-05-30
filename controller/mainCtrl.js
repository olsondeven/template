//
const cmd = require('node-cmd');
let fileCount = 0;
let curIp = null;
function getIpConfig(req,res,nex){
  //console.log(req.params.ip);
    cmd.get(
      // 'ping -a '+curIp,
      'ipconfig',
      function(err, data, stderr){
        //console.log('the current working dir is : ',data);
        //console.log('CMD first get: ',cmd);
        if(data){
          return res.status(200).send(data);
        }
      });
}
function getPing(req,res,next){
  if(req.params.ip){
    curIp = req.params.ip;
    fileCount++;
    // let cmdString = "nmap -sn -v "+curIp+" -oX /c/Users/deven.olson/Documents/VS_CLONE/template/xmlReturn/xml"+fileCount+".xml";
    cmd.get(
      // 'ping -a '+curIp,
      "nmap -sn -v "+curIp+" -oX ./xmlReturn/xml"+fileCount+".xml",
      function(err, data, stderr){
        console.log('the current working dir is : ',data);
        console.log('CMD second get: ',data);
        if(data){
          return res.status(200).send(data);
        }else{
          return res.status(200).send(err);
        }
      });
  }
}
cmd.get('pwd',function(err, data, stderr){
  console.log('the current working dir is : ',data)
});
// cmd.get('nmap -sP -v 10.30.12.150 -oX ./xmlReturn/xml'+fileCount+".xml",function(err, data, stderr){
//   fileCount++;
//   console.log('the current working dir is : ',data)
// });
module.exports = {getIpConfig,getPing};
