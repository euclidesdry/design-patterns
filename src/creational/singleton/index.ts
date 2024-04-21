import { MyDatabaseClassic } from "./db/my-database-classic";

import "./class_b";
import "./module_b";

const db1 = MyDatabaseClassic.instance;
const db2 = MyDatabaseClassic.instance;

console.log("DB1 === DB2: ", db1 === db2);
