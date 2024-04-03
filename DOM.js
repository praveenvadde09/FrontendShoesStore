// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create the main container div
    const container = document.createElement("div");
    container.style.width = "1440px";
    container.style.height = "1024px";
    container.style.position = "relative";
    container.style.background = "white";

    // Create and append the inner div elements
    const div1 = createDiv("103px", "94px", "290px", "375px", "#D9D9D9");
    const div2 = createDiv("103px", "94px", "290px", "485px", "#D9D9D9");
    const div3 = createDiv("103px", "94px", "290px", "595px", "#D9D9D9");
    const div4 = createDiv("103px", "94px", "290px", "705px", "#D9D9D9");
    const div5 = createDiv("511px", "413px", "464px", "372px", "#D9D9D9");

    // Append the div elements to the main container
    container.appendChild(div1);
    container.appendChild(div2);
    container.appendChild(div3);
    container.appendChild(div4);
    container.appendChild(div5);

    // Append the container to the body
    document.body.appendChild(container);

    // Function to create a div element with given styles
    function createDiv(width, height, left, top, background) {
        const div = document.createElement("div");
        div.style.width = width;
        div.style.height = height;
        div.style.left = left;
        div.style.top = top;
        div.style.position = "absolute";
        div.style.background = background;
        return div;
    }
});
