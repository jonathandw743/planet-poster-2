migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l5l8exa6joev6ax")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mmuvnyyx",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "lb7ijfaurl7m6n1",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ej6qp5ya",
    "name": "question",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "mmr6whpp7gbjyhl",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l5l8exa6joev6ax")

  // remove
  collection.schema.removeField("mmuvnyyx")

  // remove
  collection.schema.removeField("ej6qp5ya")

  return dao.saveCollection(collection)
})
