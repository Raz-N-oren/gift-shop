import dal from "../2-utils/dal";
import GiftModel from "../4-models/gift-model";
import TargetAudienceModel from "../4-models/target-audience-model";

async function getAllTargetAudience(): Promise<TargetAudienceModel[]> {
    const sql = `SELECT * FROM targetAudience`;
    const targetAudience = await dal.execute(sql);
    return targetAudience;
}

async function getGiftsByTargetAudience(targetAudienceId: number): Promise<GiftModel[]> {

    const sql = `
    SELECT G.*,T.targetAudienceName
     FROM gifts AS G JOIN targetAudience AS T
     ON G.targetAudienceId = T.targetAudienceId
     WHERE G.targetAudienceId = ${targetAudienceId}`;

    const gifts = await dal.execute(sql);
    return gifts;
}


export default {
    getAllTargetAudience,
    getGiftsByTargetAudience
};
