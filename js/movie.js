var marvParsed = JSON.parse(marvel);
var output = document.getElementById("name");
var i = 0
for (let marvel of marvParsed) {
    console.log(marvel);
    output.innerHTML +=
        `
<div>
    <div>
    <a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#static${i}">
        <div class="card " style="width: 20rem; ">
            <img src="${marvel.img}" class="card-img-top " alt="marvel">
            <div class="card-body ">
                <h5 class="card-title ">${marvel.name}</h5>
                <h6 class="card-desc ">${marvel.description}</h6>
            </div>
        </div>
    </a>
</div>

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


var i = 0;

function buttonClick() {
    i++;
    document.getElementById('inc').value = i;
}