pesquisaDoUsuario = new URLSearchParams(window.location.search).get("pesquisaDoUsuario")
console.log(pesquisaDoUsuario)

console.log("XXX")

async function lerAPI(){
  produtosAPI = await fetch(`https://diwserver.vps.webdock.cloud/products/search?query=${pesquisaDoUsuario}`)
  produtosAPI = await produtosAPI.json()
  await inserirHTML(produtosAPI)
}


function inserirHTML(produtosAPI){
  let produtosHTML = document.querySelector(".produtos")
  for(let i = 0; i < produtosAPI.length; i++){
    produtosHTML.innerHTML += `
      <div class="produto" onclick="mudarDePagina(${produtosAPI[i].id})">
        <img src="${produtosAPI[i].image}" class="imagemDoProduto">
        <h3 class="nomeDoProduto">${produtosAPI[i].title}</h3>
        <p class="precoDoProduto">${produtosAPI[i].price}</p>
      </div>
    `
  }
}

function mudarDePagina(i){
  window.location.href = "detalhes.html?pesquisaDoUsuario=" + i
}

function pesquisar(){
  console.log("yyy")
  let input = document.getElementById("barraDePesquisa").value
  window.location.href = "pesquisa.html?pesquisaDoUsuario=" + input
}

lerAPI()