import {Personajes,Vehicles} from '../services/servicioStarwars.js'





let mpersonajes=document.getElementById("personajes")
let mvehiculos=document.getElementById("vehiculos")



    
    Personajes().then(function(respuesta){
        
      console.log(respuesta) 

        respuesta.forEach(function(persona){   
            
             let columna=document.createElement("div")
                columna.classList.add("col")

            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card","h-100","shadow")
   
            let nombre=document.createElement("h4")
            nombre.classList.add("text-center","fw-bold")
            nombre.textContent=persona.name


            let birth=document.createElement("p")
            birth.classList.add("bold")
            birth.textContent="Nacimiento: "+persona.birth_year

            let gender=document.createElement("p")
            gender.classList.add("bold")
            gender.textContent="Genero: "+persona.gender

            let altura=document.createElement("p")
            altura.classList.add("bold")
            altura.textContent="Altura: "+persona.height+"cm"

        
            tarjeta.appendChild(nombre)
            tarjeta.appendChild(birth)
            tarjeta.appendChild(gender)
            tarjeta.appendChild(altura)
            columna.appendChild(tarjeta)
            mpersonajes.appendChild(columna)



        })
})

    Vehicles().then(function(respuesta){

       console.log(respuesta)

        respuesta.forEach(function(vehicles){

           
            let columna=document.createElement("div")
            columna.classList.add("col")
            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card","h-100","shadow")

            

                let nombre=document.createElement("h4")
                nombre.classList.add("text-center","fw-bold")
                nombre.textContent=vehicles.name

           

                let modelo=document.createElement("p")
                modelo.classList.add("bold")
                modelo.textContent="Modelo: "+vehicles.model
    
                let manufactura=document.createElement("p")
                manufactura.classList.add("bold")
                manufactura.textContent="Manufactura: "+vehicles.manufacturer
    
                let pasajeros=document.createElement("p")
                pasajeros.classList.add("bold")
                pasajeros.textContent="Pasajeros: "+vehicles.passengers
    
               
    
                
            tarjeta.appendChild(nombre)
            tarjeta.appendChild(modelo)
            tarjeta.appendChild(manufactura)
            tarjeta.appendChild(pasajeros)
            columna.appendChild(tarjeta)
            mvehiculos.appendChild(columna)

        })

     
        
    })

    

