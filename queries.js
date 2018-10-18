const database = require("./database-connection");

module.exports = {
    testProfiles(){
      return database("users").select()
    },
    testMedia(){
      return database("media").select()
    },
    localMedia(location){
      return database("media").select().where("location", location)
    },
    profile(userid){
      return database("users").select('user.id','users.username', 'users.image', 'users.bio', 'users.location').where("id", userid).first("")
    },
    login(email, password){
      return database("users").where({
        'password':password,
        'email':email
      }).select()
    },
    create(media){
      return database("media").insert(media).returning("*").then(record => record[0])
    },
    newProfile(profile){
      return database("users").insert(profile).returning("*").then(record => record[0])
    }
};
