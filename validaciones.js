const { faker } = require('@faker-js/faker');
const { MongoClient } = require('mongodb');

async function GenerarUsuarios() {
  let users = [];
  for (let id = 1; id <= 100; id++) {
    let email = faker.internet.email();
    let Nombre = faker.name.firstName();
    let Apellido = faker.name.lastName();
    let Direccion = faker.address.streetAddress() + faker.address.city() + faker.address.country();
    let Telefono = faker.phone.phoneNumber();

    users.push({
      Nombre: Nombre,
      Apellido: Apellido,
      email: email,
      Direccion: {
        Calle: Direccion,
        Ciudad: faker.address.city(),
        Departamento: faker.address.state(),
        Pais: faker.address.country(),
      },
      Telefono: Telefono
    });
  }
  return users;
}

async function GuardarUsuarios() {
  const users = await GenerarUsuarios();
  const uri = 'mongodb+srv://<username>:<password>@cluster0.tbpxigm.mongodb.net/<dbname>?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const collection = client.db('NewEra').collection('Clientes');
    const schemaValidation = {
      $jsonSchema: {
        bsonType: "object",
        title: "usuarios",
        required: ["Nombre", "Apellido", "email", "Direccion", "Telefono"],
        properties: {
          Nombre: { bsonType: "string" },
          Apellido: { bsonType: "string" },
          email: { bsonType: "string", pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$" },
          Direccion: {
            bsonType: "object",
            required: ["Calle", "Ciudad", "Departamento", "Pais"],
            properties: {
              Calle: { bsonType: "string" },
              Ciudad: { bsonType: "string" },
              Departamento: { bsonType: "string" },
              Pais: { bsonType: "string" }
            }
          },
          Telefono: { bsonType: "string", pattern: "^[0-9]{10}$" }
        }
      }
    };
    await collection.validate(schemaValidation);
    await collection.insertMany(users);
    console.log('Clientes ingresados');
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

GuardarUsuarios();

// "sabor": "Adaptive",
//         "presentacion": "quam",
//         "decripcion": "Nesciunt modi dolor saepe deserunt possimus iste. Illum eum odio deleniti odit ipsum saepe dolore explicabo labore. Praesentium officiis quas reiciendis occaecati numquam. Rem accusantium odit aliquid. Reprehenderit molestiae odit voluptatibus. Ab tempora quibusdam magni doloribus itaque laudantium ullam.",
//         "estado": "synthesize",
//         "fechaRegistro": "2022-08-04",
//         "cantidad": 146
//     }