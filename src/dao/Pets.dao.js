import petModel from "./models/Pet.js";

export default class Pets {
  get = (params) => petModel.find(params);

  getBy = (params) => petModel.findOne(params);

  save = (doc) => petModel.create(doc);

  update = (id, doc) => petModel.findByIdAndUpdate(id, { $set: doc });

  delete = (id) => petModel.findByIdAndDelete(id);

  insertMany = (pets) => petModel.insertMany(pets); 
}
