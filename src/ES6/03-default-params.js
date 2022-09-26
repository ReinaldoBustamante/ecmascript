const saludar = (usuario = 'Reinaldo', apellido = 'Bustamante') =>{
    console.log(`Saludos: ${usuario} ${apellido}` );
}

saludar();
saludar('Juan', 'Gonzales');