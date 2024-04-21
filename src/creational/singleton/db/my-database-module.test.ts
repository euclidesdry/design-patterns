import { describe, it } from "node:test";
import assert from "node:assert";

import { MyDatabaseModule } from "./my-database-module";

describe("MyDatabaseModule", () => {
  const users = [
    { name: "John", age: 33 },
    { name: "Jane", age: 48 },
    { name: "Jill", age: 13 },
  ];

  const db = MyDatabaseModule;
  const [John, Jane, Jill] = users;

  it("should return the same instance", () => {
    const db1 = MyDatabaseModule;
    const db2 = MyDatabaseModule;
    assert.strictEqual(db1, db2);
  });

  it("should add a users into the database", () => {
    db.add(John);
    db.add(Jane);
    db.add(Jill);

    assert.deepStrictEqual(db.show(), users);
  });

  it("should remove the second user on the database", () => {
    const secondUserIndex = users.indexOf(Jane);
    db.remove(secondUserIndex);

    assert.deepStrictEqual(
      db.show(),
      users.filter((_, index) => index !== secondUserIndex),
    );
  });
});
