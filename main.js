javascript: (function () {
    const searchFieldContainer = document.createElement("DIV");
    Object.assign(searchFieldContainer.style, {
        position: "absolute",
        top: "50px",
        right: "25px",
        width: "100px",
        height: "25px",
    });

    
    const searchField = document.createElement("INPUT");
    searchField.type = "text";
    Object.assign(searchField.style, {
        display: "inline-block",
        boxSizing: "border-box",
        width: "75%",
        height: "100%",
    });

    const searchButton = document.createElement("BUTTON");
    Object.assign(searchButton.style, {
        display: "inline-block",
        backgroundColor: "blue",
        boxSizing: "border-box",
        width: "25%",
        height: "100%",
        border: "1px solid darkblue",
    });

    searchFieldContainer.append(searchField, searchButton);
    document.body.append(searchFieldContainer);





    searchButton.addEventListener("click", e => {
        const searchText = searchField.value.toLowerCase();
        const lessonSpans = Array.from(document.querySelectorAll(".sc-htpNat.cIoUmx"));
        const resultSpans = lessonSpans.filter(span => span.textContent.toLowerCase().includes(searchText));

        console.clear();
        resultSpans.forEach(span => {
            console.log(span.textContent, span.parentNode.href);
        })

    });
})();