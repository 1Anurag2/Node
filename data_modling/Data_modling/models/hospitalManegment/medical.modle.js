import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    
},{timestamps : true})

export const Medical = mongoose.model("Medical",medicalRecordSchema)