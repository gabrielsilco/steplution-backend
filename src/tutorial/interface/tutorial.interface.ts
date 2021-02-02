import { Document } from "mongoose";
import { TutorialType } from "../schema/tutorial.schema";

export interface Tutorial extends Document {
    readonly _id: string;
    readonly type: TutorialType;
    readonly defaultSteps: Array<object>;
}