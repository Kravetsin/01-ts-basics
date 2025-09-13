//! ===================================
const getData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Kravets"), 1000);
  });
};

getData().then((result) => console.log(result));
//! ===================================

//! ===================================
