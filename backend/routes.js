
// Controllers

module.exports =  (app, express, passport, db) => {

    app.post('/users/', (req, res)=> {
        console.log('llego -> '+req.body.values.username);
        res.status(200).json({res: 'yeah'});
    })
    function isLoggedIn(req, res, next){
        if(req.isAuthenticated())
            return next()
        res.status(401).json({error: "Necesita autenticarse"});
    }
}