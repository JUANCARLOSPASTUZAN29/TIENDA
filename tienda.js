class pila{
    constructor(){
        this.pila=[];
        this.index=0;
        this.mascomprado=null
        this.cantidad=null
           
    }
    apilar(dato){
        this.pila[this.index]=dato;
        this.index++;
        return this.pila;
    
    }
    desapilar(){
        this.index--;
        const aux=this.pila[this.index];
        delete this.pila[this.index];
        return aux
    }
    peek(){
        return this.pila[this.index-1];
    }
    size(){
        return this.index
    }
    mas_comido(dato1,dato2){
    
     if(!this.mascomprado){
        this.mascomprado=dato2
        this.cantidad+=dato1
     }else if(dato1>this.cantidad){

        this.mascomprado=dato2
        this.cantidad+=dato1
     }
          console.log("mas comprado:>>"+this.mascomprado)
          
    }
  
    imprimir(){
        document.getElementById("reporte").innerHTML+="El producto de moda es :>>>"+this.mascomprado+"<br>"+"El estudiante que mas compro Salchipapas:>>"+this.mas_salchi+"<br>"+"La cantidad de mujeres que comieron 1 chicle es:>>"+"("+this.mujeres_comenChicles+")"+"y son:"+this.nombreF
    }
  
    imprimir_nombres(){
        let tam=this.pila.length
        this.mas_salchi=null
        this.sumatoria1=0
        this.mujeres_comenChicles=0;
        this.nombreF=[];
        for(let i=0;i<tam;i++){
                                    if(this.pila[i].productos==="salchi"&this.mas_salchi!=1){
                                        console.log("el o la estudiante que mas comio salchi es:>>"+this.pila[i].nombre);
                                       this.mas_salchi =this.pila[i].nombre
                                        this.sumatoria1+=this.pila[i].cantidad
                                    }else if(this.pila[i].cantidad>this.sumatoria1&this.pila.productos==="salchi"){
                                        console.log("el o la que mas comio salchi::>>"+this.pila[i].nombre);
                                        this.mas_salchi =this.pila[i].nombre 
                                        this.sumatoria1+=this.pila[i].cantidad;
                                    }
                    //    if(this.pila[i].productos==="chicles"&&this.pila[i].genero==="f") {
                    //     console.log('hola :>> ');
                    //    }                 
         
                      if(this.pila[i].productos==="chicles"&&this.pila[i].cantidad<=1&&this.pila[i].genero==="f"){
                        this.mujeres_comenChicles++
                        this.nombreF.push(this.pila[i].nombre)
                      }


        }
       
        if(this.mujeres_comenChicles>0){
        console.log("cantidad de mujeres que comen salchis es "+this.mujeres_comenChicles+"y son:"+"\n"+this.nombreF+"\n");
        }
         }

    }
    
     const compras=new pila();
   
  
    function tienda(){
        let nombre=document.getElementById("nombre").value;
        let genero=document.getElementById("genero").value;
        let productos=document.getElementById("productos").value;
        let cantidad=parseFloat(document.getElementById("cantidad").value)
        let estudiante={
            nombre:nombre,
            productos:productos,
            cantidad:cantidad,
            genero:genero,

         
        }
        if(estudiante.cantidad,productos){
              compras.mas_comido(cantidad,productos)
       

        }
        compras.apilar(estudiante);
        compras.imprimir_nombres()
      
    
    
    }   
        
    function reporte(){
        compras.imprimir()

    }