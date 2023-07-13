idProduto = new URLSearchParams(window.location.search)
idProduto = idProduto.get("idProduto")
console.log(idProduto)

async function lerAPI(){
  produtoAPI = await fetch('https://diwserver.vps.webdock.cloud/products/' + idProduto)
  produtoAPI = await produtoAPI.json()
  console.log(produtoAPI)
  await inserirHTML(produtoAPI)
}

function inserirHTML(produtoAPI){
  let produtoHTML = document.querySelector(".produto")
  produtoHTML.innerHTML += `
    <div class="produto">
      <img src="${produtoAPI.image}" class="imagemDoProduto">
      <h3 class="nomeDoProduto">${produtoAPI.title}</h3>
      <p class="precoDoProduto">${produtoAPI.price}</p>
    </div>
  `
}

lerAPI()