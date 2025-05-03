// Define a classe App, que lida com o formulário e com a exibição da lista de imóveis
class App {
    // Método chamado ao clicar no botão "cadastrar imóvel"
    addProperty() {
        // Captura os valores dos inputs
        const kind = document.querySelector("select[name='kind']").value
        const area = document.querySelector("input[name='area']").value
        const rented = document.querySelector("input[name='rented']").checked

        // Cria uma nova propriedade usando a classe Property
        const property = new Property(kind, area, rented)

        // Chama o método que vai adicionar esse imóvel no HTML
        this.addOnList(property)

        // Limpa os campos do formulário após o envio
        this.cleanForm()
    }

    // Adiciona o imóvel na lista de propriedades na tela
    addOnList(property) {
        const listElement = document.createElement("li") // cria um <li>
        let propertyInfo = `Tipo: ${property.kind} (${property.area}m²)` 

        // Se estiver alugado, adiciona uma formatação diferente
        if (property.rented) {
            const rentedMark = document.createElement("span")
            rentedMark.classList.add("rented") // aplica classe CSS "rented"
            rentedMark.innerText = "ALUGADO"
            listElement.appendChild(rentedMark)
        }

        listElement.innerHTML += propertyInfo // adiciona texto ao <li>

        // Cria botão de remover
        const removeButton = document.createElement("button")
        removeButton.setAttribute("onclick", "app.remove()")
        removeButton.innerText = "Remover"

        listElement.appendChild(removeButton) // adiciona botão ao <li>
        document.getElementById("property-list").appendChild(listElement) // adiciona o <li> à <ul>
    }

    // Remove o item clicado
    remove() {
        const liToRemove = event.target.parentNode // <li> pai do botão clicado
        document.getElementById("property-list").removeChild(liToRemove)
    }

    // Limpa os campos do formulário
    cleanForm() {
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='rented']").checked = false
    }
}
