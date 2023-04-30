import ProdMem from "../DAO/productos/memoria.js";
import ProdMongo from "../DAO/productos/mongo.js";
import { prodSchema } from "../schemas/productos.js";
import { loggers } from "../../loggers/loggers.js";
import * as dotenv from "dotenv";
dotenv.config();

export default class ProdFactory {
  constructor() {
    if (!ProdFactory.instance) {
      ProdFactory.instance = this;
    }
    return ProdFactory.instance;
  }

  getDao() {
    switch (process.env.PERSISTENCE) {
      case "mongo":
        loggers.info("Products Persistence: Mongo")
        return new ProdMongo(prodSchema);
        break;
      case "mem":
        loggers.info("Products Persistence: Mem")
        return new ProdMem();
        break;
      default:
        loggers.info("Products Persistence: Default (Mem)")
        return new ProdMem();
        break;
    }
  }

}
