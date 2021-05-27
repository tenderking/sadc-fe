db.createCollection("sites", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "name", "url", "category", "country","language" ],
          properties: {
             name: {
                bsonType: "string",
                description: "must be a string and is required"
             },
            
             country: {
                enum: [ "Angola","Botswana","Democratic Republic of Congo","Comoros","Eswatini","Lesotho","Madagaskar","Malawi","Mauritius","Mozambique","Namibia","Seychelles","South Africa","Tanzania","Zambia","Zimbabwe" null ],
                description: "can only be one of the enum values and is required"
             },
             url: {
                bsonType: "string",
              description: "must be a string and is required"
             }    ,
             language: {
                 enum: ["English","French","Portuguese",null],
                 description: "can only be one of the enum values and is required"
             },
             category:{


             } , 
             address: {
                bsonType: "object",
                required: [ "city" ],
                properties: {
                   street: {
                      bsonType: "string",
                      description: "must be a string if the field exists"
                   },
                   city: {
                      bsonType: "string",
                      "description": "must be a string and is required"
                   }
                }
             }
          }
       }
    }
 })