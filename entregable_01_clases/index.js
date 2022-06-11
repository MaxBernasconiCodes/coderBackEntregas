class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota){
        this.mascotas.push(mascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombre, autor){
        let newLibro = {'nombre':nombre, 'autor':autor};
        this.libros.push(newLibro);
    }
    getBookNames(){
        return this.libros.map(libro => libro.nombre);
    }
}

let usuarioNuevo = new Usuario(
    'Max',
    'Bernasconi',
    [{
        nombre:'Lord of the Rings',
        autor:'J. R. R. Tolkien'
    }],
    ['Pitu', 'Michi']
);

console.log(usuarioNuevo.getFullName());
usuarioNuevo.addMascota('Rata');
usuarioNuevo.addBook('Narnia','C. S. Lewis');
console.log(usuarioNuevo.countMascotas());
console.log(usuarioNuevo.getBookNames());
