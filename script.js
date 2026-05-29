class Despesas {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }
    mostrar() {

        let texto = `Data: ${this.dia}/${this.mes}/${this.ano} - Tipo: ${this.tipo} -   Descrição: ${this.descricao} - Valor: ${this.valor}`;

        return texto;
    }
}
function cadastrar() {
    let ano = document.getElementById("ano").value;
    let mes = document.getElementById("mes").value;
    let dia = document.getElementById("dia").value;
    let tipo = document.getElementById("tipo").value;
    let descricao = document.getElementById("descricao").value;
    let valor = document.getElementById("valor").value;

    let d = new Despesas(ano, mes, dia, tipo, descricao, valor);

    alert("Dados cadastrados com Sucesso! " + d.mostrar());
}
function gravar(d){
    localStorage.setItem("despesas", JSON.stringify(d));
}
class Bd{
    constructor(){
        let id = localStorage.getItem("id");
        if(id == null){
            localStorage.setItem("id", 0);
        }
    }
    getNext(){
        let nextId = localStorage.getItem("id");
        return parseInt(nextId)+1;
    }
}