import { Router, Request, Response } from "express";
import Banner from "../models/Banner"
const returnCode = require('../library/returnCode');
const router = Router();

/**
 * @route GET /exhibit
 * @desc Get all exhbitions
 * @access Private
 */

router.get("/", async (req: Request, res: Response) => {
    try{
      console.log("api success")
      const banner = await Banner.find().sort({ id:1 });
      res.status(200).json({
        status: returnCode.OK,
        data: {banner}
      });
    } catch(error){
      console.log("api failed")
      console.error(error.message);
      res.json({
        status: returnCode.INTERNAL_SERVER_ERROR,
        errors: [{ msg: "server error" }],
      })
    }
  }
)

module.exports = router;