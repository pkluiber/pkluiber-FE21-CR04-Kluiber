var marvParsed = JSON.parse(marvel);
var output = document.getElementById("name");
var i = 0
for (let marvel of marvParsed) {
    console.log(marvel);
    output.innerHTML +=
        `
    <a href="#" data-bs-toggle="modal" data-bs-target="#static${i}">
        <div class="card" style="width: 20rem; ">
            <img src="${marvel.img}" class="card-img-top" alt="marvel">
            <div class="card-body ">
                <h5 class="card-title ">${marvel.name}</h5>
                <h6 class="card-desc ">${marvel.description}</h6>
                <h4 class="li text-end">Like<img class="giflike" src="${marvel.gif}" alt="gif">${marvel.likes}</h4>
            </div>
        </div>
    </a>

    <div class="modal fade" id="static${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" " aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div class="modal-body">
                        <img src="${marvel.img}" class="card-img-top" alt="marvel">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><a href="${marvel.links}" class="link-primary">Video IMBd</a></li>

                        </ul>
                </div>
            </div>
        </div>
    </div>

    `;
    i++;
}