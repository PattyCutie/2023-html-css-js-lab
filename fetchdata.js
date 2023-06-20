fetch("data.json") // Replace 'data.json' with the actual path to your JSON file
  .then((response) => response.json())
  .then((data) => {
    const dataContainer = document.getElementById("data-container");
    dataContainer.classList.add("data-container");

    data.forEach((item) => {
      /////
      const dataItem = document.createElement("div");
      dataItem.classList.add("data-item");
      /////
      const linkItem = document.createElement("a");
      linkItem.href = item.source;
     
      /////
      const iframeContainer = document.createElement("div");
      iframeContainer.classList.add("iframe-container");
      /////
      const source = document.createElement("iframe");
      source.src = item.source;
      iframeContainer.appendChild(source);

      /////
      const dataContent = document.createElement("div");
      dataContent.classList.add("data-content");

      const title = document.createElement("h4");
      title.classList.add("data-title");
      title.textContent = item.title;
      dataContent.appendChild(title);


      const description = document.createElement("p");
      description.classList.add("data-description");
      description.textContent = item.description;
      dataContent.appendChild(description);

      dataItem.appendChild(linkItem)
      linkItem.appendChild(iframeContainer);
      linkItem.appendChild(dataContent);
      dataContainer.appendChild(dataItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
