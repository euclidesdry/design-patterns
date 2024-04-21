import { MyDatabaseClassic } from "./db/my-database-classic";

import { myDatabaseClassicData as myDatabaseClassicDataFromModuleA } from "./class_a";

console.log(":::: Class B");

const myDatabaseClassicData = MyDatabaseClassic.instance;
myDatabaseClassicData.add({ name: "Pedra", age: 23 });
myDatabaseClassicData.add({ name: "Treta", age: 45 });
myDatabaseClassicData.add({ name: "Manga", age: 17 });
myDatabaseClassicData.add({ name: "Velha", age: 90 });
myDatabaseClassicData.remove(6);
myDatabaseClassicData.show();

console.log(
  "Class A === Class B: ",
  myDatabaseClassicData === myDatabaseClassicDataFromModuleA,
);
