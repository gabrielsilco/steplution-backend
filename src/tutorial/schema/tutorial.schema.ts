import * as mongoose from 'mongoose';

export enum TutorialType {
    linear = "linear",
    multi = "multi"
}

export enum StepType {
    simple = "simple",
    question = "question"
}

// Turn enum into array
const EnumToArray = (enumme: Enumerator|any) => {
    return Object.keys(enumme)
        .map(key => enumme[key]);
}



export const TutorialSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    type: {
        type: String, 
        enum: EnumToArray(TutorialType),
        required: true
    },
    defaultSteps: [{
        title: {
            type: String,
            trim: true
        },
        content: {
            type: String,
            unique: true,
            required: true
        },
        type: {
            type: String, 
            enum: EnumToArray(StepType),
            required: true
        },
        failOptions: [{
            label: {
                type: String,
                required: true,
                trim: true
            },
            path: {
                type: String,
                required: true,
                trim: true
            },
            isDefault: {
                type: Boolean
            }
        }]
    }]
})