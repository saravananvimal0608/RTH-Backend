import mongoose from 'mongoose'
import { nanoid } from "nanoid";

const listAddSchema = new mongoose.Schema({
    propertyId: {
        type: String,
        default: () => `PROP-${nanoid(8)}`,
        unique: true
    },
    oldRefNo: {
        type: String,
    },
    project: [{ type: String }],
    zone: [{ type: String }],
    propertyTitle: {
        type: String,
    },
    transactionType: [{
        type: String,
    }],
    propertyType: [{
        type: String,
    }],
    address: {
        type: String,
    },
    dateListed: {
        type: String,
        default: () => {
            const d = new Date();
            const month = String(d.getMonth() + 1).padStart(2, "0");
            const day = String(d.getDate()).padStart(2, "0");
            const year = d.getFullYear();
            return `${day}/${month}/${year}`;
        }
    },
    availabilityStatus: [{
        type: String,
    }],
    size: {
        type: Number,
    },
    bedrooms: {
        type: Number,
    },
    bathrooms: {
        type: Number,
    },
    floors: {
        type: Number,
    },
    floorNumber: {
        type: Number,
    },
    furnishing: [{
        type: String,
    }],
    yearBuilt: {
        type: Number,
    },
    orientation: [{
        type: String,
    }],
    view: [{
        type: String,
    }],
    parkingAvailable: [{
        type: String,
    }],
    petPolicy: [{
        type: String,
    }],
    amenities: {
        type: [String],
    },
    nearbyAmenities: {
        type: [String],
    },
    price: {
        type: Number,
    },
    pricePerM2: {
        type: Number,
    },
    contractTerms: {
        type: String,
    },
    depositPaymentTerms: {
        type: String,
    },
    maintenanceFee: {
        type: Number,
    },
    availableFrom: {
        type: Date,
    },
    description: {
        type: String,
    },
    highlighted: {
        type: Boolean,
        default: false,
    },
    propertyImages: {
        type: [String],
    },
    galleryCategory: [{ type: String }],

    floorPlan: {
        type: [String],
    },
    propertyVideo: {
        type: String,
    },

    landlordName: { type: String },
    landlordPhone: { type: String },
    landlordEmail: { type: String },
    ownerType: [{ type: String }],
    ownerNotes: { type: String },
    propertyDocuments: { type: [String] },
    bankInfo: { type: String },
    propertyConsultant: { type: String },
    agentEmail: { type: String },
    internalNotes: { type: String },
    autoExpiryDate: {
        type: String,
        default: () => {
            const d = new Date();
            d.setMonth(d.getMonth() + 7);

            const day = String(d.getDate()).padStart(2, "0");
            const month = String(d.getMonth() + 1).padStart(2, "0");
            const year = d.getFullYear();

            return `${day}/${month}/${year}`;
        }
    },

    landuseType: [{ type: String }],
    incentivesPromotions: { type: String },
    multiLanguageSupport: { type: String },
    currencyType: { type: String, },
    developerName: { type: String },
    projectCompletionDate: { type: Number },
    projectFacilities: { type: [String] }
}, { timestamps: true });

const ListAdd = mongoose.model("ListAdd", listAddSchema)

export default ListAdd