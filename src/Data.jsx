const Data = () => {
  const arrayOfObjects = [];

  for (let i = 1; i <= 50; i++) {
    const object = {
      id: i,
      title: `Title ${i}`,
      description: `Description ${i}`,
    };
    arrayOfObjects.push(object);
  }

  return arrayOfObjects;
};

export default Data;
