//
const cmd = require('node-cmd');
let curIp = null;
function getIpConfig(req,res,nex){
  //console.log(req.params.ip);
  if(req.params.ip){
    curIp = req.params.ip;
    cmd.get(
      'ping -a '+curIp,
      function(err, data, stderr){
        console.log('the current working dir is : ',data)
        if(data){
          return res.status(200).send(data);
        }
      }
    );
  }else {
    cmd.get(
      'ipconfig',
      function(err, data, stderr){
        //console.log('the current working dir is : ',data)
        return res.status(200).send(data);
      }
    );
  }
}
module.exports = {getIpConfig};
