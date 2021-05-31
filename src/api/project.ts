import { Router, Request, Response } from "express";
import Project from "../models/Project";
const returnCode = require('../library/returnCode');
const router = Router();

/*
 *  @route GET api/project/editor
 *  @desc editor pick
 *  @access Public
 */

router.get("/editor", async (req: Request, res: Response) => {
    try{
      console.log("editor success")
      const editor = await Project.find({kind:"editor"},
       {id: 1, image: 1, category: 1, writer: 1, title: 1, percent: 1, kind: 1});
      res.status(200).json({
        status: returnCode.OK,
        data: {
          editor
        }
      });
    } catch(error){
      console.log("editor failed")
      console.error(error.message);
      res.json({
        status: returnCode.INTERNAL_SERVER_ERROR,
        errors: [{ msg: "server error" }],
      })
    }
  }
)

router.get("/open", async (req: Request, res: Response) => {
    try{
      console.log("open success")
      const open = await Project.find({kind:"open"},
      {id: 1, image: 1, category: 1, writer: 1, title: 1, notify: 1, kind: 1});
      res.status(200).json({
        status: returnCode.OK,
        data: {
          open
        }
      });
    } catch(error){
      console.log("open failed")
      console.error(error.message);
      res.json({
        status: returnCode.INTERNAL_SERVER_ERROR,
        errors: [{ msg: "server error" }],
      })
    }
  }
)

router.get("/popular", async (req: Request, res: Response) => {
    try{
      console.log("popular success")
      const popular = await Project.find({kind:"popular"},
      {id: 1, image: 1, category: 1, writer: 1, title: 1, percent: 1, kind: 1});
      res.status(200).json({
        status: returnCode.OK,
        data: {
          popular
        }
      });
    } catch(error){
      console.log("popular failed")
      console.error(error.message);
      res.json({
        status: returnCode.INTERNAL_SERVER_ERROR,
        errors: [{ msg: "server error" }],
      })
    }
  }
)

router.get("/new", async (req: Request, res: Response) => {
  try{
    console.log("new success")
    const newrefer = await Project.find({kind:"new"},
    {id: 1, image: 1, category: 1, writer: 1, title: 1, percent: 1, kind: 1});
    res.status(200).json({
      status: returnCode.OK,
      data: {
        newrefer
      }
    });
  } catch(error){
    console.log("popular failed")
    console.error(error.message);
    res.json({
      status: returnCode.INTERNAL_SERVER_ERROR,
      errors: [{ msg: "server error" }],
    })
  }
}
)

module.exports = router;

