export default class NewsService {
  getRandomItemsFromArray = (arr: number[], numItems: number) => {
    const arrayCopy = [...arr];
    // Check if the requested number of items is greater than the array length
    if (numItems > arrayCopy.length) {
      throw new Error(
        'The number of items requested is greater than the array length.',
      );
    }
    const randomItems = [];
    for (let i = 0; i < numItems; i++) {
      // Generate a random index within the remaining array
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      // Add the randomly selected item to the result array and remove it from the copy
      randomItems.push(arrayCopy.splice(randomIndex, 1)[0]);
    }
    return randomItems;
  };
}
