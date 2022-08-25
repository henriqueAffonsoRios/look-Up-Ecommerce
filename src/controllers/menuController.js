const { Product } = require("../database/models");
const { Op } = require("sequelize");
const { limiterText } = require("../utils/stringHelper");
const price = require("../utils/priceHelper");
const filters = require('../utils/filterProduct')

const menuController = {
  smartphones: async (req, res) => {



    const allSmartphones = await Product.findAll({
      where: { category: "Smartphone" },
    });

    const smartphones = [];
    allSmartphones.map((product) => {
      smartphones.push(product._previousDataValues);
    });
    res.render("smartphones", { smartphones, limiterText, price }, {user: req.session.user});
  },

  smartphonesFilter: (req, res)=>{

    filters.smartphones(req, res, Product);
   
  },

  perifericos: (req, res) => {
    Product.findAll({
      where: {
        category: "Periféricos",
      },
    })
      .then((products) => {
        const perifericos = [];
        products.map((product) => {
          perifericos.push(product._previousDataValues);
        });
        res.render("perifericos", { perifericos, limiterText, price }, {user: req.session.user});
      })
      .catch((error) => {
        console.log(error);
      });
  },

  cadeiras: (req, res) => {
    res.render("cadeiras", {user: req.session.user});
  },

  hardware: (req, res) => {
    res.render("hardware", {user: req.session.user});
  },

  tablet: (req, res) => {
    Product.findAll({
      where: {
        category: "Tablet",
      },
    })
      .then((products) => {
        const tablet = [];
        products.map((product) => {
          tablet.push(product._previousDataValues);
        });
        const { limiterText } = require("../utils/stringHelper");
        res.render("tablet", { tablet, price, limiterText }, {user: req.session.user});
      })
      .catch((error) => {
        console.log(error);
      });
  },
  tv: (req, res) => {
    Product.findAll({
      where: {
        category: "TV",
      },
    })
      .then((products) => {
        const tv = [];
        products.map((product) => {
          tv.push(product._previousDataValues);
        });
        res.render("tv", { tv, price, limiterText }, {user: req.session.user});
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

module.exports = menuController;
