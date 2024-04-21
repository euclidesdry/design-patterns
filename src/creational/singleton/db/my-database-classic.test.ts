import { describe, it } from "node:test";
import assert from "node:assert";

import { MyDatabaseClassic } from "./my-database-classic";

describe("MyDatabaseClassic", () => {
  const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 20 },
    { name: "Jill", age: 40 },
  ];

  const db = MyDatabaseClassic.instance;
  const [John, Jane, Jill] = users;

  it("should return the same instance", () => {
    const db1 = MyDatabaseClassic.instance;
    const db2 = MyDatabaseClassic.instance;
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
