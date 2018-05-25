//
let cmd = require('node-cmd');
let curIp = null;
let data = {
  ipconfig: null,
  nslookup: null
};
function getInfo(req,res,nex){
  //console.log(req.params.ip);
  if(req.params.ip){
    curIp = req.params.ip;
  }
  cmd.get(
    'ipconfig',
    function(err, data, stderr){
      //console.log('the current working dir is : ',data)
      data.ipconfig = data;
    }
  );
  cmd.get(
    'nslookup',
    function(err, data, stderr){
      //console.log('the current working dir is : ',data)
      data.nslookup = data;
    }
  );

  return res.status(200).send(data);
}
module.exports = {getInfo};
