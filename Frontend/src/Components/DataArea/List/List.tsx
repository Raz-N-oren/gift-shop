import { ChangeEvent, useEffect, useState } from "react";
import GiftModel from "../../../Models/GiftModel";
import TargetAudienceModel from "../../../Models/TargetAudienceModel";
import giftsService from "../../../Services/GiftsService";
import "./List.css";

function List(): JSX.Element {

    const [gifts, setGifts] = useState<GiftModel[]>([]);
    const [targetAudience, setTargetAudience] = useState<TargetAudienceModel[]>([]);

    useEffect(() => {
        giftsService.getAllTargetAudience()
            .then(targetAudience => setTargetAudience(targetAudience))
            .catch(err => alert(err.message))
    }, []);

    // HTMLSelectElement -> element raising the event
    async function showGifts(args: ChangeEvent<HTMLSelectElement>) {

        const value = +args.target.value;
        giftsService.getGiftsByTargetAudience(value)
            .then(gifts => setGifts(gifts))
            .catch(err => alert(err.message));
    }

    return (
        <div className="List">
            <label>Select Target Audience:</label>
            <select defaultValue="" onChange={showGifts}>
                <option disabled value="">Select...</option>
                {targetAudience.map(t =>
                    <option key={t.targetAudienceId} value={t.targetAudienceId}>
                        {t.targetAudienceName}
                    </option>)}
            </select>


        </div>
    );
}

export default List;
