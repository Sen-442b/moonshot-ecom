const productsDummy = [
  {
    id: 1,
    slug: "levi-123",
    name: "Levi Ackerman",
    price: 20,
    image: "https://placeimg.com/640/480/tech",
    description: "Levi Ackerman is a character from Attack on Titans",
  },
  {
    id: 2,
    slug: "armin-456",
    name: "Armin Artlet",
    price: 30,
    image: "https://placeimg.com/640/480/tech",
    description: "Armin is a character from Attack on Titans",
  },
  {
    id: 3,
    slug: "erwin-789",
    name: "Erwin Smith",
    price: 25,
    image: "https://placeimg.com/640/480/tech",
    description: "Erwin is a character from Attack on Titans",
  },
];

const mockRequest = (success: boolean, timeout = 300) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (success) {
        res({ status: 200, products: productsDummy });
      } else {
        rej({ status: 500, message: "Something went wrong" });
      }
    }, timeout);
  });
};

const getProductListService = async () => {
  //replace with actual api endpoint using axios/fetch
  const response = await mockRequest(true, 1000);
  return response;
};

export { getProductListService };
