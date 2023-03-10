const router = require("express").Router();
const cont = require("../controllers/user");
const middle = require("../middlewares/authorize");
const roles = require("../utils/roles");

//get ticket by payment code
router.get("/:payment_code", cont.ticket.getTransactionByCode);

router.post("/:payment_code", middle(roles.user), cont.ticket.payment);

module.exports = router;
