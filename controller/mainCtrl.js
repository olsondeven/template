//
const cmd = require('node-cmd');
const fs = require('fs');
const Parser = require('xml2js-parser');
let fileCount = 0;
let curIp = null;
//function for getting ipconfig
function getIpConfig(req,res,nex){
    cmd.get(
      'ipconfig',
      function(err, data, stderr){
        if(data){
          return res.status(200).send(data);
        }
      });
}
function getOpenPorts(req,res,next){
  if(req.params.ip){
    curIp = req.params.ip;
    while (fs.existsSync("./xmlReturn/xml"+fileCount+".xml")) {
      console.log("fileCount was found: ", fileCount);
      fileCount++;
    }
    cmd.get(
      "nmap -Pn -sP "+curIp+" -oX ./xmlReturn/xml"+fileCount+".xml",
      function(err, data, stderr){
        console.log('the current working dir is : ',data);
        console.log('CMD second get: ',data);
        if(data){
          var parser = new Parser({trim: true});
          fs.readFile("./xmlReturn/xml"+fileCount+".xml", function(err, xml) {
            parser.parseString(xml, function(err, result){
              console.log("xml file read");
              console.log(result);
              if(result){
                return res.status(200).send(result);
              }
            });
          });
          // return res.status(200).send(data);
        }else{
          return res.status(200).send(err);
        }
      });
  }
}
// cmd.get('pwd',function(err, data, stderr){
//   console.log('the current working dir is : ',data)
// });
function getNetScan(req,res,next){
  cmd.get("nmap 10.30.12.1-100",(err,data,stderr)=>{
    console.log("\nNet Scan\n",data);
    if(data){
      return res.status(200).send(data);
    }else{
      return res.status(200).send(err);
    }
  });
}
module.exports = {getIpConfig,getOpenPorts,getNetScan};
