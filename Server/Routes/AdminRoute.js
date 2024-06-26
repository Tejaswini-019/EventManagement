import express from 'express'
import con from '../Utils/db.js'
import jwt from 'jsonwebtoken'
const router = express.Router();
router.post('/adminlogin', (req, res) => {
    debugger
    const sql = "SELECT * from admin WHERE email = ? AND password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({
            loginStatus: false, Error: "Query error"
        });
        if (result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign(
                { role: "admin", email: email },
                "jwt_secret_key",
                { expiresIn: "1d" }
                );
                res.cookie('token', token)
                return res.json({loginStatus:true});
        }
        else{
            return res.json({
               
                loginStatus: false, Error: "Wrong email or password"
            }, console.log(res),
            ); 
        }
    })
})
export { router as adminRouter }