import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/logic";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/target-audience
router.get("/target-audience", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const targetAudience = await logic.getAllTargetAudience();
        response.json(targetAudience);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/gifts-per-target-audience/:targetAudienceId
router.get("/gifts-per-target-audience/:targetAudienceId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const targetAudienceId = +request.params.targetAudienceId;
        const gifts = await logic.getGiftsByTargetAudience(targetAudienceId);
        response.json(gifts);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;