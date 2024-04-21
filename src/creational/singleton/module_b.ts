import { MyDatabaseModule } from "./db/my-database-module";

import { myDatabaseModuleData as myDatabaseModuleDataFromModuleA } from "./module_a";

console.log(":::: Module B");

const myDatabaseModuleData = MyDatabaseModule;
myDatabaseModuleData.add({ name: "Pedra", age: 23 });
myDatabaseModuleData.add({ name: "Treta", age: 45 });
myDatabaseModuleData.add({ name: "Manga", age: 17 });
myDatabaseModuleData.add({ name: "Velha", age: 90 });
myDatabaseModuleData.remove(6);
myDatabaseModuleData.show();

console.log(
  "Module A === Module B: ",
  myDatabaseModuleData === myDatabaseModuleDataFromModuleA,
);
