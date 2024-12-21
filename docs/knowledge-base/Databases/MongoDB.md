---
sidebar_label: MongoDB
sidebar_position: 1
---

# MongoDB

In the MongoDB shell (mongosh), you can perform a wide range of administrative and data-related operations. Here's an overview of what you can do:

## 1. Managing Databases

### Show all databases

    ```javascript
    show dbs
    ```

### Switch to a specific database

    ```javascript
    use <database_name>
    ```

### Show current database

    ```javascript
    db
    ```

### Drop (delete) a database

    ```javascript
    db.dropDatabase()
    ```

## 2. Managing Collections

### Show all collections in the current database

    ```javascript
    show collections
    ```

### Create a new collection

    ```javascript
    db.createCollection("collection_name")
    ```

### Drop (delete) a collection

    ```javascript
    db.collection_name.drop()
    ```

## 3. CRUD Operations (Create, Read, Update, Delete)

### Insert data

    ```javascript
    db.collection_name.insertOne({ key: "value" })
    db.collection_name.insertMany([{ key1: "value1" }, { key2: "value2" }])
    ```

### Query data

    ```javascript
    db.collection_name.find()
    db.collection_name.find({ key: "value" })
    db.collection_name.findOne({ key: "value" })
    ```

### Update data

    ```javascript
    db.collection_name.updateOne({ key: "value" }, { $set: { key: "new_value" } })
    db.collection_name.updateMany({ key: "value" }, { $set: { key: "new_value" } })
    ```

### Delete data

    ```javascript
    db.collection_name.deleteOne({ key: "value" })
    db.collection_name.deleteMany({ key: "value" })
    ```

## 4. Managing Indexes

### Create an index

    ```javascript
    db.collection_name.createIndex({ key: 1 }) // 1 for ascending, -1 for descending
    ```

### Show indexes

    ```javascript
    db.collection_name.getIndexes()
    ```

### Drop an index

    ```javascript
    db.collection_name.dropIndex("index_name")
    ```

## 5. Performing Aggregations

### Use aggregation pipeline

    ```javascript
    db.collection_name.aggregate([
        { $match: { key: "value" } },
        { $group: {_id: "$key", total: { $sum: 1 } } }
    ])
    ```

## 6. Managing Users and Permissions

### Create a new user

    ```javascript
    db.createUser({
        user: "username",
        pwd: "password",
        roles: [{ role: "readWrite", db: "database_name" }]
    })
    ```

### Show users

    ```javascript
    db.getUsers()
    ```

### Drop (delete) a user

    ```javascript
    db.dropUser("username")
    ```

## 7. System Administration

### Show server status

    ```javascript
    db.serverStatus()
    ```

### Show configuration details

    ```javascript
    db.runCommand({ getParameter: 1 })
    ```

### Show statistics of a collection

    ```javascript
    db.collection_name.stats()
    ```

## 8. Security Checks

Since your output indicates that access control is not enabled, you may want to enable authentication to secure your database. Here are some steps:

    1. Enable access control (e.g., in the mongod.conf configuration file).

    1. Create users with specific roles.

## Finding the Users You Created

Since you mentioned you created users through your endpoint, you can find them in the users collection in MongoDB. Here's how you can query the users:

### Show collections (to confirm the users collection exists)

    ```javascript
    show collections
    ```

### Query the users

    ```javascript
    db.users.find().pretty()
    ```

This will display all documents (users) in the users collection. If you're looking for a specific user, you can filter by a field like email:

    ```javascript
    db.users.find({ email: "<user@example.com>" }).pretty()
    ```
