
const db = require('../util/db');
const loginModule = {
    
    getEmployeeList: function(cb){
        db.query('SELECT * FROM tbl_contact_us', (err, res) => {
            if(err){
                cb(err, null);
            }
            else{
                cb(null, res);
            }
          })
        // sql.connect(db)
        // .then((conn) => 
        //     conn.query('select * from Employee', function(err, result){
        //         if(err){
        //             cb(err, null)
        //         }
        //         else{
        //             cb(null, result)
        //         }
        //         sql.close();
        //     })
            
        // )
        // .catch((error) =>{
        //     console.log(error, 'err block')
        // })
    }
}
module.exports = loginModule;