import { MyDatabaseClassic } from "./db/my-database-classic";

console.log(":::: Class A");

const myDatabaseClassicData = MyDatabaseClassic.instance;
myDatabaseClassicData.add({ name: "John", age: 30 });
myDatabaseClassicData.add({ name: "Peixe Fresco", age: 16 });
myDatabaseClassicData.add({ name: "Ti Pico", age: 18 });

export { myDatabaseClassicData };
