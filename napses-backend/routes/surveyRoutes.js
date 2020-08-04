const express = require('express');
const router = express.Router();
const controller = require('../controller/sendQuestions');
const save=require('../controller/saveUserResponse');


//router.post('/', checkAuth, NoteController.notes_create_note);
// router.put("/cancel",orderController.cancel_order);
// router.post("/placeorder",checkAuth, orderController.place_order);
// router.put("/updateorder",checkAuth, orderController.update_order);
// router.get("/viewDate",orderController.view_orders_date);
// router.get("/viewCustomer/:cid",orderController.view_orders_customer);
router.get("/getQuestions",controller.view_all_questions);
router.post('/saveResponse',save.saveResponse);
module.exports = router;