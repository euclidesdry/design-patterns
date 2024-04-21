import { MyDatabaseModule } from "./db/my-database-module";

console.log(":::: Module A");

const myDatabaseModuleData = MyDatabaseModule;
myDatabaseModuleData.add({ name: "John", age: 30 });
myDatabaseModuleData.add({ name: "Peixe Fresco", age: 16 });
myDatabaseModuleData.add({ name: "Ti Pico", age: 18 });

export { myDatabaseModuleData };
