import mongoose from "mongoose";

// Function to check the database connection
export function checkDatabaseConnection() {
  return mongoose.connection.readyState === 1; // 1 means connected
}