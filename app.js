var app = new Vue({
    el: '#app',
    data(){
        return {
            contador_jugador: 0,
            contador_computadora: 0,
            resultado_computadora: "?",
            resultado_jugador: "",
            anuncio: "Quien ganara?",
            tijeras: false,
            papel: false,
            piedra: false,
            tijeras_compu: false,
            papel_compu: false,
            piedra_compu: false
        }
    },
    methods: {
        elegir_computadora(){
            res = Math.floor(Math.random() * 3) + 1;
            if (res == 1){
                this.resultado_computadora = "papel";
                this.tijeras_compu = false;
                this.papel_compu = true;
                this.piedra_compu = false;
            }else if(res == 2){
                this.resultado_computadora = "piedra";
                this.tijeras_compu = false;
                this.papel_compu = false;
                this.piedra_compu = true;
            }else{
                this.resultado_computadora = "tijera";
                this.tijeras_compu = true;
                this.papel_compu = false;
                this.piedra_compu = false;
            }
            this.$refs.resultado_computadora.textContent = this.resultado_computadora;
        },
        elegir_papel(){
            this.resultado_jugador = "papel";
            this.tijeras = false;
            this.papel = true;
            this.piedra = false;
            this.elegir_computadora();
            this.jugar();
        },
        elegir_piedra(){
            this.resultado_jugador = "piedra";
            this.tijeras = false;
            this.papel = false;
            this.piedra = true;
            this.elegir_computadora();
            this.jugar();
        },
        elegir_tijera(){
            this.resultado_jugador = "tijera";
            this.tijeras = true;
            this.papel = false;
            this.piedra = false;
            this.elegir_computadora();
            this.jugar();
        },
        jugar(){
            if(this.resultado_jugador == this.resultado_computadora){
                //empate
                this.anuncio = "Empate!"
            }else if(this.resultado_jugador == "papel" && this.resultado_computadora == "piedra" ||
            this.resultado_jugador == "piedra" && this.resultado_computadora == "tijera"
            || this.resultado_jugador == "tijera" && this.resultado_computadora == "papel"){
                // gana jugador
                this.anuncio = "Ganaste!"
                this.contador_jugador += 1;
            }else{
                // gana computadora
                this.anuncio = "Perdiste!"
                this.contador_computadora += 1;
            }
            this.$refs.contador_jugador.textContent = this.contador_jugador;
            this.$refs.contador_computadora.textContent = this.contador_computadora;
        }
    },
    mounted() {
        this.$refs.contador_jugador.textContent = this.contador_jugador;
        this.$refs.contador_computadora.textContent = this.contador_computadora;
        this.$refs.resultado_computadora.textContent = this.resultado_computadora;
    }
})