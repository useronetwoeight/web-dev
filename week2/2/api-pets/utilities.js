/* // The data model for pet is as follows
{
    "name": "Buddy",
    "species": "Dog",
    "age": 1,
    "color": "Brown",
    "weight": 2
  }
 */
let petArray = [];

let nextId = 1;

const getAllFeedbacks = () => {
  return petArray;
}

const createFeedback = (sender, message, rating, platfrom) => {
  // Check if any parameter is empty or undefined
  if (!sender || !message || !rating || !platform) {
    return false;
  }

  const newPet = {
    id: nextId++,
    sender,
    message,
    rating,
    platfrom
  };

  petArray.push(newPet);
  return newPet;
}

const getFeedbackById = (id) => {
  const pet = petArray.find((item) => item.id == id);
  if (pet) {
    return pet;
  } else {
    return false;
  }
}

const updateFeedback = (id, updatedData) => {
  const pet = getFeedbackById(id);
  if (pet) {
    // Update properties only if provided in updatedData
    if (updatedData.name) {
      pet.sender = updatedData.sender;
    }
    if (updatedData.species) {
      pet.message = updatedData.message;
    }
    if (updatedData.age) {
      pet.rating = updatedData.rating;
    }
    if (updatedData.color) {
      pet.platfrom = updatedData.platfrom;
    }
    return pet;
  }
  return false;
}

const deleteFeedback = (id) => {
  const pet = getFeedbackById(id);
  if (pet) {
    const initialLength = petArray.length;
    petArray = petArray.filter((pet) => pet.id != id);
    return petArray.length < initialLength; // Indicate successful deletion if the length has decreased
  }
  return false; // Return false if the item was not found
}

if (require.main === module) {
  // Add pet
  let result = createFeedback("John Smith", "DoGreat session on React components! I found the examples very helpful.g", 5, "mobile");
  console.log(result);
  // Add another pet
  result = createFeedback("Mittens", "Cat", 2, "Black");
  console.log(result);

  console.log("getAllFeedbacks called:", getAllFeedbacks());

  console.log("getFeedbackById called:", getFeedbackById(1));

  console.log("updateFeedback called:", updateFeedback(1, { rating: 4, platfrom: "tablet" }));
  console.log("getFeedbackById called after item updated:", getFeedbackById(1));

  console.log("deleteOneById called:", deleteFeedback(1));
  console.log("getFeedbackById called after item deleted:", getFeedbackById(1));
}

Pet = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};

module.exports = Pet;