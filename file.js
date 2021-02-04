
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid-proyectos .galeria img').forEach((elemento)=>{

        elemento.addEventListener('click', () =>{
            const ruta = elemento.getAttribute('src');
            
            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
          
        });
       
    //cerrar imagen 
    document.getElementById('btn-cerrar').addEventListener('click',()=>{
        overlay.classList.remove('activo');
    })  
    });
    


