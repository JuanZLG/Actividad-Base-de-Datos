const { faker, WordModule } = require('@faker-js/faker');


// const generarProductos = () => {
  
//   const productos = [];

//   for (let i = 0; i <= 100; i++) {
//     const cantidad = faker.datatype.number({
//       min: 5,
//       max: 300 // la cantidad máxima de productos
//     });
//     const producto = {
//       id_productos: i,
//       id_proovedores: i,
//       nombre: faker.commerce.productName(),
//       precio: faker.commerce.price(),
//       categoria: faker.random.word(),
//       sabor: faker.random.word(),
//       presentacion: faker.lorem.word(),
//       decripcion: faker.lorem.paragraph(),
//       estado: faker.random.word(),
//       fechaRegistro: faker.date.past().toISOString().substring(0, 10),
//       cantidad: cantidad
//     };
//     productos.push(producto);
//   }

//   return productos;
// };


// const generarUsuarios = () => {
//   let usuarios = [];
//   for (let i = 1; i <= 100; i++) {
//     let id_usuarios=  i;
//     let documento =  faker.datatype.number({min: 1000000000, max: 9999999999});
//     let nombres = faker.name.firstName() + (faker.datatype.boolean() ? ' ' + faker.name.firstName() : '');
//     let apellidos = faker.name.lastName() + (faker.datatype.boolean() ? ' ' + faker.name.lastName() : '');
//     let correo = faker.internet.email();
//     let direccion = faker.address.streetAddress() + faker.address.city() + faker.address.country();
//     let telefono = faker.phone.number();
//     let estado = faker.random.word();

//     usuarios.push({ 
//       id_usuarios, nombres, apellidos, correo, 
//       direccion: {
//       calle: direccion,
//       ciudad: faker.address.city(),
//       departamento: faker.address.state()
//     }, telefono, estado, documento });
//   }
//   return usuarios;
// }

const generarProveedores = () => {
  let proveedor = [];
  for (let i = 1; i <= 100; i++) {
    let id_proveedores = i;
    let id_productos = i;
    let nombre = faker.company.name();
    let correo = faker.internet.email();
    let direccion = faker.address.streetAddress() + faker.address.city() + faker.address.country();
    let telefono = faker.phone.number();
    let estado = faker.random.word();

    proveedor.push({ 
      id_proveedores, id_productos, nombre, correo,       
      direccion: {
      calle: direccion,
      ciudad: faker.address.city(),
      departamento: faker.address.state()
    }, telefono, estado });
  }
  return proveedor;
}

module.exports = { generarProveedores };
