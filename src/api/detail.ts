import { Router, Request, Response } from "express";
import Detail from "../models/Detail"
import Project from "../models/Project"
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
      const detail = await Detail.find().sort({ id:1 });
      res.status(200).json({
        status: returnCode.OK,
        data: {detail}
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