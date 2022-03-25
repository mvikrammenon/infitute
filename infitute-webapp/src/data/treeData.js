const readTemplate = (template, data = { items: {} }) => {
  for (const [key, value] of Object.entries(template)) {
    data.items[key] = {
      index: key,
      canMove: true,
      hasChildren: value !== null,
      children: value !== null ? Object.keys(value) : undefined,
      data: key,
      canRename: true
    };

    if (value !== null) {
      readTemplate(value, data);
    }
  }
  return data;
};

const shortTreeTemplate = {
  root: {
    container: {
      item0: null,
      item1: null,
      item2: null,
      item3: {
        inner0: null,
        inner1: null,
        inner2: null,
        inner3: null
      },
      item4: null,
      item5: null
    }
  }
};

const longTreeTemplate = {
  root: {
    Fruit: {
      Apple: null,
      Orange: null,
      Lemon: null,
      Berries: {
        Strawberry: null,
        Blueberry: null
      },
      Banana: null
    },
    Meals: {
      America: {
        SmashBurger: null,
        Chowder: null,
        Ravioli: null,
        MacAndCheese: null,
        Brownies: null
      },
      Europe: {
        Risotto: null,
        Spaghetti: null,
        Pizza: null,
        Weisswurst: null,
        Spargel: null
      },
      Asia: {
        Curry: null,
        PadThai: null,
        Jiaozi: null,
        Sushi: null
      },
      Australia: {
        PotatoWedges: null,
        PokeBowl: null,
        LemonCurd: null,
        KumaraFries: null
      }
    },
    Desserts: {
      Cookies: null,
      IceCream: null
    },
    Drinks: {
      PinaColada: null,
      Cola: null,
      Juice: null
    }
  }
};

const content = {
  Fruit: {
    Apple: "Fruit - Apple - Lorem ipsum",
    Orange: "Fruit - Orange - Lorem ipsum",
    Lemon: "Fruit - Lemon - Lorem ipsum",
    Berries: {
      Strawberry: "Fruit - Berry - Straw - Lorem ipsum",
      Blueberry: "ruit - Berry - Blue - Lorem ipsum",
    },
    Banana: "Lorem ipsum",
  },
  Meals: {
    America: {
      SmashBurger: "Lorem ipsum",
      Chowder: "Lorem ipsum",
      Ravioli: "Lorem ipsum",
      MacAndCheese: "Lorem ipsum",
      Brownies: "Lorem ipsum",
    },
    Europe: {
      Risotto: "Lorem ipsum",
      Spaghetti: "Lorem ipsum",
      Pizza: "Lorem ipsum",
      Weisswurst: "Lorem ipsum",
      Spargel: "Lorem ipsum",
    },
    Asia: {
      Curry: "Lorem ipsum",
      PadThai: "Lorem ipsum",
      Jiaozi: "Lorem ipsum",
      Sushi: "Lorem ipsum",
    },
    Australia: {
      PotatoWedges: "Lorem ipsum",
      PokeBowl: "Lorem ipsum",
      LemonCurd: "Lorem ipsum",
      KumaraFries: "Lorem ipsum",
    },
  },
  Desserts: {
    Cookies: "Lorem ipsum",
    IceCream: "Lorem ipsum",
  },
  Drinks: {
    PinaColada: "Lorem ipsum",
    Cola: "Lorem ipsum",
    Juice: "Lorem ipsum",
  },
};

export const pageContent = content;
export const longTree = readTemplate(longTreeTemplate);
export const shortTree = readTemplate(shortTreeTemplate);
