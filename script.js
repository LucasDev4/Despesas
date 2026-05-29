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
        return `Data: ${this.dia}/${this.mes}/${this.ano} - Tipo: ${this.tipo} - Descrição: ${this.descricao} - Valor: ${this.valor}`;
    }
}

class Bd {
    constructor() {
        let id = localStorage.getItem("id");
        if (id === null) {
            localStorage.setItem("id", 0);
        }
    }
    getNextId() {
        let nextId = localStorage.getItem("id");
        return parseInt(nextId) + 1;
    }
    gravar(d) {
        let id = this.getNextId();
        localStorage.setItem(id, JSON.stringify(d));
        localStorage.setItem("id", id);
    }
    recuperarTodosRegistro() {
        let despesas = [];
        let id = localStorage.getItem("id");
        for (let i = 1; i <= id; i++) {
            let despesa = JSON.parse(localStorage.getItem(i));
            if (despesa === null) {
                continue;
            }
            despesas.push(despesa);
        }
        return despesas;
    }
}

function cadastrar() {
    let ano = document.getElementById("ano").value;
    let mes = document.getElementById("mes").value;
    let dia = document.getElementById("dia").value;
    let tipo = document.getElementById("tipo").value;
    let descricao = document.getElementById("descricao").value;
    let valor = document.getElementById("valor").value;

    let d = new Despesas(ano,mes,dia,tipo,descricao,valor);

    let bd = new Bd();
    bd.gravar(d);
    alert("Dados cadastrados com sucesso!\n" + d.mostrar());
}

function exibir() {
    let cardDados = document.getElementById("views");
    if (!cardDados) return;
    let bd = new Bd();
    let despesas = bd.recuperarTodosRegistro();
    let lista = document.createElement("ul");

    despesas.forEach(item => {
        let despesasObj = new Despesas(item.ano,item.mes,item.dia,item.tipo,item.descricao,item.valor);

        let itemLista = document.createElement("li");
        itemLista.textContent = despesasObj.mostrar();
        lista.appendChild(itemLista);
    });
    cardDados.innerHTML = "";
    cardDados.appendChild(lista);
}

window.onload = () => {

    exibir();

};