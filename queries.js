const database = require("./database-connection");

module.exports = {
    list(){
      return database("users").select()
    },
    read(username){
      return database("users").join('userprojects', "username", '=' , 'userprojects.creator').select('userprojects.bio', 'userprojects.name', 'users.username', 'userprojects.id', 'userprojects.image').where("username", username)
    },
    create(users){
      return database("users").insert(users).returning("*").then(record => record[0])
    },
    update(username, users){
      return database("users").update(users).where("username", username).returning("*").then(record => record[0])
    },
    delete(id){
      return database("users").delete().where("id", id)
    },
    profile(username){
      return database("users").select().where("username", username).first("")
    },
    creations(){
      return database("userprojects").select()
    },
    creation(id){
      return database("userprojects").select().where("id", id).first("")
    },
    mkCreation(creation){
      return database("userprojects").insert(creation).returning("*").then(record => record[0])
    },
    getband(band){
      return database("users").select('users.username', 'users.image').where("band", band)
    },
    updateBand(band, users){
      return database("users").update(users).where("band", band).returning("*").then(record => record[0])
    },
};
