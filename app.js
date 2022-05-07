var app = new Vue({
    el: '#mensaje',
    data: { message: 'A donde vamos?' }
});

var loop = new Vue({
    el: '#loop',
    ciudad: "Paris",
    bandera: true,
    nombre: '',
    data(){ 
        return {
            bandera: true,
            nombre: "",
            ciudad: "Paris",
            paris: [
                {titulo: "Torre Eiffel", estrellas: "5 estrellas", img: "https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_f7a97d88_1200x1821.jpg"},
                {titulo: "Notre Dame", estrellas: "4 estrellas", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Notre-Dame_de_Paris_2013-07-24.jpg/280px-Notre-Dame_de_Paris_2013-07-24.jpg"},
                {titulo: "Museo Louvre", estrellas: "3 estrellas", img: "https://media.architecturaldigest.com/photos/5900cc370638dd3b70018b33/3:4/w_1547,h_2063,c_limit/Secrets%20of%20Louvre%201.jpg"}
            ],
            seul: [
                {titulo: "Palacio de Gyeongbokgung", estrellas: "5 estrellas", img:"https://images.unsplash.com/photo-1591273688202-4cfb3531c7a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3llb25nYm9rZ3VuZyUyMHBhbGFjZXxlbnwwfHwwfHw%3D&w=1000&q=80"},
                {titulo: "Parque nacional de Bukhansan", estrellas: "4 estrellas", img: "https://media.defense.gov/2010/Oct/28/2000312428/2000/2000/0/101011-F-7937B-002.JPG"},
                {titulo: "Museo nacional de Corea", estrellas: "4 estrellas", img: "https://previews.123rf.com/images/efired/efired1809/efired180900064/107839093-wonderful-tower-of-the-national-folk-museum-of-korea-on-blue-sky-background-in-seoul-beautiful-build.jpg"}
            ]
        }

    },
    methods: {
        cambiar_ciudad(){
            this.bandera = !this.bandera
            if(this.ciudad == "Paris"){
                this.ciudad = "Seul";
            }else{
                this.ciudad = "Paris";
            }
        }
    }
});