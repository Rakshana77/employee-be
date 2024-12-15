const express = require('express');
const app = express();
const bodyParser = require('body-parser');


require('dotenv').config();
const cors = require('cors');
const EmployeeRoutes = require('./Routes/EmployeeRoutes');
const PORT = process.env.PORT || 3000;

require('./Models/db.js');
const Signupmodel=require('./Models/Signup.js')
app.use(cors());
app.use(bodyParser.json());


app.use('/api/employees', EmployeeRoutes);
app.post('/login', (req, res) => {
    const { email, password }= req.body;
    Signupmodel.findOne({ email: email }).then(user => {
        if (user) {
            if (user.password === password) {
            res.json("success")
            }
            else {
                res.json(" password incorrect")
            }
        } else {
            res.json("no record existed")
        }
    })
}
)
app.post('/register', (req, res) => {
    Signupmodel.create(req.body).then(signup=>res.json(signup)).catch(err=>res.json(err))
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
