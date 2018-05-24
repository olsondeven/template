//
var cmd = require('node-cmd');

function getInfo(req,res,nex){
  console.log(req.params.ip);
  console.log("mainCtrl getInfo worked");
  cmd.get(
    'ipconfig',
    function(err, data, stderr){
      //console.log('the current working dir is : ',data)
      return res.status(200).send(data);
    }
  );

}
module.exports = {getInfo};
