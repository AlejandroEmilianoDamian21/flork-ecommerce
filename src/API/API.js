const data = [
    {
      id: 1,
      title: "Diseños",
      img: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/3D.jpg",
      price: 95,
      expired: true,
      detail: "Diseños personalizados a tu gusto",
      stock: 10,
      category: "figura",
    },
    {
      id: 2,
      title: "Maquetas",
      img: "https://panelesach.com/blog/wp-content/uploads/2020/12/Claves-de-la-impresi%C3%B3n-3D-en-la-arquitectura-moderna.-2.jpg",
      price: 59,
      expired: false,
      detail: "Maquetas pesonalizadas",
      stock: 8,
      category: "figura",
    },
    {
      id: 3,
      title: "Cuadros",
      img: "https://http2.mlstatic.com/D_NQ_NP_626302-MLA48865228369_012022-W.jpg",
      price: 59,
      expired: true,
      detail: "Los mejores cuadros personalizados",
      stock: 7,
      category: "cuadro",
    },
    {
      id: 4,
      title: "Mike Wazowski",
      img: "https://images.cults3d.com/8-mvJYjvusHte3HgpNQO3YUB0Zs=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/14388486/illustration-file/dad8d89e-1902-4ae3-9d1b-33f51ba19043/Mike%20Wazowski_2.jpg",
      price: 95,
      expired: true,
      detail: "Diseños de tus personajes favoritos",
      stock: 10,
      category: "figura",
    },
    {
      id: 5,
      title: "Pinturas temáticas",
      img: "https://images.cults3d.com/v88QJnZ7pyGlo_EubSk9b8iodhU=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/14987785/illustration-file/38a59435-56f4-499e-8e07-b4b5fca37aba/CADRE-5.jpg",
      price: 59,
      expired: false,
      detail: "surf / mar / viajes",
      stock: 8,
      category: "figura",
    },
    {
      id: 6,
      title: "Cuadros de tus mascotas",
      img: "https://cdn.wallapop.com/images/10420/72/6q/__/c10420p426936463/i1104938406.jpg?pictureSize=W640",
      price: 59,
      expired: false,
      detail: "Plasmamos tus ideas en arte",
      stock: 7,
      category: "cuadro",
    },
  ];
  
  export function getDiseños() {

    return new Promise((resolve) => {

        setTimeout(() => resolve(data), 1000);

    });
 
}

  export function getUnDiseño(idParams) {
    return new Promise((resolve) => {
      let diseñoReq = data.find((item) => {
        return item.id === Number(idParams);
      });
      setTimeout(() => resolve(diseñoReq), 1000);
    });
  }
  
  export function getDiseñosByCategory(idCategoryParams) {
    return new Promise((resolve) => {
      let arrayFilterDesing = data.filter(
        (item) => item.category === idCategoryParams
      );
      setTimeout(() => resolve(arrayFilterDesing), 1000);
    });
  }
  