const contentHTML = document.getElementById('content');
const loading = document.getElementById('loading');

/* Initialice movies in the page */
(async () => {
    const data = await API.GET.getDataMovies();
    if (!data.error) {
        renderMovies(data.message);
    } else {
        if (confirm('An unexpected error has occurred please reload the site'))
            location.reload();
    }
})();

/* Renderer data view page */
const renderMovies = data => {
    if (data.length > 0) {
        loading.remove();
        for (const item of data) {
            contentHTML.innerHTML += `
             <div class='col-md-6'>
                 <div class="card mb-3">
                     <div class="row g-0">
                         <div class="col-md-4 col-xs-12">
                             <img class="poster" src="${item.poster}" title="HU-${item._id}">
                         </div>
                         <div class="col-md-8 col-xs-12">
                             <div class="card-body">
                                 <h6 class="card-title">
                                     ${item.name}
                                 </h6>
                                 <p class="card-text">
                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                 </p>
                                 <p class="card-text d-flex justify-content-between">
                                     <small class="text-muted">
                                         Last updated ${item.year}
                                     </small>
                                     <small class="text-muted text-type">
                                         ${item.type}
                                     </small>
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             `
        }
    } else {
        /* View button for insert data */
        loading.remove();
        contentHTML.innerHTML = `
        <div class="text-center d-flex flex-column align-items-center justify-content-center mt-5 mx-auto"> 
        <h6 class="text-white mt-5">No records found in the database, please insert some</h6>
        <button class="btn btn-success  mt-3" type="button" onclick="registerMovies(this)">
            <span id="registerMovies"><i class="fas fa-film"></i>  Register Movies</span>
            <span id="sendData">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span id="span-loading" class="visually">Loading...</span>
            </span>
        </button>
        </div>
        `
    }
}

/* Send post register movies */
const registerMovies = async e => {
    const registerMoviesText = document.getElementById('registerMovies');
    const sendDataText = document.getElementById('sendData');
    registerMoviesText.style.display = 'none';
    sendDataText.style.display = 'block';
    e.disabled = true;
    const data = await API.POST.insertDataMovies();
    alert(data.message.message);
    location.reload();
}

