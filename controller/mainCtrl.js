//const mainSrvc = require('./mainSrvc.js');
const app = require('../index.js');
//if you have a database set up
//const db = app.get('db');
module.exports = {
  cmdGetIpInfo: function(req,res,next){
    console.log("req: ", req);
    console.log("res: ", res);
    console.log("next: ", next);
    /*if(!res.params){
      return res.status(200).send(req.params);
    }else{
      return res.status(200).send(req);
    }
    */
    res.status(200).send(req.body.data.ip);
  }
};//closing
