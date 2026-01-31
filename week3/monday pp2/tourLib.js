let tourArray = [];

let nextId = 1;

function getAll() {
  return tourArray;
}

function addOne(name, info, image, price, location) {
  if (!name || !info || !image || !price || !location) {
    return false;
  }

  const newTour = {
    id: nextId++,
    name,
    info,
    image,
    price,
    location,
  };

  tourArray.push(newTour);
  return newTour;
}

function findById(id) {
  const tour = tourArray.find((item) => item.id == id);
  if (tour) {
    return tour;
  } else {
    return false;
  }
}

function updateOneById(id, updatedData) {
  const tour = findById(id);
  if (tour) {
    if (updatedData.name) {
      tour.name = updatedData.name;
    }
    if (updatedData.info) {
      tour.info = updatedData.info;
    }
    if (updatedData.image) {
      tour.image = updatedData.image;
    }
    if (updatedData.price) {
      tour.price = updatedData.price;
    }
    if (updatedData.location) {
      tour.location = updatedData.location;
    }
    return tour;
  }
  return false;
}

function deleteOneById(id) {
  const tour = findById(id);
  if (tour) {
    const initialLength = tourArray.length;
    tourArray = tourArray.filter((tour) => tour.id != id);
    return tourArray.length < initialLength;
  }
  return false; 
}

Tour = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Tour;