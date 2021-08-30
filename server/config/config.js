const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb+srv://EagleLamle:eaglelamle@cluster0.nwthj.mongodb.net/workout?retryWrites=true&w=majority'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}
