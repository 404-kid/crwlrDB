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

    // read(username){database("media").insert(media).returning("*").then(record => record[0])
    //   return database("users").join('userprojects', "username", '=' , 'userprojects.creator').select('userprojects.bio', 'userprojects.name', 'users.username', 'userprojects.id', 'userprojects.image').where("username", username)
    // },
    // update(username, users){
    //   return database("users").update(users).where("username", username).returning("*").then(record => record[0])
    // },
    // delete(id){
    //   return database("users").delete().where("id", id)
    // },
    // creations(){
    //   return database("userprojects").select()
    // },
    // creation(id){
    //   return database("userprojects").select().where("id", id).first("")
    // },
    // mkCreation(creation){
    //   return database("userprojects").insert(creation).returning("*").then(record => record[0])
    // },
    // getband(band){
    //   return database("users").select('users.username', 'users.image').where("band", band)
    // },
    // updateBand(band, users){
    //   return database("users").update(users).where("band", band).returning("*").then(record => record[0])
    // },
};
