import "./imagesMoving.css";

export const imagesMoving = (imagesNames, imagesLibrary) => {

  const elementList = document.createElement("ul");
  elementList.classList.add("imagesMoving");
  for (const imageName of imagesNames) {
      const element = document.createElement("li");
      const img = document.createElement("img");
      const myImage = imagesLibrary.find(imagesLibrary => imagesLibrary.name === imageName);
      if (myImage) {
        img.src = myImage.imageUrl;
        img.alt = myImage.name;
        element.append(img);
        elementList.append(element);
      } else {
        console.warn(`Skill ${imageName} not found in the image Library.`);
      }

  }
  return elementList;
}