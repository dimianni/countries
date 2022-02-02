'use strict';

const container = document.querySelector(".container"),
    input = document.querySelector(".input")


class App {
    data;
    url = "https://restcountries.com/v3.1/all";

    constructor() {
        this.fetchData()

        this.onInput()
    }

    async fetchData() {
        const res = await fetch(this.url);
        const data = await res.json();
        this.data = data;
 
        this.outputData(this.data)
    }

    getData(obj) {
        console.log(obj.data);
    }

    outputData(countries){

        countries.forEach(country => {
            let el = document.createElement("p")

            el.textContent = country.name.common

            container.append(el)
        });
        
    }

    clearData(){
        container.innerHTML = ""
    }

    onInput(){

        let val = '';

        input.addEventListener("input", function(e){
            val = e.target.value;
            console.log(val);

            this.filterData(this.data, val)

        }.bind(this))

    }


    filterData(countries, char){

        let newArr = countries.filter(country => country.name.common.includes(char))

        this.clearData()
        this.outputData(newArr)

    }

}

const app = new App()

