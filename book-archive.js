const searchBooks = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (docs.length === 0) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                <div class="card-body">
                <p id="error-message" class=" text-danger text-center fs-1">No Result Found</p>
        </div>
        `;
        searchResult.appendChild(div);
    }
    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img class="card-img-top" src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" alt="">
                <div class="card-body">
                    <h1 class="card-title">${doc.title}</h1>
                    <p class="author-name">${doc.author_name}</p>
                    <p class="publish-date">${doc.publish_date}</p>
        </div>
        `;
        searchResult.appendChild(div);
    })
}