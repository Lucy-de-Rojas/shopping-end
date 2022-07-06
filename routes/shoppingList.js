import express from "express";
import { getShoppingList, postListItem } from "../models/shoppingList.js";

const router = express.Router();





/* GET shopping list. */
router.get("/", async (req, res) => {
  const data = await getShoppingList();
  res.json({ success: true, payload: data });
});






// POST to shopping list:
router.post("/", async (req, res) => {
  const { listItem } = req.body;
  console.log('req body: >>>>>',req.body)
  const result = await postListItem(listItem);
  res.status(201).json({ success: true, payload: result });
});





// UPDATE  completed:
router.update('/', async (req, res)=> {

  console.log(req.body);



  res.json(req.body)
})



export default router;
