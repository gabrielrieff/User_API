/*
  Warnings:

  - You are about to drop the column `passwordReseteExpired` on the `users` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" TEXT,
    "passwordResetToken" TEXT,
    "passwordResetExpired" DATETIME,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" ("birthDate", "created_at", "email", "id", "name", "password", "passwordResetToken", "updated_at") SELECT "birthDate", "created_at", "email", "id", "name", "password", "passwordResetToken", "updated_at" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
