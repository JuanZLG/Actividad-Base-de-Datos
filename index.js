const express = require('express');
const { client, connect } = require('./db');
const { generarProveedores } = require('./faker');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});



async function conexión() {
  try {
    await client.connect();
    console.log('Conexión establecida correctamente');
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

/** LOS INSERT INICIALES DE TODO FAKER, CON INSERT MANY */

// guardarProductos()
// guardarUsuarios()
// guardarProveedores()

// async function guardarProductos() {
//   const productos = await generarProductos();

//   try {
//     const productosCollection = client.db("NewEra").collection("productos");
//     const schemaValidation = {
//         $jsonSchema: {
//           bsonType: "object",
//           required: ["id_productos", "id_proveedores", "nombre", "precio", "categoria", "sabor", "presentacion", "estado", "fechaRegistro", "cantidad"],
//           properties: {
//             Id: {
//               bsonType: "int",
//               minimum: 1000,
//               maximum: 9999,
//               description: "Id debe ser un número entero de 4 cifras."
//             },
//             nombre: { bsonType: "string" },
//             precio: { bsonType: "double", minimum: 0 },
//             categoria: { bsonType: "string" },
//             sabor: { bsonType: "string" },
//             presentacion: { bsonType: "string" },
//             descripcion: { bsonType: "string", maxLength: 20 },
//             estado: {
//               bsonType: "string",
//               enum: ["disponible", "no disponible"]
//             },
//             fechaRegistro: { bsonType: "date" },
//             cantidad: {
//               bsonType: "int",
//               minimum: 5,
//               maximum: 300
//             }
//           }
//         }
//       };

//     await productosCollection.schemaValidation;
//     await productosCollection.insertMany(productos);
//     console.log('Productos ingresados!!!!');
//   } catch (err) {
//     console.error(err);
//   } 
// }


// async function guardarUsuarios() {
//   const usuarios = await generarUsuarios();

//   try {
//     const usuariosCollection = client.db("NewEra").collection("usuarios");
//     const schemaValidation = {
//       $jsonSchema: {
//         bsonType: "object",
//         required: ["nombre", "apellido", "correo", "direccion", "telefono"],
//         properties: {
//           nombre: { bsonType: "string" },
//           apellido: { bsonType: "string" },
//           correo: { bsonType: "string", pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$" },
//           direccion: {
//             bsonType: "object",
//             required: ["calle", "ciudad", "departamento"],
//             properties: {
//               calle: { bsonType: "string" },
//               ciudad: { bsonType: "string" },
//               departamento: { bsonType: "string" }
//             }
//           },
//           telefono: { bsonType: "string", pattern: "^[0-9]{10}$" }
//         }
//       }
//     };
//     await usuariosCollection.schemaValidation;
//     await usuariosCollection.insertMany(usuarios);
//     console.log('Clientes ingresados!!!!');
//   } catch (err) {
//     console.error(err);
//   } 
// }


// async function guardarProveedores() {
//   const proveedor = await generarProveedores();

//   try {
//     const proveedoresCollection = client.db("NewEra").collection("proveedor");
//     const schemaValidation = {
//       $jsonSchema: {
//         bsonType: "object",
//         required: ["nombre", "correo", "direccion", "telefono", "estado"],
//         properties: {
//           nombre: { bsonType: "string" },
//           correo: { bsonType: "string", pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$" },
//           direccion: {
//             bsonType: "object",
//             required: ["calle", "ciudad", "departamento"],
//             properties: {
//               calle: { bsonType: "string" },
//               ciudad: { bsonType: "string" },
//               departamento: { bsonType: "string" }
//             }
//           },
//           telefono: { bsonType: "string", pattern: "^[0-9]{10}$" },
//           estado: {
//             bsonType: "string",
//             enum: ["activo", "suspendido"]
//           },
//         }
//       }
//     };
//     await proveedoresCollection.schemaValidation;
//     await proveedoresCollection.insertMany(proveedor);
//     console.log('Proveedores ingresados!!!!');
//   } catch (err) {
//     console.error(err);
//   } 
// }

/** FIN INSERTS INICIALES DE FAKER */




//const Cliente = {
  //   Nombre: "Juliana",
  //   Apellido: " Quintero",
  //   email: "juli.quintero@example.com",
  //   Direccion: {
  //     Calle: "Calle 34",
  //     Ciudad: "Medellin",
  //     Departamento: "Antioquia",
  //     Pais: "Colombia",
  //   },
  //   Telefono: "1234567890"
  // };
//InsertarCliente(Cliente);
// const { MongoClient } = require('mongodb');

// async function BuscarCliente(email) {
//   const uri = 'mongodb+srv://seductorboy:Juan1212@cluster0.tbpxigm.mongodb.net/?retryWrites=true&w=majority';
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     const collection = client.db('NewEra').collection('usuarios');
//     const clients = await collection.findOne({ correo: correo });
//     console.log(clients);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// BuscarCliente("juli.quintero@example.com");
// const { MongoClient, ObjectId} = require('mongodb');

// async function ActualizarCliente(id) {
//   const uri = 'mongodb+srv://seductorboy:Juan1212@cluster0.tbpxigm.mongodb.net/?retryWrites=true&w=majority';
//   const client = new MongoClient(uri);
 

//   try {
//     await client.connect();
//     const collection = client.db('NewEra').collection('usuarios');

    // Update con upsert
    // const resultadoConUpsert = await collection.updateOne(
    //   { _id: new ObjectId },
    //   { $set: {email: "juancito@kahoot.com" } },
    //   { upsert: true }
    // );
    // console.log(resultadoConUpsert);
        // Update sin upsert
    // const resultadoSinUpsert = await collection.updateOne(
    //   { _id: new ObjectId },
    //   { $set: { email: "Juan@gmail.com" } }
    // );
    // console.log(resultadoSinUpsert);

  
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// ActualizarCliente("6419ec89cca39bd4556c1aa7");

// const { MongoClient } = require('mongodb');

// async function EliminarUsuario(email) {
//   const uri = 'mongodb+srv://seductorboy:Juan1212@cluster0.tbpxigm.mongodb.net/?retryWrites=true&w=majority';
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     const collection = client.db('NewEra').collection('usuarios');

//     const resultado = await collection.deleteOne({ correol: correo });
//     console.log(resultado);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// EliminarUsuario("juancito@kahoot.com");
// const { MongoClient } = require('mongodb');

// async function BuscarClientes() {
//   const uri = 'mongodb+srv://seductorboy:Juan1212@cluster0.tbpxigm.mongodb.net/?retryWrites=true&w=majority';
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     const collection = client.db('NewEra').collection('usuarios');
//     const usuarios = await collection.find().sort({ nombre: 1 }).limit(10).toArray();
//     console.log(usuarios);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// BuscarClientes();
// const { MongoClient } = require('mongodb');

// async function ActualizarUsuarios() {
//   const uri = 'mongodb+srv://seductorboy:Juan1212@cluster0.tbpxigm.mongodb.net/?retryWrites=true&w=majority';
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     const collection = client.db('NewEra').collection('usuarios');
//     const result = await collection.updateMany({ correo: "Hayley.Crona@hotmail.com" }, { $set: { Nombre: "Daniela" } });
//     console.log(`${result.matchedCount} documentos actualizados`);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// ActualizarUsuarios();
// const { MongoClient } = require('mongodb');

// async function ActualizarClientes(email) {
//   const uri = 'mongodb+srv://seductorboy:Juan1212@cluster0.tbpxigm.mongodb.net/?retryWrites=true&w=majority';
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     const collection = client.db('NewEra').collection('usuarios');
//     const result = await collection.updateMany({ correo: Maggie32@yahoo.com}, { $set: { nombre: "Juan Pérez", pais: "México" } }, { upsert: true });
//     console.log(`${result.upsertedCount} documentos insertados`);
//     console.log(`${result.modifiedCount} documentos modificados`);


//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// ActualizarClientes();

// const { MongoClient } = require('mongodb');

// async function EliminarClientes() {
//   const uri = 'mongodb+srv://seductorboy:Juan1212@cluster0.tbpxigm.mongodb.net/?retryWrites=true&w=majority';
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     const collection = client.db('NewEra').collection('usuarios');
//     const result = await collection.deleteMany({ pais: "México" });
//     console.log(`${result.deletedCount} documentos eliminados`);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// EliminarClientes();
