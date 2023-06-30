const express = require("express");
const router = express.Router();
const { s3, getImageStream } = require("../services/awts3.js");
const { pool } = require("../db/postgresdb.js");
const axios = require("axios");

const AdmReq = require("../controllers/Adminrequierementes.js/AdmReq.js");
const { antheitcadted } = require("../controllers/Users/Users.controllers.js");
//RUTA PARA AMAZON
router.get("/subida/:imageKey", async (req, res) => {
  const imageKey = req.params.imageKey;
  const imageStream = await getImageStream(imageKey);
  imageStream.pipe(res);
});
//CRUD
router.get("/delete/:id", antheitcadted, AdmReq.deleteuser);
router.get("/edit/:id", antheitcadted, AdmReq.getuserbyid);
router.post("/edit", antheitcadted, AdmReq.postUserbyid);
router.get("/perfiles", AdmReq.getPerfiles);

//RUTAS PARA USUARIOS
//1.1
router.get("/user/admin/register", antheitcadted, AdmReq.getUserRegister);
router.post("/user/admin/register", antheitcadted, AdmReq.postUserRegister);
//1.2
router.get("/user/admin/permission", antheitcadted, AdmReq.getAssingnPermisos);
//RUTAS PARA LAS MARCAS
router.get("/marcas", antheitcadted, AdmReq.getMarcas);
router.get("/marcas/:id", AdmReq.getMarcasbyId);
router.post("/marcas", antheitcadted, AdmReq.postMarcas);
//RUTAS PARA PRODUCTOS
router.get("/productos", antheitcadted, AdmReq.getProducto);
router.get("/productos/:id", AdmReq.getProductobyID);
router.post("/productos", antheitcadted, AdmReq.postProductos);
router.patch("/productos", antheitcadted, AdmReq.Updateproducts);
router.get("/cat4products", AdmReq.getCategories4Products);
router.get("/marcas4products", AdmReq.getMarcas4Products);
router.get("/deleteproducts/:id", antheitcadted, AdmReq.deleteProducts);
//RUTAS PARA UNIDAD
router.get("/unidad", AdmReq.getUnidad);
//RUTAS PARA CATEGORIAS
router.get("/categorias", antheitcadted, AdmReq.getCategorias);
router.get("/categorias/:id", AdmReq.getCategoriasbyID);
router.post("/categorias", antheitcadted, AdmReq.postCategorias);
router.post("/categoria", antheitcadted, AdmReq.UpdateCategorias);
router.get("/delcategoria/:id", antheitcadted, AdmReq.deleteCategories);
//RUTAS PARA PROVEEDORES
router.get("/proveedores", antheitcadted, AdmReq.getProveedores);
router.get("/proveedores/:id", AdmReq.getProveedoresbyID);
router.post("/proveedores", antheitcadted, AdmReq.postProveedores);
router.post("/proveedor", antheitcadted, AdmReq.editProveedor);
router.get("/delprove/:id", antheitcadted, AdmReq.deleproveedor);
//RUTAS PARA COMPRAS
router.get("/compras", antheitcadted, AdmReq.getCompras);
router.get("/compras/:id", AdmReq.getComprasbyID);
router.post("/compras", antheitcadted, AdmReq.postCompras);
router.get("/compras4prove", AdmReq.prove4compras);
router.get("/compras4products", AdmReq.product4compras);
router.patch("/updatecompras", antheitcadted, AdmReq.patchcompras);
//RUTAS PARA DETALLECOMPRAS
router.get("/detallecompras", antheitcadted, AdmReq.getdetallecompras);
router.post("/detallecompras", antheitcadted, AdmReq.postdetalleCompras);
router.get("/detallecomprasbyid/:id", AdmReq.detallecomprabyid);
router.get("/deletedetallebyid/:id", antheitcadted, AdmReq.deletedetallebyid);
//RUTAS PARA PAGOS
router.get("/allpagos", antheitcadted, AdmReq.getAllpagos);
router.get("/pagos/:id", AdmReq.getPagos);
router.post("/pagos/:id", antheitcadted, AdmReq.postPagos);
router.patch("/pagos", antheitcadted, AdmReq.updatepagos);
//RUTAS PARA MENUES(PRUEBAS)
router.get("/menues", antheitcadted, AdmReq.getmenu);
router.get("/allmenues", AdmReq.getallmenu);
router.post("/menues", antheitcadted, AdmReq.postmenu);
router.get("/menues/:id", AdmReq.getmenubyid);
router.patch("/menu", antheitcadted, AdmReq.patchmenubyid);
router.get("/deletemenu/:id", antheitcadted, AdmReq.deletMenu);
router.get("/publicarmenu/:id", antheitcadted, AdmReq.publicarMenu);
router.get("/quitarpublimenu/:id", antheitcadted, AdmReq.quitarpubliMenu);
router.get("/detallMenus", AdmReq.detallemenuesa);
//RUTAS PARA LOS REPORTES-GRAFICOS
router.get("/dashboard", antheitcadted, (req, res) => {
  res.render("Dashboard");
});
router.get("/prove4rep", antheitcadted, AdmReq.getprove4rep);
router.get("/ventas4rep", antheitcadted, AdmReq.getVentas);
router.get("/compras4rep", antheitcadted, AdmReq.getCompras4rep);
router.get("/pagos4rep", antheitcadted, AdmReq.getPagos4rep);
router.get("/menues4rep", antheitcadted, AdmReq.getMenys4rep);
router.get("/productos4rep", antheitcadted, AdmReq.getProd4rep);
router.get("/marcas4rep", antheitcadted, AdmReq.getMarcas4rep);
router.get("/categorias4rep", antheitcadted, AdmReq.getCateg4rep);
router.get("/usuarios4rep", antheitcadted, AdmReq.getUsuarios4rep);
router.get("/ReporteProveedores", antheitcadted, (req, res) => {
  res.render("ReporteProveedor");
});
router.get("/ReporteVentas", antheitcadted, (req, res) => {
  res.render("ReporteVentas");
});
router.get("/ReporteCompras", antheitcadted, (req, res) => {
  res.render("ReporteCompras");
});
router.get("/ReportePagos", antheitcadted, (req, res) => {
  res.render("ReportePagos");
});
router.get("/ReporteMenues", antheitcadted, (req, res) => {
  res.render("ReporteMenus");
});
router.get("/ReporteProductos", antheitcadted, (req, res) => {
  res.render("ReporteProductos");
});
router.get("/ReporteMarcas", antheitcadted, (req, res) => {
  res.render("ReporteMarcas");
});
router.get("/ReporteCategorias", antheitcadted, (req, res) => {
  res.render("ReporteCategorias");
});
router.get("/ReporteUsuarios", antheitcadted, (req, res) => {
  res.render("ReporteUsuarios");
});
module.exports = router;
