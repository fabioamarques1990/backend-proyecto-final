import ordenMongo from "../DAO/orden/mongo.js";
import ordenMem from "../DAO/orden/memoria.js"
import { ordenSchema } from "../schemas/orden.js";
import { loggers } from "../../loggers/loggers.js";
import * as dotenv from "dotenv";
dotenv.config();

export default class ordenFactory {
  constructor() {
    if (!ordenFactory.instance) {
      ordenFactory.instance = this;
    }
    return ordenFactory.instance;
  }

  getDao() {
    switch (process.env.PERSISTENCE) {
      case "mongo":
        loggers.info("Order Persistence: Mongo");
        return new ordenMongo(ordenSchema);
        break;
      case "mem":
        loggers.info("Order Persistence: Mem");
        return new ordenMongo(ordenSchema);
        break;
      default:
        loggers.info("Order Persistence: Default (Mem)");
        return new ordenMongo(ordenSchema);
        break;
    }
  }

}
