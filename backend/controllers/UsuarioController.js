module.exports.isAuth = (req, res) => {
        if(req.isAuthenticated()){
                console.warn('auth: ', req.user)
                res.status(200).json({isAuth: true, isAdmin: req.user.isAdmin});
        }
        else{
                res.status(203).json({isAuth: false});
        }
}