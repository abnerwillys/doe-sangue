--DROP DATABASE IF EXISTS doe;
CREATE DATABASE doe;

CREATE TABLE "donors" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "email" text NOT NULL,
  "blood" text NOT NULL
);